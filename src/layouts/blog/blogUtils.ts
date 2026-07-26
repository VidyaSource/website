import {type CollectionEntry, getCollection, getEntry, render} from "astro:content";

export const posts: CollectionEntry<'blog'>[] = await getCollection('blog', ({data}) => {
    return import.meta.env.PROD ? data.draft !== true : true;
}).then(c => c.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()));

export type BlogPost = (typeof blogPosts)[number]

export const blogPosts = await Promise.all(posts.map(async (p) => {
    const author = await getEntry(p.data.author);
    const keywords = [...(p.data.tags || []), ...(p.data.categories || [])]

    return {
        render: () => render(p),
        slug: p.id,
        ...p.data,
        keywords: keywords,
        author: author.data,
        openGraph: {
            article: {
                authors: [author.data.name],
                tags: keywords,
                publishedTime: p.data.date
            }
        },
        schema: {
            "@type": "BlogPosting",
            headline: p.data.title,
            datePublished: p.data.date,
            author: [
                {
                    "@type": "Person",
                    name: author.data.name,
                    jobTitle: author.data.title
                }
            ],
            description: p.data.description,
            image: p.data.image,
            keywords: keywords
        }
    };
}));

export const getRelatedPosts = (slug: string, keywords: string[], max = 3): BlogPost[] => {
    const keywordSet = new Set(keywords.map(k => k.toLowerCase()))
    return blogPosts
        .filter(p => p.slug !== slug)
        .map(p => ({
            post: p,
            score: p.keywords.filter(k => keywordSet.has(k.toLowerCase())).length
        }))
        .filter(({score}) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, max)
        .map(({post}) => post)
}