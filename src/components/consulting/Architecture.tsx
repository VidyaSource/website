import Image from "next/image";

export const Architecture = () => {
    return (
        <section className="relative bg-white dark:bg-gray-dark">
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
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red dark:text-red-light sm:text-4xl">Architecture and Development</h2>
                        <p className="mt-8 text-lg font-medium text-gray-dark dark:text-blue-light lg:font-normal">
                            The simplest architectures are the most maintainable and the most secure. Still, it takes experience
                            and skill and patience to start simple and to recognize the inflection points where the benefits
                            of more complexity outweigh the costs. Vidya can help you discover the emergent architecture
                            best suited to meet your challenges.
                        </p>
                        <p className="mt-8 text-lg font-medium text-gray-dark dark:text-blue-light lg:font-normal">
                            In an industry rife with buzzwords and with vendors eager to sow confusion about them in order to sell you solutions you don't need,
                            trust Vidya to help you understand for yourself patterns and technologies like microservices, state machines, event-driven
                            architectures, serverless, event sourcing, CQRS, or Zero Trust but far more importantly if and when
                            they can generate value for your organization. We have guided commercial businesses and
                            government agencies to help them realize the architectures they need to deliver value to their users,
                            and we can do the same for you.
                        </p>
                        <p className="mt-8 text-lg font-medium text-gray-dark dark:text-blue-light lg:font-normal">
                            Software development is similar--also an art form that balances simplicity with abstractions
                            when the complexity is worth it. But here is where the principles of the architecture become the reality
                            that thrills your customers and generates revenue for your business. Vidya can not only help you
                            find the blend of programming languages, frameworks, and tools best suited for the needs of your
                            customers but also help you apply them the right way with best-in-class practices like modeling
                            your domain with object-oriented programming, composing behavior with functional programming,
                            streamlining your user interfaces with design systems and component libraries, creating reproducible
                            machine learning pipelines, automating your builds with DevSecOps, building reliability with
                            immutability and static typing, and standardizing resilient deployments across clouds with containerization and orchestration.
                        </p>
                        <p className="mt-8 text-lg font-medium text-gray-dark dark:text-blue-light  lg:font-normal">
                            It's a lot. We can help.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}