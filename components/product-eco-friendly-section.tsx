"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ProductEcoFriendlySection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/stainless-steel-sheets-manufacturing.jpg"
              alt="Eco-Friendly Manufacturing"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eco-Friendly Manufacturing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Shanxi Steel is committed to sustainable manufacturing practices. Our 200 Series Stainless 
              Steel is produced using eco-friendly processes that minimize environmental impact while 
              maintaining the highest quality standards. We prioritize recycling and energy efficiency 
              in our manufacturing operations.
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition"
            >
              Get a Quote Now
            </button>
          </div>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Eco-Friendly Section"
      />
    </section>
  )
}

