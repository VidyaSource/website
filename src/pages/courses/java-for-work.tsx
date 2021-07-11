import Course from "../../components/courses/Course"
import {courses} from "./index";

export const Java = () => {
    const {imageUrl: url, width, height} = courses[0]
    return (
            // @ts-ignore
            <Course courseData={process.env.java} category="Java" image={{url: url, width: width, height: height}}>
                <p className="font-medium text-gray-dark dark:text-blue-light lg:font-normal">
                    The typical Java course teaches you how to code in Java but not how to engineer in Java. You go
                    back
                    to work completely unprepared for the challenges you will face when your team expects you to
                    deliver for a real customer.
                </p>
                <p className="font-medium text-gray-dark dark:text-blue-light">
                    <span className="text-red dark:text-red-light font-semibold">Java for Work</span> operates from the premise that the
                    greatest asset in professional software engineering isn’t what you know but how fast you can
                    learn.
                    Here you solve unfamiliar problems by consulting your peers like us and Google and Stack
                    Overflow for ideas.
                    Just like every day at work. Skills ignored by other Java courses like testing, error handling,
                    and deployment
                    become second nature. The course concludes with a brief discussion of other languages that build
                    on Java’s legacy like
                    Kotlin and Scala.
                </p>
                <p className="text-gray-dark dark:text-blue-light">
                    When you finish this course, you will be a <span className="italic">professional</span> Java
                    engineer.
                </p>
            </Course>
    )
}

export default Java
