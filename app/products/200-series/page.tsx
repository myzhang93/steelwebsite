import type { Metadata } from "next"
import Header from "@/components/header"
import ProductHeroSection from "@/components/product-hero-section"
import ProductWhySection from "@/components/product-why-section"
import ProductSpecsTable from "@/components/product-specs-table"
import ProductUsesSection from "@/components/product-uses-section"
import ProductAdvantagesSection from "@/components/product-advantages-section"
import ProductFormabilitySection from "@/components/product-formability-section"
import ProductEcoFriendlySection from "@/components/product-eco-friendly-section"
import ProductCommonProductsSection from "@/components/product-common-products-section"
import ProductCTABanner from "@/components/product-cta-banner"
import ProductRelatedSection from "@/components/product-related-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "200 Series Stainless Steel | Affordable Strength & Timeless Elegance",
  description: "Explore 200 series stainless steel products including 201, 202, 201L, 204, and 209 grades. High strength, low nickel content, cost-effective solutions for kitchenware, automotive, and industrial applications.",
}

export default function Product200SeriesPage() {
  return (
    <>
      <Header />
      <ProductHeroSection />
      <ProductWhySection />
      <ProductSpecsTable />
      <ProductUsesSection />
      <ProductAdvantagesSection />
      <ProductFormabilitySection />
      <ProductEcoFriendlySection />
      <ProductCommonProductsSection />
      <ProductCTABanner />
      <ProductRelatedSection />
      <Footer />
    </>
  )
}




