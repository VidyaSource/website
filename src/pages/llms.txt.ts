import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://www.vidyasource.com';

export async function GET() {
    const llmsEntries = await getCollection('llms');
    const bySlug = new Map(llmsEntries.map(e => [e.slug, e]));
    const overview = bySlug.get('overview');
    const consulting = bySlug.get('consulting');
    const about = bySlug.get('about');

    const courses = (await getCollection('courses'))
        .sort((a, b) => a.data.title.localeCompare(b.data.title));

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

    if (consulting?.body) {
        lines.push(consulting.body.trim());
        lines.push('');
        lines.push(`See: ${SITE}/consulting`);
        lines.push('');
    }

    if (about?.body) {
        lines.push(about.body.trim());
        lines.push('');
        lines.push(`See: ${SITE}/about`);
        lines.push('');
    }

    lines.push('## Courses');
    for (const c of courses) {
        lines.push('');
        lines.push(`### ${c.data.title} (${c.data.category})`);
        lines.push(c.data.description);
        const lessons = Object.keys(c.data.syllabus ?? {});
        if (lessons.length) {
            lines.push('Syllabus:');
            for (const lesson of lessons) {
                lines.push(`- ${lesson}`);
            }
        }
        lines.push(`Link: ${SITE}/courses/${c.slug}`);
    }
    lines.push('');

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
