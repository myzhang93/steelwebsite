"use client"

import Link from "next/link"
import Image from "next/image"

export default function Product400GlobalReachSection() {
  return (
    <section className="relative py-20 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/global-logistics-shipping-steel.jpg"
          alt="Global Logistics"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Global Reach
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          With a comprehensive distribution network spanning across continents, we ensure that our 400 series 
          stainless steel sheets reach customers worldwide. Our global logistics capabilities enable us to deliver 
          high-quality products efficiently and reliably, meeting the demands of international markets.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg transition"
        >
          Get A Quote
        </Link>
      </div>
    </section>
  )
}

