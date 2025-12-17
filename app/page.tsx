import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CompanySection from "@/components/company-section"
import ServicesSection from "@/components/services-section"
import RecognitionSection from "@/components/recognition-section"
import ApplicationSection from "@/components/application-section"
import SafetySection from "@/components/safety-section"
import ClientsSection from "@/components/clients-section"
import TestimonialSection from "@/components/testimonial-section"
import CTABanner from "@/components/cta-banner"
import ContactFaqSection from "@/components/contact-faq-section"
import BlogSection from "@/components/blog-section"

export const metadata: Metadata = {
  title: "Premium Stainless Steel Products | Shanxi Steel - Global Supplier",
  description: "Leading manufacturer of high-quality stainless steel products including coils, sheets, plates, pipes, tubes, and fittings. ISO certified, serving 50+ countries with precision engineering and exceptional customer service.",
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanySection />
      <ServicesSection />
      <RecognitionSection />
      <ApplicationSection />
      <SafetySection />
      <ClientsSection />
      <TestimonialSection />
      <CTABanner />
      <ContactFaqSection />
      <BlogSection />
    </>
  )
}
