import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {Page} from "../../components/Page";
import {BlogPost, getAllBlogPosts, getBlogPostBySlug} from "../../lib/blogPost-utils";
import {NextSeo} from 'next-seo'
import { BlogJsonLd } from 'next-seo'
import {constants} from "../../lib/constants";
import {zonedTimeToUtc} from "date-fns-tz";
import dynamic from 'next/dynamic'

const Post = (blogPost: BlogPost) => {
    const router = useRouter()
    const title = `Vidya | ${blogPost.frontMatter.title}`
    blogPost.frontMatter.date = zonedTimeToUtc(new Date(blogPost.frontMatter.date), "America/New_York")
    const imageUrl = `${process.env.basePath}${blogPost.frontMatter.image}`
    if (!router.isFallback && !blogPost.slug) {
        return <ErrorPage statusCode={404}/>
    }
    const BlogPostContent = dynamic(() => import("../../components/blog/BlogPostContent"))

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
                <BlogPostContent blogPost={blogPost}/>
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