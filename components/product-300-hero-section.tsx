"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"

export default function Product300HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[500px] flex items-center justify-center">
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
          src="/RSshutterstock_1419556076_0.jpg"
          alt="Manufacturing Process"
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
          Are You Looking For Reliable Stainless Steel Sheet Manufacturer?
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 leading-relaxed"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          A leading manufacturer of high-quality stainless steel products, committed to excellence and customer satisfaction.
        </p>
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg transition"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
          }}
        >
          Get A Quote
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="300 Series Hero"
      />
    </section>
  )
}



