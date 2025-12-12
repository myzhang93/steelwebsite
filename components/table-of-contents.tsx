"use client"

import { useMemo, useState } from "react"
import { ChevronUp } from "lucide-react"

interface TocItem {
  id: string
  level: number
  text: string
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  // 使用 useMemo 同步计算目录项
  const tocItems = useMemo(() => {
    if (!content || content.trim() === '') {
      console.log('TableOfContents: No content provided')
      return []
    }
    
    // 从 markdown 内容中提取标题
    const lines = content.split('\n')
    const items: TocItem[] = []

    lines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim()
      // 匹配 markdown 标题 (# ## ### 等)，允许前面有空格
      const h1Match = trimmedLine.match(/^#\s+(.+)$/)
      const h2Match = trimmedLine.match(/^##\s+(.+)$/)
      const h3Match = trimmedLine.match(/^###\s+(.+)$/)
      const h4Match = trimmedLine.match(/^####\s+(.+)$/)

      if (h1Match) {
        const text = h1Match[1].trim()
        const id = `heading-${text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
        items.push({ id, level: 1, text })
      } else if (h2Match) {
        const text = h2Match[1].trim()
        const id = `heading-${text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
        items.push({ id, level: 2, text })
      } else if (h3Match) {
        const text = h3Match[1].trim()
        const id = `heading-${text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
        items.push({ id, level: 3, text })
      } else if (h4Match) {
        const text = h4Match[1].trim()
        const id = `heading-${text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
        items.push({ id, level: 4, text })
      }
    })

    console.log('TableOfContents: Found', items.length, 'headings', items)
    return items
  }, [content])

  // 如果没有任何标题，显示提示信息而不是返回 null
  if (tocItems.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <p className="text-yellow-800 text-sm">No headings found in content</p>
      </div>
    )
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-8 shadow-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
      >
        <span>Table of Contents</span>
        <ChevronUp
          className={`w-5 h-5 transition-transform ${isExpanded ? '' : 'rotate-180'}`}
        />
      </button>
      {isExpanded && (
        <ol className="space-y-2">
          {tocItems.map((item, index) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-blue-600 transition-colors ${
                item.level === 1
                  ? 'font-semibold text-gray-900'
                  : item.level === 2
                  ? 'ml-4 text-gray-800'
                  : item.level === 3
                  ? 'ml-8 text-gray-700 text-sm'
                  : 'ml-12 text-gray-600 text-sm'
              }`}
              onClick={() => scrollToHeading(item.id)}
            >
              <span className="text-gray-500 mr-2">{index + 1}.</span>
              {item.text}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

