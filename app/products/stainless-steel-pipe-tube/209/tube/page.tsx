import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import Link from "next/link"

export default function StainlessSteel209TubePage() {
  const { frontMatter, content } = getMarkdownByPath('app/200/209-stainless-steel-tube.md')
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 py-3">
              <Link
                href="/products/stainless-steel-pipe-tube/209"
                className="px-4 py-2 rounded-md font-semibold transition bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Pipe Information
              </Link>
              <Link
                href="/products/stainless-steel-pipe-tube/209/tube"
                className="px-4 py-2 rounded-md font-semibold transition bg-blue-600 text-white"
              >
                Tube Information
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            <MarkdownContent key="tube-content" content={content} />
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

