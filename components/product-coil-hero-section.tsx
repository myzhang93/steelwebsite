"use client"

import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"

export default function ProductCoilHeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <section className="relative w-full h-[500px] bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/steel-istock-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
          transition: 'opacity 1.2s ease-out, transform 1.2s ease-out'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
          }}
        >
          Stainless Steel Coil: Superior Quality for Continuous Production
        </h1>
        <p 
          className="text-xl text-gray-200 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          Premium stainless steel coils designed for high-volume manufacturing and precision applications
        </p>
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition"
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
        source="Stainless Steel Coil Hero"
      />
    </section>
  )
}






