import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import Link from "next/link"

export const metadata: Metadata = {
  title: "631 Stainless Steel Sheet (17-7PH) | High-Strength Precipitation-Hardening Grade",
  description: "631 stainless steel sheet (17-7PH) offers exceptional strength up to 1650 MPa, excellent corrosion resistance, and ideal for aerospace, medical devices, springs, and pressure vessels. Get competitive pricing.",
}

export default function StainlessSteel631SheetPage() {
  const { frontMatter, content } = getMarkdownByPath('app/600/631-stainless-steel-sheet.md')
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 py-3">
              <Link
                href="/products/stainless-steel-sheet/631"
                className="px-4 py-2 rounded-md font-semibold transition bg-blue-600 text-white"
              >
                Sheet Information
              </Link>
              <Link
                href="/products/stainless-steel-sheet/631/plate"
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

