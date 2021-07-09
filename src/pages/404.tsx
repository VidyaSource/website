import {Page} from "../components/Page";
import {NextSeo} from "next-seo";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <NextSeo
                title="Vidya | Page Not Found"
                description="Page not found. Let us know how we can help."
            />
            <Page>
                <div className="relative bg-blue-light overflow-hidden">
                    <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
                        <div className="relative h-full max-w-7xl mx-auto">
                            <svg
                                className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                                width={404}
                                height={784}
                                fill="none"
                                viewBox="0 0 404 784"
                            >
                                <defs>
                                    <pattern
                                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-dark"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                            </svg>
                            <svg
                                className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                                width={404}
                                height={784}
                                fill="none"
                                viewBox="0 0 404 784"
                            >
                                <defs>
                                    <pattern
                                        id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-dark"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
                            </svg>
                        </div>
                    </div>

                    <div className="relative pt-6 pb-16 sm:pb-24">
                        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                            <div className="text-center">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-dark sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">That page is</span>{' '}
                                    <span className="block text-red xl:inline">not found</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-base text-gray-dark sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Sorry, we can't find that. This is what the kids call a 404. Let us know how we can
                                    help.
                                </p>
                                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                                    <div className="rounded-md shadow">
                                        <Link href="/contact">
                                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red hover:bg-blue md:py-4 md:text-lg md:px-10">
                                                Contact us
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <Link href="/about">
                                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green hover:bg-blue md:py-4 md:text-lg md:px-10">
                                                About us
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </Page>
        </>
    )
}

export default NotFound
