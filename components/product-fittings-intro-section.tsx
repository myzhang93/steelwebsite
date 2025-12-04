"use client"

import Image from "next/image"

export default function ProductFittingsIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-sheet.png"
              alt="Stainless Steel Fittings"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Premium Stainless Steel Fittings
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Our comprehensive range of stainless steel fittings includes elbows, tees, reducers, flanges, and specialized connectors designed to meet the highest industry standards. Available in various grades and connection types, our fittings ensure reliable and leak-proof connections.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Perfect for piping systems, plumbing, industrial equipment, and commercial applications, our fittings are manufactured with precision machining and rigorous quality control. Whether you need threaded, welded, or flanged connections, we offer solutions that integrate seamlessly with your existing systems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With excellent corrosion resistance, high pressure ratings, and superior durability, our stainless steel fittings provide the reliability and performance your systems demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

