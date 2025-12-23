import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import Link from "next/link"

export const metadata: Metadata = {
  title: "504 Stainless Steel Sheet | High-Temperature & Corrosion Resistant Grade",
  description: "504 stainless steel sheet provides excellent high-temperature performance, superior corrosion resistance, and exceptional strength. Ideal for energy conversion systems, filtration, and demanding industrial applications.",
}

export default function StainlessSteel504SheetPage() {
  const { frontMatter, content } = getMarkdownByPath('app/500/504-stainless-steel-sheet.md')
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 py-3">
              <Link
                href="/products/stainless-steel-sheet/504"
                className="px-4 py-2 rounded-md font-semibold transition bg-blue-600 text-white"
              >
                Sheet Information
              </Link>
              <Link
                href="/products/stainless-steel-sheet/504/plate"
                className="px-4 py-2 rounded-md font-semibold transition bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Plate Information
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            <MarkdownContent key="sheet-content" content={content} />
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

