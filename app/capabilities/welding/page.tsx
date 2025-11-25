import Header from "@/components/header"
import WeldingHeroSection from "@/components/welding-hero-section"
import WeldingSidebar from "@/components/welding-sidebar"
import WeldingContent from "@/components/welding-content"
import Footer from "@/components/footer"

export default function WeldingServicePage() {
  return (
    <>
      <Header />
      <WeldingHeroSection />
      <div className="relative bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <WeldingSidebar />
          </div>
          <div className="flex-1">
            <WeldingContent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}



