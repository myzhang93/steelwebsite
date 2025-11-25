"use client"

import Link from "next/link"
import Image from "next/image"

export default function FAQHeroSection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-machinery-fabrication.jpg"
          alt="Industrial Machinery"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          FAQs
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Frequently asked questions or you have any questions please contact us.
        </p>
        <Link
          href="/"
          className="inline-block bg-gray-700/80 hover:bg-gray-600/80 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          HOME → FAQS
        </Link>
      </div>
    </section>
  )
}


