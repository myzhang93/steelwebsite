import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface MarkdownContent {
  frontMatter: Record<string, any>
  content: string
}

export function getMarkdownByPath(filePath: string): MarkdownContent {
  const fullPath = path.join(process.cwd(), filePath)
  const file = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(file)
  return { frontMatter: data, content }
}


