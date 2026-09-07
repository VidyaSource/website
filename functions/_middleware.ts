import type {PagesFunction} from "@cloudflare/workers-types";
import {Data, Effect} from "effect";
import {applyHeaders, revalidateCacheControl, securityHeaders} from "../src/security/headers";
import {contentTypeFor, negotiate, type Variant} from "./negotiation";

// Content negotiation for every page route (RFC 9110 §12.5.1), plus the security
// headers Cloudflare's `_headers` file cannot attach to Function responses.
//
// A page `/x/y/` has two static twins built by Astro: `/x/y.md` (Markdown) and
// `/x/y.json` (JSON-LD). When the Accept header prefers markdown, plain text, or JSON,
// this middleware serves the twin in place, on the same URL, with `Vary: Accept`.
// Otherwise it passes the request on and decorates whatever comes back. Nothing here
// inspects the User-Agent: a client says what it wants with Accept, as the standard
// intends.
//
// Static assets and the twins themselves are excluded from Functions in
// public/_routes.json, so they never pay an invocation.

interface Env {
  ASSETS: Fetcher;
}

class TwinUnavailable extends Data.TaggedError("TwinUnavailable")<{
  path: string;
  status: number;
}> {}

const hasExtension = (pathname: string): boolean => /\.[A-Za-z0-9]+$/.test(pathname.split("/").pop() ?? "");

/** `/blog/post/` or `/blog/post` -> `/blog/post`; `/` -> `/index`. */
const stem = (pathname: string): string => {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/index" : trimmed;
};

const twinPath = (pathname: string, variant: Exclude<Variant, "html">): string =>
  `${stem(pathname)}${variant === "json" ? ".json" : ".md"}`;

/** The canonical HTML URL a twin mirrors: `/index` -> `/`, `/blog/post` -> `/blog/post/`. */
const canonicalUrl = (url: URL): string => {
  const s = stem(url.pathname);
  return new URL(s === "/index" ? "/" : `${s}/`, url.origin).href;
};

const addVary = (headers: Headers): void => {
  const current = headers.get("Vary");
  const tokens = (current ?? "").split(",").map((t) => t.trim().toLowerCase()).filter(Boolean);
  if (!tokens.includes("accept")) {
    headers.set("Vary", current ? `${current}, Accept` : "Accept");
  }
};

const decorate = (response: Response): Response => {
  const out = new Response(response.body, response);
  applyHeaders(out.headers, securityHeaders);
  addVary(out.headers);
  return out;
};

const fetchTwin = (env: Env, url: URL, variant: Exclude<Variant, "html">) =>
  Effect.tryPromise({
    try: () => env.ASSETS.fetch(new URL(twinPath(url.pathname, variant), url.origin).toString()),
    catch: () => new TwinUnavailable({path: url.pathname, status: 502}),
  }).pipe(
    Effect.flatMap((twin) =>
      twin.ok
        ? Effect.succeed(twin)
        : Effect.fail(new TwinUnavailable({path: url.pathname, status: twin.status})),
    ),
  );

const twinResponse = (twin: Response, url: URL, variant: Exclude<Variant, "html">): Response => {
  const headers = new Headers({
    "Content-Type": contentTypeFor(variant),
    "Cache-Control": revalidateCacheControl,
    "X-Robots-Tag": "noindex",
    "Link": `<${canonicalUrl(url)}>; rel="canonical"`,
  });
  applyHeaders(headers, securityHeaders);
  addVary(headers);
  return new Response(twin.body, {status: 200, headers});
};

// RFC 9457 problem details for clients that asked for JSON; a short Markdown note for
// clients that asked for text. Browsers keep the designed 404 page.
const notFound = (url: URL, variant: Exclude<Variant, "html">): Response => {
  const headers = new Headers({
    "Content-Type": variant === "json" ? "application/problem+json; charset=utf-8" : contentTypeFor(variant),
    "Cache-Control": "no-store",
  });
  applyHeaders(headers, securityHeaders);
  addVary(headers);
  const body =
    variant === "json"
      ? JSON.stringify({
          type: "about:blank",
          title: "Not Found",
          status: 404,
          detail: `No page exists at ${url.pathname}.`,
          instance: url.pathname,
        })
      : `# Not Found\n\nNo page exists at ${url.pathname}. The index of everything Vidya publishes is at ${url.origin}/llms.txt.\n`;
  return new Response(body, {status: 404, headers});
};

export const onRequest: PagesFunction<Env> = async (context) => {
  const {request, env, next} = context;
  const url = new URL(request.url);
  const method = request.method.toUpperCase();

  const passThrough = Effect.tryPromise({
    try: () => next(),
    catch: () => new TwinUnavailable({path: url.pathname, status: 500}),
  }).pipe(Effect.map(decorate));

  if ((method !== "GET" && method !== "HEAD") || hasExtension(url.pathname)) {
    return Effect.runPromise(passThrough);
  }

  const variant = negotiate(request.headers.get("Accept"));
  if (variant === "html") {
    return Effect.runPromise(passThrough);
  }

  const program = fetchTwin(env, url, variant).pipe(
    Effect.map((twin) => twinResponse(twin, url, variant)),
    Effect.catchTag("TwinUnavailable", () =>
      // No twin: let the HTML route answer, unless it is a 404, which the client
      // asked to receive in its own format.
      Effect.tryPromise({
        try: () => next(),
        catch: () => new TwinUnavailable({path: url.pathname, status: 500}),
      }).pipe(
        Effect.map((html) => (html.status === 404 ? notFound(url, variant) : decorate(html))),
      ),
    ),
    Effect.catchAll(() => Effect.succeed(notFound(url, variant))),
  );

  return Effect.runPromise(program);
};
