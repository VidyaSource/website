import Head from 'next/head'
import {HeadElementCommon} from "../HeadElement";

interface ConsultingHeadElementProps {
    title: string
}

export const ConsultingHeadElement = (p: ConsultingHeadElementProps) => {
    return (
        <Head>
            <title>{p.title}</title>
            <HeadElementCommon />
        </Head>
    )
}