import type {AstroIntegration} from 'astro';
import {writeFile} from 'node:fs/promises';
import {renderHeadersFile} from './headers';

// Writes dist/_headers from the typed rules in headers.ts at the end of every build,
// so the static-asset headers and the middleware headers can never drift apart.
export const cloudflareHeaders = (): AstroIntegration => ({
    name: 'vidya:cloudflare-headers',
    hooks: {
        'astro:build:done': async ({dir, logger}) => {
            const target = new URL('_headers', dir);
            await writeFile(target, renderHeadersFile(), 'utf8');
            logger.info(`wrote ${target.pathname}`);
        }
    }
});
