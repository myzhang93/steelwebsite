"use client"

import Link from "next/link"
import Image from "next/image"

export default function Product400InnovationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At the heart of our operations lies a commitment to continuous innovation and research. We invest 
              heavily in research and development to improve our manufacturing processes, enhance product quality, 
              and develop new solutions that meet evolving industry needs. Our innovation-driven approach ensures 
              that we stay ahead of market trends and deliver cutting-edge stainless steel products.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Through collaboration with industry partners and academic institutions, we continuously explore new 
              technologies and methodologies that can enhance the performance and sustainability of our 400 series 
              stainless steel sheets.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition"
            >
              Learn More
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/industrial-manufacturing-steel-production.jpg"
              alt="Industrial Innovation"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

