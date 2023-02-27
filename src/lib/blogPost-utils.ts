// noinspection JSUnfilteredForInLoop

import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import {zonedTimeToUtc} from "date-fns-tz";
import format from "date-fns/format";

export interface FrontMatter {
    author: "Neil Chaudhuri" | string
    title: string
    description: string
    image: string
    date: string
    tags: string[]
}

export interface BlogPostMetadata {
    slug: string
    frontMatter: FrontMatter
}

export type BlogPost = BlogPostMetadata & { content: string}

const postsDirectory = join(process.cwd(), 'src/_content/blog')

export const getBlogPostSlugs: () => Promise<string[]> = () => {
    return fs.promises.readdir(postsDirectory)
}

export const getBlogPostBySlug: (slug: string) => Promise<BlogPost> = async (slug) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = await fs.promises.readFile(fullPath, 'utf8')
    const {data, content} = matter(fileContents)
    const tags = data.tags ?? []
    const categories = data.categories ?? []
    const image = data.banner || data.image
    const frontMatter = {
        tags: tags.concat(categories).sort(),
        image: image,
        date: new Date(data.date.getUTCFullYear(), data.date.getUTCMonth(), data.date.getUTCDate()).toISOString(),
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

export const getBlogPostMetadataBySlug: (slug: string) => Promise<BlogPostMetadata> = async (slug) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = await fs.promises.readFile(fullPath, 'utf8')
    const {data, content} = matter(fileContents)
    const tags = data.tags ?? []
    const categories = data.categories ?? []
    const image = data.banner || data.image
    const frontMatter = {
        tags: tags.concat(categories).sort(),
        image: image,
        date: new Date(data.date.getUTCFullYear(), data.date.getUTCMonth(), data.date.getUTCDate()).toISOString(),
        author: data.author,
        title: data.title,
        description: data.description
    }

    return {
        slug: realSlug,
        frontMatter: frontMatter,
    }
}

export const getAllBlogPosts: () => Promise<BlogPostMetadata[]> = async () => {
    const slugs = await getBlogPostSlugs()
    const posts = await Promise.all(slugs.map((slug) => getBlogPostMetadataBySlug(slug)))

    return sort(posts)
}

export interface BlogPostCategories {
    [category: string]: undefined | BlogPostMetadata[]
}

export const getBlogPostsByTags: () => Promise<BlogPostCategories> = async () => {
    const slugs = await getBlogPostSlugs()
    const categories: BlogPostCategories = {}
    const posts = await Promise.all(slugs.map((slug) => getBlogPostMetadataBySlug(slug)))
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

const sort: (posts: BlogPostMetadata[]) => BlogPostMetadata[] = (posts) => posts.sort((post1, post2) => (new Date(post1.frontMatter.date) > new Date(post2.frontMatter.date) ? -1 : 1))
