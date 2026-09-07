import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";
import AstroPWA from '@vite-pwa/astro';

import tailwindcss from "@tailwindcss/vite";
import {cloudflareHeaders} from "./src/security/cloudflare-headers";

// https://astro.build/config
export default defineConfig({
    site: 'https://www.vidyasource.com',
    output: 'static',
    // Renamed 2026-07-29: /consulting/software-modernization became
    // /consulting/legacy-system-modernization. The 301 lives in public/_redirects
    // rather than Astro's `redirects` option, because Astro emits a meta-refresh
    // HTML file whose presence can shadow the host redirect rule.
    // `markdown` belongs at the top level. Nested inside mdx() it was silently
    // ignored, so code blocks fell back to Shiki's github-dark default and `wrap`
    // never applied. MDX inherits these settings from here.
    markdown: {
        shikiConfig: {
            theme: 'catppuccin-mocha',
            wrap: true
        }
    },
    integrations: [
        mdx(),
        // The manifest is linked from <MachineReadable />. The generated service
        // worker is not registered anywhere, which is deliberate: the site is fully
        // static and gains nothing from offline caching that Cloudflare's edge does
        // not already provide.
        AstroPWA({
            manifest: {
                name: 'Vidya',
                short_name: 'Vidya',
                description: 'Legacy system modernization and AI engineering for business and government.',
                start_url: '/',
                scope: '/',
                display: 'standalone',
                lang: 'en',
                theme_color: '#5A82B4',
                background_color: '#ffffff',
                icons: [
                    {src: '/favicon-192.png', sizes: '192x192', type: 'image/png'},
                    {src: '/favicon-512.png', sizes: '512x512', type: 'image/png'},
                    {src: '/favicon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable'}
                ]
            }
        }),
        // The sitemap is a hand-written endpoint (src/pages/sitemap.xml.ts) fed by the
        // catalog, so it lives at /sitemap.xml with lastmod, not at /sitemap-index.xml.
        cloudflareHeaders()
    ],
    prefetch: {
        prefetchAll: true
    },
    vite: {
      ssr: {
          // Example: Force a broken package to skip SSR processing, if needed
          external: ['prismjs']
      },
      build: {
          // Never inline a bundled <script> into the HTML. The Content-Security-Policy
          // in src/security/headers.ts allows scripts from /_astro only, so an inlined
          // script would be blocked. This also keeps small images as files.
          assetsInlineLimit: 0
      },

      plugins: [tailwindcss()],
    },
});
