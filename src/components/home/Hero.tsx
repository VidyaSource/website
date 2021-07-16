/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from "next/image";
import Link from "next/link";
import {ThemeModeButton} from "../ThemeModeButton";

const navigation = [
    {name: 'Courses', href: '/courses'},
    {name: 'Consulting', href: '/consulting'},
    {name: 'Blog', href: '/blog'},
    {name: 'Tutorials', href: '/tutorials'},
]

export const Hero = () => {
    return (
        <div className="relative bg-blue-light dark:bg-blue overflow-hidden">
            <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
                <div className="relative h-full max-w-7xl mx-auto">
                    <svg
                        className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 484"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-red dark:text-red-light" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={184} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width={404}
                        height={484}
                        fill="none"
                        viewBox="0 0 404 484"
                    >
                        <defs>
                            <pattern
                                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-red dark:text-red-light" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
                    </svg>
                </div>
            </div>

            <div className="relative pt-6 pb-16 sm:pb-24">
                <Popover>
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                                <nav
                                    className="relative flex items-center justify-between sm:h-10 md:justify-center"
                                    aria-label="Global"
                                >
                                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <Link href="/">
                                                <a className="logo">
                                                    <span className="sr-only">Vidya</span>
                                                    <Image src="/img/vidya.png"
                                                           alt="Vidya"
                                                           height={65}
                                                           width={140}
                                                           quality={100}
                                                           priority={true}/>
                                                </a>
                                            </Link>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-blue-light rounded-md p-2 inline-flex items-center justify-center text-gray hover:text-blue hover:bg-gray-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex md:space-x-10">
                                        {navigation.map((item) => (
                                            <Link href={item.href} key={item.name}>
                                                <a className="font-medium text-blue-dark hover:text-red dark:text-red-light">
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                        <ThemeModeButton className="text-gray"/>
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-md bg-white dark:bg-gray ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div className="logo">
                                                <span className="sr-only">Vidya</span>
                                                <Image src="/img/vidya.png"
                                                       alt="Vidya"
                                                       height={56}
                                                       width={120}
                                                       quality={100}
                                                       priority={true}/>

                                            </div>
                                            <div className="-mr-2">
                                                <ThemeModeButton className="text-gray mr-4 bg-white bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray hover:text-red hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray dark:bg-gray dark:hover:bg-gray-dark" />
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray hover:text-red hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red dark:bg-gray dark:text-white dark:hover:bg-white dark:hover:text-blue">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-blue hover:text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue dark:text-blue-light dark:hover:bg-red dark:focus:ring-blue-light"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <section className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                            <span className="block xl:inline text-red dark:text-red-light">Build faster.</span>{' '}
                            <span className="block italic text-gray-dark dark:text-green-light xl:inline">Build better.</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-dark dark:text-red-light sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Consulting and custom application development to strengthen your business. Courses
                            and content to help you harness technology for yourself.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    )
}
