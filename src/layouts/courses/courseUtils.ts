import {type CollectionEntry, getCollection, getEntry, render} from "astro:content";

const courseList: CollectionEntry<'courses'>[] = await getCollection('courses').then(c => c.sort((a, b) => b.data.title.localeCompare(a.data.title)));

export type Course = (typeof courses)[number]

export const courses = await Promise.all(courseList.map(async (c) => {
    const instructor = await getEntry(c.data.instructor);
    return {
        slug: c.id,
        render: () => render(c),
        badge: c.data.badge,
        ...c.data,
        instructor: {
            quote: c.data.quote,
            ...instructor.data
        },
        schema: {
            "@type": "Course",
            name: c.data.title,
            description: c.data.description,
            instructor: [
                {
                    "@type": "Person",
                    name: instructor.data.name,
                    jobTitle: instructor.data.title
                }
            ]
        }
    };
}));