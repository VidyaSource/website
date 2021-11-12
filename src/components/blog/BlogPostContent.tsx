import ReactMarkdown from 'react-markdown'
//import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
//import {a11yDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm'
import {YouTubeVideo} from "../YouTubeVideo";
import Image from 'next/image'
import raw from 'rehype-raw'
import {NormalComponents, SpecialComponents} from "react-markdown/src/ast-to-react";

const components: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
    img: ({node, ...props}) => {
        return (
            <div style={{width: props.width, height: props.height}} className="relative mx-auto">
                <Image alt={props.alt} src={props.src} layout="fill" objectFit="cover" />
            </div>
        )
    },
    /*code: ({node, inline, className, children, ...props}) => {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={a11yDark} language={match[1]} PreTag="div"
                   className="text-sm"
                   children={String(children).replace(/\n$/, '')}
                   showLineNumbers={true} {...props} />
        ) : (
            <code children={String(children).replace(/\n$/, '')} className="text-red dark:text-red-light text-code text-lg" {...props} />
        )
    },*/
    // @ts-ignore
    del: ({node, inline, className, children, ...props}) => {
        // @ts-ignore
        const [id, title] = children[0].split("|")
        return (
            <YouTubeVideo id={id} title={title}/>
        )
    }
}

interface BlogPostContentProps {
    content: string
}

const BlogPostContent = (p: BlogPostContentProps) => {
    return (
        <ReactMarkdown components={components} remarkPlugins={[gfm]} rehypePlugins={[raw]}>
            {p.content}
        </ReactMarkdown>
    )
}

export default BlogPostContent