"use client"

import { useState, useEffect } from "react"
import { X, Loader2 } from "lucide-react"
import Image from "next/image"

interface GradeDetailModalProps {
  open: boolean
  onClose: () => void
  wordpressId: string | null
  gradeName: string
}

interface WordPressContent {
  id: number
  title: string
  content: string
  textContent: string
  featuredImage: string | null
  images: string[]
  excerpt: string
  date: string
  link: string
}

export default function GradeDetailModal({
  open,
  onClose,
  wordpressId,
  gradeName,
}: GradeDetailModalProps) {
  const [content, setContent] = useState<WordPressContent | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('Modal effect - open:', open, 'wordpressId:', wordpressId)
    if (open) {
      if (wordpressId) {
        fetchWordPressContent(wordpressId)
      } else {
        // 如果没有 WordPress ID，设置错误信息
        setError('未配置 WordPress 内容 ID')
        setLoading(false)
      }
    } else {
      // 关闭时重置状态
      setContent(null)
      setError(null)
      setLoading(false)
    }
  }, [open, wordpressId])

  const fetchWordPressContent = async (id: string) => {
    setLoading(true)
    setError(null)

    try {
      console.log('Fetching WordPress content for ID:', id)
      const response = await fetch(`/api/wordpress/${id}`)
      
      console.log('API response status:', response.status, response.statusText)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        console.error('API error response:', errorData)
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log('WordPress content fetched successfully:', data)
      setContent(data)
    } catch (err: any) {
      console.error('Error fetching WordPress content:', err)
      const errorMessage = err.message || '无法加载内容，请稍后重试'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  console.log('Modal render - open:', open, 'wordpressId:', wordpressId)

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-gray-900">
            {content?.title || gradeName}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              <span className="ml-3 text-gray-600">加载中...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-2 font-semibold">{error}</p>
              {wordpressId && (
                <p className="text-sm text-gray-500 mb-4">
                  WordPress ID: {wordpressId}
                </p>
              )}
              <div className="space-y-2">
                <button
                  onClick={() => wordpressId && fetchWordPressContent(wordpressId)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
                >
                  重试
                </button>
                <p className="text-xs text-gray-400 mt-4">
                  提示：请检查 WordPress 站点是否可访问，REST API 是否已启用
                </p>
              </div>
            </div>
          )}

          {!loading && !error && content && (
            <div className="space-y-6">
              {/* Featured Image */}
              {content.featuredImage && (
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={content.featuredImage}
                    alt={content.title}
                    fill
                    className="object-cover"
                    unoptimized // WordPress 图片可能来自外部域名
                  />
                </div>
              )}

              {/* Content Images */}
              {content.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.images.map((imgUrl, idx) => (
                    <div key={idx} className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src={imgUrl}
                        alt={`${content.title} - Image ${idx + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Text Content */}
              {content.textContent && (
                <div className="prose max-w-none">
                  <div
                    className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: content.content }}
                  />
                </div>
              )}

              {/* Excerpt */}
              {content.excerpt && (
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p
                    className="text-gray-700 italic"
                    dangerouslySetInnerHTML={{ __html: content.excerpt }}
                  />
                </div>
              )}

              {/* Date */}
              {content.date && (
                <div className="text-sm text-gray-500 border-t pt-4">
                  发布时间: {new Date(content.date).toLocaleDateString('zh-CN')}
                </div>
              )}
            </div>
          )}

          {!loading && !error && !content && wordpressId && (
            <div className="text-center py-12">
              <p className="text-gray-600">暂无内容</p>
            </div>
          )}

          {!loading && !wordpressId && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">此产品暂未配置详细内容</p>
              <p className="text-sm text-gray-500">请联系管理员添加 WordPress 内容 ID</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

