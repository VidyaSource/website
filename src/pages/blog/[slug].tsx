import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {Page} from "../../components/Page";
import {BlogPostHeadElement} from "../../blog/BlogPostHeadElement";
import {BlogPost, getAllBlogPosts, getBlogPostBySlug} from "../../lib/blogPost-utils";
import {BlogPostContent} from "../../blog/BlogPostContent";

const Blog = (blogPost: BlogPost) => {
    const router = useRouter()
    if (!router.isFallback && !blogPost.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Page headElement={<BlogPostHeadElement title={blogPost.frontMatter.title}/>}>
            <BlogPostContent blogPost={blogPost} />
        </Page>
    )
}

export default Blog

export async function getStaticProps({ params }) {
    const post = getBlogPostBySlug(params.slug)

    return {
        props: {
            ...post,
            content: post.content,
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllBlogPosts()

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