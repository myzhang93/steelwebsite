"use client"

import Image from "next/image"

export default function FinishingHeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-surface-treatment-facility.jpg"
          alt="Industrial Finishing"
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
          Elevate Your Projects with Custom Stainless Steel Finishing
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          No matter the purpose of a stainless steel component or piece, its surface finish should always be an integral element. 
          Furthermore, choosing an abrasive can have significant ramifications on friction levels, wear levels and maintenance 
          requirements. Standard mill finishes for cold rolled, annealed and pickled steel include #2D (cold rolled, annealed 
          and pickled) and #2B (cold rolled, annealed, pickled and passivated), while other surfaces offer different textures 
          and appearances.
        </p>
        <div className="text-white/90 text-sm">
          HOME {'>'} SERVICE {'>'} FINISHING
        </div>
      </div>
    </section>
  )
}

