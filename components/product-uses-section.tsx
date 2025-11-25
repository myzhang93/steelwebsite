"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ProductUsesSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const uses = [
    {
      title: "Commercial Kitchen Counters",
      description: "Perfect for commercial kitchen applications requiring durability and hygiene.",
      image: "/kitchen-stainless-steel.jpg"
    },
    {
      title: "Chemical Processing Tanks",
      description: "Ideal for chemical processing equipment requiring corrosion resistance.",
      image: "/chemical-stainless-steel.jpg"
    },
    {
      title: "Bulk Food Storage Containers",
      description: "Excellent for food storage applications meeting safety standards.",
      image: "/food-processing-stainless-steel.jpg"
    },
    {
      title: "Automotive Trims",
      description: "Used in automotive applications for decorative and functional trims.",
      image: "/automotive-stainless-steel.jpg"
    },
    {
      title: "Architectural Cladding",
      description: "Perfect for modern architectural applications and building facades.",
      image: "/architectural-stainless-steel-building.jpg"
    },
    {
      title: "Hospital Surgical Equipment",
      description: "Meets medical standards for surgical equipment and hospital fixtures.",
      image: "/medical-stainless-steel.jpg"
    },
    {
      title: "Railway Coaches Interior Panels",
      description: "Used in railway applications for interior paneling and fixtures.",
      image: "/stainless-steel-sheet.png"
    },
    {
      title: "Electronic Enclosures",
      description: "Ideal for electronic equipment enclosures requiring durability.",
      image: "/industrial-steel-machinery-equipment.jpg"
    },
    {
      title: "Conveyor Belts in Food Processing",
      description: "Perfect for food processing conveyor systems requiring hygiene.",
      image: "/food-catering-stainless-steel.jpg"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          200 Series Stainless Steel Uses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {uses.map((use, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src={use.image}
                  alt={use.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{use.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{use.description}</p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
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

