import type {APIRoute} from 'astro';
import {catalog, catalogByKind} from '../agent/catalog';
import {absolute, VIDYA_SUMMARY} from '../agent/site';

export const prerender = true;

// llms-full.txt is the whole site in one fetch: every markdown twin, in catalog order,
// preceded by a topic index. An agent that can read only one file reads this one.

const tally = (values: readonly string[]): string => {
    const counts = new Map<string, number>();
    for (const v of values) {
        const key = v.trim();
        if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return [...counts.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([k, n]) => `${k} (${n})`)
        .join(', ');
};

export const GET: APIRoute = () => {
    const {service, caseStudy, course, product, tutorial, article} = catalogByKind;
    const lines: string[] = [
        '# Vidya: complete content for language models',
        '',
        `> ${VIDYA_SUMMARY}`,
        '',
        `This file concatenates every page on ${absolute('/')}. The short index is ${absolute('/llms.txt')}. ` +
        'Each page below starts with front matter that names its canonical HTML URL.',
        '',
        `Contents: ${service.length} consulting practice areas, ${caseStudy.length} case studies, ` +
        `${course.length} courses, ${product.length} products, ${tutorial.length} tutorials, and ${article.length} articles.`,
        '',
        '## Topic index',
        '',
        `Technologies named in case studies, with engagement counts: ${tally(caseStudy.flatMap((s) => s.tags))}`,
        '',
        `Topics across everything, with counts: ${tally(catalog.flatMap((p) => p.tags))}`,
        ''
    ];

    for (const p of catalog) {
        lines.push('', '', '<!-- ' + p.url + ' -->', '', p.markdown);
    }

    return new Response(lines.join('\n'), {
        headers: {'Content-Type': 'text/plain; charset=utf-8'}
    });
};
