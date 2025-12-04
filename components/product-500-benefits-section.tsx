"use client"

import Image from "next/image"
import { Droplets, ArrowUp, Flame } from "lucide-react"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function Product500BenefitsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          What's The Benefits Of 500 Series Stainless Steel?
        </h2>
        
        <div className="space-y-16">
          {/* Corrosion Resistance */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corrosion Resistance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                500 series stainless steel provides exceptional corrosion resistance, making it ideal for applications 
                exposed to harsh environments, chemicals, and moisture. The material's superior protective properties 
                ensure long-lasting performance and reliability in demanding industrial settings, reducing maintenance 
                costs and extending service life.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
              >
                Get A Quote
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <Droplets className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <div className="flex flex-col items-center gap-2">
                    <ArrowUp className="w-8 h-8 text-blue-600" />
                    <ArrowUp className="w-8 h-8 text-blue-600" />
                    <ArrowUp className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High Strength */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/stainless-steel-welding-sparks.jpg"
                  alt="High Strength"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High Strength</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With outstanding mechanical properties, 500 series stainless steel delivers exceptional strength and 
                durability. This high-strength material is capable of withstanding significant loads and stresses, 
                making it perfect for structural applications, heavy-duty equipment, and components that require 
                superior mechanical performance.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
              >
                Get A Quote
              </button>
            </div>
          </div>

          {/* Heat Resistance */}
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Heat Resistance</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              500 series stainless steel excels in high-temperature applications, maintaining its structural integrity 
              and mechanical properties even under extreme thermal conditions. This exceptional heat resistance makes 
              it ideal for energy conversion systems, industrial furnaces, heat exchangers, and other applications 
              where elevated temperatures are a critical factor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/molten-metal-welding-industrial-process.jpg"
                alt="Heat Resistance"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/industrial-stainless-steel-factory.jpg"
                alt="High Temperature"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="500 Series Benefits"
      />
    </section>
  )
}

