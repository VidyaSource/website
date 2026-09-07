// The canonical origin comes from `site` in astro.config.mjs, never from a literal here.
// Every machine-readable surface (twins, llms.txt, sitemap, RSS) builds absolute URLs
// from this one value so a host change is a one-line config edit.
const configured = import.meta.env.SITE;

if (!configured) {
    throw new Error('astro.config.mjs must set `site`; machine-readable outputs need an absolute origin.');
}

export const SITE: string = new URL(configured).origin;

export const absolute = (path: string): string => new URL(path, SITE).href;

/** Two sentences that state what Vidya is, for whom, and where. The homepage hero,
 *  llms.txt, and the markdown twins all render this same text, so they cannot drift. */
export const VIDYA_SUMMARY =
    'Vidya is a certified small business in Northern Virginia that modernizes legacy systems, ' +
    'builds enterprise AI, and designs cloud and data architecture for commercial companies and ' +
    'federal agencies. Vidya documents its delivered engagements in case studies and publishes ' +
    'courses, tutorials, and articles for engineers and the people who lead them.';

export const VIDYA_HEADLINE = 'Legacy system modernization and AI engineering for business and government.';
