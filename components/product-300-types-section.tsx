"use client"

import Link from "next/link"
import Image from "next/image"

const steelTypes = [
  {
    id: 1,
    title: "301 Stainless Steel Sheet",
    description: "High strength and good corrosion resistance, ideal for applications requiring excellent formability and durability.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 2,
    title: "302 Stainless Steel Sheet",
    description: "Similar to 304 but with higher carbon content, providing improved strength and hardness for demanding applications.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 3,
    title: "302B Stainless Steel",
    description: "Enhanced version with improved high-temperature properties and superior corrosion resistance in harsh environments.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 4,
    title: "303 Stainless Plate",
    description: "Free-machining grade with excellent machinability, perfect for applications requiring extensive machining operations.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 5,
    title: "304 Stainless Steel Sheet",
    description: "The most widely used stainless steel grade, offering excellent corrosion resistance and versatility across industries.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 6,
    title: "304L Stainless Steel",
    description: "Low carbon version of 304, providing superior weldability and resistance to intergranular corrosion.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 7,
    title: "304N Stainless Steel",
    description: "Nitrogen-enhanced grade offering improved strength while maintaining excellent corrosion resistance properties.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 8,
    title: "SS 305 Stainless Steel",
    description: "Low work-hardening rate makes it ideal for deep drawing and forming applications requiring extensive deformation.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 9,
    title: "384 Stainless Steel",
    description: "Specialized grade designed for specific applications requiring unique mechanical and corrosion properties.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 10,
    title: "309 Stainless Steel Plate",
    description: "High-temperature grade with excellent oxidation resistance, suitable for elevated temperature applications.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 11,
    title: "309S Stainless Steel",
    description: "Low carbon version of 309, providing enhanced weldability and resistance to sensitization at high temperatures.",
    image: "/stainless-steel-sheet.png"
  },
  {
    id: 12,
    title: "310S Stainless Steel Sheet",
    description: "Premium high-temperature grade with exceptional oxidation resistance and strength retention at elevated temperatures.",
    image: "/stainless-steel-sheet.png"
  }
]

export default function Product300TypesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          300 Stainless Steel Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steelTypes.map((type) => (
            <div key={type.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {type.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



