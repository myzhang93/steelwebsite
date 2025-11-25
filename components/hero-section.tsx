"use client"

import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import QuoteModal from "./quote-modal"

export default function HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-slate-900 flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/molten-steel-industrial-furnace.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content - Left Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 bg-red-600 flex-shrink-0 rounded-full"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Best Quality</h1>
          </div>
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-xl">
            Choose Shanxi Steel for the best quality steel—engineered with precision, trusted for durability, and built to exceed expectations.
          </p>
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold flex items-center gap-2 transition"
          >
            GET A QUOTE
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
        <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Hero Section"
      />
    </section>
  )
}



