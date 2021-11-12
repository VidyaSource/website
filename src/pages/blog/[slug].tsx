import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {Page} from "../../components/Page";
import {BlogPost, getAllBlogPosts, getBlogPostBySlug} from "../../lib/blogPost-utils";
import {NextSeo} from 'next-seo'
import { BlogJsonLd } from 'next-seo'
import {constants} from "../../lib/constants";
import {zonedTimeToUtc} from "date-fns-tz";
import dynamic from 'next/dynamic'
import format from "date-fns/format";
import {Avatar} from "../../components/blog/Avatar";
import {useMemo} from "react";
import {selectTags} from "../../lib/selectTags";

const BlogPostContent = dynamic(() => import("../../components/blog/BlogPostContent"))

const Post = (blogPost: BlogPost) => {
    const router = useRouter()
    const title = `Vidya | ${blogPost.frontMatter.title}`
    blogPost.frontMatter.date = zonedTimeToUtc(new Date(blogPost.frontMatter.date), "America/New_York")
    const imageUrl = `${process.env.basePath}${blogPost.frontMatter.image}`
    if (!router.isFallback && !blogPost.slug) {
        return <ErrorPage statusCode={404}/>
    }
    const selectedTags = useMemo(() => selectTags(blogPost.frontMatter.tags, 6), blogPost.frontMatter.tags)

    return (
        <>
            <NextSeo
                title={title}
                description={blogPost.frontMatter.description}
                canonical={`https://www.vidyasource.com/blog/${blogPost.slug}`}
                openGraph={{
                    title: `Vidya | ${blogPost.frontMatter.title}`,
                    description: blogPost.frontMatter.description,
                    url: `https://www.vidyasource.com/blog/${blogPost.slug}`,
                    type: 'article',
                    article: {
                        publishedTime: blogPost.frontMatter.date.toISOString(),
                        modifiedTime: new Date().toISOString(),
                        authors: [
                            constants[blogPost.frontMatter.author].profileUrl
                        ],
                        tags: blogPost.frontMatter.tags,
                    },
                    images: [
                        {
                            url: imageUrl,
                            alt: title,
                        },
                    ],
                }}
            />
            <BlogJsonLd
                url={`https://www.vidyasource.com/blog/${blogPost.slug}`}
                title={title}
                images={[
                    imageUrl
                ]}
                datePublished={blogPost.frontMatter.date.toTimeString()}
                dateModified={blogPost.frontMatter.date.toTimeString()}
                authorName={blogPost.frontMatter.author}
                description={blogPost.frontMatter.description}
            />
            <Page>
                <article className="relative py-4 overflow-hidden bg-blue-light dark:bg-gray-dark">
                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <section className="text-lg max-w-prose mx-auto">
                            <h1>
                        <span
                            className="block text-sm text-center text-green-dark dark:text-green-light font-semibold tracking-wide uppercase">
                          {
                              selectedTags.join("  |  ")
                          }
                        </span>
                                <span
                                    className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-red dark:text-red-light md:text-3xl lg:text-4xl">
                          {blogPost.frontMatter.title}
                        </span>
                                <div className="mx-auto">
                            <span
                                className="mt-2 block text-lg text-center leading-8 tracking-tight text-red dark:text-red-light lg:text-xl">

                            </span>
                                    <Avatar author={blogPost.frontMatter.author}/>
                                </div>
                            </h1>
                            <p className="mt-2 text-xl text-gray-dark dark:text-blue-light leading-8">
                                <BlogPostContent content={blogPost.content} />
                            </p>
                        </section>
                    </div>
                </article>
            </Page>
        </>
    )
}

export default Post

export async function getStaticProps({params}) {
    const post = await getBlogPostBySlug(params.slug)

    return {
        props: {
            ...post,
            content: post.content,
        },
    }
}

export async function getStaticPaths() {
    const posts = await getAllBlogPosts()

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                },
            }
        }),
        fallback: false,
    }
}