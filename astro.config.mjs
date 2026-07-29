import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import AstroPWA from '@vite-pwa/astro';
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://www.vidyasource.com',
    output: 'static',
    // Renamed 2026-07-29: /consulting/software-modernization became
    // /consulting/legacy-system-modernization. The 301 lives in public/_redirects
    // rather than Astro's `redirects` option, because Astro emits a meta-refresh
    // HTML file whose presence can shadow the host redirect rule.
    integrations: [
        mdx({
            markdown: {
                shikiConfig: {
                    theme: 'dracula',
                    wrap: true
                }
            }
        }),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
        AstroPWA(),
        sitemap()
    ],
    prefetch: {
        prefetchAll: true
    },
    vite: {
      ssr: {
          // Example: Force a broken package to skip SSR processing, if needed
          external: ['prismjs']
      },

      plugins: [tailwindcss()],
    },
});