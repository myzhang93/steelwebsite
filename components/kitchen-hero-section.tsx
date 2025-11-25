"use client"

import Link from "next/link"
import Image from "next/image"

export default function KitchenHeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kitchen-stainless-steel.jpg"
          alt="Kitchen with Stainless Steel"
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
          Kitchen Essentials: The Versatile Stainless Steel Sheets
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Stainless steel has become the cornerstone of modern kitchen design, offering unparalleled versatility, 
          durability, and aesthetic appeal. From professional kitchens to residential spaces, stainless steel sheets 
          provide the foundation for countertops, cabinets, equipment, and tableware that combine functionality with 
          timeless elegance. This versatile material transforms kitchens into efficient, hygienic, and beautiful spaces 
          that stand the test of time.
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


