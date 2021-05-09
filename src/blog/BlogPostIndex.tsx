import {BlogPost} from "../lib/blogPost-utils";
import {BlogPostCard} from "./BlogPostCard";

interface BlogPostIndexProps {
    blogPosts: BlogPost[]
}

export const BlogPostIndex = (p: BlogPostIndexProps) => {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {
                        p.blogPosts.map((blogPost) => (
                            <BlogPostCard key={blogPost.slug} blogPost={blogPost}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
