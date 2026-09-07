import type {APIRoute, GetStaticPaths} from 'astro';
import {catalog} from '../agent/catalog';
import {twinStem} from '../agent/paths';

export const prerender = true;

// The markdown twin of every page: `/blog/post/` -> `/blog/post.md`, `/` -> `/index.md`.
// Served as a static file, so it costs no function invocation, and labelled
// text/markdown by the Cloudflare `_headers` rule for `/*.md`.
export const getStaticPaths: GetStaticPaths = () =>
    catalog.map((p) => ({params: {stem: twinStem(p.path)}, props: {markdown: p.markdown, canonical: p.url}}));

export const GET: APIRoute<{markdown: string; canonical: string}> = ({props}) =>
    new Response(props.markdown, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Link': `<${props.canonical}>; rel="canonical"`
        }
    });
