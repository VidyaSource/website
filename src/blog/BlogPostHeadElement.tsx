import Head from 'next/head'
import {HeadElementCommon} from "../components/HeadElement";

interface BlogPostHeadElementProps {
    title: string
}

export const BlogPostHeadElement = (p: BlogPostHeadElementProps) => {
    return (
        <Head>
            <title>{p.title}</title>
            <HeadElementCommon />
        </Head>
    )
}