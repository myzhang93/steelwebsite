"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import QuoteModal from "./quote-modal"

export default function CompanySection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          A China Steel Supplier To Change The World. We're Shanxi Steel.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Our Story */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Shanxi Steel has been a leading force in the global steel industry for over four decades. 
              Founded with a vision to revolutionize steel manufacturing, we have consistently delivered 
              superior quality products that meet and exceed international standards.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our commitment to excellence, combined with cutting-edge technology and a dedicated team 
              of professionals, has established us as a trusted partner for businesses worldwide. From 
              construction to manufacturing, our steel products power industries across the globe.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With state-of-the-art facilities and a relentless focus on innovation, Shanxi Steel 
              continues to set new benchmarks in quality, sustainability, and customer satisfaction.
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 transition"
            >
              GET A QUOTE
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column - Our Mission */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Shanxi Steel, our mission is to deliver superior quality steel products that empower 
              industries and drive global progress. We are committed to manufacturing excellence, 
              ensuring every product meets the highest standards of durability, precision, and reliability.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We believe in building lasting relationships with our customers by providing exceptional 
              service, customized solutions, and unwavering support throughout their journey with us.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our dedication to continuous improvement and innovation positions us as a premier global 
              supplier, ready to meet the evolving needs of industries worldwide.
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 transition"
            >
              GET A QUOTE
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Company Section"
      />
    </section>
  )
}




