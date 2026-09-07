// One typed model of every page an agent can read. llms.txt, llms-full.txt, the
// sitemap, the RSS feed, and the markdown/JSON-LD twins all consume this catalog, so a
// new collection (products, say) is one loader here and appears everywhere at once.
//
// The catalog is built once per build with top-level await, the same pattern the
// layout utils use.
import {getCollection, getEntry, type CollectionEntry} from 'astro:content';
import type {
    AboutPage,
    Article,
    Blog,
    BlogPosting,
    CollectionPage,
    ContactPage,
    Course,
    CourseInstance,
    Offer as SchemaOffer,
    Person,
    Product,
    Question,
    Service,
    Thing,
    VideoObject,
    WebPage,
    WithContext
} from 'schema-dts';
import vidyaSchema from '../components/vidyaSchema.json';
import {absolute, SITE, VIDYA_SUMMARY} from './site';
import {canonicalPath, jsonPath, markdownPath} from './paths';
import {bodyToMarkdown, firstSentence, isoDay, yamlString} from './markdown';

export type Kind = 'page' | 'service' | 'caseStudy' | 'course' | 'product' | 'tutorial' | 'article';

/** The schema.org Offer shape declared in content.config.ts, reused verbatim. */
export type Offer = NonNullable<CollectionEntry<'courses'>['data']['offers']>[number];

export interface MachinePage {
    readonly kind: Kind;
    /** Canonical HTML path with leading and trailing slash, e.g. `/blog/post/`. */
    readonly path: string;
    readonly url: string;
    readonly markdownUrl: string;
    readonly jsonUrl: string;
    readonly title: string;
    readonly description: string;
    /** One line for llms.txt link notes. */
    readonly note: string;
    readonly published?: Date;
    readonly tags: readonly string[];
    readonly image?: string;
    readonly offers: readonly Offer[];
    /** The complete markdown twin, front matter included. */
    readonly markdown: string;
    /** The complete JSON-LD twin. */
    readonly jsonLd: WithContext<Thing>;
}

const ORGANIZATION_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const organizationRef = {'@id': ORGANIZATION_ID} as const;
const websiteRef = {'@id': WEBSITE_ID} as const;

interface OrganizationNode {
    readonly '@type': 'Organization';
    readonly email: string;
    readonly telephone: string;
    readonly address: {
        readonly streetAddress: string;
        readonly addressLocality: string;
        readonly addressRegion: string;
        readonly postalCode: string;
    };
}

const isOrganizationNode = (node: unknown): node is OrganizationNode =>
    typeof node === 'object' && node !== null && (node as {'@type'?: unknown})['@type'] === 'Organization';

const organization = (vidyaSchema['@graph'] as readonly unknown[]).find(isOrganizationNode);

if (!organization) {
    throw new Error('vidyaSchema.json must contain an Organization node.');
}

const person = (staff: CollectionEntry<'staff'>['data']): Person => ({
    '@type': 'Person',
    name: staff.name,
    jobTitle: staff.title,
    url: staff.profileUrl,
    sameAs: staff.linkedIn
});

const toSchemaOffer = (offer: Offer): SchemaOffer => ({
    '@type': 'Offer',
    ...(offer.name ? {name: offer.name} : {}),
    price: offer.price,
    priceCurrency: offer.priceCurrency,
    url: offer.url,
    availability: offer.availability,
    ...(offer.category ? {category: offer.category} : {}),
    ...(offer.validFrom ? {validFrom: offer.validFrom.toISOString()} : {}),
    ...(offer.validThrough ? {validThrough: offer.validThrough.toISOString()} : {})
});

const faqQuestions = (faqs: ReadonlyArray<{question: string; answer: string}> | undefined): Question[] =>
    (faqs ?? []).map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {'@type': 'Answer', text: f.answer}
    }));

const money = (offer: Offer): string =>
    offer.price === 0 ? 'Free' : `${offer.price.toLocaleString('en-US', {style: 'currency', currency: offer.priceCurrency})} ${offer.priceCurrency}`;

const offersMarkdown = (offers: readonly Offer[]): string[] =>
    offers.length === 0
        ? []
        : [
            '',
            '## How to buy',
            '',
            ...offers.map((o) =>
                `- ${o.name ? `${o.name}: ` : ''}${money(o)}, ${o.availability}. [Buy](${o.url})`)
        ];

const faqsMarkdown = (faqs: ReadonlyArray<{question: string; answer: string}> | undefined): string[] =>
    !faqs || faqs.length === 0
        ? []
        : ['', '## Frequently asked questions', '', ...faqs.flatMap((f) => [`**${f.question}**`, '', f.answer, ''])];

interface TwinInput {
    readonly path: string;
    readonly kind: Kind;
    readonly title: string;
    readonly description: string;
    readonly published?: Date;
    readonly author?: string;
    readonly tags?: readonly string[];
    readonly image?: string;
    /** Lines that follow the standard header, before the body. */
    readonly facts?: readonly string[];
    readonly sections?: readonly string[];
    readonly body?: string;
}

/** Renders a twin: YAML front matter, H1, blockquote description, fact list, body, footer. */
const twin = (input: TwinInput): string => {
    const url = absolute(input.path);
    const frontMatter: ReadonlyArray<readonly [string, string | undefined]> = [
        ['title', yamlString(input.title)],
        ['description', yamlString(input.description)],
        ['canonical', url],
        ['type', input.kind],
        ['published', input.published ? isoDay(input.published) : undefined],
        ['author', input.author ? yamlString(input.author) : undefined],
        ['tags', input.tags && input.tags.length > 0 ? `[${input.tags.map(yamlString).join(', ')}]` : undefined],
        ['image', input.image]
    ];
    const lines: string[] = [
        '---',
        ...frontMatter.filter(([, v]) => v !== undefined).map(([k, v]) => `${k}: ${v}`),
        '---',
        '',
        `# ${input.title}`,
        '',
        `> ${input.description}`,
        '',
        `- Canonical page: ${url}`,
        `- Structured data (JSON-LD): ${absolute(jsonPath(input.path))}`,
        ...(input.published ? [`- Published: ${isoDay(input.published)}`] : []),
        ...(input.author ? [`- Author: ${input.author}`] : []),
        ...(input.tags && input.tags.length > 0 ? [`- Topics: ${input.tags.join(', ')}`] : []),
        ...(input.facts ?? [])
    ];
    if (input.sections && input.sections.length > 0) {
        lines.push(...input.sections);
    }
    if (input.body) {
        lines.push('', input.body);
    }
    lines.push(
        '',
        '---',
        '',
        `${VIDYA_SUMMARY} Start at ${absolute('/llms.txt')} for the index of everything Vidya publishes, ` +
        `or ${absolute('/contact/')} to talk to Vidya.`
    );
    return `${lines.join('\n')}\n`;
};

const page = (
    input: TwinInput & {readonly note?: string; readonly offers?: readonly Offer[]},
    jsonLd: WithContext<Thing>
): MachinePage => {
    const path = canonicalPath(input.path);
    return {
        kind: input.kind,
        path,
        url: absolute(path),
        markdownUrl: absolute(markdownPath(path)),
        jsonUrl: absolute(jsonPath(path)),
        title: input.title,
        description: input.description,
        note: input.note ?? input.description,
        published: input.published,
        tags: input.tags ?? [],
        image: input.image,
        offers: input.offers ?? [],
        markdown: twin({...input, path}),
        jsonLd
    };
};

const CONTEXT = 'https://schema.org' as const;

// ---------------------------------------------------------------------------
// Collections
// ---------------------------------------------------------------------------

const staffByRef = async (ref: {collection: 'staff'; id: string}): Promise<CollectionEntry<'staff'>['data'] | undefined> =>
    (await getEntry(ref))?.data;

const articles = async (): Promise<MachinePage[]> => {
    const posts = (await getCollection('blog', ({data}) => (import.meta.env.PROD ? data.draft !== true : true)))
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
    return Promise.all(posts.map(async (p) => {
        const author = await staffByRef(p.data.author);
        const path = `/blog/${p.id}/`;
        const url = absolute(path);
        const tags = [...(p.data.tags ?? []), ...(p.data.categories ?? [])];
        const image = absolute(p.data.image);
        const body = bodyToMarkdown(p.body ?? '', absolute);
        const jsonLd: WithContext<BlogPosting> = {
            '@context': CONTEXT,
            '@type': 'BlogPosting',
            '@id': url,
            url,
            mainEntityOfPage: url,
            headline: p.data.title,
            description: p.data.description,
            datePublished: p.data.date.toISOString(),
            ...(author ? {author: person(author)} : {}),
            publisher: organizationRef,
            image,
            keywords: tags,
            articleBody: body,
            ...(p.data.youtube
                ? {
                    video: {
                        '@type': 'VideoObject',
                        name: p.data.title,
                        embedUrl: `https://www.youtube.com/embed/${p.data.youtube}`,
                        uploadDate: p.data.date.toISOString()
                    }
                }
                : {})
        };
        return page({
            path,
            kind: 'article',
            title: p.data.title,
            description: p.data.description,
            published: p.data.date,
            author: author?.name,
            tags,
            image,
            facts: p.data.youtube ? [`- Video: https://www.youtube.com/watch?v=${p.data.youtube}`] : [],
            body
        }, jsonLd);
    }));
};

const services = async (): Promise<MachinePage[]> => {
    const list = (await getCollection('consulting')).sort((a, b) => a.data.order - b.data.order);
    return list.map((s) => {
        const path = `/consulting/${s.id}/`;
        const url = absolute(path);
        const image = absolute(s.data.image);
        const jsonLd: WithContext<Service> = {
            '@context': CONTEXT,
            '@type': 'Service',
            '@id': url,
            url,
            name: s.data.title,
            serviceType: s.data.title,
            description: s.data.description,
            slogan: s.data.tagline,
            provider: organizationRef,
            image
        };
        return page({
            path,
            kind: 'service',
            title: s.data.title,
            description: s.data.description,
            note: s.data.tagline,
            tags: s.data.tags,
            image,
            sections: faqsMarkdown(s.data.faqs),
            body: bodyToMarkdown(s.body ?? '', absolute)
        }, jsonLd);
    });
};

const caseStudies = async (): Promise<MachinePage[]> => {
    const list = (await getCollection('caseStudies')).sort((a, b) => a.data.order - b.data.order);
    return list.map((s) => {
        const path = `/case-studies/${s.id}/`;
        const url = absolute(path);
        const image = absolute(s.data.image);
        const tags = [...s.data.tags, ...(s.data.technologies ?? [])];
        const questions = faqQuestions(s.data.faqs);
        const jsonLd: WithContext<Article> = {
            '@context': CONTEXT,
            '@type': 'Article',
            '@id': url,
            url,
            mainEntityOfPage: url,
            headline: s.data.title,
            description: s.data.description,
            about: {'@type': 'Organization', name: s.data.client},
            author: organizationRef,
            publisher: organizationRef,
            image,
            keywords: tags,
            ...(questions.length > 0 ? {mainEntity: questions} : {})
        };
        return page({
            path,
            kind: 'caseStudy',
            title: s.data.title,
            description: s.data.description,
            note: `${s.data.client}, ${s.data.sector.toLowerCase()}. ${firstSentence(s.data.tagline)}`,
            tags,
            image,
            facts: [
                `- Client: ${s.data.client}`,
                `- Sector: ${s.data.sector}`,
                `- Engagement: ${s.data.period}`,
                ...(s.data.technologies ? [`- Technologies: ${s.data.technologies.join(', ')}`] : [])
            ],
            sections: [
                '',
                '## Results',
                '',
                ...s.data.outcomes.map((o) => `- **${o.metric}.** ${o.detail}`),
                ...faqsMarkdown(s.data.faqs)
            ],
            body: bodyToMarkdown(s.body ?? '', absolute)
        }, jsonLd);
    });
};

const syllabusMarkdown = (syllabus: CollectionEntry<'courses'>['data']['syllabus']): string[] =>
    Object.entries(syllabus).flatMap(([lesson, session]) =>
        Array.isArray(session)
            ? [`- ${lesson}`, ...session.map((topic) => `  - ${topic}`)]
            : [`- ${lesson} (${session.duration}): ${session.outcome}`, ...session.topics.map((topic) => `  - ${topic}`)]);

const syllabusTopics = (syllabus: CollectionEntry<'courses'>['data']['syllabus']): string[] =>
    Object.values(syllabus).flatMap((session) => (Array.isArray(session) ? session : session.topics));

const courses = async (): Promise<MachinePage[]> => {
    const list = (await getCollection('courses')).sort((a, b) => a.data.title.localeCompare(b.data.title));
    return Promise.all(list.map(async (c) => {
        const instructor = await staffByRef(c.data.instructor);
        const path = `/courses/${c.id}/`;
        const url = absolute(path);
        const image = absolute(c.data.image);
        const offers = c.data.offers ?? [];
        const instance: CourseInstance = {
            '@type': 'CourseInstance',
            ...(c.data.courseMode ? {courseMode: c.data.courseMode} : {}),
            ...(c.data.workload ? {courseWorkload: c.data.workload} : {}),
            ...(instructor ? {instructor: person(instructor)} : {})
        };
        const jsonLd: WithContext<Course> = {
            '@context': CONTEXT,
            '@type': 'Course',
            '@id': url,
            url,
            name: c.data.title,
            description: c.data.description,
            image,
            provider: organizationRef,
            about: c.data.category,
            teaches: syllabusTopics(c.data.syllabus),
            hasCourseInstance: instance,
            ...(offers.length > 0 ? {offers: offers.map(toSchemaOffer)} : {})
        };
        const price = offers.length > 0 ? ` ${money(offers[0])}.` : '';
        return page({
            path,
            kind: 'course',
            title: c.data.title,
            description: c.data.description,
            note: `${c.data.category}.${price} ${firstSentence(c.data.description)}`,
            tags: [c.data.category],
            image,
            offers,
            facts: [
                `- Category: ${c.data.category}`,
                ...(instructor ? [`- Instructor: ${instructor.name}, ${instructor.title}`] : []),
                ...(c.data.duration ? [`- Duration: ${c.data.duration}`] : []),
                ...(c.data.courseMode ? [`- Format: ${c.data.courseMode}`] : [])
            ],
            sections: [
                ...offersMarkdown(offers),
                '',
                '## Syllabus',
                '',
                ...syllabusMarkdown(c.data.syllabus),
                '',
                '## From the instructor',
                '',
                `> ${c.data.quote}`
            ],
            body: bodyToMarkdown(c.body ?? '', absolute)
        }, jsonLd);
    }));
};

const products = async (): Promise<MachinePage[]> => {
    const list = (await getCollection('products')).sort((a, b) => a.data.order - b.data.order);
    return list.map((p) => {
        const path = `/products/${p.id}/`;
        const url = absolute(path);
        const image = absolute(p.data.image);
        const jsonLd: WithContext<Product> = {
            '@context': CONTEXT,
            '@type': 'Product',
            '@id': url,
            url,
            name: p.data.title,
            description: p.data.description,
            image,
            category: p.data.category,
            brand: organizationRef,
            ...(p.data.sku ? {sku: p.data.sku} : {}),
            offers: p.data.offers.map(toSchemaOffer)
        };
        return page({
            path,
            kind: 'product',
            title: p.data.title,
            description: p.data.description,
            note: `${p.data.category}. ${money(p.data.offers[0])}. ${firstSentence(p.data.description)}`,
            tags: p.data.tags,
            image,
            offers: p.data.offers,
            facts: [`- Category: ${p.data.category}`, ...(p.data.sku ? [`- SKU: ${p.data.sku}`] : [])],
            sections: [...offersMarkdown(p.data.offers), ...faqsMarkdown(p.data.faqs)],
            body: bodyToMarkdown(p.body ?? '', absolute)
        }, jsonLd);
    });
};

const tutorials = async (): Promise<MachinePage[]> => {
    const list = (await getCollection('tutorials')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
    return list.map((t) => {
        const path = `/tutorials/${t.id}/`;
        const url = absolute(path);
        const image = absolute(t.data.image);
        const title = t.data.subtitle ? `${t.data.title}: ${t.data.subtitle}` : t.data.title;
        const tags = t.data.tags ?? [];
        const jsonLd: WithContext<VideoObject> = {
            '@context': CONTEXT,
            '@type': 'VideoObject',
            '@id': url,
            url,
            name: title,
            description: t.data.description,
            thumbnailUrl: image,
            uploadDate: t.data.date.toISOString(),
            embedUrl: `https://www.youtube.com/embed/${t.data.youtube}`,
            contentUrl: `https://www.youtube.com/watch?v=${t.data.youtube}`,
            publisher: organizationRef,
            keywords: tags
        };
        return page({
            path,
            kind: 'tutorial',
            title,
            description: t.data.description,
            note: firstSentence(t.data.description),
            published: t.data.date,
            tags,
            image,
            facts: [
                `- Video: https://www.youtube.com/watch?v=${t.data.youtube}`,
                `- Source code: https://github.com/VidyaSource/${t.data.github}`
            ],
            body: bodyToMarkdown(t.body ?? '', absolute)
        }, jsonLd);
    });
};

// ---------------------------------------------------------------------------
// Static pages
// ---------------------------------------------------------------------------

const linkList = (pages: readonly MachinePage[]): string[] =>
    pages.map((p) => `- [${p.title}](${p.markdownUrl}): ${p.note} (HTML: ${p.url})`);

const collectionPage = (
    path: string,
    title: string,
    description: string,
    members: readonly MachinePage[],
    intro: readonly string[] = [],
    type: 'CollectionPage' | 'Blog' = 'CollectionPage'
): MachinePage => {
    const url = absolute(path);
    const base = {
        '@context': CONTEXT,
        '@id': url,
        url,
        name: title,
        description,
        isPartOf: websiteRef,
        publisher: organizationRef
    } as const;
    const jsonLd: WithContext<CollectionPage> | WithContext<Blog> =
        type === 'Blog'
            ? {...base, '@type': 'Blog', blogPost: members.map((m) => ({'@id': m.url}))}
            : {...base, '@type': 'CollectionPage', hasPart: members.map((m) => ({'@id': m.url}))};
    return page({
        path,
        kind: 'page',
        title,
        description,
        sections: [...intro, '', ...linkList(members)]
    }, jsonLd);
};

const staticPages = async (
    byKind: Readonly<Record<Exclude<Kind, 'page'>, readonly MachinePage[]>>
): Promise<MachinePage[]> => {
    const llms = new Map((await getCollection('llms')).map((e) => [e.id, e.body?.trim() ?? '']));
    const overview = llms.get('overview') ?? '';
    const consultingNarrative = llms.get('consulting') ?? '';
    const about = llms.get('about') ?? '';

    const home = page({
        path: '/',
        kind: 'page',
        title: 'Vidya',
        description: VIDYA_SUMMARY,
        sections: [
            '',
            '## Where to look',
            '',
            `- [Consulting](${absolute(markdownPath('/consulting/'))}): six practice areas, from legacy modernization to agentic AI.`,
            `- [Case studies](${absolute(markdownPath('/case-studies/'))}): delivered engagements with named clients and results.`,
            `- [Courses](${absolute(markdownPath('/courses/'))}): instructor-led technology training.`,
            `- [Tutorials](${absolute(markdownPath('/tutorials/'))}): free video tutorials with source code.`,
            `- [Articles](${absolute(markdownPath('/blog/'))}): the complete blog, newest first.`,
            `- [About](${absolute(markdownPath('/about/'))}) and [Contact](${absolute(markdownPath('/contact/'))}).`,
            `- [llms.txt](${absolute('/llms.txt')}) is the short index; [llms-full.txt](${absolute('/llms-full.txt')}) is every page in one file.`
        ],
        body: overview
    }, {
        '@context': CONTEXT,
        '@type': 'WebPage',
        '@id': `${SITE}/`,
        url: `${SITE}/`,
        name: 'Vidya',
        description: VIDYA_SUMMARY,
        isPartOf: websiteRef,
        about: organizationRef
    } satisfies WithContext<WebPage>);

    const aboutPage = page({
        path: '/about/',
        kind: 'page',
        title: 'About Vidya',
        description: 'Who Vidya is, what it values, and who leads it.',
        body: about
    }, {
        '@context': CONTEXT,
        '@type': 'AboutPage',
        '@id': absolute('/about/'),
        url: absolute('/about/'),
        name: 'About Vidya',
        isPartOf: websiteRef,
        mainEntity: organizationRef
    } satisfies WithContext<AboutPage>);

    const contact = page({
        path: '/contact/',
        kind: 'page',
        title: 'Contact Vidya',
        description: 'How to reach Vidya about consulting, training, or speaking.',
        facts: [
            `- Email: ${organization.email}`,
            `- Phone: ${organization.telephone}`,
            `- Mail: ${organization.address.streetAddress}, ${organization.address.addressLocality}, ${organization.address.addressRegion} ${organization.address.postalCode}, USA`,
            `- Web form: ${absolute('/contact/')} (protected by Cloudflare Turnstile, so it needs a browser)`
        ],
        body: 'Vidya answers every inquiry personally. Say what you are trying to modernize, build, or learn, and Vidya will reply with next steps.'
    }, {
        '@context': CONTEXT,
        '@type': 'ContactPage',
        '@id': absolute('/contact/'),
        url: absolute('/contact/'),
        name: 'Contact Vidya',
        isPartOf: websiteRef,
        mainEntity: organizationRef
    } satisfies WithContext<ContactPage>);

    const consulting = collectionPage(
        '/consulting/',
        'Consulting',
        'Vidya\'s consulting practice areas.',
        byKind.service,
        ['', consultingNarrative, '', '## Practice areas']
    );
    const studies = collectionPage(
        '/case-studies/',
        'Case Studies',
        'Engagements Vidya has delivered, with clients, technologies, and results.',
        byKind.caseStudy
    );
    const courseIndex = collectionPage(
        '/courses/',
        'Courses',
        'Technology training courses taught by Vidya.',
        byKind.course
    );
    const tutorialIndex = collectionPage(
        '/tutorials/',
        'Tutorials',
        'Free video tutorials with source code on GitHub.',
        byKind.tutorial
    );
    const blog = collectionPage(
        '/blog/',
        'Vidya Blog',
        `All ${byKind.article.length} articles, newest first.`,
        byKind.article,
        [],
        'Blog'
    );
    const productIndex = byKind.product.length > 0
        ? [collectionPage('/products/', 'Products', 'Products Vidya sells.', byKind.product)]
        : [];

    return [home, consulting, studies, courseIndex, ...productIndex, tutorialIndex, blog, aboutPage, contact];
};

// ---------------------------------------------------------------------------
// Assembly
// ---------------------------------------------------------------------------

const byKind = {
    service: await services(),
    caseStudy: await caseStudies(),
    course: await courses(),
    product: await products(),
    tutorial: await tutorials(),
    article: await articles()
} as const satisfies Readonly<Record<Exclude<Kind, 'page'>, readonly MachinePage[]>>;

const pages = await staticPages(byKind);

/** Every page, in reading order: static pages first, then each collection. */
export const catalog: readonly MachinePage[] = [
    ...pages,
    ...byKind.service,
    ...byKind.caseStudy,
    ...byKind.course,
    ...byKind.product,
    ...byKind.tutorial,
    ...byKind.article
];

export const catalogByKind = byKind;

const byPath = new Map(catalog.map((p) => [p.path, p]));

export const findPage = (path: string): MachinePage | undefined => byPath.get(canonicalPath(path));
