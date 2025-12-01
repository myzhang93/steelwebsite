"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Product300HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/stainless-steel-welding-sparks.jpg"
          alt="Manufacturing Process"
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
          Are You Looking For Reliable Stainless Steel Sheet Manufacturer?
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          A leading manufacturer of high-quality stainless steel products, committed to excellence and customer satisfaction.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg transition"
        >
          Get A Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}



