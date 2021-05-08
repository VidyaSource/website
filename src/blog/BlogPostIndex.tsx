import {BlogPost} from "../lib/blogPost-utils";
import {BlogPostCard} from "./BlogPostCard";

interface BlogPostIndexProps {
    blogPosts: BlogPost[]
}

export const BlogPostIndex = (p: BlogPostIndexProps) => {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.blogPosts.map((blogPost) => (
                <li key={blogPost.slug} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                    <BlogPostCard blogPost={blogPost} />
                </li>
            ))}
        </ul>
    )
}
