"use client"

import Link from "next/link"
import Image from "next/image"

export default function EngineeringHeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-manufacturing-steel-production.jpg"
          alt="Industrial Manufacturing"
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
          Custom Stainless Steel Solutions by Shanxi Steel: Tailored Precision for Your Projects
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          In the realm of industrial manufacturing and construction, precision and customization are not just preferences—they are necessities. 
          Every project has unique requirements, and standard solutions often fall short. This is where Shanxi Steel steps in, offering custom 
          stainless steel solutions that are meticulously tailored to meet your specific needs, ensuring optimal performance, durability, and aesthetic appeal.
        </p>
        <div className="text-white/90 text-sm">
          HOME → SERVICE → ENGINEERING
        </div>
      </div>
    </section>
  )
}



