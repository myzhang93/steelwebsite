"use client"

import Link from "next/link"
import Image from "next/image"

export default function LogisticsHeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/global-logistics-shipping-steel.jpg"
          alt="Global Logistics"
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
          Your Premier Partner for Global Stainless Steel Logistics Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          In the dynamic world of stainless steel manufacturing and distribution, efficient logistics management is not 
          just a necessity—it's a competitive advantage. As a strategic partner in your supply chain, we understand 
          the critical role that timely, secure, and cost-effective logistics play in the success of your operations. 
          Our comprehensive logistics solutions are designed to seamlessly integrate with your business processes, 
          ensuring that your stainless steel products reach their destination on time, in perfect condition, and at 
          optimal cost.
        </p>
        <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
          <Link href="/" className="hover:text-white transition">HOME</Link>
          <span>|</span>
          <Link href="/capabilities" className="hover:text-white transition">SERVICE</Link>
          <span>|</span>
          <span className="text-blue-400 underline">LOGISTICS</span>
        </div>
      </div>
    </section>
  )
}



