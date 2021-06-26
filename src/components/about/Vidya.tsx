const Vidya = () => {
    return (
        <div className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red sm:text-4xl">
                        Our name
                    </p>
                </div>
                <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-lg text-gray-dark">
                        Vidya comes from the Sanskrit for “right knowledge” or “clarity.” We want to embody the learning
                        spirit that is the essence of the word. In software engineering, you learn every day–not only
                        about all the technologies out there and the new ones emerging every day but also about people
                        and what they want to accomplish. We want to work with you to build knowledge and learn from each other.

                    </p>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10">
                        <div className="mx-auto lg:max-w-none space-y-4">
                            <h3 className="text-blue">The Vidya swan</h3>
                            <p>
                                Vidya is associated with the Hindu deity Saraswati because she is the Goddess of Learning. In ancient Indian art and literature, she is often depicted wearing a spotless white sari and riding a white swan.
                            </p>
                            <p>
                                We just hope you like the swan more than <a href="http://www.youtube.com/watch?v=n91ckeyNvQU">Billy Madison</a>.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                        <svg
                            className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-light" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
                        </svg>
                        <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                            <img

                                src="/img/vidya.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vidya
