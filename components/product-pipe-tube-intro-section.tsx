"use client"

import Image from "next/image"

export default function ProductPipeTubeIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-sheet.png"
              alt="Stainless Steel Pipe & Tube"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Premium Stainless Steel Pipes & Tubes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Our stainless steel pipes and tubes are engineered to meet the highest standards of quality and performance. Available in seamless and welded configurations, we offer a comprehensive range of sizes, grades, and specifications to suit diverse industrial needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Perfect for fluid transport, structural applications, heat exchangers, and specialized uses, our pipes and tubes deliver exceptional corrosion resistance, high pressure tolerance, and excellent weldability. Whether you need standard sizes or custom dimensions, we provide solutions that meet your exact requirements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With rigorous quality control, precise dimensional tolerances, and comprehensive testing, our pipes and tubes ensure reliable performance in the most demanding environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}







