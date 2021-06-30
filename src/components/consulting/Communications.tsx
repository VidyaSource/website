import Image from "next/image"
import Link from "next/link"

const Communications = () => {
    return (
        <div className="bg-red-light overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red sm:text-4xl">
                            Technology Communications
                        </h2>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:row-start-1 lg:col-start-2">
                        <svg
                            className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-red" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <Image
                                            width={1184}
                                            height={1376}
                                            objectFit="cover"
                                            src="/img/staff/president.png"
                                            quality={100}
                                            className="rounded-lg shadow-lg object-center"
                                            alt="Vidya President Neil Chaudhuri speaking on Trends in Software Engineering"/>
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-dark">
                                    <span className="ml-2">Vidya President Neil Chaudhuri speaking on Trends in Software Engineering</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                            <p className="text-lg text-gray-dark">
                                Technology is meaningless without the ability to express its power through engaging
                                verbal and written communication. Whether explaining the value and risk of a particular
                                technology to customers or writing concise but thorough prose in a proposal, we can
                                communicate our technical expertise effectively to reach the goals of your organization.
                            </p>
                            <p className="text-lg text-gray-dark">
                                We welcome you to look at examples of our communications, some of which target a wide
                                audience while others target people who get excited by phrases like "dependency injection":
                                <div className="mt-5 prose text-gray-dark mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                    <ul>
                                        <li><Link href="/blog"><a>Our blog</a></Link></li>
                                        <li><Link href="/tutorials"><a>Our video tutorials</a></Link></li>
                                        <li>
                                            <Link href="https://gcn.com/Forms/Search-Results.aspx?key=2fae820b-7983-4dbf-9ed5-6ab36d6a8c93">
                                                <a>Columns on Government Computing News</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/learning-the-playbook/">
                                                <a>Guest appearance on Public Spend Forum YouTube series</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://www.pdfpower.com/XML2005Proceedings/ship/77/xmlbinding.PDF">
                                                <a>An old conference paper called XML Data Binding: Integrating XML andObject-Oriented Technologies
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://soft.vub.ac.be/FFSE/Workshops/ELISA-submissions/09-Chaudhuri-full.pdf">
                                                <a>An even older conference paper called J2EE or .NET: A Managerial Perspective
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </p>
                            <p className="text-lg text-gray-dark">
                                Please let us know if you would like us to help you craft RFPs, proposals, or marketing for your organization
                                or to give a talk on any architecture or development topics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communications
