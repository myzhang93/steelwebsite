"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"

export default function Product600HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div 
            className="relative h-[500px] rounded-lg overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
            }}
          >
            <Image
              src="/Module-4-3-1024x713.jpg"
              alt="600 Series Stainless Steel"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
              }}
            >
              600 Series Stainless Steel
            </h1>
            <p 
              className="text-gray-600 leading-relaxed mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
              }}
            >
              600 series stainless steel is a premium grade material known for its exceptional strength, 
              superior corrosion resistance, and outstanding high-temperature performance. This advanced 
              alloy is engineered to meet the most demanding industrial requirements, making it ideal 
              for critical applications across various industries including oil & gas, power generation, 
              automotive, and manufacturing.
            </p>
            
            {/* Key Features List */}
            <ul 
              className="space-y-3 mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s'
              }}
            >
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">High Strength</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Corrosion Resistance</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">High-Temperature Performance</span>
              </li>
            </ul>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg transition"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
              }}
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="600 Series Hero"
      />
    </section>
  )
}


