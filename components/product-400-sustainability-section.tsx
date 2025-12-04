"use client"

import Image from "next/image"

export default function Product400SustainabilitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Sustainability Commitment
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
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

        {/* Description Text */}
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-center">
            We are dedicated to sustainable manufacturing practices. We continually seek ways to minimize our environmental impact by reducing waste, recycling materials, and employing energy-efficient technologies in our production processes. Choosing us as your manufacturer means supporting a partner who prioritizes environmental responsibility alongside high-quality production.
          </p>
        </div>
      </div>
    </section>
  )
}

