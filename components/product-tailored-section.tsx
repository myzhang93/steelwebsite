"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ProductTailoredSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Tailored Solutions
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          At Shanxi Steel, we understand that every project has unique requirements. Our 200 Series 
          Stainless Steel products can be customized to meet your specific needs, including custom 
          sizes, finishes, and specifications. Our expert team works closely with you to deliver 
          tailored solutions that perfectly match your application requirements.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-sheets-manufacturing.jpg"
              alt="Steel Sheets"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-sheet.png"
              alt="Polished Sheets"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Tailored Solutions"
      />
    </section>
  )
}

