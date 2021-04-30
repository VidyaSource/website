// noinspection JSUnfilteredForInLoop

import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

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

export const getBlogPostSlugs: () => string[] = () => {
    return fs.readdirSync(postsDirectory)
}

export const getBlogPostBySlug: (slug: string) => BlogPost = (slug) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // @ts-ignore
    const {data, content} = matter(fileContents)
    const tags = data.tags ?? []
    const categories = data.categories ?? []
    const image = data.banner || data.image
    const frontMatter = {
        tags: tags.concat(categories).sort(),
        image: image,
        date: data.date,
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

export const getAllBlogPosts: () => BlogPost[] = () => {
    const slugs = getBlogPostSlugs()
    return slugs
        .map((slug) => getBlogPostBySlug(slug))
        .sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1))
}

interface BlogPostCategories {
    [category: string]: undefined | BlogPost[]
}

export const getBlogPostsByTags: () => BlogPostCategories = () => {
    const slugs = getBlogPostSlugs()
    const categories: BlogPostCategories = {}
    slugs
        .map((slug) => getBlogPostBySlug(slug))
        .forEach((blogPost) => {
            blogPost.frontMatter.tags.forEach(tag => {
                if (categories[tag]) {
                    categories[tag].push(blogPost)
                } else {
                    categories[tag] = [blogPost]
                }
            })
        })
    for (const category in categories) {
        categories[category].sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1))
    }
    return categories
}

export const markdownToHtml: (markdown) => Promise<string | Uint8Array> = async (markdown) => {
    const result = await remark().use(html).process(markdown)
    return result.contents
}
