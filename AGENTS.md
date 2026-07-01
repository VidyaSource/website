# Agents Guide — Vidya Website

## Project Overview

This is the **Vidya** company website ([vidyasource.com](https://www.vidyasource.com)), a static site built with **Astro 7**, deployed to **Cloudflare Pages**. It showcases the company's consulting services, blog, courses, and tutorials.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 7 (`output: 'static'`) |
| UI Components | React 18 (interactive islands) + Astro components |
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
├── components/       # Shared Astro and React components
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
- **Astro components** (`.astro`) are used for static/layout UI — prefer these by default.
- **React components** (`.tsx`) are used only when client-side interactivity is needed (Astro islands). They live in `src/layouts/` or `src/components/`.
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
- `public/_headers` sets the immutable `Cache-Control` for hashed `/_astro/*` assets (previously injected by the adapter).
- No server-side rendering — all pages are pre-rendered at build time.

---

## Things to Avoid

- Do **not** add new Tailwind colors outside the custom palette defined in `tailwind.config.mjs`.
- Do **not** use the PostCSS Tailwind plugin — Tailwind is loaded via the Vite plugin.
- Do **not** add server-rendered (`output: 'server'`) pages — the site is fully static.
- Do **not** skip the `author`/`instructor` reference fields in blog/course frontmatter — they must match a valid slug in `src/content/staff/`.
- Do **not** place images that need to be referenced in frontmatter under `src/img/` — use `public/img/` instead.
