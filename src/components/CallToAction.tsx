import Link from 'next/link'

const CallToAction = () => {
    return (
        <div className="bg-blue-light">
            <section
                className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-dark md:text-4xl">
                    <span className="block">Want to transform your business?</span>
                    <span className="block text-red">Get in touch today!</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link href="/contact">
                            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red hover:bg-blue-dark">
                                Contact Us
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CallToAction