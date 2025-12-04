"use client"

import Image from "next/image"
import Link from "next/link"

interface GradeCardProps {
  grade: string
  image: string
  description: string
}

function GradeCard({ grade, image, description }: GradeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${grade} Stainless Steel Fittings`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{grade}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{description}</p>
        <Link
          href="/products/200-series"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

const grades = [
  {
    grade: "201 Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "201 stainless steel fittings offer cost-effective solutions with good corrosion resistance and excellent weldability. Perfect for general plumbing, industrial piping, and decorative applications requiring reliable connections."
  },
  {
    grade: "202 Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "202 stainless steel fittings provide enhanced corrosion resistance suitable for mildly corrosive environments. Ideal for architectural systems, automotive applications, and decorative installations requiring durability and aesthetic appeal."
  },
  {
    grade: "201L Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "201L fittings feature low carbon content for superior weldability and reduced intergranular corrosion risk. Perfect for welded piping systems, tanks, and applications requiring enhanced corrosion resistance in welded areas."
  },
  {
    grade: "204 Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "204 stainless steel fittings deliver enhanced performance with superior corrosion resistance and higher strength. Designed for chemical processing, marine environments, and industrial applications demanding superior durability."
  },
  {
    grade: "209 Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "209 fittings represent premium-grade quality with exceptional corrosion resistance and high-temperature performance. Ideal for critical applications in power generation, aerospace, and high-performance industrial systems requiring maximum reliability."
  }
]

export default function ProductFittingsGradesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            200 Series Grades Available
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive selection of 200 series stainless steel fittings. Each grade offers unique properties tailored to specific piping and connection requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grades.map((grade, idx) => (
            <GradeCard
              key={idx}
              {...grade}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

