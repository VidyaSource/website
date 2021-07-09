import {BlogPost, BlogPostCategories, getAllBlogPosts, getBlogPostsByTags} from "../../lib/blogPost-utils";
import {Page} from "../../components/Page";
import {BlogPostIndex} from "../../components/blog/BlogPostIndex";
import {NextSeo} from "next-seo";

interface BlogPostsProps {
    blogPosts: BlogPost[]
    blogPostCategories: BlogPostCategories
}

const BlogPosts = (p: BlogPostsProps) => {
    const title = "Vidya | Blog Posts"
    const description = "Build faster. Build better. Blog posts by Vidya."
    const url = `${process.env.basePath}/blog`
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    title: title,
                    description: description,
                    url: url,
                    type: 'company',
                }}
            />
            <Page>
                <BlogPostIndex blogPosts={p.blogPosts} blogPostCategories={p.blogPostCategories}/>
            </Page>
        </>
    )
}

export default BlogPosts

export async function getStaticProps({params}) {
    const blogPosts = await getAllBlogPosts()
    const blogPostCategories = await getBlogPostsByTags()

    return {
        props: {
            blogPosts: blogPosts,
            blogPostCategories: blogPostCategories
        },
    }
}


