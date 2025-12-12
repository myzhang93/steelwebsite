import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeroSection from "@/components/page-hero-section"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import TableOfContents from "@/components/table-of-contents"
import { pageConfigs } from "@/lib/page-configs"

export default function CustomizedStainlessSteelPartsPage() {
  // 尝试读取 markdown 文件，如果不存在则使用空内容
  let markdownContent = ""
  try {
    const { content } = getMarkdownByPath('app/customized-parts.md')
    markdownContent = content
  } catch (error) {
    // 如果文件不存在，使用空内容
    markdownContent = ""
  }
  
  const config = pageConfigs['products/customized-stainless-steel-parts']
  
  return (
    <>
      <Header />
      <PageHeroSection
        title={config.title}
        description={config.description}
        backgroundImage={config.backgroundImage}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {markdownContent ? (
          <>
            <TableOfContents content={markdownContent} />
            <div className="mt-8">
              <MarkdownContent content={markdownContent} />
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 py-12">
            <p>Content will be displayed here once the markdown file is added.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}


