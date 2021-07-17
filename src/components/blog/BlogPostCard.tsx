import {BlogPostMetadata} from "../../lib/blogPost-utils";
import {constants} from "../../lib/constants";
import format from "date-fns/format";
import Image from "next/image";
import {MouseEventHandler, useMemo} from "react";
import {selectTags} from "../../lib/selectTags";
import Link from 'next/link'

interface BlogPostCardProps {
    blogPost: BlogPostMetadata
    onTagClick: (tag: string) => MouseEventHandler<HTMLElement>
}

export const BlogPostCard = (p: BlogPostCardProps) => {
    const {title, author, description, image: postImage, tags, date} = p.blogPost.frontMatter
    const link = `/blog/${p.blogPost.slug}`
    const {profileUrl, image: authorImage,} = constants[author]
    const formattedDate = format(new Date(date), "LLLL d, y")
    const selectedTags = useMemo(() => selectTags(tags), tags)

    return (
        <div key={title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0 bg-gray-light hover:bg-red-light">
                <Link href={link}>
                    <a>
                        <div className="h-48 w-full relative">
                            <Image
                                objectFit="cover"
                                layout="fill"
                                quality={100}
                                src={postImage}
                                alt={title}
                            />
                        </div>
                    </a>
                </Link>
            </div>
            <div className="flex-1 bg-white hover:bg-red-light p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium">
                        {
                            selectedTags.map(t => {
                                return (
                                    <span key={`${link}-${t}`} className="a hover:underline pr-2"
                                          aria-label={`Filter all posts by the tag ${t}`} onClick={p.onTagClick(t)}>
                                        {t}
                                    </span>
                                )
                            })
                        }
                    </p>
                    <Link href={link}>
                        <a className="block mt-2">
                            <p className="text-xl font-semibold text-red dark:text-red">{title}</p>
                            <p className="mt-3 text-base text-gray-dark dark:text-gray-dark">{description}</p>
                        </a>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <Link href={profileUrl}>
                            <a>
                                <span className="sr-only">{author}</span>
                                <Image
                                    height="60"
                                    width="60"
                                    quality={100}
                                    className="h-10 w-10 rounded-full"
                                    src={authorImage}
                                    alt={author}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium">
                            <Link href={profileUrl}>
                                <a className="hover:underline text-blue hover:text-green dark:text-blue dark:hover:text-green">
                                    {author}
                                </a>
                            </Link>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-dark">
                            <time dateTime={formattedDate}>{formattedDate}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
