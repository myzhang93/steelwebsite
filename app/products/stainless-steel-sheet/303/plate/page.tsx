import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import Link from "next/link"

export default function StainlessSteel303PlatePage() {
  const { frontMatter, content } = getMarkdownByPath('app/300/303-stainless-steel-plate.md')
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 py-3">
              <Link
                href="/products/stainless-steel-sheet/303"
                className="px-4 py-2 rounded-md font-semibold transition bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Sheet Information
              </Link>
              <Link
                href="/products/stainless-steel-sheet/303/plate"
                className="px-4 py-2 rounded-md font-semibold transition bg-blue-600 text-white"
              >
                Plate Information
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            <MarkdownContent key="plate-content" content={content} />
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

