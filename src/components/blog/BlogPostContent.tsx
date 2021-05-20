import {BlogPost} from "../../lib/blogPost-utils";
import format from "date-fns/format"
import {Avatar} from "./Avatar";
import ReactMarkdown from 'react-markdown'
import {Prism} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm'
import {YouTubeVideo} from "../YouTubeVideo";
import {selectTags} from "../../lib/selectTags";
import {useMemo} from "react";

const components = {
    /*img: ({node, ...props}) => (
        <div className="aspect-w-1 aspect-h-1">
            <Image src={node.properties.src} alt={node.properties.alt} layout="fill"/>
        </div>
    )*/
    code: ({node, inline, className, children, ...props}) => {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <Prism style={a11yDark} language={match[1]} PreTag="div"
                   className="text-sm"
                   children={String(children).replace(/\n$/, '')}
                   showLineNumbers={true} {...props} />
        ) : (
            <code children={String(children).replace(/\n$/, '')} className="text-red text-code text-lg" {...props} />
        )
    },
    del: ({node, inline, className, children, ...props}) => {
        const [id, title] = children[0].split("|")
        return (
            <YouTubeVideo id={id} title={title}/>
        )
    }
}

interface BlogPostContentProps {
    blogPost: BlogPost
}

export const BlogPostContent = (p: BlogPostContentProps) => {
    const selectedTags = useMemo(() => selectTags(p.blogPost.frontMatter.tags, 6), p.blogPost.frontMatter.tags)
    return (
        <article className="relative py-4 overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span
                            className="block text-sm text-center text-green-dark font-semibold tracking-wide uppercase">
                          {
                              selectedTags.join("  |  ")
                          }
                        </span>
                        <span
                            className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-red md:text-3xl lg:text-4xl">
                          {p.blogPost.frontMatter.title}
                        </span>
                        <div className="mx-auto">
                            <span
                                className="mt-2 block text-lg text-center leading-8 tracking-tight text-red lg:text-xl">
                              {format(p.blogPost.frontMatter.date, "LLLL d, y")}
                            </span>
                            <Avatar author={p.blogPost.frontMatter.author}/>
                        </div>
                    </h1>
                    <p className="mt-2 text-xl text-gray-500 leading-8">
                        {/* @ts-ignore */}
                        <ReactMarkdown components={components} remarkPlugins={[gfm]}>
                            {p.blogPost.content}
                        </ReactMarkdown>
                    </p>
                </div>
            </div>
        </article>
    )
}
