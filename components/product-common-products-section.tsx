"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ProductCommonProductsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const products = [
    {
      name: "201 Stainless Steel",
      description: "201 stainless steel offers high strength and low nickel content, providing good weldability and cost-effectiveness. It is widely used in kitchenware, automotive parts, and various industrial components, making it a practical and economical choice.",
      image: "/stainless-steel-sheet.png"
    },
    {
      name: "202 Stainless Steel",
      description: "With enhanced corrosion resistance and slightly higher manganese content compared to 201, 202 stainless steel excels in architectural materials, building facades, and automotive components. It offers great durability at a cost-effective price.",
      image: "/stainless-steel-sheet.png"
    },
    {
      name: "201L Stainless Steel (Low Carbon)",
      description: "Thanks to its low carbon content, 201L stainless steel provides improved corrosion resistance after welding, making it ideal for applications that require high-quality welding. It is commonly used in kitchen appliances, industrial equipment, and products that demand superior welding performance.",
      image: "/stainless-steel-sheet.png"
    },
    {
      name: "204 Stainless Steel",
      description: "204 stainless steel features good strength and moderate corrosion resistance, offering a cost-effective and reliable option for various industrial applications. It is frequently used in automotive parts, building materials, and other sectors where cost efficiency is important.",
      image: "/stainless-steel-sheet.png"
    },
    {
      name: "209 Stainless Steel",
      description: "With its high manganese content, 209 stainless steel delivers increased strength, making it ideal for heavy-duty applications. It is commonly used in industrial components and automotive parts that require extra strength and durability.",
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
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
                    >
                      Get a Quote
                    </button>
                    <Link
                      href="/products/stainless-steel-sheet"
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
        source="Common Products"
      />
    </section>
  )
}

