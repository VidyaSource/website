// noinspection JSUnfilteredForInLoop

import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import {zonedTimeToUtc} from 'date-fns-tz'

export interface FrontMatter {
    author: "Neil Chaudhuri" | string
    title: string
    description: string
    image: string
    date: Date
    tags: string[]
}

export interface BlogPost {
    slug: string
    frontMatter: FrontMatter
    content: string
}

const postsDirectory = join(process.cwd(), 'src/_content/blog')

export const getBlogPostSlugs: () => Promise<string[]> = () => {
    return fs.promises.readdir(postsDirectory)
}

export const getBlogPostBySlug: (slug: string) => Promise<BlogPost> = async (slug) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = await fs.promises.readFile(fullPath, 'utf8')
    // @ts-ignore
    const {data, content} = matter(fileContents)
    const tags = data.tags ?? []
    const categories = data.categories ?? []
    const image = data.banner || data.image
    const frontMatter = {
        tags: tags.concat(categories).sort(),
        image: image,
        date:  zonedTimeToUtc(data.date as Date, "America/New_York"),
        author: data.author,
        title: data.title,
        description: data.description
    }

    return {
        slug: realSlug,
        frontMatter: frontMatter,
        content: content
    }
}

export const getAllBlogPosts: () => Promise<BlogPost[]> = async () => {
    const slugs = await getBlogPostSlugs()
    const posts = await Promise.all(slugs.map((slug) => getBlogPostBySlug(slug)))

    return sort(posts)
}

export interface BlogPostCategories {
    [category: string]: undefined | BlogPost[]
}

export const getBlogPostsByTags: () => Promise<BlogPostCategories> = async () => {
    const slugs = await getBlogPostSlugs()
    const categories: BlogPostCategories = {}
    const posts = await Promise.all(slugs.map((slug) => getBlogPostBySlug(slug)))
    posts.forEach((blogPost) => {
            blogPost.frontMatter.tags.forEach(tag => {
                if (categories[tag]) {
                    categories[tag].push(blogPost)
                } else {
                    categories[tag] = [blogPost]
                }
            })
        })
    for (const category in categories) {
        sort(categories[category])
    }

    return categories
}

const sort: (posts: BlogPost[]) => BlogPost[] = (posts) => posts.sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1))
