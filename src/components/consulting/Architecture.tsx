import Image from "next/image";

export const Architecture = () => {
    return (
        <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <div className="aspect-h-9 aspect-w-16">
                        <Image
                            src="/img/consulting/development.jpg"
                            alt="Programming"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority={true}
                            loading="eager"
                            className="opacity-20 lg:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 lg:bg-blue mix-blend-multiply"/>
                </div>
            </div>
            <div
                className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue sm:text-4xl">Architecture and Development</h2>
                        <p className="mt-8 text-lg font-medium lg:text-gray-dark lg:font-normal">
                            The simplest architectures are the most maintainable and the most secure. Still, it takes experience
                            and skill and patience to start simple and to recognize the inflection points where the benefits
                            of more complexity outweigh the costs. Vidya can help you discover the emergent architecture
                            best suited to meet your challenges.
                        </p>
                        <p className="mt-8 text-lg font-medium lg:text-gray-dark lg:font-normal">
                            In an industry rife with buzzwords and with vendors eager to sell you solutions you don't need,
                            trust Vidya to help you understand patterns and technologies like microservices, state machines, event-driven
                            architectures, serverless, event sourcing, CQRS, or Zero Trust and more importantly if and when
                            they can generate value for your organization. We have guided commercial businesses and
                            government agencies to help them realize the architectures they need to deliver value to their users,
                            and we can do the same for you.
                        </p>
                        <p className="mt-8 text-lg font-medium lg:text-gray-dark lg:font-normal">
                            Software development
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}