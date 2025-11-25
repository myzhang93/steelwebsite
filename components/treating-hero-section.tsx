"use client"

import Image from "next/image"

export default function TreatingHeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-surface-treatment-facility.jpg"
          alt="Surface Treatment"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Premium Custom Stainless Steel Surface Treatment Services
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Chemical treatments are effective ways of optimizing performance of stainless steel finishes and achieve peak 
          performance. These processes utilize strong acids such as sulphuric and phosphoric, making it vital that surfaces 
          be thoroughly cleansed and depressed prior to these processes taking place.
        </p>
        <div className="text-white/90 text-sm">
          HOME {'+'} SERVICE {'+'} TREATING
        </div>
      </div>
    </section>
  )
}



