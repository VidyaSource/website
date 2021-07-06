import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {Page} from "../../components/Page";
import {BlogPostHeadElement} from "../../components/blog/BlogPostHeadElement";
import {BlogPost, getAllBlogPosts, getBlogPostBySlug} from "../../lib/blogPost-utils";
import {BlogPostContent} from "../../components/blog/BlogPostContent"
import {NextSeo} from 'next-seo'
import { BlogJsonLd } from 'next-seo'

const Post = (blogPost: BlogPost) => {
    const router = useRouter()
    if (!router.isFallback && !blogPost.slug) {
        return <ErrorPage statusCode={404}/>
    }
    return (
        <>
            <NextSeo
                title={`Vidya | ${blogPost.frontMatter.title}`}
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
                            'https://www.example.com/authors/@firstnameA-lastnameA',
                            'https://www.example.com/authors/@firstnameB-lastnameB',
                        ],
                        tags: blogPost.frontMatter.tags,
                    },
                    images: [
                        {
                            url: `https://www.vidyasource.com/img/${blogPost.frontMatter.image}`,
                            alt: `Vidya | ${blogPost.frontMatter.title}`,
                        },
                    ],
                }}
            />
            <BlogJsonLd
                url={`https://www.vidyasource.com/blog/${blogPost.slug}`}
                title={`Vidya | ${blogPost.frontMatter.title}`}
                images={[
                    `https://www.vidyasource.com/img/${blogPost.frontMatter.image}`
                ]}
                datePublished={blogPost.frontMatter.date.toTimeString()}
                dateModified={blogPost.frontMatter.date.toTimeString()}
                authorName={blogPost.frontMatter.author}
                description={blogPost.frontMatter.description}
            />
            <Page headElement={<BlogPostHeadElement title={blogPost.frontMatter.title}/>}>
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