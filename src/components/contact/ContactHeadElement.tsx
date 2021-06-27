import Head from 'next/head'
import {HeadElementCommon} from "../HeadElement";

interface ContactHeadElementProps {
    title: string
}

export const ContactHeadElement = (p: ContactHeadElementProps) => {
    return (
        <Head>
            <title>{p.title}</title>
            <HeadElementCommon />
        </Head>
    )
}