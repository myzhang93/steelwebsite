"use client"

import Link from "next/link"
import Image from "next/image"

export default function IndustryHeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/automotive-stainless-steel.jpg"
          alt="Automotive Gears"
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
          The Significance of Stainless Steel Sheets in the Automotive Sector
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          The automotive industry is currently undergoing a significant transformation towards greater efficiency, safety, and sustainability while maintaining exceptional design standards. Amid these complex challenges, the material used in our vehicles is quietly revolutionizing. Once known for kitchenware and medical tools, stainless steel now plays a crucial role in shaping modern cars.
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

