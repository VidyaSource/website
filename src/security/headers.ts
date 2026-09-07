// The one source of truth for response headers. Two consumers:
//
// 1. An Astro integration renders these rules into `dist/_headers`, which Cloudflare
//    Pages applies to static asset responses.
// 2. The Pages Function middleware attaches `securityHeaders` to every response it
//    returns, because Cloudflare does not apply `_headers` to Function responses and
//    every HTML route passes through the middleware for content negotiation.
//
// This file has no Astro or Cloudflare imports so both consumers can load it.

export type HeaderMap = Readonly<Record<string, string>>;

export interface HeaderRule {
    /** A Cloudflare `_headers` URL pattern: one greedy `*` splat allowed. */
    readonly pattern: string;
    readonly headers: HeaderMap;
}

// Every origin the pages load executable code, frames, or data from. No inline
// scripts are allowed: Astro bundles every <script> to /_astro (see
// `vite.build.assetsInlineLimit: 0` in astro.config.mjs), so a script injected by an
// attacker has nowhere to run. Styles allow inline because Shiki code blocks, Astro's
// `define:vars`, and Tailwind Plus Elements all set style attributes at runtime.
const contentSecurityPolicy: string = [
    "default-src 'self'",
    "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com https://platform.twitter.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://challenges.cloudflare.com https://platform.twitter.com https://syndication.twitter.com",
    "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://syndication.twitter.com https://cdn.syndication.twimg.com https://platform.twitter.com",
    "worker-src 'self'",
    "manifest-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    // Checkout providers get added to form-action here when products ship.
    "form-action 'self'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests'
].join('; ');

export const securityHeaders = {
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy': contentSecurityPolicy,
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    // `payment` opens up when a checkout provider needs the Payment Request API.
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
    'Cross-Origin-Opener-Policy': 'same-origin'
} as const satisfies HeaderMap;

/** Cache policy for negotiated and HTML responses: always revalidate at the edge. */
export const revalidateCacheControl = 'public, max-age=0, must-revalidate';

export const headerRules: readonly HeaderRule[] = [
    {pattern: '/*', headers: securityHeaders},
    {pattern: '/_astro/*', headers: {'Cache-Control': 'public, max-age=31536000, immutable'}},
    // Markdown twins: correct label, and kept out of search indexes so they do not
    // compete with the HTML page they mirror. Agents ignore X-Robots-Tag.
    {pattern: '/*.md', headers: {'Content-Type': 'text/markdown; charset=utf-8', 'X-Robots-Tag': 'noindex'}},
    {pattern: '/*.json', headers: {'X-Robots-Tag': 'noindex'}},
    {pattern: '/llms.txt', headers: {'X-Robots-Tag': 'noindex'}},
    {pattern: '/llms-full.txt', headers: {'X-Robots-Tag': 'noindex'}}
];

export const renderHeadersFile = (): string =>
    `${headerRules
        .map((rule) => [rule.pattern, ...Object.entries(rule.headers).map(([name, value]) => `  ${name}: ${value}`)].join('\n'))
        .join('\n\n')}\n`;

export const applyHeaders = (headers: Headers, extra: HeaderMap): void => {
    for (const [name, value] of Object.entries(extra)) {
        headers.set(name, value);
    }
};
