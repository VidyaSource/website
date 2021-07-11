import Course from "../../components/courses/Course";
import {courses} from "./index";

export const Spark = () => {
    const {imageUrl: url, width, height} = courses[2]
    return (
        // @ts-ignore
        <Course courseData={process.env.spark} category="Data Science" image={{url: url, width: width, height: height}}>
                <p className="font-medium text-gray-dark dark:text-blue-light lg:font-normal">
                    Apache Spark is a huge topic, and the typical Spark course tries to cover too much in
                    too
                    short a period, which leaves you overwhelmed. Meanwhile, it ignores any discussion of
                    architectural patterns, security, and software engineering--the things that separate
                    experiments
                    in your garage from critical pieces of your production architecture.
                </p>
                <p className="font-medium text-gray-dark dark:text-blue-light">
                    We take a more practical approach. There are rich code examples providing deep insight
                    into the API as you’d expect, but the exercises utilize real datasets from Data.gov and
                    encourage you to collaborate with your peers, the Spark Scaladoc, Stack Overflow, and
                    other sources to discover solutions not explicitly discussed–just as you would at work.
                    We also advise you on where you should draw the line between configuring Spark yourself
                    and outsourcing configuration to a provider so you can focus on what you care about.
                </p>
                <p className="text-gray-dark dark:text-blue-light">
                    In addition, agile software development and DevOps have taught us to incorporate quality through
                    build
                    automation, testing, continuous integration, and continuous delivery, and we don’t have
                    to abandon them just because we are working in a distributed environment. In fact, the
                    complexity of distributed systems makes them even more valuable. <span
                    className=" text-red dark:text-red-light font-semibold">Software Engineering with Apache Spark</span> shows
                    you how to apply these techniques to improve the quality and
                    reliability of your analytics.
                </p>
            </Course>
    )
}

export default Spark
