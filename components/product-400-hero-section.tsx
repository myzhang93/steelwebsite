"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function Product400HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/stainless-steel-sheet.png"
          alt="400 Series Stainless Steel Sheet"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          400 Series Stainless Steel Sheet
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          The 400 series stainless steel sheet offers excellent strength, corrosion resistance, and heat resistance, 
          making it ideal for a wide range of industrial and commercial applications. With its magnetic properties 
          and superior machinability, this material provides exceptional value for demanding projects.
        </p>
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg transition"
        >
          Get A Quote
        </button>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="400 Series Hero"
      />
    </section>
  )
}

