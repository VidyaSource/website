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
    'Google-Extended', 'Applebot-Extended', 'Bingbot',
    'Amazonbot', 'meta-externalagent', 'CCBot', 'Bytespider'
];

// The `*` group carries no Disallow at all. A crawler that is not named below must
// still read as fully allowed; a single Disallow line here would count against every
// unlisted agent. The 404 page is never linked, so it needs no rule.
//
// Content-Usage is the IETF AIPREF draft vocabulary for content-use preferences. The
// same values go out as an HTTP header from src/security/headers.ts.
const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    'Content-Usage: train-ai=y, search=y',
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
