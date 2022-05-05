import {BlogPost, BlogPostCategories, BlogPostMetadata} from "../../lib/blogPost-utils";
import {BlogPostCard} from "./BlogPostCard";
import {ChangeEvent, useEffect, useState} from "react";
import BlogSearch from "./BlogSearch";

interface BlogPostIndexProps {
    blogPosts: BlogPostMetadata[]
    blogPostCategories: BlogPostCategories
}

export const BlogPostIndex = (p: BlogPostIndexProps) => {
    const tags = Object.keys(p.blogPostCategories).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    const [selectedTag, selectTag] = useState<string>("")
    const [currentPosts, setCurrentPosts] = useState<BlogPostMetadata[]>(p.blogPosts)
    useEffect(() => {
        const posts = p.blogPostCategories[selectedTag]
        if (posts) {
            setCurrentPosts(posts)
        } else {
            setCurrentPosts(p.blogPosts)
        }
    }, [p.blogPosts, selectedTag])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const tag = e.target.value
        if (tag) {
            selectTag(tag)
        } else {
            selectTag("")
        }
    }

    const onTagClick = (tag: string) => () => {
        selectTag(tag)
    }

    return (
        <div className="relative bg-blue-light dark:bg-gray-dark pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl tracking-tight font-extrabold text-red dark:text-red-light sm:text-4xl mt-0">Blog
                    posts by the staff at Vidya</h1>
                <h2 className="mt-3 max-w-2xl mx-auto text-xl text-gray-dark dark:text-blue-light sm:mt-4">
                    From programming to project management, check out our observations about the tech industry.
                </h2>
            </div>
            <div className="mx-auto w-2/4 lg:w-1/3 max-w-screen-md">
                <BlogSearch tags={tags} selectedTag={selectedTag} onChange={selectTag}/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <nav className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {
                        currentPosts.map((blogPost) => (
                            <BlogPostCard key={blogPost.slug} blogPost={blogPost} onTagClick={onTagClick}/>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}

