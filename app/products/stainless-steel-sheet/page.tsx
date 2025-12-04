import Header from "@/components/header"
import ProductSheetHeroSection from "@/components/product-sheet-hero-section"
import ProductSheetIntroSection from "@/components/product-sheet-intro-section"
import ProductSheet200GradesSection from "@/components/product-sheet-200-grades-section"
import ProductSheetApplicationsSection from "@/components/product-sheet-applications-section"
import ProductAdvantagesSection from "@/components/product-advantages-section"
import ProductCTABanner from "@/components/product-cta-banner"
import Footer from "@/components/footer"

export default function StainlessSteelSheetPage() {
  return (
    <>
      <Header />
      <ProductSheetHeroSection />
      <ProductSheetIntroSection />
      <ProductSheet200GradesSection />
      <ProductAdvantagesSection />
      <ProductSheetApplicationsSection />
      <ProductCTABanner />
      <Footer />
    </>
  )
}

