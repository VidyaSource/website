import Head from 'next/head'
import {HeadElementCommon} from "../HeadElement";

interface AboutHeadElementProps {
    title: string
}

export const AboutHeadElement = (p: AboutHeadElementProps) => {
    return (
        <Head>
            <title>{p.title}</title>
            <HeadElementCommon />
        </Head>
    )
}