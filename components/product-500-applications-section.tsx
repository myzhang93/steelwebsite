"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import QuoteModal from "./quote-modal"

const applications = [
  {
    id: 1,
    title: "High-Temperature Energy Conversion Systems",
    description: "500 series stainless steel is essential for solar thermal systems, power generation equipment, and other high-temperature energy conversion applications where exceptional heat resistance and durability are required.",
    image: "/industrial-manufacturing-steel-production.jpg"
  },
  {
    id: 2,
    title: "Advanced Filtration Systems",
    description: "The superior corrosion resistance and strength of 500 series make it ideal for advanced filtration systems, including HVAC systems, industrial filtration equipment, and specialized filtration applications.",
    image: "/industrial-machinery-fabrication.jpg"
  },
  {
    id: 3,
    title: "Cutting-Edge Automotive Applications",
    description: "500 series stainless steel is used in high-performance automotive components, exhaust systems, and advanced automotive applications that require superior strength, heat resistance, and corrosion protection.",
    image: "/stainless-steel-welding-sparks.jpg"
  },
  {
    id: 4,
    title: "Robotic and Automation Equipment",
    description: "The exceptional mechanical properties and reliability of 500 series make it perfect for robotic systems, automation equipment, and precision manufacturing applications where durability and performance are critical.",
    image: "/industrial-surface-treatment-facility.jpg"
  },
  {
    id: 5,
    title: "Aerospace and Defense",
    description: "500 series stainless steel meets the stringent requirements of aerospace and defense applications, providing exceptional strength, heat resistance, and reliability for critical components and systems.",
    image: "/oil-platform-sunset-offshore-industrial.jpg"
  }
]

export default function Product500ApplicationsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Application
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-grow">
                  {app.description}
                </p>
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
                >
                  Get A Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="500 Series Applications"
      />
    </section>
  )
}

