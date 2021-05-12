import {FC, ReactElement, ReactNode} from 'react'
import {Footer} from "./Footer"
import Image from "next/image"
import Link from 'next/link'

interface PageProps {
    headElement: ReactElement
    children: ReactNode
}

export const Page: FC<PageProps> = (p) => {
    return (
        <div className="font-sans">
            {p.headElement}
            <Header/>
            <main className="bg-blue-light">
                {p.children}
            </main>
            <Footer/>
        </div>
    )
}

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    {name: 'Courses', href: '#'},
    {name: 'Consulting', href: '#'},
    {name: 'Blog', href: '/blog'},
    {name: 'Tutorials', href: '#'}
]

export const Header = () => {
    return (
        <header className="bg-red">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-red lg:border-none">
                    <div className="flex items-center rounded-lg">
                        <Link href="/">
                            <a className="logo">
                                <span className="sr-only">Vidya</span>
                                <Image src="/img/vidya.png"
                                       alt="Vidya"
                                       height={40}
                                       width={86}
                                       quality={100}
                                       priority={true}/>
                            </a>
                        </Link>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <Link href={link.href}>
                                    <a key={link.name} className="sm:text-base lg:text-lg font-medium text-white">
                                        {link.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <Link href="#">
                            <a className="inline-block py-2 px-4 sm:text-base lg:text-lg font-medium text-white hover:bg-opacity-75">
                                About
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="inline-block text-white py-2 px-4 sm:text-base lg:text-lg font-medium">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <Link href={link.href}>
                            <a key={link.name}
                               className="sm:text-base lg:text-lg font-medium text-white hover:text-indigo-50">
                                {link.name}
                            </a>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}