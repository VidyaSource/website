import {defineCollection, reference, z} from 'astro:content';
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

export type PostType = z.infer<typeof blogSchema> & { render: () => any }
export type AuthorType = z.infer<typeof staffSchema>

const genericPostSchema = blogSchema.pick({
    title: true,
    description: true,
    image: true
});

export type GenericPostType = z.infer<typeof genericPostSchema> & {collection: string}
export type CourseType = Omit<z.infer<typeof courseSchema>, "quote"> & { render: () => any }
export type InstructorType = z.infer<typeof staffSchema> & { quote: string }

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

export type TutorialType = z.infer<typeof tutorialSchema>;

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
