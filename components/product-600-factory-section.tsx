"use client"

import Image from "next/image"

export default function Product600FactorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          OUR FACTORY
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/industrial-stainless-steel-factory.jpg"
              alt="Factory Floor"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-welding-sparks.jpg"
              alt="Worker Processing Metal"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/industrial-manufacturing-steel-production.jpg"
              alt="Factory Interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-sheet.png"
              alt="Metal Coils"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


