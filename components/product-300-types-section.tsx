"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import QuoteModal from "./quote-modal"

const steelTypes = [
  {
    id: 1,
    title: "304 Stainless Steel",
    description: "304 stainless steel is one of the most widely used types of stainless steel, known for its excellent corrosion resistance and good machinability. It is commonly used in food processing equipment, kitchenware, chemical containers, and other applications where corrosion resistance is important. 304 stainless steel is resistant to corrosion from air, steam, and a variety of chemical environments, making it ideal for general-purpose applications.",
    image: "/stainless-steel-sheet.png",
    link: "/products/stainless-steel-sheet/304"
  },
  {
    id: 2,
    title: "316 Stainless Steel",
    description: "316 stainless steel offers superior corrosion resistance compared to 304, particularly in resistance to pitting and crevice corrosion. It is ideal for use in marine environments, chemical processing, and pharmaceutical industries. 316 stainless steel is commonly used in marine equipment, medical devices, chemical containers, and other applications where high corrosion resistance and high-temperature properties are required.",
    image: "/stainless-steel-sheet.png",
    link: "/products/stainless-steel-sheet/316"
  },
  {
    id: 3,
    title: "321 Stainless Steel",
    description: "321 stainless steel is a titanium-stabilized austenitic stainless steel with excellent oxidation resistance, especially in high-temperature environments. Its main applications include aerospace, heat exchangers, and high-temperature furnace parts. The addition of titanium improves the alloy's resistance to intergranular corrosion at elevated temperatures, making it suitable for high-stress and high-temperature conditions.",
    image: "/stainless-steel-sheet.png",
    link: "/products/stainless-steel-sheet/321"
  },
  {
    id: 4,
    title: "303 Stainless Steel",
    description: "303 stainless steel is known for its excellent machinability, making it ideal for precision machining applications. It has high strength and good corrosion resistance, making it suitable for use in components that require precise machining, such as aircraft parts, automotive components, and threaded parts. Its machinability is superior to that of 304 stainless steel, making it ideal for high-precision manufacturing needs.",
    image: "/stainless-steel-sheet.png",
    link: "/products/stainless-steel-sheet/303"
  },
  {
    id: 5,
    title: "310 Stainless Steel",
    description: "310 stainless steel is a high-temperature alloy that can withstand extremely high temperatures, making it ideal for use in high-heat environments. It is commonly used in furnace parts, heat exchangers, and industrial equipment that require resistance to oxidation at elevated temperatures. With excellent resistance to heat and corrosion, it is a preferred choice for industries dealing with high-temperature processes.",
    image: "/stainless-steel-sheet.png",
    link: "/products/stainless-steel-sheet/310"
  }
]

export default function Product300TypesSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          300 Stainless Steel Types
        </h2>
        <div className="space-y-8">
          {steelTypes.map((type) => (
            <div key={type.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
                    >
                      Get a Quote
                    </button>
                    <Link
                      href="/products/stainless-steel-sheet#300-series-grades"
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
        source="300 Series Types"
      />
    </section>
  )
}



