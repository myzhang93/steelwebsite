"use client"

import Image from "next/image"

export default function ProductSheetIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-sheet.png"
              alt="Stainless Steel Sheet & Plate"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Premium Stainless Steel Sheet & Plate Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Our stainless steel sheets and plates are manufactured with precision and quality in mind. Whether you need standard sizes or custom dimensions, we provide comprehensive solutions for a wide range of industrial and commercial applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The 200 series stainless steel sheets and plates offer an excellent balance between performance and cost-effectiveness. These materials are known for their good corrosion resistance, excellent formability, and versatility across various industries.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From architectural applications to food processing equipment, our sheets and plates are engineered to meet the highest standards of quality and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}







