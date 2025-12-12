import Header from "@/components/header"
import ProductCoilHeroSection from "@/components/product-coil-hero-section"
import ProductCoilIntroSection from "@/components/product-coil-intro-section"
import ProductCoilGradesSection from "@/components/product-coil-grades-section"
import ProductCoilSpecsSection from "@/components/product-coil-specs-section"
import ProductCoilApplicationsSection from "@/components/product-coil-applications-section"
import ProductCoilBenefitsSection from "@/components/product-coil-benefits-section"
import Footer from "@/components/footer"

export default function StainlessSteelCoilPage() {
  return (
    <>
      <Header />
      <ProductCoilHeroSection />
      <ProductCoilIntroSection />
      <ProductCoilGradesSection />
      <ProductCoilSpecsSection />
      <ProductCoilBenefitsSection />
      <ProductCoilApplicationsSection />
      <Footer />
    </>
  )
}

