import {BlogPost, getBlogPostsByTags} from "../lib/blogPost-utils";
import {BlogPostCard} from "./BlogPostCard";
import {useQuery} from "react-query";
import {ChangeEvent, useEffect, useState} from "react";

interface BlogPostIndexProps {
    blogPosts: BlogPost[]
}

export const BlogPostIndex = (p: BlogPostIndexProps) => {
    const {data} = useQuery('postsByTags', getBlogPostsByTags)
    const tags = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    const [selectedTag, selectTag] = useState<string>("")
    const [currentPosts, setCurrentPosts] = useState<BlogPost[]>(p.blogPosts)
    useEffect(() => {
        if (selectedTag === "") {
            setCurrentPosts(p.blogPosts)
        } else {
            setCurrentPosts(data[selectedTag])
        }
    }, [p.blogPosts, selectedTag])

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const tag = e.target.value
        if (tag) {
            selectTag(tag)
        } else {
            selectTag("")
        }
    }

    return (
        <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
            <div className="flex flex-col">
                <label htmlFor="tag" className="mx-auto block text-lg font-medium text-red md:text-xl">
                    Filter by tag
                </label>
                <div className="mt-1">
                    <select id="tag" name="tag" placeholder="Search..." onChange={onChange}
                            className="mx-auto block text-red sm:text-xl lg:text-2xl focus:border-green-dark md:w-full lg:w-full shadow-sm sm:max-w-xs sm:text-sm border-red rounded-md">
                        <option value=""/>
                        {
                            tags.map(t => <option key={t} value={t}>{t}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {
                        currentPosts.map((blogPost) => (
                            <BlogPostCard key={blogPost.slug} blogPost={blogPost}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

