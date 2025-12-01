import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogsDir = path.join(process.cwd(), 'content/blogs')

export interface BlogFrontMatter {
  title: string
  description: string
  date: string
  author: string
  featured_image?: string
  slug: string
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogsDir, `${slug}.md`)
  const file = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(file)
  return { frontMatter: data as BlogFrontMatter, content }
}

export function getAllBlogs(): BlogFrontMatter[] {
  const files = fs.readdirSync(blogsDir)
  return files.map(file => {
    const slug = file.replace(/\.md$/, '')
    const { frontMatter } = getBlogBySlug(slug)
    return { ...frontMatter, slug }
  })
}