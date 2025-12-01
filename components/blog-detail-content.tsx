"use client"

import Image from "next/image"
import { User, Calendar, Tag, MessageCircle, Quote } from "lucide-react"
import { BlogPost } from "@/lib/blog-data"
import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

interface BlogDetailContentProps {
  post: BlogPost
}

interface WordPressContent {
  id: number
  title: string
  content: string
  excerpt: string
  featuredImage: string | null
  images: string[]
  date: string
  author?: string
  categories?: string[]
  tags?: string[]
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const [wordpressContent, setWordpressContent] = useState<WordPressContent | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // 如果有 WordPress ID，从 WordPress 获取内容
    if (post.wordpressId) {
      fetchWordPressContent(post.wordpressId.toString())
    }
  }, [post.wordpressId])

  const fetchWordPressContent = async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/wordpress/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch WordPress content')
      }
      const data = await response.json()
      setWordpressContent(data)
    } catch (err) {
      console.error('Error fetching WordPress content:', err)
      setError('无法从 WordPress 加载内容，将显示本地内容')
      // 如果获取失败，继续使用本地内容
    } finally {
      setLoading(false)
    }
  }

  // 使用 WordPress 内容（如果可用），否则使用本地内容
  const displayTitle = wordpressContent?.title || post.title
  const displayContent = wordpressContent?.content || post.fullContent || post.excerpt
  const displayFeaturedImage = wordpressContent?.featuredImage || post.featuredImage || post.image
  const displaySupportingImages = wordpressContent?.images || post.supportingImages || []
  const displayDate = wordpressContent?.date ? new Date(wordpressContent.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) : post.monthYear.replace(' ', '/') + '/' + post.day
  const displayAuthor = wordpressContent?.author || post.author
  const displayCategories = wordpressContent?.categories || post.category
  const displayTags = wordpressContent?.tags || post.tags || []

  return (
    <div className="max-w-4xl">
      {loading && (
        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-blue-600 text-sm">正在从 WordPress 加载内容...</p>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-yellow-600 text-sm">{error}</p>
        </div>
      )}

      {/* Featured Image */}
      {displayFeaturedImage && (
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={displayFeaturedImage}
            alt={displayTitle}
            fill
            className="object-cover"
            unoptimized={displayFeaturedImage.startsWith('http')}
          />
        </div>
      )}

      {/* Article Metadata */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
        <span className="flex items-center gap-2">
          <User className="w-4 h-4" />
          By {displayAuthor}
        </span>
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {displayDate}
        </span>
        <span className="flex items-center gap-2">
          <Tag className="w-4 h-4" />
          {Array.isArray(displayCategories) ? displayCategories.join(", ") : displayCategories}
        </span>
        <span className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          {post.comments} Comments
        </span>
      </div>

      {/* Article Content */}
      <div 
        className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: displayContent }}
      />

      {/* Quote Block */}
      {post.quote && !wordpressContent && (
        <div className="bg-gray-100 border-l-4 border-blue-600 p-6 my-8 rounded">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <p className="text-lg italic text-gray-700 leading-relaxed">
              {post.quote}
            </p>
          </div>
        </div>
      )}

      {/* Supporting Images */}
      {displaySupportingImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          {displaySupportingImages.slice(0, 2).map((img, idx) => (
            <div key={idx} className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={`${displayTitle} - Image ${idx + 1}`}
                fill
                className="object-cover"
                unoptimized={img.startsWith('http')}
              />
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {displayTags.length > 0 && (
        <div className="flex items-center gap-4 mb-8 pt-6 border-t">
          <span className="font-semibold text-gray-900">Tags:</span>
          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag, idx) => (
              <Link
                key={idx}
                href={`/support/blog?tag=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Share Buttons */}
      <div className="flex items-center gap-4 mb-8 pt-6 border-t">
        <span className="font-semibold text-gray-900">Share:</span>
        <div className="flex gap-3">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(displayTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(displayTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Previous Post */}
      {post.previousPost && (
        <div className="mb-8 pt-6 border-t">
          <div className="text-sm text-gray-500 mb-2">PREVIOUS</div>
          <Link
            href={`/support/blog/${post.previousPost.slug}`}
            className="flex gap-4 items-center hover:opacity-80 transition"
          >
            <div className="relative w-24 h-24 rounded overflow-hidden flex-shrink-0">
              <Image
                src={post.previousPost.image}
                alt={post.previousPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                {post.previousPost.title}
              </h3>
            </div>
          </Link>
        </div>
      )}

      {/* Leave A Comment Section */}
      <div className="pt-8 border-t">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave A Comment</h3>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                NAME*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                EMAIL*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
              WRITE COMMENT
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition"
          >
            POST COMMENT
          </button>
        </form>
      </div>
    </div>
  )
}
