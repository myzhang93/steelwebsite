"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4" {...props} />
        ),
        p: ({ node, children, ...props }: any) => {
          // 检查子元素中是否有图片，如果有图片就使用 div 而不是 p
          const hasImage = React.Children.toArray(children).some(
            (child: any) => {
              if (typeof child === 'object' && child !== null) {
                return child.type === 'img' || child.props?.src || 
                       (child.props?.children && React.Children.toArray(child.props.children).some(
                         (grandChild: any) => grandChild?.type === 'img' || grandChild?.props?.src
                       ))
              }
              return false
            }
          )
          
          if (hasImage) {
            return <div className="my-6" {...props}>{children}</div>
          }
          
          return (
            <p className="text-gray-700 leading-relaxed mb-4" {...props}>
              {children}
            </p>
          )
        },
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="text-gray-700" {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-gray-900" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="italic" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-4" {...props} />
        ),
        code: ({ node, inline, ...props }: any) => {
          if (inline) {
            return (
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800" {...props} />
            )
          }
          return (
            <code className="block bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-800 mb-4" {...props} />
          )
        },
        pre: ({ node, ...props }) => (
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-gray-100" {...props} />
        ),
        tbody: ({ node, ...props }) => (
          <tbody {...props} />
        ),
        tr: ({ node, ...props }) => (
          <tr className="border-b border-gray-300" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="border border-gray-300 px-4 py-2 text-gray-700" {...props} />
        ),
        img: ({ node, src, alt, ...props }: any) => {
          // 如果是外部链接，使用普通 img 标签
          if (src?.startsWith('http')) {
            return (
              <img 
                src={src} 
                alt={alt || ''} 
                className="w-full h-auto rounded-lg my-6 block"
                {...props}
              />
            )
          }
          // 如果是本地图片，使用 Next.js Image
          return (
            <Image
              src={src || ''}
              alt={alt || ''}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg my-6"
              {...props}
            />
          )
        },
        p: ({ node, children, ...props }: any) => {
          // 检查子元素中是否有图片，如果有图片就不使用 p 标签
          const hasImage = React.Children.toArray(children).some(
            (child: any) => child?.type === 'img' || child?.props?.src
          )
          
          if (hasImage) {
            return <div className="text-gray-700 leading-relaxed mb-4" {...props}>{children}</div>
          }
          
          return (
            <p className="text-gray-700 leading-relaxed mb-4" {...props}>
              {children}
            </p>
          )
        },
        a: ({ node, href, ...props }: any) => (
          <a 
            href={href} 
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        hr: ({ node, ...props }) => (
          <hr className="my-8 border-gray-300" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

