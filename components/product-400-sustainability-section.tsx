"use client"

import Image from "next/image"

export default function Product400SustainabilitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Sustainability Commitment
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/construction-stainless-steel.jpg"
              alt="Construction Worker"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/industrial-stainless-steel-factory.jpg"
              alt="Construction Workers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

