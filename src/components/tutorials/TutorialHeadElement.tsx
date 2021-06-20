import Head from 'next/head'
import {HeadElementCommon} from "../HeadElement";

interface TutorialHeadElementProps {
    title: string
}

export const TutorialHeadElement = (p: TutorialHeadElementProps) => {
    return (
        <Head>
            <title>{p.title}</title>
            <HeadElementCommon />
        </Head>
    )
}