import {type CollectionEntry, getCollection, getEntry} from "astro:content";
import {type PostType} from "../../content/config.ts";

export const posts: CollectionEntry<PostType>[] = await getCollection('blog').then(c => c.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()));

export const blogPosts = await Promise.all(posts.map(async (p) => {
    const author = await getEntry(p.data.author);
    const keywords = [...(p.data.tags || []), ...(p.data.categories || [])]

    return {
        render: p.render,
        slug: p.slug,
        ...p.data,
        keywords: keywords,
        author: author.data,
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