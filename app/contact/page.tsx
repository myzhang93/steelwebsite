import type { Metadata } from "next"
import Header from "@/components/header"
import ContactHeroSection from "@/components/contact-hero-section"
import ContactServiceFeatures from "@/components/contact-service-features"
import ContactFormSection from "@/components/contact-form-section"
import ContactMapSection from "@/components/contact-map-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Shanxi Steel - Stainless Steel Experts",
  description: "Contact our stainless steel experts for quotes, technical support, and customized solutions. Located in Wuxi City, Jiangsu Province, serving customers worldwide with 24/7 support.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactHeroSection />
      <ContactServiceFeatures />
      <ContactFormSection />
      <ContactMapSection />
      <Footer />
    </>
  )
}



