import {FC, ReactNode} from 'react'
import Image from "next/image"
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {ThemeButton} from "./ThemeButton";

interface PageProps {
    children: ReactNode
}

const Footer = dynamic(() => import("./Footer"))

export const Page: FC<PageProps> = (p) => {
    return (
        <>
            <div className="font-sans">
                <Header/>
                <main className="bg-blue-light dark:bg-gray">
                    {p.children}
                </main>
                <Footer/>
            </div>
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
        <header className="bg-blue dark:bg-blue">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-red-light lg:border-none">
                    <div className="flex items-center rounded-lg">
                        <Link href="/">
                            <a className="page-logo">
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
                    <div className="flex ml-10 space-x-4">
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
                        <ThemeButton className="px-4 py-2 text-gray-light" />
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