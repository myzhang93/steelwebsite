"use client"

import Link from "next/link"
import Image from "next/image"

interface TreatmentHeroSectionProps {
  title: string
  description: string
  backgroundImage?: string
}

export default function TreatmentHeroSection({
  title,
  description,
  backgroundImage = "/stainless-steel-welding-sparks.jpg"
}: TreatmentHeroSectionProps) {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Industrial Process"
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
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          {description}
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



