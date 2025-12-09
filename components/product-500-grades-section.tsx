"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import QuoteModal from "./quote-modal"

const grades = [
  {
    grade: "502 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "502 stainless steel is a high-chromium alloy offering excellent high-temperature oxidation resistance. It is ideal for applications requiring superior heat resistance and durability in extreme environments, making it perfect for high-temperature energy conversion systems and industrial furnaces."
  },
  {
    grade: "503 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "503 stainless steel provides good oxidation resistance and is ideal for high-temperature applications. It offers excellent performance in environments where heat resistance and durability are critical, making it suitable for various industrial and energy applications."
  },
  {
    grade: "504 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "504 stainless steel resists scaling and oxidation, making it ideal for use in furnace parts and high-temperature industrial applications. It maintains structural integrity at elevated temperatures, ensuring reliable performance in demanding thermal environments."
  }
]

export default function Product500GradesSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          500 Series Grades
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
                      href="/products/stainless-steel-sheet#500-series-grades"
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
        source="500 Series Grades"
      />
    </section>
  )
}

