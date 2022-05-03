import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {YouTubeVideo} from "../YouTubeVideo";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {PostImage} from "./PostImage";

const components = {
    PostImage: (props) => {
        return <PostImage {...props} />
    },
    code: (props) => {
        const match = /language-(\w+)/.exec(props.className || '')
        return !props.inline && match ? (
            <SyntaxHighlighter style={a11yDark} language={match[1]} PreTag="div"
                   className="text-sm"
                   children={String(props.children).replace(/\n$/, '')}
                   showLineNumbers={true} {...props} />
        ) : (
            <code children={String(props.children).replace(/\n$/, '')} className="text-red dark:text-red-light text-code text-lg" {...props} />
        )
    },
    // @ts-ignore
    del: (props) => {
        // @ts-ignore
        const [id, title] = props.children[0].split("|")
        return (
            <YouTubeVideo id={id} title={title}/>
        )
    }
}

interface BlogPostContentProps {
    content: MDXRemoteSerializeResult
}

const BlogPostContent = (p: BlogPostContentProps) => {
    return (
        <MDXRemote {...p.content} components={components} />
    )
}

export default BlogPostContent