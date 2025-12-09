"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import QuoteModal from "./quote-modal"

const grades = [
  {
    grade: "630 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "630 stainless steel is a precipitation-hardening alloy offering high strength and good corrosion resistance. It is ideal for applications requiring exceptional mechanical properties, making it perfect for high-stress components, aerospace applications, and critical industrial equipment."
  },
  {
    grade: "631 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "631 stainless steel offers excellent fatigue resistance, making it suitable for high-stress applications where reliability and durability are paramount. It maintains its structural integrity under extreme loads and conditions, ensuring optimal performance in demanding environments."
  },
  {
    grade: "640 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "640 stainless steel provides good high-temperature strength and oxidation resistance. It is designed for applications requiring both mechanical strength and thermal stability, making it ideal for high-temperature industrial processes and equipment."
  }
]

export default function Product600GradesSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          600 Series Grades
        </h2>
        <div className="space-y-8">
          {grades.map((grade, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={grade.image}
                    alt={grade.grade}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{grade.grade}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{grade.description}</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
                    >
                      Get a Quote
                    </button>
                    <Link
                      href="/products/stainless-steel-sheet#600-series-grades"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded font-semibold transition text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="600 Series Grades"
      />
    </section>
  )
}

