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
                <main
                    className="min-h-screen bg-cover bg-top sm:bg-top"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1623598018342-0a5f10b1d376?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80")',
                    }}
                >
                    <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
                        <p className="text-sm font-semibold text-gray-dark dark:text-gray-dark text-opacity-75 uppercase tracking-wide">404 error</p>
                        <h1 className="mt-2 text-4xl font-extrabold text-red dark:text-red tracking-tight sm:text-5xl">
                            Uh oh! I think you’re lost.
                        </h1>
                        <p className="mt-2 text-lg font-medium text-gray-dark dark:text-gray-dark text-opacity-75">
                            It looks like the page you’re looking for doesn't exist.
                        </p>
                        <div className="mt-6">
                            <a
                                href="/"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue dark:text-white bg-white dark:bg-red hover:bg-red-light hover:text-gray-dark dark:hover:bg-blue">
                                Go back home
                            </a>
                        </div>
                    </div>
                </main>
            </Page>
        </>
    )
}

export default NotFound
