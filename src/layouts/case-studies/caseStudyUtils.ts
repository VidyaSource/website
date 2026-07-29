import {type CollectionEntry, getCollection, render} from "astro:content";

// Blog posts the case studies replace. Every case study page filters these out of
// its related-posts list so no reader lands on a post slated for removal.
export const supersededPosts: string[] = [
    'modernizing-online-passport-renewal-vidya-success-at-the-state-department',
    'welcoming-healthcare-gov',
    'welcoming-trss',
    'welcoming-neustar',
    'welcoming-ninaday',
    'vidya-talks-modernizing-tech-hiring-federal-government-white-house'
]

const list: CollectionEntry<'caseStudies'>[] = await getCollection('caseStudies')
    .then(c => c.sort((a, b) => a.data.order - b.data.order));

export type CaseStudy = (typeof caseStudies)[number]

export const caseStudies = await Promise.all(list.map(async (s) => {
    return {
        slug: s.id,
        render: () => render(s),
        ...s.data,
        schema: {
            "@type": "Article",
            headline: s.data.title,
            name: s.data.title,
            description: s.data.description,
            about: {
                "@type": "Organization",
                name: s.data.client
            },
            keywords: [...s.data.tags, ...(s.data.technologies ?? [])].join(', '),
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
