"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ProductCommonProductsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const products = [
    {
      name: "201 Stainless Steel Sheet",
      description: "201 stainless steel sheet offers excellent corrosion resistance and formability, making it ideal for a wide range of applications including kitchen equipment, architectural panels, and automotive trim.",
      image: "/stainless-steel-sheets-manufacturing.jpg"
    },
    {
      name: "202 Stainless Steel Sheet",
      description: "202 stainless steel sheet provides superior strength and durability, perfect for structural applications, food processing equipment, and industrial machinery components.",
      image: "/stainless-steel-sheet.png"
    },
    {
      name: "203 Austenitic Stainless Steel",
      description: "203 austenitic stainless steel offers excellent weldability and formability, ideal for fabrication projects requiring complex shapes and strong welded joints.",
      image: "/stainless-steel-sheet.png"
    },
    {
      name: "204 Stainless Steel",
      description: "204 stainless steel provides exceptional surface finish and aesthetic appeal, perfect for decorative applications, architectural elements, and consumer products.",
      image: "/stainless-steel-sheet.png"
    },
    {
      name: "205 Stainless Steel",
      description: "205 stainless steel offers balanced properties of strength, corrosion resistance, and cost-effectiveness, suitable for general-purpose applications across various industries.",
      image: "/stainless-steel-sheet.png"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Common Products
        </h2>
        <div className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition self-start"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Common Products"
      />
    </section>
  )
}

