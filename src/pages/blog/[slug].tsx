import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {Page} from "../../components/Page";
import {BlogPostHeadElement} from "../../components/blog/BlogPostHeadElement";
import {BlogPost, getAllBlogPosts, getBlogPostBySlug} from "../../lib/blogPost-utils";
import {BlogPostContent} from "../../components/blog/BlogPostContent"
import {NextSeo} from 'next-seo'
import { BlogJsonLd } from 'next-seo'
import {constants} from "../../lib/constants";

const Post = (blogPost: BlogPost) => {
    const router = useRouter()
    const title = `Vidya | ${blogPost.frontMatter.title}`
    const imageUrl = `${process.env.basePath}${blogPost.frontMatter.image}`
    if (!router.isFallback && !blogPost.slug) {
        return <ErrorPage statusCode={404}/>
    }
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
            <Page headElement={<BlogPostHeadElement title={title}/>}>
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