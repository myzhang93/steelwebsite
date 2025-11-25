import Header from "@/components/header"
import EngineeringHeroSection from "@/components/engineering-hero-section"
import EngineeringSidebar from "@/components/engineering-sidebar"
import EngineeringContent from "@/components/engineering-content"
import Footer from "@/components/footer"

export default function EngineeringServicePage() {
  return (
    <>
      <Header />
      <EngineeringHeroSection />
      <div className="relative bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <EngineeringSidebar />
          </div>
          <div className="flex-1">
            <EngineeringContent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


