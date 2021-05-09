import {BlogPost, getBlogPostsByTags} from "../lib/blogPost-utils";
import {BlogPostCard} from "./BlogPostCard";
import {useQuery} from "react-query";

interface BlogPostIndexProps {
    blogPosts: BlogPost[]
}

export const BlogPostIndex = (p: BlogPostIndexProps) => {
    const {data} = useQuery('postsByTags', getBlogPostsByTags)
    const tags = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

    return (
        <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
            <div className="flex flex-col">
                <label htmlFor="tag" className="mx-auto block text-lg font-medium text-red md:text-xl">
                    Search by tag
                </label>
                <div className="mt-1">
                    <select id="tag" name="tag" placeholder="Search..."
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
                        p.blogPosts.map((blogPost) => (
                            <BlogPostCard key={blogPost.slug} blogPost={blogPost}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function Example() {
    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                        <div
                            className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="country"
                                   className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Country / Region
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

