import type {APIRoute} from 'astro';
import {catalog, catalogByKind, type MachinePage} from '../agent/catalog';
import {absolute, VIDYA_SUMMARY} from '../agent/site';

export const prerender = true;

// llms.txt follows llmstxt.org: an H1, a blockquote summary, short prose, then H2
// sections of `- [name](url): note` links, with `## Optional` last. It is the index an
// assistant reads first (the "Ask AI about Vidya" buttons point here), so it stays
// short and links out. Every page's full text is in llms-full.txt.
//
// Links target the markdown twin of each page. The HTML page is the same path without
// `.md`, and each note repeats it so an agent can hand a person a normal link.

const link = (p: MachinePage): string => `- [${p.title}](${p.markdownUrl}): ${p.note} (HTML: ${p.url})`;

const section = (title: string, pages: readonly MachinePage[], intro?: string): string[] =>
    pages.length === 0 ? [] : ['', `## ${title}`, '', ...(intro ? [intro, ''] : []), ...pages.map(link)];

const findPage = (path: string): MachinePage => {
    const found = catalog.find((p) => p.path === path);
    if (!found) throw new Error(`llms.txt expects a catalog page at ${path}`);
    return found;
};

export const GET: APIRoute = () => {
    const about = findPage('/about/');
    const contact = findPage('/contact/');
    const blog = findPage('/blog/');
    const articleCount = catalogByKind.article.length;

    const lines: string[] = [
        '# Vidya',
        '',
        `> ${VIDYA_SUMMARY}`,
        '',
        'Vidya is federally certified 8(a), Virginia SWaM, and minority-owned, holds a GSA Multiple ' +
        'Award Schedule contract, and has delivered for the U.S. State Department, Recreation.gov, ' +
        'HealthCare.gov, Neustar, and others since 2010. Its president, Neil Chaudhuri, is an inaugural ' +
        'Ambassador of the Agentic AI Foundation.',
        '',
        'Every link below is a Markdown page. The same path without `.md` is the HTML page for people. ' +
        `Each page also has a JSON-LD twin at the same path with \`.json\`. ${absolute('/llms-full.txt')} ` +
        'holds every page in one file, including all articles.',
        '',
        `To work with Vidya, use ${contact.url} or email info@vidyasource.com.`,
        ...section('Consulting', catalogByKind.service, 'Practice areas, each with its own FAQ.'),
        ...section('Case Studies', catalogByKind.caseStudy, 'Delivered engagements with named clients and measured results.'),
        ...section('Courses', catalogByKind.course, 'Instructor-led training. Where a course is purchasable, the note shows the price.'),
        ...section('Products', catalogByKind.product),
        ...section('Tutorials', catalogByKind.tutorial, 'Free video tutorials with source code.'),
        '',
        '## Company',
        '',
        link(about),
        link(contact),
        `- [Capability statement (PDF)](${absolute('/vidya-capability-statement.pdf')}): one-page summary for procurement.`,
        '',
        '## Optional',
        '',
        `- [All articles](${blog.markdownUrl}): ${articleCount} articles, newest first (HTML: ${blog.url}).`,
        `- [Full content](${absolute('/llms-full.txt')}): every page above plus every article, in one file.`,
        `- [Agent skill](${absolute('/skill.md')}): how an AI agent should evaluate Vidya.`,
        `- [Sitemap](${absolute('/sitemap.xml')}) and [RSS](${absolute('/rss.xml')}).`,
        ''
    ];

    return new Response(lines.join('\n'), {
        headers: {'Content-Type': 'text/plain; charset=utf-8'}
    });
};
