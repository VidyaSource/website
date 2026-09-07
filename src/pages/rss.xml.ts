import rss from '@astrojs/rss';
import type {APIRoute} from 'astro';
import {catalogByKind} from '../agent/catalog';
import {SITE, VIDYA_SUMMARY} from '../agent/site';

export const prerender = true;

// RSS 2.0 over the blog. Feed readers and the AI search engines that still poll feeds
// get new articles without crawling.
export const GET: APIRoute = () =>
    rss({
        title: 'Vidya Blog',
        description: VIDYA_SUMMARY,
        site: SITE,
        items: catalogByKind.article.map((p) => ({
            title: p.title,
            description: p.description,
            link: p.path,
            pubDate: p.published,
            categories: [...p.tags]
        })),
        customData: '<language>en-us</language>'
    });
