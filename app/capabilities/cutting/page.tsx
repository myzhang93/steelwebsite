import Header from "@/components/header"
import ServiceHeroSection from "@/components/service-hero-section"
import ServiceContent from "@/components/service-content"
import ServiceSidebar from "@/components/service-sidebar"
import ServiceContactForm from "@/components/service-contact-form"
import Footer from "@/components/footer"

export default function CuttingPage() {
  return (
    <>
      <Header />
      <ServiceHeroSection 
        title="Custom Cut Stainless Steel Sheets"
        description="In the modern industrial landscape, adaptability and precision are paramount. The art of metalwork and fabrication requires a keen eye for detail and the technology to achieve the most exacting of standards. For those on the cutting edge – pardon the pun – of the stainless steel sector, the bar is set impossibly high, demanding not just customizability in size and shape but also an unfaltering commitment to precision. Shanxi Steel stands as a paragon of these principles, offering a bespoke cutting service that's as much a marriage of craftsmanship and technology as it is a testament to customer-centric innovation."
        breadcrumbs={["HOME", "SERVICE", "CUTTING"]}
      />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ServiceSidebar currentService="cutting" />
              <ServiceContactForm />
            </div>
            <div className="lg:col-span-3">
              <ServiceContent serviceType="cutting" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}



