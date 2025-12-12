"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"

export default function Product400HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[600px] flex items-center justify-center">
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
          src="/102372024_ddfcdb25-8550-4f6e-b969-3b5a63019655.jpg"
          alt="400 Series Stainless Steel Sheet"
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
          }}
        >
          400 Series Stainless Steel Sheet
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 leading-relaxed"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          The 400 series stainless steel sheet offers excellent strength, corrosion resistance, and heat resistance, 
          making it ideal for a wide range of industrial and commercial applications. With its magnetic properties 
          and superior machinability, this material provides exceptional value for demanding projects.
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
        source="400 Series Hero"
      />
    </section>
  )
}

