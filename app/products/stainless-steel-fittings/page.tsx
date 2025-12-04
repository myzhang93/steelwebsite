import Header from "@/components/header"
import ProductFittingsHeroSection from "@/components/product-fittings-hero-section"
import ProductFittingsIntroSection from "@/components/product-fittings-intro-section"
import ProductFittingsGradesSection from "@/components/product-fittings-grades-section"
import ProductFittingsTypesSection from "@/components/product-fittings-types-section"
import ProductFittingsSpecsSection from "@/components/product-fittings-specs-section"
import ProductFittingsApplicationsSection from "@/components/product-fittings-applications-section"
import ProductFittingsBenefitsSection from "@/components/product-fittings-benefits-section"
import ProductFittingsQualitySection from "@/components/product-fittings-quality-section"
import ProductCTABanner from "@/components/product-cta-banner"
import Footer from "@/components/footer"

export default function StainlessSteelFittingsPage() {
  return (
    <>
      <Header />
      <ProductFittingsHeroSection />
      <ProductFittingsIntroSection />
      <ProductFittingsGradesSection />
      <ProductFittingsTypesSection />
      <ProductFittingsSpecsSection />
      <ProductFittingsApplicationsSection />
      <ProductFittingsBenefitsSection />
      <ProductFittingsQualitySection />
      <ProductCTABanner />
      <Footer />
    </>
  )
}

