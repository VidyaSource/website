import {BlogPost} from "../lib/blogPost-utils";
import {constants} from "../lib/constants";
import format from "date-fns/format";
import Image from "next/image";

interface BlogPostProps {
    blogPost: BlogPost
}

export const BlogPostCard = (p: BlogPostProps) => {
    const {title, author, description, image: postImage, tags} = p.blogPost.frontMatter
    const link = `/blog/${p.blogPost.slug}`
    const {profileUrl, image: authorImage,} = constants[author]
    const formattedDate = format(p.blogPost.frontMatter.date, "LLLL d, y")
    return (
        <div key={title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <Image
                    layout="fill"
                    quality={100}
                    className="h-48 w-full"
                    objectFit="cover"
                    src={postImage}
                    alt={title}
                />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <a href={link} className="hover:underline">
                            {tags[0]}
                        </a>
                    </p>
                    <a href={link} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                        <p className="mt-3 text-base text-gray-500">{description}</p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <a href={author}>
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
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            <a href={profileUrl} className="hover:underline">
                                {author}
                            </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={formattedDate}>{formattedDate}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
