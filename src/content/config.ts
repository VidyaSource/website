import {defineCollection, reference, z} from 'astro:content';


export const staffSchema =  z.object({
    title: z.string(),
    name: z.string(),
    profileUrl: z.string(),
    linkedIn: z.string(),
    image: z.string()
})

const staff = defineCollection({
    type: 'data',
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
})

const blog = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: blogSchema,
});


export const courseSchema =  z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    instructor: reference('staff'),
    description: z.string(),
    quote: z.string(),
    syllabus: z.record(z.string(), z.array(z.string()).nonempty())
})
const courses = defineCollection({
    type: 'content',
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
    type: 'content', // v2.5.0 and later
    schema: tutorialSchema,
});

export const collections = {
    blog, staff, courses, tutorials
};