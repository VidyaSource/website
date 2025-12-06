import {Popover, Transition} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Fragment, useEffect, useState} from 'react'
import navigation from '../../components/navigation.json';
import "../../globals.css"

interface HeroProps {
    desktopLogo: any
    mobileLogo: any
    themeButton: any
}

export const Hero = (p: HeroProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');

    useEffect(() => {
        // Trigger entrance animations
        setIsVisible(true);
        // Get current path for active nav highlighting
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    const isCurrentPage = (href: string) => {
        if (href === '/') return currentPath === '/';
        return currentPath.startsWith(href);
    };

    return (
        <div className="relative bg-gradient-to-br from-blue-light via-white to-blue-light dark:from-blue dark:via-blue-dark dark:to-blue overflow-hidden min-h-[90vh] flex flex-col">
            {/* Skip to main content link - accessibility best practice */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-dark"
            >
                Skip to main content
            </a>

            {/* Modern decorative background elements */}
            <div className="hidden sm:block sm:absolute sm:inset-0 sm:overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 max-w-7xl mx-auto">
                    {/* Animated gradient orbs - soft, modern aesthetic */}
                    <div className="absolute top-20 -left-20 w-72 h-72 bg-red/20 dark:bg-red-light/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-40 -right-20 w-96 h-96 bg-blue/20 dark:bg-blue-light/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
                    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green/20 dark:bg-green-light/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
                    
                    {/* Subtle geometric accent shapes */}
                    <div className="absolute top-1/4 right-10 w-32 h-32 border border-blue/10 dark:border-blue-light/10 rounded-full" />
                    <div className="absolute top-1/3 right-20 w-48 h-48 border border-red/10 dark:border-red-light/10 rounded-full" />
                    <div className="absolute bottom-1/4 left-10 w-40 h-40 border border-green/10 dark:border-green-light/10 rounded-full" />
                    
                    {/* Floating gradient lines */}
                    <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-blue/20 dark:via-blue-light/20 to-transparent" />
                    <div className="absolute top-2/3 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-red/20 dark:via-red-light/20 to-transparent" />
                </div>
            </div>

            {/* Header with navigation */}
            <header className="relative pt-6 pb-4 z-10">
                <Popover>
                    {({open, close}) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <nav
                                    className="relative flex items-center justify-between bg-white/60 dark:bg-blue-dark/70 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray/10 dark:ring-white/10"
                                    aria-label="Main navigation"
                                    role="navigation"
                                >
                                    {/* Logo */}
                                    <div className="flex items-center flex-shrink-0">
                                        <a 
                                            className="logo group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue rounded-lg transition-transform duration-200 hover:scale-105" 
                                            href="/"
                                            aria-label="Vidya - Go to homepage"
                                        >
                                            {p.desktopLogo}
                                        </a>
                                    </div>

                                    {/* Desktop navigation */}
                                    <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                                                className={`
                                                    relative px-4 py-2 text-sm lg:text-base font-semibold rounded-lg
                                                    transition-all duration-200 ease-in-out
                                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue
                                                    ${isCurrentPage(item.href)
                                                        ? 'text-red dark:text-red-light bg-red-light/50 dark:bg-red/20'
                                                        : 'text-blue-dark dark:text-white hover:text-red dark:hover:text-red-light hover:bg-gray-light dark:hover:bg-white/20'
                                                    }
                                                `}
                                            >
                                                {item.name}
                                                {/* Active indicator */}
                                                {isCurrentPage(item.href) && (
                                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-red dark:bg-red-light rounded-full" />
                                                )}
                                            </a>
                                        ))}
                                        <div className="ml-4 pl-4 border-l-2 border-blue/50 dark:border-blue-light/60 flex items-center">
                                            {p.themeButton}
                                        </div>
                                    </div>

                                    {/* Mobile menu button */}
                                    <div className="flex items-center md:hidden space-x-3">
                                        <div className="p-1 rounded-lg bg-gray-light/50 dark:bg-white/10">
                                            {p.themeButton}
                                        </div>
                                        <Popover.Button
                                            className="inline-flex items-center justify-center p-2 rounded-lg
                                                text-blue-dark dark:text-white
                                                bg-gray-light/50 dark:bg-white/10
                                                hover:bg-gray-light dark:hover:bg-white/20
                                                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue
                                                transition-colors duration-200"
                                            aria-expanded={open}
                                        >
                                            <span className="sr-only">{open ? 'Close menu' : 'Open main menu'}</span>
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                                        </Popover.Button>
                                    </div>
                                </nav>
                            </div>

                            {/* Mobile navigation menu */}
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 -translate-y-2"
                                enterTo="opacity-100 translate-y-0"
                                leave="duration-150 ease-in"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-2"
                            >
                                <Popover.Panel
                                    className="absolute top-0 inset-x-0 z-50 p-2 transition transform origin-top md:hidden"
                                >
                                    <div className="rounded-2xl shadow-xl bg-white dark:bg-gray-dark ring-1 ring-black/5 dark:ring-white/10 overflow-hidden">
                                        {/* Mobile menu header */}
                                        <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-gray-light/50 dark:border-gray/50">
                                            <a 
                                                href="/" 
                                                className="logo focus:outline-none focus:ring-2 focus:ring-blue rounded-lg"
                                                aria-label="Vidya - Go to homepage"
                                                onClick={() => close()}
                                            >
                                                {p.mobileLogo}
                                            </a>
                                            <Popover.Button
                                                className="inline-flex items-center justify-center p-2 rounded-lg
                                                    text-gray-dark dark:text-gray-light
                                                    hover:bg-gray-light dark:hover:bg-gray
                                                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue
                                                    transition-colors duration-200"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                        
                                        {/* Mobile menu navigation links */}
                                        <nav className="px-3 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                                                    className={`
                                                        flex items-center px-4 py-3 rounded-xl text-base font-medium
                                                        transition-all duration-200
                                                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue
                                                        ${isCurrentPage(item.href)
                                                            ? 'text-red dark:text-red-light bg-red-light/30 dark:bg-red/20'
                                                            : 'text-blue-dark dark:text-blue-light hover:bg-blue-light dark:hover:bg-blue/30'
                                                        }
                                                    `}
                                                    onClick={() => close()}
                                                >
                                                    {item.name}
                                                    {isCurrentPage(item.href) && (
                                                        <span className="ml-auto w-2 h-2 bg-red dark:bg-red-light rounded-full" />
                                                    )}
                                                </a>
                                            ))}
                                        </nav>

                                        {/* Mobile menu CTA */}
                                        <div className="px-5 py-4 bg-gray-light/50 dark:bg-gray/30 border-t border-gray-light/50 dark:border-gray/50">
                                            <a
                                                href="/consulting"
                                                className="block w-full text-center px-4 py-3 rounded-xl
                                                    bg-red dark:bg-red-light text-white dark:text-blue-dark
                                                    font-semibold text-base
                                                    hover:bg-blue-dark dark:hover:bg-blue-light
                                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red
                                                    transition-colors duration-200"
                                                onClick={() => close()}
                                            >
                                                Get Started
                                            </a>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </header>

            {/* Hero content */}
            <main id="main-content" className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <section 
                    className={`
                        text-center max-w-4xl mx-auto py-12 sm:py-16
                        transition-all duration-700 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    {/* Main headline with staggered animation */}
                    <h1 
                        className={`
                            text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                            tracking-tight font-extrabold
                            transition-all duration-700 ease-out delay-100
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <span className="block text-blue dark:text-blue-light mb-2">
                            Welcome to Vidya.
                        </span>
                    </h1>
                    
                    {/* Subheadline */}
                    <h2 
                        className={`
                            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                            tracking-tight font-bold mt-4
                            transition-all duration-700 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <span className="text-red dark:text-red-light">Build faster.</span>{' '}
                        <span className="italic text-gray-dark dark:text-green-light">Build better.</span>
                    </h2>
                    
                    {/* Description */}
                    <p 
                        className={`
                            mt-6 sm:mt-8 max-w-2xl mx-auto 
                            text-lg sm:text-xl md:text-2xl 
                            text-gray-dark dark:text-gray-light
                            leading-relaxed
                            transition-all duration-700 ease-out delay-300
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Software development and architecture modernization to strengthen your business.
                        Courses and content to help you harness technology for yourself.
                    </p>
                    
                    {/* CTA Buttons */}
                    <div 
                        className={`
                            mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6
                            transition-all duration-700 ease-out delay-500
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <a
                            href="/consulting"
                            className="w-full sm:w-auto inline-flex items-center justify-center
                                px-8 py-4 text-base sm:text-lg font-semibold rounded-xl
                                bg-red dark:bg-red-light text-white dark:text-blue-dark
                                hover:bg-blue-dark dark:hover:bg-blue-light
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red
                                transform hover:scale-105 transition-all duration-200
                                shadow-lg hover:shadow-xl"
                        >
                            Partner With Us
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="/courses"
                            className="w-full sm:w-auto inline-flex items-center justify-center
                                px-8 py-4 text-base sm:text-lg font-semibold rounded-xl
                                bg-white/80 dark:bg-white/10 
                                text-blue-dark dark:text-blue-light
                                border-2 border-blue dark:border-blue-light
                                hover:bg-blue-light dark:hover:bg-blue/30
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue
                                transform hover:scale-105 transition-all duration-200"
                        >
                            Explore Courses
                        </a>
                    </div>
                </section>
            </main>

            {/* Decorative bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden" aria-hidden="true">
                <svg
                    className="relative block w-full h-12 sm:h-16 md:h-20"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z"
                        className="fill-white dark:fill-gray-dark"
                    />
                </svg>
            </div>
        </div>
    )
};
