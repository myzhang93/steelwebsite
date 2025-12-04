"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Product300QualitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Superior Quality and Durability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are committed to delivering exceptional quality stainless steel products through 
              advanced manufacturing technology, rigorous quality control processes, and a highly skilled workforce. 
              Our 300 series stainless steel materials undergo comprehensive testing and inspection to ensure they 
              meet the highest industry standards. With superior corrosion resistance, excellent mechanical properties, 
              and long-lasting durability, our products are designed to perform reliably in the most demanding applications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
            >
              View More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/industrial-steel-sheet.jpg"
              alt="Steel Coils"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}



