import {Page} from "../../components/Page";
import {CourseHeadElement} from "../../components/courses/CourseHeadElement";
import {CallToAction} from "../../components/CallToAction";
import {CourseHeader} from "../../components/courses/CourseHeader";
import {Description} from "../../components/courses/Description";
import {Syllabus} from "../../components/courses/Syllabus";
import {Instructor} from "../../components/courses/Instructor";

export const Java = () => {
    const name = "Java for Work"
    // @ts-ignore
    const {blurb, description1 , description2, syllabus, quote} = process.env.java
    return (
        <Page headElement={<CourseHeadElement title={`Vidya | ${name}`} />}>
            <CourseHeader category="Data Science" name={name} blurb={blurb}/>
            <Description name={name} description1={description1} description2={description2}>
                <p className="font-medium lg:text-gray-dark lg:font-normal">
                    The typical Java course teaches you how to code in Java but not how to engineer in Java. You go back
                    to work completely unprepared for the challenges you will face when your team expects you to deliver for a real customer.
                </p>
                <p className="font-medium">
                    <span className="text-red font-semibold">Java for Work</span> operates from the premise that the
                    greatest asset in professional software engineering isn’t what you know but how fast you can learn.
                    Here you solve unfamiliar problems by consulting your peers like us and Google and Stack Overflow for ideas.
                    Just like every day at work. Skills ignored by other Java courses like testing, error handling, and deployment
                    become second nature. The course concludes with a brief discussion of other languages that build on Java’s legacy like
                    Kotlin and Scala.
                </p>
                <p>
                    When you finish this course, you will be a <span className="italic">professional</span> Java engineer.
                </p>
            </Description>
            <Syllabus syllabus={syllabus}/>
            <Instructor name="Neil Chaudhuri" quote={quote}/>
            <CallToAction/>
        </Page>
    )
}

export default Java
