"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { BlogPost } from "@/lib/blog-data"

interface BlogDetailHeroSectionProps {
  post: BlogPost
}

interface WordPressContent {
  title: string
  featuredImage: string | null
  categories?: string[]
}

export default function BlogDetailHeroSection({ post }: BlogDetailHeroSectionProps) {
  const [wordpressContent, setWordpressContent] = useState<WordPressContent | null>(null)

  useEffect(() => {
    if (post.wordpressId) {
      fetchWordPressContent(post.wordpressId.toString())
    }
  }, [post.wordpressId])

  const fetchWordPressContent = async (id: string) => {
    try {
      const response = await fetch(`/api/wordpress/${id}`)
      if (response.ok) {
        const data = await response.json()
        setWordpressContent(data)
      }
    } catch (err) {
      console.error('Error fetching WordPress content for hero:', err)
    }
  }

  const displayTitle = wordpressContent?.title || post.title
  const displayImage = wordpressContent?.featuredImage || post.featuredImage || post.image
  const displayCategories = wordpressContent?.categories || post.category
  const categoryPath = displayCategories.join(" > ")
  
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={displayImage}
          alt={displayTitle}
          fill
          className="object-cover"
          priority
          unoptimized={displayImage.startsWith('http')}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {displayTitle}
        </h1>
        <div className="text-sm md:text-base text-gray-300">
          HOME {'>'} {categoryPath} {'>'} {displayTitle.toUpperCase()}
        </div>
      </div>
    </section>
  )
}

