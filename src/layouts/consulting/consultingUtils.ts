import {type CollectionEntry, getCollection, render} from "astro:content";

const list: CollectionEntry<'consulting'>[] = await getCollection('consulting')
    .then(c => c.sort((a, b) => a.data.order - b.data.order));

export type ConsultingService = (typeof services)[number]

export const services = await Promise.all(list.map(async (s) => {
    return {
        slug: s.id,
        render: () => render(s),
        ...s.data,
        schema: {
            "@type": "Service",
            serviceType: s.data.title,
            name: s.data.title,
            description: s.data.description,
            ...(s.data.faqs && s.data.faqs.length > 0 ? {
                mainEntity: s.data.faqs.map(f => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: f.answer
                    }
                }))
            } : {})
        }
    };
}));
