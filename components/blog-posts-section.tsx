

// components/blog-posts-section.tsx
import Link from "next/link"
import Image from "next/image"
import { MessageCircle, ArrowRight } from "lucide-react"
import type { BlogFrontMatter } from "@/lib/blog"

type Props = {
  posts: BlogFrontMatter[]
}

export default function BlogPostsSection({ posts }: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col md:flex-row gap-8"
            >
              {/* 封面图 + 日期徽章 */}
              <div className="relative w-full md:w-1/3 h-64 md:h-80 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={post.featured_image || "/placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-3 rounded">
                  <div className="text-3xl font-bold">
                    {new Date(post.date).getDate()}
                  </div>
                  <div className="text-sm">
                    {new Date(post.date).toLocaleString("en", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>

              {/* 内容区 */}
              <div className="flex-1 flex flex-col">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h2>

                {/* 元信息 */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                  <span>By {post.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    0 Comments
                  </span>
                  {post.category?.map((cat, i) => (
                    <span key={i} className="text-gray-600">
                      {cat}
                      {i < post.category.length - 1 && ","}
                    </span>
                  ))}
                </div>

                {/* 摘要 */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {post.description}
                </p>

                {/* Continue Reading */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Continue Reading
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}