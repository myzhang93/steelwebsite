import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import ArticleNavigationGeneric from "@/components/article-navigation-generic"

export default function StainlessSteel410PipeTubePage() {
  const { frontMatter: pipeFrontMatter, content: pipeContent } = getMarkdownByPath('app/400/410-stainless-steel-pipe.md')
  const { frontMatter: tubeFrontMatter, content: tubeContent } = getMarkdownByPath('app/400/410-stainless-steel-tube.md')
  
  return (
    <>
      <Header />
      <ArticleNavigationGeneric
        firstContent={<MarkdownContent key="pipe-content" content={pipeContent} />}
        secondContent={<MarkdownContent key="tube-content" content={tubeContent} />}
        firstSectionId="pipe-section"
        secondSectionId="tube-section"
        firstSectionName="Pipe Information"
        secondSectionName="Tube Information"
        separatorText="Tube Information"
        firstButtonText="View Tube Information"
        secondButtonText="Back to Pipe Information"
      />
      <Footer />
    </>
  )
}

