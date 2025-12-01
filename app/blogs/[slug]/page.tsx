import { getBlogBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"

export default async function BlogPage({ params }: { params: { slug: string } }) {
  // ❶ 等待 Next.js 解析动态参数
  const { slug } = await params

  // ❷ 兜底：slug 不存在直接 404
  if (!slug) return notFound()

  const post = getBlogBySlug(slug)
  if (!post) return notFound()

  return (
    <article className="prose mx-auto p-6">
      <h1>{post.frontMatter.title}</h1>
      <p className="text-sm text-gray-500">
        {post.frontMatter.date} · {post.frontMatter.author}
      </p>
      {post.frontMatter.featured_image && (
        <img
          src={post.frontMatter.featured_image}
          alt="cover"
          className="w-full rounded mb-4"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}