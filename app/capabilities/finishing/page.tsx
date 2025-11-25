import Header from "@/components/header"
import FinishingHeroSection from "@/components/finishing-hero-section"
import FinishingSidebar from "@/components/finishing-sidebar"
import FinishingContent from "@/components/finishing-content"
import Footer from "@/components/footer"

export default function FinishingServicePage() {
  return (
    <>
      <Header />
      <FinishingHeroSection />
      <div className="relative bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <FinishingSidebar />
          </div>
          <div className="flex-1">
            <FinishingContent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


