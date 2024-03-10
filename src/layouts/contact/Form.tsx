import {EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/outline'
import {useState} from "react";

const Form = () => {
    const [from, setFrom] = useState(undefined)
    const [subject, setSubject] = useState(undefined)
    const [message, setMessage] = useState(undefined)
    const [sent, setSent] = useState(false)
    const submit = async (e) => {
        e.preventDefault()
        if (from && subject && message) {
            await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({from: from, subject: subject, message: message})
            })
            setSent(true)
        }
    }

    return (
        <section className="bg-blue-light dark:bg-gray-dark">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="relative bg-white shadow-xl">
                    <h1 className="sr-only">Contact Vidya</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Contact information */}
                        <div className="relative overflow-hidden py-10 px-6 bg-blue sm:px-10 xl:p-12">
                            <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    width={343}
                                    height={388}
                                    viewBox="0 0 343 388"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                        fill="url(#linear1)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear1"
                                            x1="254.553"
                                            y1="107.554"
                                            x2="961.66"
                                            y2="814.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff"/>
                                            <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    width={359}
                                    height={339}
                                    viewBox="0 0 359 339"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                        fill="url(#linear2)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear2"
                                            x1="192.553"
                                            y1="28.553"
                                            x2="899.66"
                                            y2="735.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff"/>
                                            <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    width={160}
                                    height={678}
                                    viewBox="0 0 160 678"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                        fill="url(#linear3)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear3"
                                            x1="192.553"
                                            y1="325.553"
                                            x2="899.66"
                                            y2="1032.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff"/>
                                            <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h1 className="text-lg font-medium text-white">Contact Vidya</h1>
                            <p className="mt-6 text-base text-white max-w-3xl">
                                We would love to work with you and help you use technology to grow your business or
                                jumpstart your career.
                                Please let us know how we can help!
                            </p>
                            <dl className="mt-8 space-y-6">
                                <dt>
                                    <span className="sr-only">Phone number</span>
                                </dt>
                                <dd className="flex text-base text-white hover:text-blue-light">
                                    <PhoneIcon className="flex-shrink-0 w-6 h-6 text-white" aria-hidden="true"/>
                                    <span className="ml-3">+1 (202) 430-5695</span>
                                </dd>
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd className="flex text-base text-white">
                                    <EnvelopeIcon className="flex-shrink-0 w-6 h-6 text-white" aria-hidden="true"/>
                                    <span className="ml-3">info@vidyasource.com</span>
                                </dd>
                            </dl>
                            <ul className="mt-8 flex space-x-12" role="list">
                                <li>

                                        <a className="text-blue-light hover:text-white" href="https://www.linkedin.com/company/vidya-technology-training">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg width={24}
                                                 height={24}
                                                 viewBox="0 0 24 24"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="w-8 h-8"
                                                 aria-hidden="true">
                                                <title>LinkedIn icon</title>
                                                <path
                                                    fillRule="evenodd"
                                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                    clipRule="evenodd" fill="currentColor"
                                                />
                                            </svg>
                                        </a>

                                </li>
                                <li>
                                    <a className="text-blue-light hover:text-white" href="https://github.com/VidyaSource">
                                            <span className="sr-only">GitHub</span>
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </a>

                                </li>
                            </ul>
                        </div>

                        {/* Contact form */}
                        {
                            !sent &&
                            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 dark:bg-red">
                                <h3 className="text-lg font-medium text-gray-dark dark:text-red-light">Send us a message</h3>
                                <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-dark dark:text-red-light">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="EMAIL"
                                                type="email"
                                                autoComplete="email"
                                                onChange={e => setFrom(e.target.value)}
                                                className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-white0 focus:border-white0 border-gray-dark rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-dark dark:text-red-light">
                                            Subject
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                onChange={e => setSubject(e.target.value)}
                                                className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-white0 focus:border-white0 border-gray-dark rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-dark dark:text-red-light">
                                                Message
                                            </label>
                                            <span id="message-max" className="text-sm text-gray-dark dark:text-red-light">
                      Max. 500 characters
                    </span>
                                        </div>
                                        <div className="mt-1">
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={500}
                        onChange={e => setMessage(e.target.value)}
                        className="py-3 px-4 block w-full shadow-sm text-gray-dark focus:ring-white0 focus:border-white0 border border-gray-dark rounded-md"
                        aria-describedby="message-max"
                        defaultValue={''}
                    />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                                        <button
                                            onClick={submit}
                                            className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white0 sm:w-auto"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        }
                        {
                            sent &&
                            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                <h3 className="text-lg font-medium text-gray-dark">Thank you! Talk to you soon!</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form
