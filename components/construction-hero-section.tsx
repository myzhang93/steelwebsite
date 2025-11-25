"use client"

import Link from "next/link"
import Image from "next/image"

export default function ConstructionHeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-steel-sheet.jpg"
          alt="Stacked Metal Sheets"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-400">
          Stainless Steel Sheet in Construction Industry Applications
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Stainless steel has become an indispensable material in modern construction, offering exceptional durability, 
          aesthetic appeal, and environmental sustainability. From towering skyscrapers to residential buildings, 
          stainless steel sheets provide structural integrity, corrosion resistance, and long-lasting performance that 
          traditional materials cannot match. Its versatility allows architects and engineers to push the boundaries of 
          design while ensuring safety and reliability.
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


