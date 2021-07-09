import {BlogPost, BlogPostCategories, getAllBlogPosts, getBlogPostsByTags} from "../../lib/blogPost-utils";
import {Page} from "../../components/Page";
import {BlogPostIndex} from "../../components/blog/BlogPostIndex";

interface BlogPostsProps {
    blogPosts: BlogPost[]
    blogPostCategories: BlogPostCategories
}

const BlogPosts = (p: BlogPostsProps) => {
    return (
        <Page>
            <BlogPostIndex blogPosts={p.blogPosts} blogPostCategories={p.blogPostCategories}/>
        </Page>
    )
}

export default BlogPosts

export async function getStaticProps({ params }) {
    const blogPosts = await getAllBlogPosts()
    const blogPostCategories = await getBlogPostsByTags()

    return {
        props: {
            blogPosts: blogPosts,
            blogPostCategories: blogPostCategories
        },
    }
}


