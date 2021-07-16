import Image from "next/image";
import {FC} from "react";

interface DescriptionProps {
    name: string
    description1: string
    description2: string
}

export const Description: FC<DescriptionProps> = (p) => {
    return (
        <div className="relative bg-white dark:bg-gray">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <div className="aspect-h-9 aspect-w-16">
                        <Image
                            src="/img/courses/team.jpg"
                            alt="Collaborating software engineers"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className="opacity-20 lg:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 lg:bg-blue mix-blend-multiply"/>
                </div>
            </div>
            <div
                className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8">
                    <section className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="leading-6 text-red dark:text-red-light font-semibold tracking-wide uppercase">Description</h2>
                        <p className="mt-8 text-lg font-medium text-gray-dark dark:text-blue-light lg:font-normal">
                            {p.description1}
                        </p>
                        <p className="mt-8 text-lg font-medium text-gray-dark dark:text-blue-light lg:font-normal">
                            <span
                                className=" text-red dark:text-red-light font-semibold">{p.name}</span> {p.description2}
                        </p>
                        <div className="mt-5 text-gray-dark dark:text-blue-light">
                            <h3 className="font-semiboldt">What makes this course different</h3>
                            {p.children}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}