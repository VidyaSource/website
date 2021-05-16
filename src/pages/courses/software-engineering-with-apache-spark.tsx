import Image from "next/image"

import {Page} from "../../components/Page";
import {CourseHeadElement} from "../../courses/CourseHeadElement";

export const Spark = () => {
    return (
        <Page headElement={<CourseHeadElement title="Vidya | Software Engineering with Apache Spark"  />}>
            <Header />
            <Description />
        </Page>
    )
}

export const Header = () => {
    return (
        <div className="bg-blue-light">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-base font-semibold text-green-dark tracking-wide uppercase">Data Science</h1>
                    <h2 className="mt-1 text-4xl font-extrabold text-red sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Software Engineering with Apache Spark
                    </h2>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Combine the power of Apache Spark with the efficiency of agile software engineering to transform your user data into
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
                        <Image src="/img/courses/img.png" height={1264} width={840} quality={100}  />
                </div>
            </div>
            <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="leading-6 text-red font-semibold tracking-wide uppercase">Description</h2>
                        <p className="mt-8 text-lg text-gray-dark">
                            Apache Spark has become a popular alternative for companies who want their analytics
                            developed fast and executed fast. The problem is that large-scale distributed computing is
                            always hard. It’s not like you can set a breakpoint on code running on multiple machines when
                            things go wrong. Monitoring your analytics jobs and optimizing accordingly are important. You
                            also have to rethink the way you approach concepts like architecture, security, and software
                            engineering techniques like testing and DevSecOps.
                        </p>
                        <div className="mt-5 text-gray-dark">
                            <h3>What makes this course different</h3>
                            <p>
                                Apache Spark is a huge topic, and the typical Spark course tries to cover too much in too
                                short a period, which leaves you overwhelmed. Meanwhile, it ignores any discussion of
                                architectural patterns, security, and software engineering--the things that separate experiments
                                in your garage from critical pieces of your production architecture.
                            </p>
                            <p>
                                Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus adipiscing lacus,
                                eget. Nunc fermentum id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi neque, ornare
                                suspendisse amet, nibh. Facilisi volutpat lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                                imperdiet ac eros, diam mauris, tortor. Risus id sit molestie magna.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Spark
