"use client"

import { Check } from "lucide-react"

const advantages = [
  "High Tensile Strength",
  "Corrosion Resistance",
  "Excellent Weldability",
  "High Yield Strength",
  "High Temperature",
  "Good Machinability",
  "Versatility",
  "Dimensional Stability",
  "Aesthetic Appeal",
  "Cost-Effectiveness",
  "Sustainability"
]

export default function Product600WhyChooseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose Us 600 Series Stainless Steel
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 text-lg">{advantage}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}








