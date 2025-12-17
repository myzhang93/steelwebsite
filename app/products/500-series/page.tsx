import type { Metadata } from "next"
import Header from "@/components/header"
import Product500HeroSection from "@/components/product-500-hero-section"
import Product500SpecsSection from "@/components/product-500-specs-section"
import Product500BenefitsSection from "@/components/product-500-benefits-section"
import Product500ApplicationsSection from "@/components/product-500-applications-section"
import Product500GradesSection from "@/components/product-500-grades-section"
import Product500CTASection from "@/components/product-500-cta-section"
import Product500TestimonialSection from "@/components/product-500-testimonial-section"
import Product500RelatedSection from "@/components/product-500-related-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "500 Series Stainless Steel | High-Temperature & Corrosion Resistant Grades",
  description: "500 series stainless steel offers exceptional performance with superior corrosion resistance, high strength, and excellent heat resistance. Ideal for high-temperature energy conversion, filtration, and automotive applications.",
}

export default function Product500SeriesPage() {
  return (
    <>
      <Header />
      <Product500HeroSection />
      <Product500SpecsSection />
      <Product500BenefitsSection />
      <Product500ApplicationsSection />
      <Product500GradesSection />
      <Product500CTASection />
      <Product500TestimonialSection />
      <Product500RelatedSection />
      <Footer />
    </>
  )
}

