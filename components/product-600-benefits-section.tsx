"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function Product600BenefitsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Durability and Corrosion Resistance */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
            <div className="relative h-64">
              <Image
                src="/Stainless-Steel-scaled.jpeg"
                alt="Durability and Corrosion Resistance"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Durability and Corrosion Resistance
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                600 series stainless steel offers exceptional resistance to rust, corrosion, and harsh 
                environmental conditions. This superior durability ensures long-lasting performance in 
                challenging industrial environments, reducing maintenance costs and extending service life.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
              >
                Get A Quote
              </button>
            </div>
          </div>

          {/* High-Temperature Performance */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
            <div className="relative h-64">
              <Image
                src="/iron-smelter_hu245d07dd8af81482550c097dad3f7a4b_69516_750x375_resize_q100_h2_box.webp"
                alt="High-Temperature Performance"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                High-Temperature Performance
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                The 600 series maintains its structural integrity and mechanical properties even at elevated 
                temperatures. This exceptional heat resistance makes it ideal for applications in power 
                generation, industrial furnaces, and high-temperature processing equipment.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
              >
                Get A Quote
              </button>
            </div>
          </div>

          {/* Versatility of Applications */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
            <div className="relative h-64">
              <Image
                src="/istock-1163344935-scaled-e1633027039208-20240402-1152.jpg"
                alt="Versatility of Applications"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Versatility of Applications
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Thanks to its adaptable properties, 600 series stainless steel finds applications across 
                diverse industries including oil & gas, automotive, power generation, and manufacturing. 
                Its versatility makes it a preferred choice for various demanding applications.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
              >
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="600 Series Benefits"
      />
    </section>
  )
}


