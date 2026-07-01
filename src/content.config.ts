import {defineCollection, reference} from 'astro:content';
import {z} from 'astro:schema';
import {glob} from 'astro/loaders';


export const staffSchema =  z.object({
    title: z.string(),
    name: z.string(),
    profileUrl: z.string(),
    linkedIn: z.string(),
    image: z.string()
})

const staff = defineCollection({
    loader: glob({pattern: '**/*.json', base: './src/content/staff'}),
    schema: staffSchema
});

export const blogSchema =  z.object({
    author: reference('staff'),
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional().or(z.null()),
    image: z.string(),
    categories: z.array(z.string()).optional(),
    youtube: z.string().optional(),
    draft: z.boolean().optional()
})

const blog = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/blog'}),
    schema: blogSchema,
});


export const sessionSchema = z.union([
    z.array(z.string()).nonempty(),
    z.object({
        duration: z.string(),
        outcome: z.string(),
        topics: z.array(z.string()).nonempty()
    })
])

export const courseSchema =  z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    badge: z.string().optional(),
    instructor: reference('staff'),
    description: z.string(),
    quote: z.string(),
    duration: z.string().optional(),
    syllabus: z.record(z.string(), sessionSchema)
})
const courses = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/courses'}),
    schema: courseSchema
});

// The generic card (GenericCard.astro) only needs these three fields plus the
// collection name. Declared explicitly to avoid z.infer, whose type namespace
// isn't re-exported through astro:schema.
export type GenericPostType = {
    slug: string
    title: string
    description: string
    image: string
    collection: string
}

export const tutorialSchema =  z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    description: z.string(),
    github: z.string(),
    image: z.string(),
    youtube: z.string(),
    tags: z.array(z.string()).optional().or(z.null()),
});

const tutorials = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/tutorials'}),
    schema: tutorialSchema,
});

export const llmsSchema = z.object({
    title: z.string(),
});

const llms = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/content/llms'}),
    schema: llmsSchema,
});

export const collections = {
    blog, staff, courses, tutorials, llms
};
