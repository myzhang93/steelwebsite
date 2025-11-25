"use client"

import Link from "next/link"
import Image from "next/image"

export default function BrushedFinishHeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/professional-stainless-steel-finishing.jpg"
          alt="Brushed Stainless Steel Finishing"
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
          Brushed Elegance: The Ultimate Stainless Steel Finish Tutorial
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          There are various finishes designed to improve both the aesthetics and functionality of stainless steel 
          products, each one with its own maintenance needs. Brush finishes may show more fingerprints than mirror 
          finished products. Regular cleaning can help conceal these marks, leaving the material looking its best. 
          Wiping in one direction is also essential in maintaining its appearance of brushed finishes.
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

