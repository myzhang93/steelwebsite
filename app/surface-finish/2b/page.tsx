import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import TableOfContents from "@/components/table-of-contents"
import PageHeroSection from "@/components/page-hero-section"
import { pageConfigs } from "@/lib/page-configs"
import SidebarQuoteForm from "@/components/sidebar-quote-form"

export default function SurfaceFinish2BPage() {
  let markdownContent = ""
  try {
    const { content } = getMarkdownByPath('app/surface finish/2b.md')
    markdownContent = content || ""
  } catch (error) {
    console.error('Error loading markdown:', error)
    markdownContent = ""
  }
  
  const config = pageConfigs['surface-finish/2b']
  
  return (
    <>
      <Header />
      <PageHeroSection
        title={config.title}
        description={config.description}
        backgroundImage={config.backgroundImage}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧内容区域 */}
          <div className="lg:col-span-2">
            {markdownContent ? (
              <>
                {/* 目录组件 */}
                <TableOfContents content={markdownContent} />
                {/* 文章内容 */}
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
          {/* 右侧表单区域 */}
          <div className="lg:col-span-1">
            <div className="sticky top-40">
              <div className="bg-white border border-gray-200 rounded-lg px-6 pt-4 pb-4 shadow-sm">
                <SidebarQuoteForm source="Surface Finish 2B" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

