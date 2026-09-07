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

// Commerce vocabulary shared by courses and products. Mirrors schema.org Offer so the
// same front matter feeds JSON-LD, the markdown and JSON twins, and llms.txt without
// translation. Purchase URLs are content, not code: they live in front matter.
export const currencyCodes = ['USD'] as const;
export const itemAvailabilities = [
    'InStock', 'OutOfStock', 'PreOrder', 'PreSale', 'LimitedAvailability',
    'OnlineOnly', 'SoldOut', 'Discontinued', 'BackOrder'
] as const;
export const offerCategories = ['Paid', 'Free', 'Subscription'] as const;

export const offerSchema = z.object({
    name: z.string().optional(),
    price: z.number().nonnegative(),
    priceCurrency: z.enum(currencyCodes),
    url: z.string().url(),
    availability: z.enum(itemAvailabilities).default('InStock'),
    category: z.enum(offerCategories).optional(),
    validFrom: z.date().optional(),
    validThrough: z.date().optional()
})

export const courseModes = ['online', 'onsite', 'blended'] as const;

export const courseSchema =  z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    badge: z.string().optional(),
    instructor: reference('staff'),
    description: z.string(),
    quote: z.string(),
    duration: z.string().optional(),
    syllabus: z.record(z.string(), sessionSchema),
    // How to buy. Empty until the course is purchasable; then every machine-readable
    // surface (JSON-LD, twins, llms.txt) shows price, availability, and the purchase link.
    offers: z.array(offerSchema).optional(),
    courseMode: z.enum(courseModes).optional(),
    // ISO 8601 duration (for example PT8H) for schema.org courseWorkload. `duration`
    // above stays the human sentence.
    workload: z.string().optional()
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

export const consultingSchema = z.object({
    title: z.string(),
    seoTitle: z.string(),
    tagline: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    faqs: z.array(z.object({
        question: z.string(),
        answer: z.string()
    })).optional()
})

const consulting = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/consulting'}),
    schema: consultingSchema,
});

export const caseStudySchema = z.object({
    title: z.string(),
    seoTitle: z.string(),
    client: z.string(),
    sector: z.string(),
    period: z.string(),
    tagline: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    // Engineering engagements only. Technologies render as chips and feed the Article
    // schema keywords. Omit the field entirely on advisory, culture, and content
    // engagements, where naming a stack would misrepresent the work.
    technologies: z.array(z.string()).nonempty().optional(),
    // Qualitative or quantified. `metric` is the headline, `detail` the substantiation.
    outcomes: z.array(z.object({
        metric: z.string(),
        detail: z.string()
    })).nonempty(),
    // Blog slugs this case study supersedes. Plain strings rather than
    // reference('blog') so deleting the post does not break the build.
    excludedPosts: z.array(z.string()).optional(),
    // Pins the related-posts list to these blog slugs, in order, instead of
    // matching on tags. Same plain-string rationale as excludedPosts.
    relatedPosts: z.array(z.string()).optional(),
    faqs: z.array(z.object({
        question: z.string(),
        answer: z.string()
    })).optional()
})

const caseStudies = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/case-studies'}),
    schema: caseStudySchema,
});

// Products for sale (digital goods, templates, packaged services). The directory is
// empty until the first product ships; the catalog, sitemap, twins, and llms.txt already
// read it, so a new product is one file.
export const productSchema = z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    sku: z.string().optional(),
    tags: z.array(z.string()),
    order: z.number(),
    offers: z.array(offerSchema).nonempty(),
    faqs: z.array(z.object({
        question: z.string(),
        answer: z.string()
    })).optional()
})

const products = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/products'}),
    schema: productSchema,
});

export const collections = {
    blog, staff, courses, tutorials, llms, consulting, caseStudies, products
};
