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
              src="/custom-steel-solutions.jpg"
              alt="Transparent Communication"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Communication
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We prioritize open and transparent communication with our clients at every step of the process. 
              From the initial inquiry to delivery and beyond, we ensure that our customers are well-informed 
              and involved in every stage of their project.
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded font-semibold transition"
            >
              Get a Quote Now
            </button>
          </div>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Transparent Communication Section"
      />
    </section>
  )
}

