"use client"

import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ProductCoilHeroSection() {
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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Stainless Steel Coil: Superior Quality for Continuous Production
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Premium stainless steel coils designed for high-volume manufacturing and precision applications
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
        source="Stainless Steel Coil Hero"
      />
    </section>
  )
}


