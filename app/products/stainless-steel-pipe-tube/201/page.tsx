import Header from "@/components/header"
import Footer from "@/components/footer"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"

export default function StainlessSteel201PipeTubePage() {
  const { frontMatter: pipeFrontMatter, content: pipeContent } = getMarkdownByPath('app/200/201-stainless-steel-pipe.md')
  const { frontMatter: tubeFrontMatter, content: tubeContent } = getMarkdownByPath('app/200/201-stainless-steel-tube.md')
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            <MarkdownContent content={pipeContent} />
          </article>
          
          {/* Separator */}
          <div className="my-20 py-8 border-y-4 border-blue-200 bg-blue-50/50 relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50 px-8 py-2 rounded-lg shadow-sm">
              <span className="text-blue-700 font-bold text-base uppercase tracking-wide">Tube Information</span>
            </div>
          </div>
          
          <article className="prose prose-lg max-w-none">
            <MarkdownContent content={tubeContent} />
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

