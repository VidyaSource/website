# Agent Readiness Plan for vidyasource.com

Date: 2026-09-07 (revision 4: Part 1 implemented)
Inputs: isagentready.com report (78/100, grade B) and agentgrade.com report.
Status: **Part 1 is implemented in the working tree and verified locally under
`wrangler pages dev`.** Part 2's content model shipped with it. Part 3 (Cloudflare) is
still to do.

## Implementation notes (what differs from the plan below, and why)

- **CSP is one header, with no inline scripts, instead of the planned header + Astro
  `<meta>` split.** Astro's own docs say its CSP feature does not support
  `<ClientRouter />` view transitions or Shiki code blocks, both of which this site
  uses. So the policy lives entirely in `src/security/headers.ts`, `script-src` has no
  hashes and no `'unsafe-inline'`, and every script became a bundled one: the GA4
  config snippet reads its values from two `<meta>` tags, the theme script dropped
  `is:inline`, the 99 KB inlined copy of Twitter's `widgets.js` became a plain
  `<script src>` from `platform.twitter.com`, and `vite.build.assetsInlineLimit` is `0`
  so Astro never inlines a bundle back into the HTML. Styles allow `'unsafe-inline'`
  (Shiki, `define:vars`, Tailwind Plus Elements). Verified: the built HTML contains no
  executable inline script, and the browser console shows no CSP violation on the
  homepage, a post with a tweet, a post with a YouTube embed, a post with code, and
  the contact page.
- **JSON-LD on the HTML pages is unchanged.** The twins carry the new typed JSON-LD
  (built with `schema-dts` types in `src/agent/catalog.ts`); the HTML pages still emit
  the schema the layout utils build. Unifying them is Part 2 page work, deliberately
  not done now so the AI Search Signals score (95%) cannot regress by accident.
- **The PWA manifest is linked but the service worker is not registered.** It never
  was; the plugin generated `sw.js` and nothing referenced it. The manifest now says
  `Vidya` with the brand colour and real icons instead of the plugin default.
- **`Link: rel="canonical"` on the static `.md` files is not possible** from a static
  endpoint (Astro writes files; headers are dropped). The twins carry `canonical:` in
  front matter, the negotiated responses from the middleware carry the `Link` header.
- **`llms.txt` is 10.2 KB.** The 10 KB figure in agentgrade's guidance is a
  recommendation; the 66-article list moved to `llms-full.txt` and `/blog.md`.
- **Local verification** (`npx wrangler pages dev dist`) confirmed: security headers
  on HTML and static files; `Accept: text/markdown, text/html, */*` → markdown;
  `text/html, text/markdown` → HTML; q-values honoured; `application/json` → JSON-LD;
  `text/plain` → markdown labelled `text/plain`; `Vary: Accept` everywhere; 404 →
  `application/problem+json` or Markdown by preference; `/sitemap-index.xml` → 301.
- **Not verified**: behaviour behind the production Cloudflare challenge (Part 3), the
  `_routes.json` `/*.md`-style exclusions (Cloudflare documents only prefix wildcards;
  if they do not match, the middleware still passes assets through unchanged and the
  only cost is an invocation), and the Turnstile widget locally (the site key is a
  Cloudflare build variable, so a local build has none; that predates this work).

Sequence: Part 1 is all code and ships before anything changes in Cloudflare. Part 2 is
the data model and page work that makes products and purchasable courses legible to
agents; the model is built now, the product pages later. Part 3 is the Cloudflare
decision, deferred. Part 4 is verification. Part 5 lists the decisions.

## 0. Diagnosis (unchanged from revision 2, condensed)

Live probes on 2026-09-07 against `https://www.vidyasource.com` with non-browser
User-Agents (curl, Node, python-requests, spoofed GPTBot/ClaudeBot/PerplexityBot):

| Path type | Result |
|-----------|--------|
| HTML pages (`/`, `/blog/`, unknown paths) | 403, `cf-mitigated: challenge` |
| `.xml`, `.json`, `.md`, `.webmanifest`, `/api/contact` | 403, `cf-mitigated: challenge` |
| `.txt`, `.pdf`, `.png`, `.js`, `.css`, `.svg` | real response (200 or 404), no challenge |

The exemption is by file extension and matches Cloudflare's default "static resource"
list (txt, pdf, images, js, css, fonts, archives). `.md`, `.xml`, and `.json` are not on
that list. Chrome gets normal responses everywhere. The spoofed crawler UAs came from an
ordinary IP, so they were not verified bots; real GPTBot, ChatGPT-User, OAI-SearchBot,
ClaudeBot, Claude-User, PerplexityBot and Perplexity-User are on Cloudflare's
verified-bots list and probably pass today. Unverified agents (Claude Code on a laptop,
Cursor, custom agents, scanners, MCP fetch tools) do not.

Consequences in the reports: "no valid XML sitemap", "sitemap 0 URLs", "could not
understand the site's purpose", "could not open a clear link", "no JSON 404", and every
content-negotiation check. All six were answered by a challenge page.

Code-side findings, independent of the edge:

- `@astrojs/sitemap` emits `/sitemap-index.xml`; both checkers probe `/sitemap.xml`. No `lastmod`.
- `public/_headers` sets only `Cache-Control` for `/_astro/*`. No HSTS, CSP, or frame protection.
- `dist/llms.txt` is 786 lines of prose with no blockquote summary and no H2 link lists.
  It is an `llms-full.txt` under the wrong name. No `llms-full.txt` exists.
- No `<link rel="alternate">` for llms.txt, RSS, or markdown. No RSS. No
  `/.well-known/security.txt`. `favicon.svg` exists but is never linked. The PWA manifest
  is the plugin default (`astro-website`, green theme, no icons).
- Hero H1 is "Welcome to Vidya." Purpose and audience live only in `<title>` and meta.

Deliberately not doing: x402/Bazaar crypto payments, `agents.txt` (not a standard),
WebFinger/DID/Nostr/AT Protocol/App Links, rate-limit headers. OpenAPI and machine
payments are revisited in Part 2 because products are coming.

## Part 1 — Code changes, in order, before touching Cloudflare

What each step buys today, given the edge as it is: `.txt` outputs reach every agent
immediately; headers and structured data reach browsers, verified bots, and any scanner
that uses a headless browser; `.md`, `.json`, `.xml` outputs and negotiation are built and
deployed now but reach unverified agents only after Part 3.

### 1.1 One catalog model for everything machine-readable

New feature folder `src/agent/` (package by feature, DDD naming):

- `catalog.ts`: typed loaders that turn every content-collection entry and every static
  page into `MachinePage { path, kind, title, description, updated, tags, offers?, markdown(), json() }`.
  `kind` is a union: `service | caseStudy | course | tutorial | article | product | page`.
  `offers` is the commerce hook from Part 2; optional now, empty for every page today.
- Every machine-readable output below (`llms.txt`, `llms-full.txt`, sitemap, RSS, the
  `.md`/`.json` twins, JSON-LD) reads this model. Nothing else touches the collections
  directly for these purposes, so adding a `products` collection later is one loader.

### 1.2 `llms-full.txt` and a spec-shaped `llms.txt` (highest value today: `.txt` is reachable)

- `src/pages/llms-full.txt.ts`: everything the current `llms.txt` contains, plus the full
  markdown body of every page from the catalog (MDX bodies: strip `import` lines and JSX
  tags; YouTube and tweet embeds become plain links). This is the one artefact an
  unverified agent can read in full today.
- Rewrite `src/pages/llms.txt.ts` to the llms.txt spec, under 10 KB:
  H1, blockquote summary, two or three short paragraphs, then H2 sections of
  `- [name](url): note` lines, `## Optional` last. Links point at the `.md` twin URL with
  the HTML URL in the note, so an agent can hand a human a link. Until Part 3 opens `.md`
  to unverified agents, the note also says "full text of every page is in
  `/llms-full.txt`".
  ```
  # Vidya
  > Vidya is a certified, minority-owned IT consulting firm in Northern Virginia that
  > modernizes legacy systems with cloud, enterprise AI, and data engineering for
  > business and government, and publishes courses, tutorials, and articles.
  ## Consulting
  - [Legacy System Modernization](https://www.vidyasource.com/consulting/legacy-system-modernization.md): ... HTML: /consulting/legacy-system-modernization
  ## Case Studies
  ## Courses
  ## Tutorials
  ## Company
  ## Optional
  - [All articles](https://www.vidyasource.com/blog.md): 66 posts, newest first
  - [Full content](https://www.vidyasource.com/llms-full.txt)
  ```
- `<head>` in `Page.astro` and `index.astro`:
  ```html
  <link rel="alternate" type="text/markdown" href="/llms.txt" title="Vidya for LLMs">
  <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Vidya full content for LLMs">
  ```

### 1.3 Markdown and JSON twins for every page

- Static endpoints emit, for every HTML page `/x/y/`, the files `/x/y.md` and `/x/y.json`;
  for `/` they emit `/index.md` and `/index.json`: `src/pages/blog/[slug].md.ts`,
  `src/pages/blog/[slug].json.ts`, and the same for `courses`, `tutorials`,
  `case-studies`, `consulting`; hand-written markdown in the catalog for `/`, `/about`,
  `/contact`, `/blog`, `/courses`, `/tutorials`.
- JSON shape is schema.org JSON-LD (`@context`, `@type`, `headline`/`name`,
  `datePublished`, `author`, `articleBody`, `url`, and `offers` when present). One
  vocabulary for the twins and for the `<script type="application/ld+json">` on the HTML
  page: both come from `MachinePage.json()`.
- Each `.md` endpoint sets `Link: <canonical HTML URL>; rel="canonical"` (RFC 8288).
- Each HTML page advertises its twins:
  ```html
  <link rel="alternate" type="text/markdown" href="/blog/slug.md">
  <link rel="alternate" type="application/ld+json" href="/blog/slug.json">
  ```

### 1.4 `/sitemap.xml` with `lastmod`

- `src/pages/sitemap.xml.ts` from the catalog. Canonical HTML URLs only. Skip drafts and `/404`.
- Remove `@astrojs/sitemap`. Update `robots.txt.ts` (`Sitemap:` line) and the
  `<link rel="sitemap">` in `Page.astro` and `index.astro`.
- `public/_redirects`: `/sitemap-index.xml /sitemap.xml 301`, `/sitemap-0.xml /sitemap.xml 301`.

### 1.5 Security headers

One typed source of truth, `functions/headers.ts`:

```ts
export const securityHeaders = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Content-Security-Policy": "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests",
} as const satisfies Record<string, string>;
```

- A build step renders `public/_headers` from this module (a `/*` block plus the
  existing `/_astro/*` cache block plus a `/*.md` block with `Content-Type:
  text/markdown; charset=utf-8` and `X-Robots-Tag: noindex`). Verify the `/*.md` splat
  with `wrangler pages dev`; the docs allow one greedy splat per rule.
- The Part 1.7 middleware attaches the same object to every response it returns.
  Cloudflare docs: "Custom headers defined in the `_headers` file are not applied to
  responses generated by Pages Functions." Once the middleware handles HTML routes, the
  module is the only thing that puts security headers on HTML.
- `Permissions-Policy: payment=()` and `form-action 'self'` are the two lines that change
  when checkout arrives (Part 2.4). They are deliberately in one place.

### 1.6 CSP fetch directives via Astro

`astro.config.mjs`:

```js
security: {
  csp: {
    directives: [
      "default-src 'self'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://challenges.cloudflare.com https://platform.twitter.com https://syndication.twitter.com",
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://syndication.twitter.com",
      "worker-src 'self'",
      "manifest-src 'self'",
    ],
    scriptDirective: {
      resources: ["'self'", "https://www.googletagmanager.com", "https://challenges.cloudflare.com", "https://platform.twitter.com"],
    },
    styleDirective: {
      resources: ["'self'", { resource: "'unsafe-inline'", kind: "attribute" }],
    },
  },
}
```

Astro emits a `<meta http-equiv="content-security-policy">` per page with SHA-256 hashes
for the three inline scripts (`Analytics.astro`, `ThemeButton.astro`,
`TwitterScript.astro`). The header CSP in 1.5 carries only directives that do not
restrict inline scripts, so the two policies do not fight. `style-src-attr
'unsafe-inline'` covers the `style=""` attributes in `Hero.astro` and Tailwind Plus
Elements; follow-up: move the three `animation-delay` attributes to classes and drop it.
`img-src https:` stays permissive until the blog's image hosts are catalogued.

Test with `npx wrangler pages dev dist`: theme toggle, contact form with Turnstile, a post
with a YouTube embed, a post with a tweet. Any console CSP violation is a missing origin.

### 1.7 Content negotiation middleware

`functions/_middleware.ts`, written with Effect like `functions/api/contact.ts`. RFC 9110
`Accept` with q-values, `Vary: Accept`, RFC 9457 `application/problem+json`. No
User-Agent sniffing.

1. Parse `Accept`; rank `text/markdown`, `text/plain`, `application/json`,
   `application/ld+json`, `text/html` by q and then by the client's listed order.
2. Markdown or plain → the `.md` twin from `env.ASSETS`, labelled with the type the
   client asked for. JSON or JSON-LD → the `.json` twin, labelled likewise.
3. Otherwise `next()`. Never redirect to a different URL.
4. Every response: `Vary: Accept` plus `securityHeaders`.
5. 404 under a JSON preference → `{ "type": "about:blank", "title": "Not Found",
   "status": 404, "instance": path }` as `application/problem+json`; under markdown → a
   short markdown 404; otherwise the static `404.html`.
6. `public/_routes.json`: `include: ["/*"]`, exclude `/_astro/*`, `/img/*`, `/fonts/*`,
   `/*.md`, `/*.json`, `/*.png`, `/*.svg`, `/*.ico`, `/*.pdf`, `/*.xml`, `/*.txt`,
   `/*.webmanifest`, `/sw.js`, `/workbox-*`. Twins and assets stay static and free. Any
   future `/api/*` route is inside the include and is not affected by negotiation because
   the middleware only negotiates on routes that have twins.
7. `Cache-Control` on negotiated responses: `public, max-age=0, must-revalidate`.

Cost: every HTML page view is a Pages Function invocation (free tier 100k/day; current
traffic is far below; single-digit ms). Fallback if unacceptable: a Cloudflare Transform
Rule on the `Accept` header, which is dashboard config and cannot honour q-values.

Local test:

```
npm run build && npx wrangler pages dev dist
curl -sI -H 'Accept: text/markdown, text/html, */*' http://localhost:8788/ | grep -iE 'content-type|vary|strict-transport'
curl -sI -H 'Accept: text/html, text/markdown' http://localhost:8788/ | grep -i content-type     # text/html
curl -s  -H 'Accept: application/json' http://localhost:8788/courses/<slug>/ | head -c 400
curl -sI http://localhost:8788/blog/<slug>.md | grep -iE 'content-type|x-robots|link'
curl -s  -H 'Accept: application/json' http://localhost:8788/nope -o /dev/null -w '%{http_code} %{content_type}\n'   # 404 application/problem+json
```

### 1.8 Favicons, manifest, RSS, security.txt, robots.txt

- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` before the `.ico` line;
  `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`; generate 192/512 PNGs and
  the touch icon from the SVG (one-off `sharp` script, not committed).
- `AstroPWA({ manifest: { name: 'Vidya', short_name: 'Vidya', theme_color: '#5A82B4', background_color: '#ffffff', icons: [...] } })`.
  Deduplicate the favicon lines in `Page.astro` and `Layout.astro`.
- `@astrojs/rss` → `src/pages/rss.xml.ts` from the catalog (articles, and later products
  and courses as separate feeds if useful); `<link rel="alternate" type="application/rss+xml">`.
- `public/.well-known/security.txt` per RFC 9116 (`Contact`, `Expires` one year out,
  `Preferred-Languages`, `Canonical`). Calendar reminder for the expiry.
- `robots.txt`: keep current rules; add an explicit `Allow: /` block naming GPTBot,
  OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot,
  Perplexity-User, Google-Extended; add `Disallow: /*.md$` and `/*.json$` for `googlebot`
  next to the existing `/llms.txt` line.

### 1.9 Homepage copy and skill file

- H1 states purpose and audience in one line ("Legacy system modernization and AI
  engineering for business and government."); "Welcome to Vidya." becomes the eyebrow.
  One sentence under it names the three practice areas and the geography. The same
  sentence is the `llms.txt` blockquote, so the two never drift. Business-casual voice.
- Primary CTA text becomes self-describing for an agent reading the DOM
  ("Explore consulting services" → `/consulting`). When course purchase lands, the
  second CTA becomes "Browse courses and pricing".
- `public/skill.md` per agentskills.io (YAML front matter `name`, `description`; body:
  how to evaluate Vidya, where the catalog lives, how to start a conversation). Skills
  are exactly the kind of artefact an AI consultancy should publish.

### PR plan for Part 1

| PR | Contents | Re-scan after? |
|----|----------|----------------|
| 1 | 1.1 catalog, 1.2 llms files, 1.4 sitemap, 1.8, 1.9 copy | yes |
| 2 | 1.5 headers module + `_headers`, 1.6 Astro CSP | yes |
| 3 | 1.3 twins, 1.7 middleware, `_routes.json`, skill.md | yes, and again after Part 3 |

## Part 2 — Products and purchasable courses: model now, pages soon

You are about to add products and refine course pages to show how to buy. Agents
evaluating "can I buy this, what does it cost, how" need the same three things a human
does: a price, an availability, and a purchase URL, in a form they can parse. The only
real standard for that on the open web is schema.org `Offer`. Everything below builds on
it, and the model is added in PR 1 so the twins, `llms.txt`, and JSON-LD carry offers the
day the first product ships.

### 2.1 Content model (`src/content/config.ts`)

- A shared `Offer` zod type: `price` (number), `priceCurrency` (ISO 4217 string literal
  union, `"USD"` for now), `url` (purchase link), `availability` (union of the schema.org
  `ItemAvailability` values), optional `validFrom`/`validThrough`, optional `category`
  (`"Paid" | "Free" | "Subscription"`). No `any`; no free-form strings where a union works.
- `courses`: add optional `offers: Offer[]`, optional `courseMode`
  (`"online" | "onsite" | "blended"`), optional `workload` (ISO 8601 duration), optional
  `instances` for scheduled cohorts.
- New `products` collection (`.mdx`): `title`, `description`, `image`, `category`,
  `offers: Offer[]`, `sku?`, `brand` (defaults to Vidya), `faqs?`, `tags`.
- The catalog loader maps both into `MachinePage.offers`. Purchase URLs come from
  content front matter, not from code; the checkout provider's domain is configuration,
  not a constant.

### 2.2 What agents then get, with no further work

- JSON-LD on course pages: `Course` + `hasCourseInstance` (`CourseInstance` with
  `courseMode`, `courseWorkload`) + `offers`, with `provider` = the existing
  `Organization`. Product pages: `Product` + `offers` + `brand`. This is the "17
  high-value schema types" the isagentready AI Search Signals category validates, and it
  is what Google and the AI search engines read for price.
- `.json` twins carry the same `offers`; `.md` twins and `llms-full.txt` render a
  "How to buy" block (price, availability, link); `llms.txt` gains `## Products` and puts
  price in each course/product note ("$499, self-paced, buy at ...").
- Sitemap and RSS include product pages via the catalog.

### 2.3 Agentic commerce protocols: evaluate, do not build yet

Vendor-led protocols now exist for agents that buy on a user's behalf: OpenAI's Agentic
Commerce Protocol (with Stripe), Google's Universal Commerce Protocol, card-network
schemes (Visa Intelligent Commerce, Mastercard Agent Pay), and x402 for crypto. None is a
neutral standard yet, and all of them start from the same schema.org product data. The
correct move now is: publish clean `Offer` data (2.2), pick a checkout provider that
already implements one or more of these on the merchant's behalf, and revisit when the
first product is live. If Vidya exposes its own purchase or quote API, publish an
OpenAPI 3.1 document for it at `/openapi.json` and link it from `llms.txt`; that is the
point where the "OpenAPI" and "Machine Payments" checks stop being not-applicable.

### 2.4 Security and headers when checkout arrives

- Hosted checkout (Stripe Checkout, Lemon Squeezy, or similar) keeps card data out of
  the site and out of PCI scope. Do not embed a card form.
- The `securityHeaders` module changes on two lines: `form-action 'self' https://<checkout>`
  and `Permissions-Policy: payment=(self "https://<checkout>")` if the provider needs
  the Payment Request API. The Astro CSP adds the provider to `script-src`, `frame-src`,
  and `connect-src`. Still no `'unsafe-inline'` scripts.
- Any new `/api/*` route that creates a checkout session: Effect-typed input validation
  as in `contact.ts`, `application/problem+json` errors, idempotency key on POST, and a
  Cloudflare rate-limiting rule scoped to that path (that rule belongs to Part 3).
- If you later want agents, not only browsers, to start a purchase or an inquiry, the
  edge exception for `/api/*` and the Turnstile requirement both need rethinking. Park it.

## Part 3 — Cloudflare, after Part 1 has shipped

Nothing in Part 1 depends on this. Do it when the code is live and the first re-scan is
in hand, so the before/after is attributable.

### 3.1 First, find out what issues the challenge

Security → Events, filter `Action = Managed Challenge`, read the **Service** column
(Bot Fight Mode, Super Bot Fight Mode, Custom rules, Rate limiting). Note the plan (Free
or Pro) and the AI Crawl Control settings.

### 3.2 Option A — open HTML to agents

Turn Bot Fight Mode off (or set every Super Bot Fight Mode category to Allow). Scope any
challenge rule to `POST` and `/api/*`. Set AI Crawl Control to Allow for every listed
crawler. Everything from Part 1 then reaches every agent, and every scanner check that
can pass will pass.

### 3.3 Option B — keep the challenge on HTML, open the machine-readable surface

Conditions:

- **Ruleset Engine only.** Cloudflare docs: WAF custom rules cannot skip or bypass Bot
  Fight Mode. On Pro, Super Bot Fight Mode honours a *Skip* rule. On Free, replace Bot
  Fight Mode with one custom rule (Managed Challenge) whose expression is the negation of
  the allow expression below plus a UA heuristic; weaker than Bot Fight Mode, but explicit.
- **Allow expression** (as the Skip rule on Pro, or the exclusion on Free):
  ```
  cf.client.bot
  or ends_with(http.request.uri.path, ".md")
  or ends_with(http.request.uri.path, ".json")
  or http.request.uri.path in {"/robots.txt" "/llms.txt" "/llms-full.txt" "/sitemap.xml" "/rss.xml" "/skill.md" "/index.md" "/manifest.webmanifest"}
  or starts_with(http.request.uri.path, "/.well-known/")
  or any(http.request.headers["accept"][*] contains "text/markdown")
  or any(http.request.headers["accept"][*] contains "application/json")
  or any(http.request.headers["accept"][*] contains "text/plain")
  ```
  The `Accept` clauses are what let negotiation on canonical URLs reach the middleware.
- **What B protects**, stated plainly: not the content, since the twins expose it in a
  cleaner form. It protects HTML bandwidth, the analytics signal, and the unchanged
  browser experience. Legitimate, not security.
- **What B costs**: an unverified agent that fetches a canonical URL with `Accept: */*`
  (Claude Code `WebFetch`, most MCP fetch tools, a pasted URL) still gets the challenge
  page. The isagentready "understand the site" check likely keeps failing.

Recommendation stays Option A. Moving B → A later is one dashboard change.

### 3.4 Either option

- SSL/TLS → Edge Certificates → HSTS: `max-age=31536000`, `includeSubDomains`, no
  `preload` yet. Only the edge can put HSTS on the apex → www 301.
- When checkout ships: a rate-limiting rule on the checkout `/api/*` path (2.4).

## Part 4 — Verification

After each PR, and again after Part 3, from a terminal (not a browser):

```bash
for p in / /index.md /index.json /sitemap.xml /llms.txt /llms-full.txt /rss.xml /skill.md /.well-known/security.txt /blog/<slug>.md /nope; do
  printf '%-45s ' "$p"; curl -s -o /dev/null -A curl -w '%{http_code} %{content_type} mitigated=%header{cf-mitigated}\n' "https://www.vidyasource.com$p"
done
curl -sI -A 'Mozilla/5.0' https://www.vidyasource.com/ | grep -iE 'strict-transport|content-security|x-frame|vary'
curl -sI -A curl -H 'Accept: text/markdown, text/html, */*' https://www.vidyasource.com/ | grep -iE 'content-type|cf-mitigated'
```

Expected after Part 1 only (edge unchanged): `llms.txt`, `llms-full.txt`,
`security.txt` clean; headers present for the browser UA; `.md`/`.json`/`.xml` and
negotiation still challenged for `curl`. Expected after Part 3 Option A: nothing
challenged. Option B: only plain `/` and `/nope` challenged.

Score movement (isagentready categories):

| Category | Now | After Part 1 | After Part 3 (A) | After Part 3 (B) |
|----------|-----|--------------|------------------|------------------|
| Security & Trust | 38% | ~100% | 100% | 100% |
| AI Search Signals | 95% | 100% (Course/Product schema with offers once pages exist) | 100% | 100% |
| AI Content Discovery | 73% | ~80% (llms files, links, feed; sitemap/negotiation still edge-blocked) | ~100% | ~95% |
| Agent Protocols | 0% | ~20% (skill.md) | same | same |
| LLM "purpose / link" | fail | unknown (depends on the scanner's fetcher) | pass | likely fail |

## Part 5 — Decisions

1. **Checkout provider and whether it supports an agentic commerce protocol.** Decides
   the two header lines in 2.4 and whether 2.3 becomes real work.
2. **`llms.txt` shape.** The spec-shaped file moves the 66-article list to
   `llms-full.txt` and `/blog.md`. Confirm.
3. **Pages Function on every HTML page view** (1.7). Accept, or take the Transform Rule fallback.
4. **`img-src https:`** stays permissive until the blog's image hosts are catalogued. Accept.
5. **Option A or B** (Part 3). Deferred until Part 1 has shipped and been re-scanned.
6. **HSTS `preload`.** Not now; confirm every subdomain serves HTTPS first.
7. **MCP endpoint.** Product decision. A read-only server over the catalog is the natural
   demo once products exist; not a scoring item.
