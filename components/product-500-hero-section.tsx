"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"

export default function Product500HeroSection() {
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
          src="/102372024_82482023_مصنع الحديد والصلب السليمانية (6).jpg"
          alt="500 Series Stainless Steel"
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
          500 Series Stainless Steel For Various Industries
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 leading-relaxed"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          500 series stainless steel offers exceptional performance characteristics, combining superior corrosion 
          resistance, high strength, and excellent heat resistance. This versatile material is engineered to meet 
          the demanding requirements of various industrial applications, from high-temperature energy conversion 
          systems to advanced filtration and automotive applications.
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
        source="500 Series Hero"
      />
    </section>
  )
}


