import Image from "next/image"

import {Page} from "../../components/Page";
import {CourseHeadElement} from "../../courses/CourseHeadElement";

export const Spark = () => {
    return (
        <Page headElement={<CourseHeadElement title="Vidya | Software Engineering with Apache Spark"  />}>
            <CourseHeader />
            <Description />
        </Page>
    )
}

export const CourseHeader = () => {
    return (
        <div className="bg-blue-light">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-base font-semibold text-green-dark tracking-wide uppercase">Data Science</h1>
                    <h2 className="mt-1 text-4xl font-extrabold text-red sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Software Engineering with Apache Spark
                    </h2>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-dark">
                        Combine the power of Apache Spark with the quality from agile software engineering to transform your user data into
                        business intelligence to take your organization to the next level.
                    </p>
                </div>
            </div>
        </div>
    )
}

const Description = () => {
    return (
        <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <div className="aspect-h-9 aspect-w-16">
                        <Image
                            src="/img/courses/img.png"
                            alt="Collaborating software engineers"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className="opacity-20 lg:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 lg:bg-blue mix-blend-multiply" />
                </div>
            </div>
            <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="leading-6 text-red font-semibold tracking-wide uppercase">Description</h2>
                        <p className="mt-8 text-lg font-medium lg:text-gray-dark lg:font-normal">
                            Apache Spark is great for organizations who want their analytics
                            developed fast and executed fast. The problem is that large-scale distributed computing is
                            always hard. It’s not like you can set a breakpoint on code running on multiple machines when
                            things go wrong. Monitoring your analytics jobs and optimizing accordingly are important. You
                            also have to rethink the way you approach concepts like architecture, security, and software
                            engineering techniques like testing and DevSecOps.
                        </p>
                        <p className="mt-8 text-lg font-medium lg:text-gray-dark lg:font-normal">
                            <span className=" text-red font-semibold">Software Engineering with Apache Spark</span> teaches
                            you how to leverage just enough Scala to integrate
                            powerful data pipelines into your existing monolithic, microservices, and/or serverless architecture.
                            You will also learn how your pipelines can benefit from the same testing, continuous integration,
                            containerization with Docker, container orchestration with Kubernetes, and security hardening
                            as the others components of your enterprise.
                        </p>
                        <div className="mt-5 text-gray-dark">
                            <h3 className="font-semibold">What makes this course different</h3>
                            <p className="font-medium lg:text-gray-dark lg:font-normal">
                                Apache Spark is a huge topic, and the typical Spark course tries to cover too much in too
                                short a period, which leaves you overwhelmed. Meanwhile, it ignores any discussion of
                                architectural patterns, security, and software engineering--the things that separate experiments
                                in your garage from critical pieces of your production architecture.
                            </p>
                            <p className="font-medium">
                                We take a more practical approach. There are rich code examples providing deep insight
                                into the API as you’d expect, but the exercises utilize real datasets from Data.gov and
                                encourage you to collaborate with your peers, the Spark Scaladoc, Stack Overflow, and
                                other sources to discover solutions not explicitly discussed–just as you would at work.
                                We also advise you on where you should drawn the line between configuring Spark yourself and
                                outsourcing that to a provider so you can focus on what you care about.
                            </p>
                            <p>
                                In addition, agile software development and DevOps have taught us the value of build
                                automation, testing, continuous integration, and continuous delivery, and we don’t have
                                to abandon them just because we are working in a distributed environment. In fact, the
                                complexity of distributed systems makes them even more valuable. <span className=" text-red font-semibold">Software Engineering with Apache Spark</span> shows you how to apply these techniques to improve the quality and
                                reliability of your analytics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Spark
