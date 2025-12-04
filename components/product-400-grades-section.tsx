"use client"

import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

interface GradeCardProps {
  grade: string
  image: string
  description: string
  properties: string[]
  applications: string[]
  wordpressId?: string | null
}

function GradeCard({ grade, image, description, onQuoteClick }: GradeCardProps & { onQuoteClick: () => void }) {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${grade} Stainless Steel`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{grade}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{description}</p>
        <button
          onClick={onQuoteClick}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full"
        >
          Get A Quote
        </button>
      </div>
    </div>
  )
}

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Grades
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grades.map((grade, idx) => (
            <GradeCard
              key={idx}
              {...grade}
              onQuoteClick={() => setIsQuoteModalOpen(true)}
            />
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

