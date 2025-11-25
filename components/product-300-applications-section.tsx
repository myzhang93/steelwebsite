"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const applications = [
  {
    id: 1,
    title: "Automotive Manufacturing",
    description: "300 series stainless steel sheets are extensively used in automotive manufacturing for components requiring excellent corrosion resistance, durability, and aesthetic appeal. Applications include exhaust systems, trim pieces, and structural components.",
    image: "/industrial-machinery-fabrication.jpg"
  },
  {
    id: 2,
    title: "Marine Applications",
    description: "The superior corrosion resistance of 300 series stainless steel makes it ideal for marine environments. Used in shipbuilding, offshore platforms, and marine equipment where saltwater exposure demands exceptional material performance.",
    image: "/oil-platform-sunset-offshore-industrial.jpg"
  },
  {
    id: 3,
    title: "Renewable Energy Infrastructure",
    description: "300 series stainless steel plays a crucial role in renewable energy applications, including wind turbines, solar panel mounting systems, and energy storage facilities. Its durability and resistance to environmental factors ensure long-term reliability.",
    image: "/industrial-manufacturing-steel-production.jpg"
  },
  {
    id: 4,
    title: "Electronics and Semiconductor Manufacturing",
    description: "The clean, non-contaminating properties of 300 series stainless steel make it essential in electronics and semiconductor manufacturing. Used in cleanroom environments, processing equipment, and component fabrication.",
    image: "/industrial-surface-treatment-facility.jpg"
  }
]

export default function Product300ApplicationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          300 Series Stainless Steel Sheet Common Application
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative h-64">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {app.description}
                </p>
                <Link
                  href={`/industry/${app.id}`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
                >
                  View Details
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



