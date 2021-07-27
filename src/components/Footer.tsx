import Link from "next/link";

const navigation = {
    main: [
        {name: 'Courses', href: '/courses'},
        {name: 'Consulting', href: '/consulting'},
        {name: 'Blog', href: '/blog'},
        {name: 'Tutorials', href: '/tutorials'},
        {name: 'About', href: '/about'},
        {name: 'Contact', href: '/contact'},
    ]
}

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray dark:border-t-2 ">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <Link href={item.href}>
                                <a className="text-base dark:text-white hover:text-red dark:hover:text-green-light">
                                    {item.name}
                                </a>
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    <Link href="https://www.linkedin.com/company/3285099">
                        <a className={"dark:text-white hover:text-linkedin dark:hover:text-red-light"}>
                            <span className="sr-only">LinkedIn</span>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                <title>LinkedIn icon</title>
                                <path
                                    fillRule="evenodd"
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://www.facebook.com/VidyaSource">
                        <a className={"dark:text-white hover:text-facebook dark:hover:text-red-light"}>
                            <span className="sr-only">Facebook</span>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                <title>Facebook icon</title>
                                <path
                                    fillRule="evenodd"
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://twitter.com/VidyaSource">
                        <a className={"dark:text-white hover:text-twitter dark:hover:text-red-light"}>
                            <span className="sr-only">Twitter</span>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                <title>Twitter icon</title>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://github.com/VidyaSource">
                        <a className={"dark:text-white hover:text-github dark:hover:text-red-light"}>
                            <span className="sr-only">GitHub</span>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                <title>GitHub icon</title>
                                <path
                                    fillRule="evenodd"
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UC24LVc8Bb65SF6LW-SLog9A">
                        <a className={"dark:text-white hover:text-youtube dark:hover:text-red-light"}>
                            <span className="sr-only">YouTube</span>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                <title>YouTube icon</title>
                                <path
                                    fillRule="evenodd"
                                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UC24LVc8Bb65SF6LW-SLog9A">
                        <a className={"dark:text-white hover:text-stackoverflow dark:hover:text-red-light"}>
                            <span className="sr-only">Stack OVerflow</span>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                                <title>Stack Overflow icon</title>
                                <path
                                    fillRule="evenodd"
                                    d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </Link>
                </div>
                <p className="mt-8 text-center text-base lg:text-lg text-gray-dark dark:text-green-light">
                    &copy; {new Date().getFullYear()} Vidya, LLC. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
