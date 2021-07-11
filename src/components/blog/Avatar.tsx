import Image from 'next/image'
import {constants} from "../../lib/constants";
import Link from 'next/link'

interface AvatarProps {
    author: string
}

export const Avatar = (p: AvatarProps) => {
    const {profileUrl, image} = constants[p.author]
    return (
        <Link href={profileUrl}>
            <a className="flex-shrink-0 group block">
                <div className="flex items-center justify-center">
                    <Image
                        height="60"
                        width="60"
                        quality={100}
                        className="inline-block h-9 w-9 rounded-full"
                        src={image}
                        alt={p.author}
                    />
                    <span className="ml-3">
                    <p className="pb-0 mb-0 text-sm font-medium text-red dark:text-red-light group-hover:text-blue lg:text-md">{p.author}</p>
                    <p className="pt-0 mt-0 text-xs font-medium text-red group-hover:text-blue dark:group-hover:text-green-light lg:text-xs">
                        <span className="sr-only">Twitter</span>
                        <svg fill="#1DA1F2" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                    </p>
                </span>
                </div>
            </a>
        </Link>
    )
}
