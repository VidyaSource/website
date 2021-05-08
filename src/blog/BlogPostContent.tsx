import {BlogPost} from "../lib/blogPost-utils";
import format from "date-fns/format"
import {Avatar} from "./Avatar";
import ReactMarkdown from 'react-markdown'
import {Prism} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm'
import {YouTubeVideo} from "../components/YouTubeVideo";

const components = {
    /*img: ({node, ...props}) => (
        <div className="aspect-w-1 aspect-h-1">
            <Image src={node.properties.src} alt={node.properties.alt} layout="fill"/>
        </div>
    )*/
    code: ({node, inline, className, children, ...props}) => {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <Prism style={a11yDark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')}
                   showLineNumbers={true} {...props} />
        ) : (
            <code className="font-red font-code" {...props} />
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
    return (
        <article className="relative py-4 bg-blue-light overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span
                            className="block text-base text-center text-green-dark font-semibold tracking-wide uppercase">
                          {p.blogPost.frontMatter.tags[0]}
                        </span>
                        <span
                            className="mt-2 block text-4xl text-center leading-8 font-extrabold tracking-tight text-red md:text-5xl lg:text-6xl">
                          {p.blogPost.frontMatter.title}
                        </span>
                        <div className="mx-auto">
                            <span
                                className="mt-2 block text-xl text-center leading-8 tracking-tight text-red lg:text-2xl">
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
