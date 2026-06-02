import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://www.vidyasource.com';

export async function GET() {
    const overviewEntries = await getCollection('llms');
    const overview = overviewEntries.find(e => e.slug === 'overview') ?? overviewEntries[0];

    const posts = (await getCollection('blog', ({ data }) => data.draft !== true))
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    const tutorials = (await getCollection('tutorials'))
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    const lines: string[] = [];
    lines.push(`# ${overview?.data.title ?? 'Vidya | AI & Cloud Consulting and Modernization'}`);
    lines.push('');
    if (overview?.body) {
        lines.push(overview.body.trim());
        lines.push('');
    }

    lines.push('## Recent Blog Posts');
    for (const p of posts.slice(0, 30)) {
        lines.push(`- ${p.data.title} — ${p.data.description} (${SITE}/blog/${p.slug})`);
    }
    lines.push('');

    lines.push('## Tutorials');
    for (const t of tutorials) {
        lines.push(`- ${t.data.title} — ${t.data.description} (${SITE}/tutorials/${t.slug})`);
    }
    lines.push('');

    return new Response(lines.join('\n'), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
