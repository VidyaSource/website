import {FC, ReactElement, ReactNode} from 'react'
import Image from "next/image"
import Link from 'next/link'
import dynamic from 'next/dynamic'

interface PageProps {
    headElement: ReactElement
    children: ReactNode
}

export const Page: FC<PageProps> = (p) => {
    return (
        <>
            <div className="font-sans">
                {p.headElement}
                <Header/>
                <main className="bg-blue-light">
                    {p.children}
                </main>
                <Footer/>
            </div>
            <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b9ebbff15106c8f"/>
        </>
    )
}

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    {name: 'Courses', href: '/courses'},
    {name: 'Consulting', href: '/consulting'},
    {name: 'Blog', href: '/blog'},
    {name: 'Tutorials', href: '/tutorials'}
]

export const Header = () => {
    return (
        <header className="bg-blue">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-red-light lg:border-none">
                    <div className="flex items-center rounded-lg">
                        <Link href="/">
                            <a className="logo">
                                <span className="sr-only">Vidya</span>
                                <Image src="/img/vidya-white.png"
                                       alt="Vidya"
                                       height={40}
                                       width={86}
                                       quality={100}
                                       priority={true}/>
                            </a>
                        </Link>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <Link href={link.href} key={link.name}>
                                    <a className="sm:text-base lg:text-lg font-medium text-white">
                                        {link.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <Link href="/about">
                            <a className="inline-block py-2 px-4 sm:text-base lg:text-lg font-medium text-white hover:bg-opacity-75">
                                About
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="inline-block text-white py-2 px-4 sm:text-base lg:text-lg font-medium">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <a className="sm:text-base lg:text-lg font-medium text-white hover:text-indigo-50">
                                {link.name}
                            </a>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

const Footer = dynamic(() => import("./Footer"))