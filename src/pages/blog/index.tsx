import {getAllBlogPosts, getBlogPostsByTags} from "../../lib/blogPost-utils";
import {QueryClient, useQuery} from "react-query";
import {Page} from "../../components/Page";
import {BlogPostHeadElement} from "../../components/blog/BlogPostHeadElement";
import {BlogPostIndex} from "../../components/blog/BlogPostIndex";
import {dehydrate} from "react-query/hydration";

const BlogPosts = () => {
    const { data } = useQuery('posts', getAllBlogPosts)

    return (
        <Page headElement={<BlogPostHeadElement title="Vidya | Blog"/>}>
            <BlogPostIndex blogPosts={data}/>
        </Page>
    )
}

export default BlogPosts

export async function getStaticProps({ params }) {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery('posts', getAllBlogPosts)
    await queryClient.prefetchQuery('postsByTags', getBlogPostsByTags)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
    }
}


