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
import Image from 'next/image'
import raw from 'rehype-raw'

const components = {
    img: ({node, ...props}) => {
        return (
            <div style={{width: props.width, height: props.height}} className="relative mx-auto">
                <Image alt={props.alt} src={props.src} layout="fill" objectFit="cover" />
            </div>
        )
    },
    code: ({node, inline, className, children, ...props}) => {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <Prism style={a11yDark} language={match[1]} PreTag="div"
                   className="text-sm"
                   children={String(children).replace(/\n$/, '')}
                   showLineNumbers={true} {...props} />
        ) : (
            <code children={String(children).replace(/\n$/, '')} className="text-red dark:text-red-light text-code text-lg" {...props} />
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

const BlogPostContent = (p: BlogPostContentProps) => {
    const selectedTags = useMemo(() => selectTags(p.blogPost.frontMatter.tags, 6), p.blogPost.frontMatter.tags)

    return (
        <article className="relative py-4 overflow-hidden bg-blue-light dark:bg-gray-dark">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <section className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span
                            className="block text-sm text-center text-green-dark dark:text-green-light font-semibold tracking-wide uppercase">
                          {
                              selectedTags.join("  |  ")
                          }
                        </span>
                        <span
                            className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-red dark:text-red-light md:text-3xl lg:text-4xl">
                          {p.blogPost.frontMatter.title}
                        </span>
                        <div className="mx-auto">
                            <span
                                className="mt-2 block text-lg text-center leading-8 tracking-tight text-red dark:text-red-light lg:text-xl">
                              {typeof p.blogPost.frontMatter.date != "string" && format(p.blogPost.frontMatter.date, "LLLL d, y")}
                            </span>
                            <Avatar author={p.blogPost.frontMatter.author}/>
                        </div>
                    </h1>
                    <p className="mt-2 text-xl text-gray-dark dark:text-blue-light leading-8">
                        {/* @ts-ignore */}
                        <ReactMarkdown components={components} remarkPlugins={[gfm]} rehypePlugins={[raw]}>
                            {p.blogPost.content}
                        </ReactMarkdown>
                    </p>
                </section>
            </div>
        </article>
    )
}

export default BlogPostContent