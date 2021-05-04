import Image from 'next/image'
import {constants} from "../lib/constants";

interface AvatarProps {
    author?: string
    image: string
    alt: string
    profileUrl?: string
}

export const Avatar = (p: AvatarProps) => {
    const author = p.author ?? constants.people.president.name
    const profileUrl = p.profileUrl ?? constants.people.president.twitter
    return (
        <a href={profileUrl} className="flex-shrink-0 group block">
            <div className="flex items-center justify-center">
                <Image
                    height="60"
                    width="60"
                    quality={100}
                    className="inline-block h-9 w-9 rounded-full"
                    src={p.image}
                    alt={p.alt}
                />
                <span className="ml-3">
                    <p className="pb-0 mb-0 text-sm font-medium text-red group-hover:text-blue lg:text-md">{author}</p>
                    <p className="pt-0 mt-0 text-xs font-medium text-red group-hover:text-blue lg:text-xs">View profile</p>
                </span>
            </div>
        </a>
    )
}
