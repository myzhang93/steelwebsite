"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
          transition: 'opacity 1.2s ease-out, transform 1.2s ease-out'
        }}
      >
        <Image
          src="/steel-factory-manufacturers.webp"
          alt="Welding Sparks"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
          }}
        >
          Contact Us
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 leading-relaxed"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          Don't hesitate to get in touch with us today to start a collaborative journey towards mutual development and growth.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 border-2 border-gray-800 px-6 py-3 rounded font-semibold transition"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
          }}
        >
          HOME
          <ArrowRight className="w-4 h-4" />
          CONTACT US
        </Link>
      </div>
    </section>
  )
}



