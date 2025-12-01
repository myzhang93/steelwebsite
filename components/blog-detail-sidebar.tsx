"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-data"

export default function BlogDetailSidebar() {
  const [searchQuery, setSearchQuery] = useState("")
  const allPosts = getAllBlogPosts()
  const recentPosts = allPosts.slice(0, 3)

  // Get all unique categories
  const categories = Array.from(
    new Set(allPosts.flatMap(post => post.category))
  )

  // Get all unique tags
  const allTags = Array.from(
    new Set(allPosts.flatMap(post => post.tags || []))
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="space-y-8">
      {/* Search Posts */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Search Posts</h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Search Keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, idx) => (
            <li key={idx}>
              <Link
                href={`/support/blog?category=${encodeURIComponent(category)}`}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/support/blog/${post.slug}`}
              className="flex gap-3 hover:opacity-80 transition"
            >
              <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {post.author} - {post.monthYear}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag, idx) => (
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
    </div>
  )
}



