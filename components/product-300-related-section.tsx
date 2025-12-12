"use client"

import Link from "next/link"
import Image from "next/image"

const relatedProducts = [
  {
    name: "200 Series",
    image: "/stainless-steel-sheet.png",
    href: "/products/200-series"
  },
  {
    name: "400 Series",
    image: "/stainless-steel-sheet.png",
    href: "/products/400-series"
  },
  {
    name: "500 Series",
    image: "/stainless-steel-sheet.png",
    href: "/products/500-series"
  },
  {
    name: "600 Series",
    image: "/stainless-steel-sheet.png",
    href: "/products/600-series"
  }
]

export default function Product300RelatedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Related Products
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((product, idx) => (
            <Link
              key={idx}
              href={product.href}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}








