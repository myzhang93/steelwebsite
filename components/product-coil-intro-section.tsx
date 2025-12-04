"use client"

import Image from "next/image"

export default function ProductCoilIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-sheet.png"
              alt="Stainless Steel Coil"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              High-Quality Stainless Steel Coils
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Our stainless steel coils are manufactured with precision and consistency, making them ideal for continuous production processes. Available in various grades including 200, 300, and 400 series, our coils meet the most demanding industrial requirements.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Perfect for stamping, forming, deep drawing, and other manufacturing operations, our coils offer excellent surface finish, consistent thickness, and superior formability. Whether you need standard widths or custom dimensions, we deliver coils that optimize your production efficiency.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With strict quality control and on-time delivery, we ensure your production lines never stop running. Our coils are available in various thicknesses, widths, and surface finishes to meet your specific application needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

