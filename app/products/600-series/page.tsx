import type { Metadata } from "next"
import Header from "@/components/header"
import Product600HeroSection from "@/components/product-600-hero-section"
import Product600SpecsSection from "@/components/product-600-specs-section"
import Product600IntroductionSection from "@/components/product-600-introduction-section"
import Product600BenefitsSection from "@/components/product-600-benefits-section"
import Product600WhyChooseSection from "@/components/product-600-why-choose-section"
import Product600FactorySection from "@/components/product-600-factory-section"
import Product600ApplicationsSection from "@/components/product-600-applications-section"
import Product600GradesSection from "@/components/product-600-grades-section"
import Product600FAQSection from "@/components/product-600-faq-section"
import Product600RelatedSection from "@/components/product-600-related-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "600 Series Stainless Steel | Premium Precipitation-Hardening Grades",
  description: "600 series stainless steel features exceptional strength, superior corrosion resistance, and outstanding high-temperature performance. Ideal for aerospace, medical devices, oil & gas, and power generation applications.",
}

export default function Product600SeriesPage() {
  return (
    <>
      <Header />
      <Product600HeroSection />
      <Product600SpecsSection />
      <Product600IntroductionSection />
      <Product600BenefitsSection />
      <Product600WhyChooseSection />
      <Product600FactorySection />
      <Product600ApplicationsSection />
      <Product600GradesSection />
      <Product600FAQSection />
      <Product600RelatedSection />
      <Footer />
    </>
  )
}


