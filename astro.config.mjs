import {defineConfig, passthroughImageService} from 'astro/config';
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import AstroPWA from '@vite-pwa/astro';
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://www.vidyasource.com',
    output: 'static',
    image: {
        service: passthroughImageService()
    },
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