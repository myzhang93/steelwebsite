"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function Product500HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-stainless-steel-factory.jpg"
          alt="500 Series Stainless Steel"
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
          500 Series Stainless Steel For Various Industries
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          500 series stainless steel offers exceptional performance characteristics, combining superior corrosion 
          resistance, high strength, and excellent heat resistance. This versatile material is engineered to meet 
          the demanding requirements of various industrial applications, from high-temperature energy conversion 
          systems to advanced filtration and automotive applications.
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
        source="500 Series Hero"
      />
    </section>
  )
}


