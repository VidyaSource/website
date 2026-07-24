import type { PagesFunction } from "@cloudflare/workers-types";
import { Data, Effect } from "effect";
import { Resend } from "resend";
import isEmail from "validator/lib/isEmail";
import stripLow from "validator/lib/stripLow";
import trim from "validator/lib/trim";
import { z } from "zod";

interface Env {
  RESEND_API_KEY: string;
  CONTACT_FROM_EMAIL: string;
  CONTACT_TO_EMAIL: string;
  TURNSTILE_SECRET_KEY: string;
}

class ValidationError extends Data.TaggedError("ValidationError")<{
  message: string;
}> {}

class TurnstileError extends Data.TaggedError("TurnstileError")<{
  message: string;
}> {}

class EmailSendError extends Data.TaggedError("EmailSendError")<{
  message: string;
}> {}

const ContactRequest = z.object({
  from: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(254, "Email is too long")
    .refine((value) => isEmail(value), "Invalid email address"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject is too long"),
  message: z.string().trim().min(1, "Message is required").max(500, "Message is too long"),
  turnstileToken: z.string().min(1, "Turnstile verification is required"),
  // Honeypot: real users never fill this in. Anything present here is spam.
  website: z.string().max(0, "Spam detected").optional().default(""),
});

// Strips control characters (including CR/LF) so no field can smuggle extra
// email headers or otherwise-invisible bytes into the outgoing message.
const sanitizeHeaderField = (value: string): string => stripLow(trim(value), false);
const sanitizeBodyField = (value: string): string => stripLow(trim(value), true);

// Checked ahead of the full schema so a filled honeypot is rejected on its own
// terms, independent of whether other fields (e.g. an absent Turnstile token)
// would also fail validation.
const HoneypotCheck = z.object({ website: z.string().max(0).optional() });

const parseRequestBody = (request: Request) =>
  Effect.tryPromise({
    try: () => request.json(),
    catch: () => new ValidationError({ message: "Request body must be JSON" }),
  }).pipe(
    Effect.flatMap((body) => {
      if (!HoneypotCheck.safeParse(body).success) {
        return Effect.fail(new ValidationError({ message: "Spam detected" }));
      }

      const result = ContactRequest.safeParse(body);
      return result.success
        ? Effect.succeed(result.data)
        : Effect.fail(
            new ValidationError({
              message: result.error.issues[0]?.message ?? "Invalid input",
            }),
          );
    }),
  );

const verifyTurnstile = (token: string, secret: string, remoteIp: string | null) =>
  Effect.tryPromise({
    try: async () => {
      const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          response: token,
          ...(remoteIp ? { remoteip: remoteIp } : {}),
        }),
      });
      return (await response.json()) as { success: boolean };
    },
    catch: () => new TurnstileError({ message: "Could not reach Turnstile" }),
  }).pipe(
    Effect.flatMap(({ success }) =>
      success
        ? Effect.void
        : Effect.fail(new TurnstileError({ message: "Turnstile verification failed" })),
    ),
  );

interface SanitizedContact {
  from: string;
  subject: string;
  message: string;
}

const sendContactEmail = (env: Env, data: SanitizedContact) =>
  Effect.tryPromise({
    try: async () => {
      const resend = new Resend(env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: env.CONTACT_FROM_EMAIL,
        to: env.CONTACT_TO_EMAIL,
        replyTo: data.from,
        subject: `[Contact Form] ${data.subject}`,
        text: data.message,
      });
      if (error) throw new Error(error.message);
    },
    catch: (cause) =>
      new EmailSendError({
        message: cause instanceof Error ? cause.message : "Failed to send email",
      }),
  });

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const program = Effect.gen(function* () {
    const parsed = yield* parseRequestBody(context.request);

    yield* verifyTurnstile(
      parsed.turnstileToken,
      context.env.TURNSTILE_SECRET_KEY,
      context.request.headers.get("CF-Connecting-IP"),
    );

    const sanitized: SanitizedContact = {
      from: sanitizeHeaderField(parsed.from),
      subject: sanitizeHeaderField(parsed.subject),
      message: sanitizeBodyField(parsed.message),
    };

    yield* sendContactEmail(context.env, sanitized);

    return Response.json({ ok: true });
  }).pipe(
    Effect.catchTags({
      ValidationError: (error) =>
        Effect.succeed(Response.json({ ok: false, error: error.message }, { status: 400 })),
      TurnstileError: () =>
        Effect.succeed(
          Response.json({ ok: false, error: "Verification failed" }, { status: 403 }),
        ),
      EmailSendError: () =>
        Effect.succeed(
          Response.json({ ok: false, error: "Failed to send message" }, { status: 502 }),
        ),
    }),
  );

  return Effect.runPromise(program);
};
