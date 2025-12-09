"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import QuoteModal from "./quote-modal"

const grades = [
  {
    grade: "410 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "410 stainless steel is a martensitic steel with good corrosion resistance and high strength. It is commonly used in applications where moderate corrosion resistance and high hardness are required. 410 is often used for parts that require good machinability and the ability to be hardened, such as pumps, valves, and shafts. It offers excellent wear resistance, making it ideal for cutting tools and blades.",
    properties: ["Good corrosion resistance", "High strength", "High hardness", "Good machinability", "Excellent wear resistance"],
    applications: ["Pumps", "Valves", "Shafts", "Cutting tools", "Blades"]
  },
  {
    grade: "420 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "420 stainless steel is another martensitic stainless steel, known for its high hardness and excellent wear resistance. It is often used in applications that require a sharp edge or high hardness, such as knives, surgical instruments, and other cutting tools. Although it has lower corrosion resistance than 304 or 316, its hardness and ability to maintain a sharp edge make it ideal for specialized tools.",
    properties: ["High hardness", "Excellent wear resistance", "Sharp edge retention", "Martensitic structure"],
    applications: ["Knives", "Surgical instruments", "Cutting tools", "Specialized tools"]
  },
  {
    grade: "430 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "430 stainless steel is a ferritic stainless steel with good corrosion resistance to atmospheric and mildly corrosive environments. It is magnetic and offers good formability, making it suitable for decorative applications. 430 stainless steel is commonly used in automotive trim, kitchen appliances, and other decorative products where both aesthetic appeal and moderate corrosion resistance are important.",
    properties: ["Good corrosion resistance", "Magnetic", "Good formability", "Ferritic structure"],
    applications: ["Automotive trim", "Kitchen appliances", "Decorative products"]
  },
  {
    grade: "446 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "446 stainless steel is a high-chromium ferritic alloy that offers excellent resistance to high-temperature oxidation and corrosion. It is commonly used in applications where high heat resistance is required, such as in furnace components, heat exchangers, and other high-temperature industrial equipment. 446 is highly resistant to scaling and oxidation, making it suitable for extreme environments.",
    properties: ["Excellent high-temperature oxidation resistance", "High chromium content", "Resistant to scaling", "Ferritic structure"],
    applications: ["Furnace components", "Heat exchangers", "High-temperature industrial equipment"]
  },
  {
    grade: "409 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "409 stainless steel is a ferritic alloy often used for automotive exhaust systems due to its resistance to corrosion in high-temperature environments. It offers good resistance to heat and oxidation but is not as corrosion-resistant as the austenitic alloys. 409 stainless steel is widely used in exhaust manifolds, catalytic converters, and other automotive parts that require heat resistance and moderate corrosion protection.",
    properties: ["Heat resistance", "Oxidation resistance", "Ferritic structure", "Cost-effective"],
    applications: ["Automotive exhaust systems", "Exhaust manifolds", "Catalytic converters", "Automotive parts"]
  },
  {
    grade: "410S Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "410S stainless steel is a low-carbon version of 410 stainless steel that offers enhanced weldability and resistance to stress corrosion cracking. It is often used in applications requiring moderate strength, good corrosion resistance, and the ability to withstand higher temperatures. 410S is commonly used for heat exchangers, pressure vessels, and other industrial applications.",
    properties: ["Enhanced weldability", "Resistance to stress corrosion cracking", "Moderate strength", "Good corrosion resistance", "Low carbon"],
    applications: ["Heat exchangers", "Pressure vessels", "Industrial applications"]
  }
]

export default function Product400GradesSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          400 Series Grades
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
                      href="/products/stainless-steel-sheet#400-series-grades"
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
        source="400 Series Grades"
      />
    </section>
  )
}

