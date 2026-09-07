import type {APIRoute} from 'astro';
import {absolute} from '../agent/site';

export const prerender = true;

// Every crawler and AI agent is welcome. The named AI user agents are listed so the
// intent is explicit to scanners and to people reading the file. Google is asked not to
// index the machine-readable twins, which would otherwise compete with the HTML pages
// as duplicate content; agents still read them.
const aiAgents = [
    'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
    'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
    'PerplexityBot', 'Perplexity-User',
    'Google-Extended', 'Applebot-Extended', 'Bingbot'
];

const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /404.html',
    '',
    ...aiAgents.map((agent) => `User-agent: ${agent}`),
    'Allow: /',
    '',
    'User-agent: Googlebot',
    'Disallow: /llms.txt',
    'Disallow: /llms-full.txt',
    'Disallow: /*.md$',
    'Disallow: /*.json$',
    '',
    `Sitemap: ${absolute('/sitemap.xml')}`,
    ''
].join('\n');

export const GET: APIRoute = () =>
    new Response(robotsTxt, {
        headers: {'Content-Type': 'text/plain; charset=utf-8'}
    });
