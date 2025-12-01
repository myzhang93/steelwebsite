// app/support/blog/page.tsx
import { getAllBlogs } from "@/lib/blog"
import BlogHeroSection from "@/components/blog-hero-section"
import BlogPostsSection from "@/components/blog-posts-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  const posts = getAllBlogs() // ❶ 服务端读 MD
  return (
    <>
      <Header />
      <BlogHeroSection />
      <BlogPostsSection posts={posts} /> // ❷ 传 props
      <Footer />
    </>
  )
}