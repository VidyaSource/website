import {Page} from "../../components/Page";
import Image from "next/image";
import Link from "next/link";
import {NextSeo} from "next-seo";

const tutorials = [
    {
        title: 'Nina Reasons to Try Scala',
        href: '/tutorials/nine-reasons-to-try-scala',
        description: "We will look at nine compelling features of Scala that will hopefully impress you and inspire you to explore both the language itself and its applications.",
        imageUrl: '/img/tutorials/programming.jpg',
    },
    {
        title: 'Starting with Data',
        href: '/tutorials/starting-with-data',
        description: "This tutorial is for beginners in software development who want to learn just enough to access data on the web and visualize it on their own websites or mobile device applications",
        imageUrl: '/img/tutorials/data.jpg',
    },
    {
        title: 'Comparison Shopping',
        href: 'tutorials/comparison-shopping',
        description: "This tutorial is for intermediate-level Java developers who want to add comparison and sorting capabilities to the custom classes they’ve created for their projects.",
        imageUrl: '/img/tutorials/car-shopping.jpg',
    },
    {
        title: 'Web Design 101',
        href: 'tutorials/web-design-101',
        description: "This tutorial is for people brand new to web design who haven’t done anything more complicated on the web than tag their friends on social media.",
        imageUrl: '/img/tutorials/web-design.jpg',
    },
]

export const Tutorials = () => {
    const title = "Vidya | Tutorials"
    const description = "Build faster. Build better. Technology tutorials by Vidya. With code!"
    const url = `${process.env.basePath}/tutorials`
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    title: title,
                    description: description,
                    url: url,
                    type: 'company',
                }}
            />
            <Page>
                <div className="relative bg-blue-light pt-16 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white dark:bg-gray-dark h-1/3 sm:h-2/3"/>
                    </div>
                    <section className="relative max-w-7xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl tracking-tight font-extrabold text-red dark:text-red-light sm:text-4xl mt-0">Tutorials by Vidya</h1>
                            <h2 className="mt-3 max-w-2xl mx-auto text-xl text-gray-dark dark:text-blue-light sm:mt-4">
                                Watch our video tutorials (with accompanying source code on GitHub) to learn something new.
                            </h2>
                        </div>
                        <nav className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            {tutorials.map((tutorial) => (
                                <div key={tutorial.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-shrink-0 bg-gray-light hover:bg-red-light">
                                        <Link href={tutorial.href}>
                                            <a>
                                                <div className="h-48 w-full relative">
                                                    <Image
                                                        loading="eager"
                                                        priority={true}
                                                        objectFit="cover"
                                                        layout="fill"
                                                        quality={100}
                                                        src={tutorial.imageUrl}
                                                        alt={tutorial.title}
                                                    />
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between hover:bg-red-light">
                                        <div className="flex-1">
                                            <Link href={tutorial.href}>
                                                <a className="block mt-2">
                                                    <p className="text-xl font-semibold text-red dark:text-red">{tutorial.title}</p>
                                                    <p className="mt-3 text-base text-gray-dark dark:text-gray-dark">{tutorial.description}</p>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </section>
                </div>
            </Page>
        </>
    )
}

export default Tutorials
