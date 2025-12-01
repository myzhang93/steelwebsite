import { notFound } from "next/navigation"
import Header from "@/components/header"
import BlogDetailHeroSection from "@/components/blog-detail-hero-section"
import BlogDetailContent from "@/components/blog-detail-content"
import BlogDetailSidebar from "@/components/blog-detail-sidebar"
import Footer from "@/components/footer"
import { getBlogPostBySlug } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <BlogDetailHeroSection post={post} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <BlogDetailContent post={post} />
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <BlogDetailSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}



