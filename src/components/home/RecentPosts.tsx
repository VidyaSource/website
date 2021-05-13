import {useQuery} from "react-query";
import {getAllBlogPosts} from "../../lib/blogPost-utils";
import {constants} from "../../lib/constants";
import format from "date-fns/format";
import Image from "next/image";
import Link from "next/link";

export const RecentPosts = () => {
    const {data} = useQuery('posts', getAllBlogPosts)
    const posts = data.slice(0, 3)
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"/>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the Vidya blog</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Discover new insights into everything from agile software development to innovative engineering techniques to the
                        impact of technology on our world
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => {
                        const {title, author, description, image: postImage, tags, date} = post.frontMatter
                        const link = `/blog/${post.slug}`
                        const {profileUrl, image: authorImage,} = constants[author]
                        const formattedDate = format(new Date(date), "LLLL d, y")
                        return (
                        <div key={post.slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
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
                            <div className="flex-1 bg-blue-light p-6 flex flex-col justify-between hover:bg-red-light">
                                <div className="flex-1">
                                    <Link href={link}>
                                    <a className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-dark">{title}</p>
                                        <p className="mt-3 text-base text-gray-dark">{description}</p>
                                    </a>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <Link href={profileUrl}>
                                            <a>
                                            <span className="sr-only">{author}</span>
                                            <img className="h-10 w-10 rounded-full" src={authorImage} alt=""/>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href={profileUrl} className="hover:underline">
                                                {author}
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-dark">
                                            <time dateTime={formattedDate}>{formattedDate}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}