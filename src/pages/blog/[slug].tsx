import {Page} from "../../components/Page";
import {BlogPostHeadElement} from "../../components/blog/BlogPostHeadElement";
import {BlogPost, getBlogPostBySlug} from "../../lib/blogPost-utils";
import {BlogPostContent} from "../../components/blog/BlogPostContent";

interface PostProps {
    blogPost: BlogPost
}

const Post = (p: PostProps) => {

    return (
        <Page headElement={<BlogPostHeadElement title={p.blogPost.frontMatter.title}/>}>
            <BlogPostContent blogPost={p.blogPost} />
        </Page>
    )
}

export default Post

export async function getServerSideProps(context) {
    const blogPost = await getBlogPostBySlug(context.params.slug)
    console.log(blogPost.frontMatter)
    return {
        props: {
            blogPost: blogPost
        }
    }
}