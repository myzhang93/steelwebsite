"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ProductUsesSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const uses = [
    {
      title: "Kitchenware & Appliances",
      description: "Cookware, kitchen sinks, and home appliances.",
      image: "/stainless-steel-cutlery-cookware.jpg"
    },
    {
      title: "Automotive",
      description: "Exhaust systems, body parts, and engine components.",
      image: "/automotive-stainless-steel-parts.jpg"
    },
    {
      title: "Architecture",
      description: "Structural components, cladding, and building facades.",
      image: "/architectural-stainless-steel-building.jpg"
    },
    {
      title: "Industrial Equipment",
      description: "Pipes, fittings, and components for machinery and equipment.",
      image: "/industrial-machinery-fabrication.jpg"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          200 Series Stainless Steel Uses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {uses.map((use, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
              <div className="relative h-64 lg:h-72">
                <Image
                  src={use.image}
                  alt={use.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{use.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed flex-grow">{use.description}</p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-base"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Product Uses"
      />
    </section>
  )
}

