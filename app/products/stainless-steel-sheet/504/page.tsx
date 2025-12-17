import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import ArticleNavigationGeneric from "@/components/article-navigation-generic"

export const metadata: Metadata = {
  title: "504 Stainless Steel Sheet | High-Temperature & Corrosion Resistant Grade",
  description: "504 stainless steel sheet provides excellent high-temperature performance, superior corrosion resistance, and exceptional strength. Ideal for energy conversion systems, filtration, and demanding industrial applications.",
}

export default function StainlessSteel504SheetPage() {
  const { frontMatter: sheetFrontMatter, content: sheetContent } = getMarkdownByPath('app/500/504-stainless-steel-sheet.md')
  const { frontMatter: plateFrontMatter, content: plateContent } = getMarkdownByPath('app/500/504-stainless-steel-plate.md')
  
  return (
    <>
      <Header />
      <ArticleNavigationGeneric
        firstContent={<MarkdownContent key="sheet-content" content={sheetContent} />}
        secondContent={<MarkdownContent key="plate-content" content={plateContent} />}
        firstSectionId="sheet-section"
        secondSectionId="plate-section"
        firstSectionName="Sheet Information"
        secondSectionName="Plate Information"
        separatorText="Plate Information"
        firstButtonText="View Plate Information"
        secondButtonText="Back to Sheet Information"
      />
      <Footer />
    </>
  )
}

