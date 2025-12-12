"use client"

import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function CustomizedPartsHeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  return (
    <section className="relative w-full h-[500px] bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/stainless-steel-sheet.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Customized Stainless Steel Parts
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Precision-engineered stainless steel components tailored to your exact specifications
        </p>
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition"
        >
          Get A Quote
        </button>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Customized Parts Hero"
      />
    </section>
  )
}



