"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle, ArrowRight } from "lucide-react"

interface BlogPost {
  id: number
  image: string
  date: string
  day: string
  monthYear: string
  title: string
  author: string
  comments: number
  category: string[]
  excerpt: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/industrial-machinery-fabrication.jpg",
    date: "2024-02-10",
    day: "10",
    monthYear: "Feb 24",
    title: "The New Celanese Chief Pushes Customer-Facing Strategy",
    author: "Shanxi Steel",
    comments: 0,
    category: ["Power & Energy Sector"],
    excerpt: "In a strategic move that signals a significant shift in corporate direction, the newly appointed chief executive of Celanese has unveiled a comprehensive customer-facing strategy. This approach represents a fundamental transformation in how the company engages with its clientele, prioritizing direct relationships and tailored solutions over traditional transactional models.",
    slug: "celanese-chief-customer-facing-strategy"
  },
  {
    id: 2,
    image: "/stainless-steel-pipes-welding.jpg",
    date: "2024-02-08",
    day: "08",
    monthYear: "Feb 24",
    title: "Lean service well operations with HR practices incorporated",
    author: "Shanxi Steel",
    comments: 0,
    category: ["Suppliers", "Welding Engineering"],
    excerpt: "The integration of human resources practices into lean service well operations represents a paradigm shift in operational excellence. By combining the principles of lean manufacturing with strategic HR management, organizations can achieve unprecedented levels of efficiency and employee engagement.",
    slug: "lean-service-well-operations-hr-practices"
  },
  {
    id: 3,
    image: "/oil-platform-sunset-offshore-industrial.jpg",
    date: "2024-02-05",
    day: "05",
    monthYear: "Feb 24",
    title: "Managing Disruptions: The Digital Twin For Supply Chain",
    author: "Shanxi Steel",
    comments: 0,
    category: ["Civil Engineering", "Fuel & Gas"],
    excerpt: "In an era marked by unprecedented supply chain volatility, the implementation of digital twin technology offers a revolutionary approach to disruption management. This innovative solution creates virtual replicas of physical supply chain systems, enabling real-time monitoring, predictive analytics, and proactive response strategies.",
    slug: "digital-twin-supply-chain-disruptions"
  }
]

export default function BlogPostsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col md:flex-row gap-8">
              {/* Image with Date Badge */}
              <div className="relative w-full md:w-1/3 h-64 md:h-80 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-3 rounded">
                  <div className="text-3xl font-bold">{post.day}</div>
                  <div className="text-sm">{post.monthYear}</div>
                </div>
                {/* Play Icon for Video Post */}
                {post.id === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-blue-600 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h2>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                  <span>By {post.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments} Comments
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {post.category.map((cat, index) => (
                      <span key={index} className="text-gray-600">
                        {cat}{index < post.category.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Continue Reading Button */}
                <Link
                  href={`/support/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition w-fit"
                >
                  CONTINUE READING
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

