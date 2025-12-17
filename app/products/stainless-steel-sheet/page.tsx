import type { Metadata } from "next"
import Header from "@/components/header"
import ProductSheetHeroSection from "@/components/product-sheet-hero-section"
import ProductSheetIntroSection from "@/components/product-sheet-intro-section"
import ProductSheet200GradesSection from "@/components/product-sheet-200-grades-section"
import ProductSheetOtherSeriesSection from "@/components/product-sheet-other-series-section"
import ProductSheetApplicationsSection from "@/components/product-sheet-applications-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Stainless Steel Sheet & Plate | Precision & Durability for Industrial Applications",
  description: "Comprehensive range of stainless steel sheets and plates in 200, 300, 400, 500, and 600 series. Available in various grades, sizes, and finishes for diverse industrial and commercial applications.",
}

export default function StainlessSteelSheetPage() {
  return (
    <>
      <Header />
      <ProductSheetHeroSection />
      <ProductSheetIntroSection />
      <ProductSheet200GradesSection />
      <ProductSheetOtherSeriesSection />
      <ProductSheetApplicationsSection />
      <Footer />
    </>
  )
}

