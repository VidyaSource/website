const Offerings = () => {
    return (
        <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="#E0E0E0"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
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
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="#E0E0E0"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="#E0E0E0"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
                    </svg>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <section className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span
                            className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </span>
                    </h1>
                    <p className="mt-8 text-xl text-gray-dark leading-8">
                        At Vidya, our mission is to make technology as fun and accessible as possible. The passion we
                        have for technology doesn’t shut off at 5 PM, and we want to show you how easy it really is to do great things.
                    </p>
                    <p className="mt-8 text-xl text-gray-dark leading-8">
                        Maybe you are a large company looking to deploy secure, modernized, cloud native services via
                        an automated DevSecOps pipeline to cut costs and improve time to market while improving value to your customers.
                    </p>
                    <p className="mt-8 text-xl text-gray-dark leading-8">
                        Maybe you are a small company or nonprofit where everyone has to wear a lot of hats, and someone
                        has asked you to transition your manual spreadsheet analysis into something automated or to
                        retool your website when you’ve never done anything more complicated on the web than tagging people on Facebook.
                    </p>
                    <p className="mt-8 text-xl text-gray-dark leading-8">
                        Maybe you want a passionate ally in promoting diversity and equal, positive treatment in the information technology space.
                    </p>
                    <p className="mt-8 text-xl text-gray-dark leading-8">
                        No matter what you need, we want to be of service to you.
                    </p>
                </section>
                <section className="mt-6 prose prose-lg text-gray-dark mx-auto">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Consulting with your team on architecture or development on large software projects, agile mentoring, or technical communications</li>
                        <li>Custom application development for your organization</li>
                        <li>Training courses focused on the practical lessons that make you more productive and marketable in the real world</li>
                        <li>Blog posts and video tutorials on software development and the ways technology impacts the world</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Offerings
