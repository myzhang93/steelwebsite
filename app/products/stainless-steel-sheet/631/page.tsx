import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import ArticleNavigationGeneric from "@/components/article-navigation-generic"

export default function StainlessSteel631SheetPage() {
  const { frontMatter: sheetFrontMatter, content: sheetContent } = getMarkdownByPath('app/600/631-stainless-steel-sheet.md')
  const { frontMatter: plateFrontMatter, content: plateContent } = getMarkdownByPath('app/600/631-stainless-steel-plate.md')
  
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

