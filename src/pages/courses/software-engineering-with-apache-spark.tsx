import Image from "next/image"

import {Page} from "../../components/Page";
import {CourseHeadElement} from "../../courses/CourseHeadElement";

export const Spark = () => {
    return (
        <Page headElement={<CourseHeadElement title="Vidya | Software Engineering with Apache Spark"  />}>
            <CourseHeader />
            <Description />
            <Instructor />
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
                            src="/img/courses/team.png"
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

const Instructor = () => {
    return (
        <section className="bg-red-light overflow-hidden">
            <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">

                <div className="relative lg:flex lg:items-center">
                    <div className="hidden lg:block lg:flex-shrink-0">
                        <img
                            className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                            src="/img/staff/president.png"
                            alt=""
                        />
                    </div>

                    <div className="relative lg:ml-10">
                        <svg
                            className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
                            stroke="#455930"
                            fill="none"
                            viewBox="0 0 144 144"
                            aria-hidden="true">
                            <path
                                strokeWidth={2}
                                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                            />
                        </svg>
                        <blockquote className="relative">
                            <div className="text-2xl leading-9 font-medium text-gray-900">
                                <p>
                                    I have built several Scala and Apache Spark applications currently in production, and I
                                    worked with the original Apache Spark team, AMPLab at UC Berkeley, on a research project
                                    for DARPA known as XDATA. Somehow I have helped enough developers around the world to
                                    earn Spark and Scala badges on Stack Overflow. I am passionate about Spark and look
                                    forward to helping you harness its power.
                                </p>
                            </div>
                            <footer className="mt-8">
                                <div className="flex">
                                    <div className="flex-shrink-0 lg:hidden">
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="/img/staff/president.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 lg:ml-0">
                                        <div className="text-lg lg:text-xl font-medium text-gray-dark">Neil Chaudhuri</div>
                                        <div className="text-base lg:text-lg font-medium text-red">Course instructor</div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Spark
