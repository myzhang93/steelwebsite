import Header from "@/components/header"
import TreatingHeroSection from "@/components/treating-hero-section"
import TreatingSidebar from "@/components/treating-sidebar"
import TreatingContent from "@/components/treating-content"
import Footer from "@/components/footer"

export default function TreatingServicePage() {
  return (
    <>
      <Header />
      <TreatingHeroSection />
      <div className="relative bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <TreatingSidebar />
          </div>
          <div className="flex-1">
            <TreatingContent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


