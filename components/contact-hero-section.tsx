"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ContactHeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/stainless-steel-welding-sparks.jpg"
          alt="Welding Sparks"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Don't hesitate to get in touch with us today to start a collaborative journey towards mutual development and growth.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 border-2 border-gray-800 px-6 py-3 rounded font-semibold transition"
        >
          HOME
          <ArrowRight className="w-4 h-4" />
          CONTACT US
        </Link>
      </div>
    </section>
  )
}


