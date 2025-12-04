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
          Client-Centered Approach
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          We take a client-centered approach by listening to your specific needs and providing tailored 
          recommendations. Whether you're looking for standard products or customized solutions, we take 
          time to understand your requirements and offer solutions that best fit your business.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-sheet.png"
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
            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded font-semibold transition"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Client-Centered Approach"
      />
    </section>
  )
}

