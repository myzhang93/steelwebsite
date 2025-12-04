"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

const steelTypes = [
  {
    id: 1,
    title: "304 Stainless Steel",
    description: "304 stainless steel is one of the most widely used types of stainless steel, known for its excellent corrosion resistance and good machinability. It is commonly used in food processing equipment, kitchenware, chemical containers, and other applications where corrosion resistance is important. 304 stainless steel is resistant to corrosion from air, steam, and a variety of chemical environments, making it ideal for general-purpose applications.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 2,
    title: "316 Stainless Steel",
    description: "316 stainless steel offers superior corrosion resistance compared to 304, particularly in resistance to pitting and crevice corrosion. It is ideal for use in marine environments, chemical processing, and pharmaceutical industries. 316 stainless steel is commonly used in marine equipment, medical devices, chemical containers, and other applications where high corrosion resistance and high-temperature properties are required.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 3,
    title: "321 Stainless Steel",
    description: "321 stainless steel is a titanium-stabilized austenitic stainless steel with excellent oxidation resistance, especially in high-temperature environments. Its main applications include aerospace, heat exchangers, and high-temperature furnace parts. The addition of titanium improves the alloy's resistance to intergranular corrosion at elevated temperatures, making it suitable for high-stress and high-temperature conditions.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 4,
    title: "303 Stainless Steel",
    description: "303 stainless steel is known for its excellent machinability, making it ideal for precision machining applications. It has high strength and good corrosion resistance, making it suitable for use in components that require precise machining, such as aircraft parts, automotive components, and threaded parts. Its machinability is superior to that of 304 stainless steel, making it ideal for high-precision manufacturing needs.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 5,
    title: "310 Stainless Steel",
    description: "310 stainless steel is a high-temperature alloy that can withstand extremely high temperatures, making it ideal for use in high-heat environments. It is commonly used in furnace parts, heat exchangers, and industrial equipment that require resistance to oxidation at elevated temperatures. With excellent resistance to heat and corrosion, it is a preferred choice for industries dealing with high-temperature processes.",
    image: "/stainless-steel-sheet.png"
  }
]

export default function Product300TypesSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          300 Stainless Steel Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steelTypes.map((type) => (
            <div key={type.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                  {type.description}
                </p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
                >
                  Get A Quote
                </button>
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



