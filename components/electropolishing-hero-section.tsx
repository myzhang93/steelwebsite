"use client"

import Link from "next/link"
import Image from "next/image"

export default function ElectropolishingHeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/manufacturing-facility-sparks-metal-cutting.jpg"
          alt="Electropolishing Process"
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
          The Luminescent Sheen of Stainless Steel: Electropolishing Explained
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Electropolishing stands as a sophisticated electrochemical metal finishing technique that transforms stainless 
          steel surfaces into gleaming, corrosion-resistant masterpieces. This process marries science with manufacturing 
          excellence, creating surfaces that not only gleam with a mirror-like finish but also resist corrosion and 
          enhance performance. Understanding electropolishing opens doors to achieving the highest quality and luster in 
          stainless steel products.
        </p>
        <Link
          href="#quote-form"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg transition"
        >
          Get A Quick Quote
        </Link>
      </div>
    </section>
  )
}


