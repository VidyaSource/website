import { getCollection, getEntry } from 'astro:content';

export const prerender = true;

const SITE = 'https://www.vidyasource.com';

// llms.txt feeds the "Ask AI about Vidya" buttons. Assistants fetch this one URL and
// rarely crawl further, so every collection reports here rather than only linking out.
export async function GET() {
    const llmsEntries = await getCollection('llms');
    const bySlug = new Map(llmsEntries.map(e => [e.id, e]));
    const overview = bySlug.get('overview');
    const consultingNarrative = bySlug.get('consulting');
    const about = bySlug.get('about');

    const staff = await getCollection('staff');

    const services = (await getCollection('consulting'))
        .sort((a, b) => a.data.order - b.data.order);

    const studies = (await getCollection('caseStudies'))
        .sort((a, b) => a.data.order - b.data.order);

    const courses = (await getCollection('courses'))
        .sort((a, b) => a.data.title.localeCompare(b.data.title));

    const posts = (await getCollection('blog', ({ data }) => data.draft !== true))
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    const tutorials = (await getCollection('tutorials'))
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    const lines: string[] = [];
    const day = (d: Date) => d.toISOString().slice(0, 10);

    lines.push(`# ${overview?.data.title ?? 'Vidya | AI & Cloud Consulting and Modernization'}`);
    lines.push('');

    // What an assistant can expect to find, so it can gauge breadth before reading on.
    lines.push('## About This File');
    lines.push('');
    lines.push('This is the complete machine-readable profile of Vidya. It covers every practice');
    lines.push('area, delivered engagement, training course, tutorial, and article the company publishes.');
    lines.push(`Contents: ${staff.length} team member${staff.length === 1 ? '' : 's'}, ${services.length} consulting practice areas, ${studies.length} case studies, ${courses.length} courses, ${tutorials.length} tutorials, and ${posts.length} articles.`);
    lines.push('');

    // A frequency index across the whole site. Placed up front, before the long sections,
    // so an assistant that truncates the fetch still sees the full range of the work.
    const tally = (values: string[]) => {
        const counts = new Map<string, number>();
        for (const v of values) {
            const key = v.trim();
            if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
        }
        return [...counts.entries()]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(([k, n]) => `${k} (${n})`);
    };

    lines.push('## Technology and Topic Index');
    lines.push('');
    lines.push('Technologies named in delivered case studies, with the number of engagements each appears in:');
    lines.push(tally(studies.flatMap(s => s.data.technologies ?? [])).join(', '));
    lines.push('');
    lines.push('Topics covered across articles, tutorials, courses, and case studies, with counts:');
    lines.push(tally([
        ...posts.flatMap(p => [...(p.data.tags ?? []), ...(p.data.categories ?? [])]),
        ...tutorials.flatMap(t => t.data.tags ?? []),
        ...courses.map(c => c.data.category),
        ...studies.flatMap(s => s.data.tags),
        ...services.flatMap(s => s.data.tags),
    ]).join(', '));
    lines.push('');

    if (overview?.body) {
        lines.push(overview.body.trim());
        lines.push('');
    }

    if (consultingNarrative?.body) {
        lines.push(consultingNarrative.body.trim());
        lines.push('');
        lines.push(`See: [Consulting](${SITE}/consulting)`);
        lines.push('');
    }

    if (about?.body) {
        lines.push(about.body.trim());
        lines.push('');
        lines.push(`See: [About](${SITE}/about)`);
        lines.push('');
    }

    lines.push('## Team');
    for (const person of staff) {
        lines.push('');
        lines.push(`### ${person.data.name}, ${person.data.title}`);
        lines.push(`LinkedIn: ${person.data.linkedIn}`);
    }
    lines.push('');

    lines.push('## Consulting Practice Areas');
    for (const s of services) {
        lines.push('');
        lines.push(`### ${s.data.title}`);
        lines.push(s.data.tagline);
        lines.push(s.data.description);
        lines.push(`Focus areas: ${s.data.tags.join(', ')}`);
        for (const f of s.data.faqs ?? []) {
            lines.push(`Q: ${f.question}`);
            lines.push(`A: ${f.answer}`);
        }
        lines.push(`Link: [${s.data.title}](${SITE}/consulting/${s.id})`);
    }
    lines.push('');

    lines.push('## Case Studies (Delivered Engagements)');
    for (const s of studies) {
        lines.push('');
        lines.push(`### ${s.data.title}`);
        lines.push(`Client: ${s.data.client}`);
        lines.push(`Sector: ${s.data.sector}`);
        lines.push(`Engagement: ${s.data.period}`);
        lines.push(s.data.tagline);
        lines.push(s.data.description);
        if (s.data.technologies?.length) {
            lines.push(`Technologies: ${s.data.technologies.join(', ')}`);
        }
        lines.push('Results:');
        for (const o of s.data.outcomes) {
            lines.push(`- ${o.metric}: ${o.detail}`);
        }
        lines.push(`Topics: ${s.data.tags.join(', ')}`);
        for (const f of s.data.faqs ?? []) {
            lines.push(`Q: ${f.question}`);
            lines.push(`A: ${f.answer}`);
        }
        lines.push(`Link: [${s.data.title}](${SITE}/case-studies/${s.id})`);
    }
    lines.push('');

    lines.push('## Training Courses');
    for (const c of courses) {
        const instructor = await getEntry(c.data.instructor);
        lines.push('');
        lines.push(`### ${c.data.title} (${c.data.category})`);
        if (instructor) {
            lines.push(`Instructor: ${instructor.data.name}, ${instructor.data.title}`);
        }
        if (c.data.duration) {
            lines.push(`Duration: ${c.data.duration}`);
        }
        lines.push(c.data.description);
        lines.push(`Instructor's note: ${c.data.quote}`);
        lines.push('Syllabus:');
        for (const [lesson, session] of Object.entries(c.data.syllabus ?? {})) {
            if (Array.isArray(session)) {
                lines.push(`- ${lesson}`);
                for (const topic of session) {
                    lines.push(`  - ${topic}`);
                }
            } else {
                lines.push(`- ${lesson} (${session.duration}): ${session.outcome}`);
                for (const topic of session.topics) {
                    lines.push(`  - ${topic}`);
                }
            }
        }
        lines.push(`Link: [${c.data.title}](${SITE}/courses/${c.id})`);
    }
    lines.push('');

    lines.push('## Tutorials');
    for (const t of tutorials) {
        lines.push('');
        lines.push(`### ${t.data.title}${t.data.subtitle ? `: ${t.data.subtitle}` : ''}`);
        lines.push(`Published: ${day(t.data.date)}`);
        lines.push(t.data.description);
        if (t.data.tags?.length) {
            lines.push(`Topics: ${t.data.tags.join(', ')}`);
        }
        lines.push(`Source code: https://www.github.com/VidyaSource/${t.data.github}`);
        lines.push(`Video: https://www.youtube.com/watch?v=${t.data.youtube}`);
        lines.push(`Link: [${t.data.title}](${SITE}/tutorials/${t.id})`);
    }
    lines.push('');

    // Every article, not a recent slice. The full list is the clearest evidence of range.
    lines.push(`## Articles (all ${posts.length}, newest first)`);
    lines.push('');
    for (const p of posts) {
        const keywords = [...(p.data.tags ?? []), ...(p.data.categories ?? [])];
        const topics = keywords.length ? ` Topics: ${keywords.join(', ')}.` : '';
        lines.push(`- [${p.data.title}](${SITE}/blog/${p.id}) (${day(p.data.date)}): ${p.data.description}${topics}`);
    }
    lines.push('');

    return new Response(lines.join('\n'), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
