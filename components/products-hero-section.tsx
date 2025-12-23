"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"

export default function ProductsHeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
          transition: 'opacity 1.2s ease-out, transform 1.2s ease-out'
        }}
      >
        <Image
          src="/industrial-steel-machinery-equipment.jpg"
          alt="Stainless Steel Products"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
          }}
        >
          Stainless Steel Products
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          Explore our comprehensive range of premium stainless steel products, 
          available in various series and forms to meet your specific requirements.
        </p>
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg transition"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
          }}
        >
          Get A Quote
        </button>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Stainless Steel Products Hero"
      />
    </section>
  )
}

