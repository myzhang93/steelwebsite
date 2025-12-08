import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import ArticleNavigation from "@/components/article-navigation"

export default function StainlessSteel201LPage() {
  const { frontMatter: sheetFrontMatter, content: sheetContent } = getMarkdownByPath('app/200/201L-stainless-steel-sheet.md')
  const { frontMatter: plateFrontMatter, content: plateContent } = getMarkdownByPath('app/200/201L-stainless-steel-plate.md')
  
  return (
    <>
      <Header />
      <ArticleNavigation 
        sheetContent={<MarkdownContent content={sheetContent} />}
        plateContent={<MarkdownContent content={plateContent} />}
      />
      <Footer />
    </>
  )
}

