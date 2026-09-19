# Agents Guide — Vidya Website

## Project Overview

This is the **Vidya** company website ([vidyasource.com](https://www.vidyasource.com)), a static site built with **Astro 7**, deployed to **Cloudflare Pages**. It showcases the company's consulting services, blog, courses, and tutorials.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 7 (`output: 'static'`) |
| UI Components | Astro components + Tailwind Plus Elements (`@tailwindplus/elements`) for interactivity |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Content | Astro Content Layer collections (glob loaders, Markdown `.md` / MDX `.mdx`) |
| Deployment | Cloudflare Pages (static output to flat `dist/`, no adapter) |
| PWA | `@vite-pwa/astro` |
| SEO | `astro-seo-meta`, `astro-seo-schema`, sitemap via `@astrojs/sitemap` |
| Analytics | Google Tag Manager via `@astrojs/partytown` |
| Language | TypeScript (strict mode) |

---

## Project Structure

```
src/
├── components/       # Shared Astro components
├── content/          # Astro Content Collections (typed, schema-validated)
│   ├── blog/         # Blog posts (.md and .mdx)
│   ├── courses/      # Course content (.mdx)
│   ├── staff/        # Staff data (.json)
│   └── tutorials/    # Tutorial content (.mdx)
├── layouts/          # Page layout components, organized by section
│   ├── blog/
│   ├── courses/
│   ├── home/
│   ├── tutorials/
│   └── ...
├── pages/            # File-based routing
│   ├── index.astro
│   ├── blog/
│   ├── courses/
│   ├── tutorials/
│   ├── about/
│   ├── consulting/
│   ├── contact.astro
│   └── robots.txt.ts
└── img/              # Static images (copied to dist on build)
public/               # Publicly served static assets
```

---

## Content Collections & Schemas

All collections are defined and typed in `src/content/config.ts`. **Always respect these schemas** when adding or editing content.

### `blog` collection (`src/content/blog/`)
- Files: `.md` or `.mdx`
- Required frontmatter: `author` (reference to `staff`), `title`, `date`, `description`, `image`
- Optional: `tags`, `categories`, `youtube` (YouTube video ID), `draft`
- `draft: true` hides a post from listings

### `courses` collection (`src/content/courses/`)
- Files: `.mdx`
- Required: `title`, `category`, `image`, `instructor` (reference to `staff`), `description`, `quote`, `syllabus` (record of section → string array)

### `tutorials` collection (`src/content/tutorials/`)
- Files: `.mdx`
- Required: `title`, `date`, `description`, `github`, `image`, `youtube`
- Optional: `subtitle`, `tags`

### `staff` collection (`src/content/staff/`)
- Files: `.json` (data collection, not content)
- Required: `title`, `name`, `profileUrl`, `linkedIn`, `image`

---

## Key Conventions

### Components
- **Astro components** (`.astro`) are the only UI layer — the site has no React/framework islands.
- **Interactivity** uses Tailwind Plus Elements web components (`<el-autocomplete>`, `<el-popover>`, etc., registered via `TailwindElements.astro`) plus small inline `<script>` blocks. No client-side framework.
- The `src/components/Images.ts` file centralizes image path helpers.

### Styling
- Tailwind CSS v4 is configured via the Vite plugin (`@tailwindcss/vite`), **not** the PostCSS plugin.
- The `tailwind.config.mjs` defines a **custom design system**: do not use arbitrary Tailwind colors — use the project's palette (`red`, `green`, `blue`, `gray`, `yellow`, `white`, `transparent`, `current`, and social brand colors).
- Custom fonts: `myriad-pro` (sans), `Inter var` (serif), `Source Code Pro` (code).
- Dark mode is class-based (`darkMode: "class"`).

### Routing
- Pages use Astro's file-based routing under `src/pages/`.
- Dynamic routes (e.g., `[slug].astro`) use `getStaticPaths()` to generate paths from content collections at build time.

### Images
- The build script (`astro build && cp -r src/img dist/img`) copies `src/img/` into `dist/` — place images referenced in components under `src/img/`.
- Blog/course/tutorial images are referenced by path string in frontmatter (e.g., `/img/blog/my-image.webp`) and served from `public/`.
- The Astro image service is set to `passthroughImageService()` — no automatic image optimization is applied.

### SEO & Schema
- Use the `<VidyaSEO>` component for page-level SEO metadata.
- Structured data (JSON-LD) is passed via the `schema` prop on `<Page>`. Base organization schema is in `src/components/vidyaSchema.json`.

---

## Claude Code in the Devcontainer

Claude Code is installed automatically via the [Claude Code Dev Container Feature](https://github.com/anthropics/devcontainer-features/tree/main/src/claude-code) when the container is built. Authentication state and settings are persisted across rebuilds via a named Docker volume mounted at `/home/node/.claude`.

**To use Claude Code with WebStorm:**

1. Open the project in WebStorm and connect to the devcontainer via **File → Remote Development → Dev Containers**.
2. Once inside the container, open a terminal (`` Alt+F12 ``) and run `claude` to sign in.
3. Follow the authentication prompt — if the browser callback doesn't reach the container, copy the code shown in the browser and paste it at the `Paste code here if prompted` terminal prompt.
4. After signing in, run `claude` from any terminal session inside the container to start working.

> Authentication and settings persist across container rebuilds thanks to the `claude-code-config` named volume.

---

## Development

> **Running inside the devcontainer?** The dev server must bind to `0.0.0.0` so that port `4321` is reachable from your host machine via the forwarded port. Use the `--host` flag shown below.

```bash
# Install dependencies (runs automatically after container creation)
npm install

# Start dev server — use --host inside the devcontainer
npm run dev -- --host        # accessible at http://localhost:4321 on the host

# Without the devcontainer (local machine only)
npm run dev

# Type-check
npx astro check

# Build for production
npm run build

# Preview production build — also needs --host inside the devcontainer
npm run preview -- --host
```

The dev container (`.devcontainer/devcontainer.json`) uses Node 22 and forwards port `4321`. After container creation, `npm install` runs automatically.

---

## Deployment

- **Target**: Cloudflare Pages (static output). Build output directory is the flat `dist/`.
- No adapter: the site is fully static, so Astro builds directly to `dist/` (no `@astrojs/cloudflare`, no `dist/client` + `dist/server` split). If SSR is ever needed, re-add the Cloudflare adapter and point the Pages output directory at `dist/client`.
- Response headers come from one typed module, `src/security/headers.ts`. An Astro integration (`src/security/cloudflare-headers.ts`) renders it into `dist/_headers` on every build, and the Pages Function middleware attaches the same headers to every response it returns, because Cloudflare does not apply `_headers` to Function responses. There is no hand-written `public/_headers`.
- No server-side rendering — all pages are pre-rendered at build time.
- Two Pages Functions run on Cloudflare: `functions/api/contact.ts` delivers the contact form by email, and `functions/_middleware.ts` does HTTP content negotiation and header decoration for every page route. `public/_routes.json` keeps static assets and the machine-readable twins out of the Function so they cost no invocation.

---

## Security headers and Content-Security-Policy

- The CSP in `src/security/headers.ts` allows **no inline scripts**. Every `<script>` must be a bundled Astro script (no `is:inline`, no `define:vars`, no `set:html`), and `vite.build.assetsInlineLimit` is `0` so Astro never inlines a small bundle back into the HTML. Server values a script needs go in a `<meta>` tag the script reads (see `Analytics.astro`).
- The only external script origins are Google Analytics, Cloudflare Turnstile, the Cloudflare Web Analytics beacon, and Twitter's widget loader.
- Google Analytics sends hits to several hosts, and `connect-src` must list all of them (`*.google-analytics.com`, the bare `analytics.google.com`, `*.g.doubleclick.net`, `www.google.com`). `gtag` must push the `arguments` object to `dataLayer`, never a rest-parameter array, or gtag.js ignores every command.
- Cloudflare's bot-detection (JS detections) snippet is an inline script with a different hash on every request. The CSP cannot allow it without `'unsafe-inline'`, so turn JavaScript detections off in the Cloudflare dashboard and expect a console violation until you do. A new third-party script, frame, or fetch target must be added to the policy in `headers.ts` or the browser blocks it silently.
- Styles allow `'unsafe-inline'` because Shiki code blocks, `define:vars` on `<style>`, and Tailwind Plus Elements set style attributes at runtime.
- `form-action` and `Permissions-Policy: payment` are the two lines that change when a checkout provider is added.

---

## AI consumption

- The Vidya website supports consumption by ChatGPT, Claude, and Perplexity via llms.txt so that visitors can have AI evaluate Vidya.
- `src/agent/catalog.ts` is the single typed model of every page an agent can read. `llms.txt`, `llms-full.txt`, `sitemap.xml`, `rss.xml`, and the per-page twins all read it. A new content collection is one loader in the catalog and then appears everywhere.
- Every HTML page `/x/y/` has a Markdown twin at `/x/y.md` and a JSON-LD twin at `/x/y.json` (`src/pages/[...stem].md.ts` and `[...stem].json.ts`). The homepage twins are `/index.md` and `/index.json`. Each page advertises them with `<link rel="alternate">` from `src/components/MachineReadable.astro`.
- `functions/_middleware.ts` serves the twin in place when a request's `Accept` header prefers `text/markdown`, `text/plain`, or `application/json`, with `Vary: Accept`. 404s under a JSON preference are RFC 9457 `application/problem+json`. No User-Agent sniffing anywhere.
- `llms.txt` follows llmstxt.org (H1, blockquote, H2 link lists, `## Optional` last) and stays near 10 KB. `llms-full.txt` is every twin concatenated. `public/skill.md` is an Agent Skill that tells an agent how to evaluate Vidya.
- The `offers` field on courses (and the `products` collection) is the schema.org `Offer` shape. Fill it in and the price and purchase link show up in JSON-LD, the twins, and `llms.txt` with no further code.
- The hero headline and the `llms.txt` summary are the same constants in `src/agent/site.ts`, so they cannot drift.

---

## Things to Avoid

- Do **not** add new Tailwind colors outside the custom palette defined in `tailwind.config.mjs`.
- Do **not** use the PostCSS Tailwind plugin — Tailwind is loaded via the Vite plugin.
- Do **not** add server-rendered (`output: 'server'`) pages — the site is fully static.
- Do **not** skip the `author`/`instructor` reference fields in blog/course frontmatter — they must match a valid slug in `src/content/staff/`.
- Do **not** place images that need to be referenced in frontmatter under `src/img/` — use `public/img/` instead.
