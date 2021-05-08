import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {Page} from "../../components/Page";
import {BlogPostHeadElement} from "../../blog/BlogPostHeadElement";
import {BlogPost, getAllBlogPosts, getBlogPostBySlug} from "../../lib/blogPost-utils";
import {BlogPostContent} from "../../blog/BlogPostContent";
import {useQuery} from "react-query";

interface PostProps {
    blogPost: BlogPost
}

const Post = (p: PostProps) => {
    const router = useRouter()
    const {data} = useQuery(['post', p.blogPost.slug], () => getBlogPostBySlug(p.blogPost.slug))
    if (!router.isFallback && !data.slug) {
        return <ErrorPage statusCode={404}/>
    }

    return (
        <Page headElement={<BlogPostHeadElement title={data.frontMatter.title}/>}>
            <BlogPostContent blogPost={data}/>
        </Page>

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