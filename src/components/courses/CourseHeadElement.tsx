import Head from 'next/head'
import {HeadElementCommon} from "../HeadElement";

interface CourseHeadElementProps {
    title: string
}

export const CourseHeadElement = (p: CourseHeadElementProps) => {
    return (
        <Head>
            <title>{p.title}</title>
            <HeadElementCommon />
        </Head>
    )
}