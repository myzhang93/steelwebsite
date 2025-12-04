"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

const applications = [
  {
    id: 1,
    title: "Oil & Gas Industry Equipment",
    description: "600 series stainless steel is essential for demanding oil and gas environments, providing exceptional corrosion resistance and strength for pipelines, valves, and processing equipment that must withstand harsh conditions and high pressures.",
    image: "/oil-platform-sunset-offshore-industrial.jpg"
  },
  {
    id: 2,
    title: "Power Generation",
    description: "The material's excellent high-temperature performance and durability make it ideal for power generation applications, including solar energy systems, thermal power plants, and renewable energy infrastructure.",
    image: "/industrial-manufacturing-steel-production.jpg"
  },
  {
    id: 3,
    title: "Automotive Performance Parts",
    description: "600 series stainless steel is used in high-performance automotive components where strength, heat resistance, and durability are critical. Applications include exhaust systems, turbochargers, and structural components.",
    image: "/stainless-steel-welding-sparks.jpg"
  },
  {
    id: 4,
    title: "Mold and Die Making",
    description: "The superior hardness and wear resistance of 600 series make it perfect for creating durable molds and dies used in manufacturing processes, ensuring precision and longevity in production applications.",
    image: "/industrial-machinery-fabrication.jpg"
  }
]

export default function Product600ApplicationsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Key Application
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
              <div className="relative h-64">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {app.description}
                </p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
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
        source="600 Series Applications"
      />
    </section>
  )
}


