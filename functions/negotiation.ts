// RFC 9110 §12.5.1 proactive negotiation on the Accept header, reduced to the four
// representations this site can serve. Pure functions with no I/O so the rules are
// testable and the middleware stays small.

export type Variant = 'markdown' | 'plain' | 'json' | 'html';

interface MediaRange {
    readonly type: string;
    readonly subtype: string;
    readonly q: number;
    /** Position in the header; earlier wins a tie, per the client's stated preference. */
    readonly order: number;
}

interface Candidate {
    readonly variant: Variant;
    readonly mediaTypes: readonly string[];
    /** Tie-break among equal q and specificity: the site's own default order. */
    readonly rank: number;
}

const candidates: readonly Candidate[] = [
    {variant: 'html', mediaTypes: ['text/html'], rank: 0},
    {variant: 'markdown', mediaTypes: ['text/markdown'], rank: 1},
    {variant: 'json', mediaTypes: ['application/json', 'application/ld+json'], rank: 2},
    {variant: 'plain', mediaTypes: ['text/plain'], rank: 3}
];

const parseQ = (params: readonly string[]): number => {
    for (const p of params) {
        const [name, value] = p.split('=').map((s) => s.trim());
        if (name?.toLowerCase() === 'q' && value !== undefined) {
            const q = Number.parseFloat(value);
            return Number.isFinite(q) ? Math.min(1, Math.max(0, q)) : 0;
        }
    }
    return 1;
};

export const parseAccept = (header: string | null): readonly MediaRange[] =>
    (header ?? '')
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
        .flatMap((entry, order) => {
            const [range = '', ...params] = entry.split(';');
            const [type = '', subtype = ''] = range.trim().toLowerCase().split('/');
            return type && subtype ? [{type, subtype, q: parseQ(params), order}] : [];
        });

interface Match {
    readonly q: number;
    readonly specificity: number;
    readonly order: number;
}

const match = (ranges: readonly MediaRange[], mediaType: string): Match | undefined => {
    const [type, subtype] = mediaType.split('/');
    let best: Match | undefined;
    for (const r of ranges) {
        const specificity =
            r.type === type && r.subtype === subtype ? 3
                : r.type === type && r.subtype === '*' ? 2
                    : r.type === '*' && r.subtype === '*' ? 1
                        : 0;
        if (specificity === 0) continue;
        if (!best || specificity > best.specificity) {
            best = {q: r.q, specificity, order: r.order};
        }
    }
    return best;
};

/**
 * Picks the representation the client prefers. Highest q wins; then the more specific
 * media range; then the client's listed order; then the site default (HTML). With no
 * Accept header, or only wildcards, the answer is HTML.
 */
export const negotiate = (header: string | null): Variant => {
    const ranges = parseAccept(header);
    if (ranges.length === 0) return 'html';

    const scored = candidates.flatMap((c) => {
        const matches = c.mediaTypes.flatMap((m) => {
            const found = match(ranges, m);
            return found ? [found] : [];
        });
        if (matches.length === 0) return [];
        const best = matches.reduce((a, b) =>
            b.q > a.q || (b.q === a.q && (b.specificity > a.specificity || (b.specificity === a.specificity && b.order < a.order))) ? b : a);
        return [{candidate: c, ...best}];
    }).filter((s) => s.q > 0);

    if (scored.length === 0) return 'html';

    scored.sort((a, b) =>
        b.q - a.q
        || b.specificity - a.specificity
        || a.order - b.order
        || a.candidate.rank - b.candidate.rank);

    return scored[0]?.candidate.variant ?? 'html';
};

export const contentTypeFor = (variant: Exclude<Variant, 'html'>): string =>
    variant === 'markdown' ? 'text/markdown; charset=utf-8'
        : variant === 'plain' ? 'text/plain; charset=utf-8'
            : 'application/json; charset=utf-8';
