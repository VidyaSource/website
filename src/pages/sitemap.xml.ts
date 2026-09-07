import type {APIRoute} from 'astro';
import {catalog} from '../agent/catalog';
import {isoDay} from '../agent/markdown';

export const prerender = true;

// One sitemap at the path every crawler probes first. Canonical HTML URLs only; the
// markdown and JSON twins are advertised from llms.txt and <link rel="alternate">.
// `lastmod` is the publish date where content has one and is omitted otherwise, which
// the protocol allows and crawlers prefer to a fabricated build timestamp.

const escape = (value: string): string =>
    value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = () => {
    const urls = catalog.map((p) => [
        '  <url>',
        `    <loc>${escape(p.url)}</loc>`,
        ...(p.published ? [`    <lastmod>${isoDay(p.published)}</lastmod>`] : []),
        '  </url>'
    ].join('\n'));

    const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls,
        '</urlset>',
        ''
    ].join('\n');

    return new Response(xml, {
        headers: {'Content-Type': 'application/xml; charset=utf-8'}
    });
};
