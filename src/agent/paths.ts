// Path arithmetic for the machine-readable twins. Every HTML page `/x/y/` has a markdown
// twin at `/x/y.md` and a JSON-LD twin at `/x/y.json`; the homepage `/` has `/index.md`
// and `/index.json`. Pure functions, shared by the Astro endpoints, the <head> links,
// and the Pages Function that negotiates on Accept.

/** Canonical HTML path: always a leading and a trailing slash. */
export const canonicalPath = (path: string): string => {
    const withLeading = path.startsWith('/') ? path : `/${path}`;
    return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
};

/** The route stem a twin is generated under: `index`, `blog`, `blog/some-post`. */
export const twinStem = (path: string): string => {
    const trimmed = canonicalPath(path).slice(1, -1);
    return trimmed === '' ? 'index' : trimmed;
};

export const markdownPath = (path: string): string => `/${twinStem(path)}.md`;

export const jsonPath = (path: string): string => `/${twinStem(path)}.json`;

/** Inverse of `twinStem`: the canonical HTML path for a generated stem. */
export const pathFromStem = (stem: string): string => (stem === 'index' ? '/' : canonicalPath(stem));
