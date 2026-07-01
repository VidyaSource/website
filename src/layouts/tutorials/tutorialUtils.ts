import {type CollectionEntry, getCollection, render} from "astro:content";
import vidyaSchema from '../../components/vidyaSchema.json'

const tutorialList: CollectionEntry<'tutorials'>[] = await getCollection('tutorials').then(c => c.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()));

export const tutorials = await Promise.all(tutorialList.map(async (t) => {
    return {
        render: () => render(t),
        slug: t.id,
        ...t.data,
        openGraph: {
            optional: {
                video: `https://www.youtube.com/watch?v=${t.data.youtube}`
            }
        },
        schema: {
            "@type": "VideoObject",
            name: t.data.title,
            description: t.data.description,
            publisher: vidyaSchema,
            uploadDate: t.data.date,
            embedUrl: `https://www.youtube.com/watch?v=${t.data.youtube}`,
        }
    };
}));