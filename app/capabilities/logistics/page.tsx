import Header from "@/components/header"
import LogisticsHeroSection from "@/components/logistics-hero-section"
import LogisticsSidebar from "@/components/logistics-sidebar"
import LogisticsContent from "@/components/logistics-content"
import Footer from "@/components/footer"

export default function LogisticsServicePage() {
  return (
    <>
      <Header />
      <LogisticsHeroSection />
      <div className="relative bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <LogisticsSidebar />
          </div>
          <div className="flex-1">
            <LogisticsContent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}



