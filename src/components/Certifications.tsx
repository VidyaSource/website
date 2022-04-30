import Image from "next/image";
import Link from "next/link";

interface Certification {
    img: string
    url: string
    alt: string
    certifier: string
    description: string
}

const certifications: Array<Certification> = [
    {
        certifier: "U.S. Small Business Administration",
        img: "/img/certifications/8a.png",
        url: "//www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program",
        alt: "U.S. Small Business Administration 8a Certification",
        description: "Vidya is a certified small disadvantaged business by the SBA"
    },
    {
        certifier: "Capital Region Minority Supplier Development Council",
        img: "/img/certifications/crmsdc.png",
        url: "//crmsdc2.wpengine.com/",
        alt: "Capital Region Minority Supplier Development Council Minority Business Enterprise Certification",
        description: "Vidya is a certified Minority Business Enterprise by CRMSDC"
    },
    {
        certifier: "United States Pan Asian American Chamber of Commerce",
        img: "/img/certifications/uspaacc.svg",
        url: "//uspaacc.com/",
        alt: "United States Pan Asian American Chamber of Commerce Asian American/Minority Owned Business Certification",
        description: "Vidya is a certified Minority Business Enterprise by USPAACC"
    },
]

const Certifications = () => {
    return (
        <div className="relative bg-gray-light dark:bg-blue-light pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white dark:bg-gray h-1/3 sm:h-2/3"/>
            </div>
            <section className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">The latest from the
                        Vidya blog</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-dark dark:text-blue-light sm:mt-4">
                        Discover <Link href="/blog"><a>new insights</a></Link> into everything from agile software
                        development to innovative engineering techniques to the
                        impact of technology on our world
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {certifications.map((c) => {
                        return (
                            <div key={c.certifier} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                <div className="flex-shrink-0 bg-gray-light hover:bg-red-light">
                                    <Link href={c.url}>
                                        <a>
                                            <div className="h-48 w-full relative">
                                                <Image
                                                    objectFit="cover"
                                                    layout="fill"
                                                    quality={100}
                                                    src={c.img}
                                                    alt={c.alt}
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                                <div
                                    className="flex-1 bg-blue-light dark:bg-white p-6 flex flex-col justify-between hover:bg-red-light">
                                    <div className="flex-1">
                                        <Link href={c.url}>
                                            <a className="block mt-2">
                                                <p className="text-xl font-semibold text-red dark:text-red">{c.certifier}</p>
                                                <p className="mt-3 text-base text-gray-dark dark:text-gray-dark">{c.description}</p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Certifications