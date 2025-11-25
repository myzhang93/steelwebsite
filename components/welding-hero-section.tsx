"use client"

import Image from "next/image"

export default function WeldingHeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/stainless-steel-welding-sparks.jpg"
          alt="Welding Process"
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
          Custom Stainless Steel Welding Excellence
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Stainless steel welding is similar to any other welding process; heat and pressure are applied to join together 
          the base metal. Special care must be taken in this instance to ensure strong, corrosion-proof welds. Employing 
          proper equipment, shielding gas and techniques such as backstepping or staggering are essential for controlling 
          distortion in welding applications. Furthermore, preparation must also include thoroughly cleaning any 
          contaminants off of the base metal before beginning welding work.
        </p>
        <div className="text-white/90 text-sm">
          HOME {'→'} SERVICE {'→'} WELDING
        </div>
      </div>
    </section>
  )
}


