import {type CollectionEntry, getCollection} from "astro:content";
import {type TutorialType } from "../../content/config.ts";
import vidyaSchema from '../../components/vidyaSchema.json'

const tutorialList: CollectionEntry<TutorialType>[] = await getCollection('tutorials').then(c => c.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()));

export const tutorials = await Promise.all(tutorialList.map(async (t) => {
    return {
        render: t.render,
        slug: t.slug,
        ...t.data,
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