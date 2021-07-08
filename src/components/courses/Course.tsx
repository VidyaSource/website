import {Page} from "../../components/Page";
import {CourseHeadElement} from "../../components/courses/CourseHeadElement";
import {CourseHeader} from "../../components/courses/CourseHeader";
import {Description} from "../../components/courses/Description";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {CourseJsonLd, NextSeo} from "next-seo";
import {FC} from "react";
import {Staff} from "../../lib/constants"
import {SyllabusType} from "./Syllabus";

const CallToAction = dynamic(() => import("../../components/CallToAction"))
const Syllabus = dynamic(() => import("../../components/courses/Syllabus"))
const Instructor = dynamic(() => import("../../components/courses/Instructor"))

interface CourseData {
    name: string,
    blurb: string,
    description1: string,
    description2: string,
    syllabus: SyllabusType,
    quote: string
}

interface Image {
    url: string
    width: number
    height: number
}

interface CourseProps {
    courseData: CourseData
    category: string
    instructor?: Staff
    image: Image
}

export const Course: FC<CourseProps> = (p) => {
    const {name, blurb, description1, description2, syllabus, quote} = p.courseData
    const router = useRouter()
    const url = `${process.env.basePath}${router.pathname}`
    const title = `Vidya | ${name}`
    const instructor = p.instructor ?? "Neil Chaudhuri"
    return (
        <>
            <NextSeo
                title={title}
                description={blurb}
                canonical={url}
                openGraph={{
                    title: title,
                    description: blurb,
                    url: url,
                    type: 'og:product',
                    locale: "en_US",
                    images: [
                        {
                            url: `${process.env.basePath}${p.image.url}`,
                            alt: title,
                            width: p.image.width,
                            height: p.image.height
                        },
                    ]
                }}
            />
            <CourseJsonLd
                courseName={name}
                providerName="Vidya"
                providerUrl={url}
                description={blurb}
            />
            <Page headElement={<CourseHeadElement title={title}/>}>
                <CourseHeader category={p.category} name={name} blurb={blurb}/>
                <Description name={name} description1={description1} description2={description2}>
                    {p.children}
                </Description>
                <Syllabus syllabus={syllabus}/>
                <Instructor name={instructor} quote={quote}/>
                <CallToAction/>
            </Page>
        </>
    )
}

export default Course
