"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function Product500CTASection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  return (
    <section className="relative py-24 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-stainless-steel-factory.jpg"
          alt="Industrial Facility"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Us
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Experience the superior quality and performance of 500 series stainless steel. Partner with us for 
          exceptional materials that meet your most demanding industrial requirements.
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
        source="500 Series CTA"
      />
    </section>
  )
}

