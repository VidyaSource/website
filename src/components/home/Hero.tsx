import Image from "next/image";
import Link from "next/link";

const navigation = [
    {name: 'Courses', href: '/courses'},
    {name: 'Consulting', href: '/consulting'},
    {name: 'Blog', href: '/blog'},
    {name: 'Tutorials', href: '/tutorials'},
]

export const Hero = () => {
    return (
        <div className="relative bg-blue-light overflow-hidden">
            <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
                <div className="relative h-full max-w-7xl mx-auto">
                    <svg
                        className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784">
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse">
                                <rect x={0} y={0} width={4} height={4} className="text-red" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                    </svg>
                    <svg
                        className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784">
                        <defs>
                            <pattern
                                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse">
                                <rect x={0} y={0} width={4} height={4} className="text-red" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
                    </svg>
                </div>
            </div>

            <div className="relative pt-6 pb-16 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center"
                         aria-label="Global">
                        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link href="/">
                                    <a className="rounded-md">
                                        <span className="sr-only">Vidya</span>
                                        <Image src="/img/vidya.png"
                                               alt="Vidya"
                                               height={65}
                                               width={140}
                                               quality={100}
                                               priority={true}/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex md:space-x-10 md:text-base lg:text-lg">
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name}>
                                    <a className="font-medium text-blue-dark hover:text-red">
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>

                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                            <span className="block xl:inline text-red">Build faster.</span>{' '}
                            <span className="block italic text-gray-dark xl:inline">Build better.</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-dark sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Consulting and custom application development to strengthen your business. Courses
                            and content to help you harness technology for yourself.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    )
}