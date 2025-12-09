"use client"

import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ProductSheetApplicationsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const applications = [
    {
      title: "Architectural & Construction",
      description: "Ideal for building facades, decorative panels, and structural components requiring aesthetic appeal and durability.",
      icon: "🏗️"
    },
    {
      title: "Food Processing",
      description: "Perfect for kitchen equipment, food preparation surfaces, and processing machinery that requires hygiene and corrosion resistance.",
      icon: "🍽️"
    },
    {
      title: "Automotive Industry",
      description: "Used in exhaust systems, trim components, and structural parts requiring heat resistance and durability.",
      icon: "🚗"
    },
    {
      title: "Household Appliances",
      description: "Excellent for sinks, countertops, refrigerators, and other appliances requiring both functionality and appearance.",
      icon: "🏠"
    },
    {
      title: "Chemical Processing",
      description: "Suitable for tanks, vessels, and equipment exposed to mild to moderate corrosive environments.",
      icon: "⚗️"
    },
    {
      title: "Marine Applications",
      description: "Used in boat components, marine hardware, and coastal installations requiring resistance to saltwater exposure.",
      icon: "⚓"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Applications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our stainless steel sheets and plates are utilized across diverse industries, offering reliable performance in various applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{app.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
              <p className="text-gray-600 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition"
          >
            Get A Quote for Your Application
          </button>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Sheet & Plate Applications"
      />
    </section>
  )
}


