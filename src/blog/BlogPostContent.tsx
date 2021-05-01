import {BlogPost} from "../lib/blogPost-utils";
import parse from "html-react-parser";
import format from "date-fns/format"
import {Avatar} from "./Avatar";

interface BlogPostContentProps {
    blogPost: BlogPost
}
export const BlogPostContent = (p: BlogPostContentProps) => {
    return (
        <div className="relative py-4 bg-blue-light overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span className="block text-base text-center text-green-dark font-semibold tracking-wide uppercase">
                          {p.blogPost.frontMatter.tags[0]}
                        </span>
                        <span className="mt-2 block text-4xl text-center leading-8 font-extrabold tracking-tight text-red md:text-5xl lg:text-6xl">
                          {p.blogPost.frontMatter.title}
                        </span>
                        <div className="mx-auto">
                            <span className="mt-2 block text-xl text-center leading-8 tracking-tight text-red lg:text-2xl">
                              {format(p.blogPost.frontMatter.date, "LLLL d, y")}
                            </span>
                            <Avatar image="/img/president.png" alt={p.blogPost.frontMatter.author} author={p.blogPost.frontMatter.author} />
                        </div>
                    </h1>
                    <p className="mt-2 text-xl text-gray-500 leading-8">
                        {parse(p.blogPost.content)}
                    </p>
                </div>
            </div>
        </div>
    )
}
