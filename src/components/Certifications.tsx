import Image, {StaticImageData} from "next/image";
import sba from "../../public/img/certifications/8a.png";
import crmsdc from "../../public/img/certifications/crmsdc.png";
import uspaacc from "../../public/img/certifications/uspaacc.svg";

interface Certification {
    img: StaticImageData
    url: string
    alt: string
    certifier: string
    description: string
}

const certifications: Array<Certification> = [
    {
        certifier: "U.S. Small Business Administration",
        img: sba,
        url: "/blog/vidya-is-8a-certified-by-us-small-business-administration",
        alt: "U.S. Small Business Administration 8a Certification",
        description: "Vidya is a certified small disadvantaged business by the SBA"
    },
    {
        certifier: "Capital Region Minority Supplier Development Council",
        img: crmsdc,
        url: "/blog/welcoming-crmsdc-diversity-technology-consulting-minority-owned-business",
        alt: "Capital Region Minority Supplier Development Council Minority Business Enterprise Certification",
        description: "Vidya is a certified Minority Business Enterprise by CRMSDC"
    },
    {
        certifier: "United States Pan Asian American Chamber of Commerce",
        img: uspaacc,
        url: "/blog/welcoming-uspaacc-diversity-technology-consulting-minority-owned-business",
        alt: "United States Pan Asian American Chamber of Commerce Asian American/Minority Owned Business Certification",
        description: "Vidya is a certified Minority Business Enterprise by USPAACC"
    },
]

const Certifications = () => {
    return (
        <div className="relative bg-red-light dark:bg-blue-light pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-red-light dark:bg-gray h-1/3 sm:h-2/3"/>
            </div>
            <section className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-red sm:text-4xl">Certifications</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-dark dark:text-blue-light sm:mt-4">
                        Government and industry recognize Vidya as a small business that brings big value to anyone
                        excited about leveraging technology to do great things.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {certifications.map((c) => {
                        return (
                            <div key={c.certifier} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                <div className="flex-shrink-0 bg-gray-light hover:bg-blue-light">
                                    <a href={c.url}>
                                        <div className="h-48 w-full relative">
                                            <Image
                                                layout="fill"
                                                objectFit="contain"
                                                quality={100}
                                                src={c.img}
                                                alt={c.alt}
                                            />
                                        </div>
                                    </a>
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