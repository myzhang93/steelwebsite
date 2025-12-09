import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"

export default function StainlessSteel321CoilPage() {
  const { frontMatter, content } = getMarkdownByPath('app/300/321-stainless-steel-coil.md')
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            <MarkdownContent content={content} />
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

