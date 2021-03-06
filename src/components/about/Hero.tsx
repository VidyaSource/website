import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative bg-gray-50 dark:bg-gray">
            <div className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <section className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1 className="text-4xl tracking-tight font-extrabold text-red dark:text-red-light sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span
                                className="block xl:inline">Vidya is a software services and consulting company</span>{' '}
                            <span className="block text-blue dark:text-blue-light xl:inline">based in Washington, DC, USA</span>
                        </h1>
                    </section>
                </div>
                <div
                    className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full bg-blue z-30">
                    <Image
                        priority={true}
                        loading="eager"
                        objectFit="cover"
                        layout="fill"
                        quality={100}
                        src="/img/about/computers.jpg"
                        alt="About Vidya"

                    />
                    <div className="absolute inset-0 bg-blue mix-blend-multiply"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
