# vidyasource.com: Agent Guide

This site welcomes AI agents. Everything on it is public and needs no authentication.

Vidya is a certified small business in Northern Virginia that modernizes legacy
systems, builds enterprise AI, and designs cloud and data architecture for commercial
companies and federal agencies. It documents delivered engagements in case studies and
publishes courses, tutorials, and articles.

## What the site offers agents

- `https://www.vidyasource.com/llms.txt`: the index. One line per consulting practice
  area, case study, course, tutorial, and company page, each with a link.
- `https://www.vidyasource.com/llms-full.txt`: every page in one Markdown file,
  including all articles.
- `https://www.vidyasource.com/skill.md`: an Agent Skill (agentskills.io) that says how
  to evaluate Vidya for a consulting engagement, a course, or a speaking request.
- `https://www.vidyasource.com/sitemap.xml` and `https://www.vidyasource.com/rss.xml`.

## How to read any page

Every HTML page `https://www.vidyasource.com/x/y/` has two twins:

- `https://www.vidyasource.com/x/y.md`: the page as Markdown.
- `https://www.vidyasource.com/x/y.json`: the page as schema.org JSON-LD.

The homepage twins are `/index.md` and `/index.json`.

You can also negotiate on the canonical URL. Send `Accept: text/markdown`,
`Accept: text/plain`, or `Accept: application/json` to any page and the server returns
the matching twin in place, with `Vary: Accept`. A missing page returns
`application/problem+json` (RFC 9457) when you asked for JSON.

## How to connect

- MCP: not offered yet.
- API: none beyond the read surfaces above. The contact form at
  `https://www.vidyasource.com/contact/` is protected by Cloudflare Turnstile and
  needs a browser.
- To reach Vidya, email `info@vidyasource.com`.

## Etiquette

- Identify your agent with a descriptive `User-Agent`.
- Prefer `llms.txt` and the `.md` twins over scraping HTML; they are smaller and
  complete.
- Content-use preferences are published as `Content-Usage: train-ai=y, search=y` in
  `robots.txt` and as an HTTP header.
