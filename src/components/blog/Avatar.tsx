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
                        <span className="sr-only">LinkedIn</span>
                        <Image
                            height="21"
                            width="24"
                            quality={100}
                            className="inline-block"
                            src="/img/blog/linkedin.png"
                            alt={p.author}
                        />
                    </p>
                </span>
                </div>
            </a>
        </Link>
    )
}
