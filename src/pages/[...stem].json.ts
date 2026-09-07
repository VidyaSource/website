import type {APIRoute, GetStaticPaths} from 'astro';
import {catalog} from '../agent/catalog';
import {twinStem} from '../agent/paths';

export const prerender = true;

// The JSON-LD twin of every page: `/blog/post/` -> `/blog/post.json`. Same schema.org
// vocabulary the HTML pages use, so a client that asks for JSON gets a self-describing
// document rather than a bespoke shape.
export const getStaticPaths: GetStaticPaths = () =>
    catalog.map((p) => ({params: {stem: twinStem(p.path)}, props: {json: JSON.stringify(p.jsonLd, null, 2)}}));

export const GET: APIRoute<{json: string}> = ({props}) =>
    new Response(props.json, {
        headers: {'Content-Type': 'application/ld+json; charset=utf-8'}
    });
