"use client"

import Image from "next/image"
import Link from "next/link"

interface GradeCardProps {
  grade: string
  image: string
  description: string
  link?: string
}

function GradeCard({ grade, image, description, link = "/products/200-series" }: GradeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${grade} Stainless Steel Coil`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{grade}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{description}</p>
        <Link
          href={link}
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
    grade: "201 Stainless Steel Coil",
    image: "/stainless-steel-sheet.png",
    description: "201 stainless steel coil offers excellent formability and cost-effectiveness, making it ideal for high-volume manufacturing. Perfect for stamping, forming, and deep drawing operations in automotive, appliance, and architectural applications.",
    link: "/products/stainless-steel-coil/201"
  },
  {
    grade: "202 Stainless Steel Coil",
    image: "/stainless-steel-sheet.png",
    description: "202 stainless steel coil provides enhanced corrosion resistance with good formability. Ideal for applications requiring improved durability and aesthetic appeal, such as architectural panels, decorative trim, and household appliances.",
    link: "/products/stainless-steel-coil/202"
  },
  {
    grade: "201L Stainless Steel Coil",
    image: "/stainless-steel-sheet.png",
    description: "201L is the low-carbon version of 201, offering superior weldability and reduced intergranular corrosion. Perfect for welded fabrications and applications requiring enhanced corrosion resistance in welded areas."
  },
  {
    grade: "204 Stainless Steel Coil",
    image: "/stainless-steel-sheet.png",
    description: "204 stainless steel coil delivers enhanced corrosion resistance and higher strength. Designed for demanding applications in chemical processing, marine environments, and industrial equipment requiring superior performance."
  },
  {
    grade: "209 Stainless Steel Coil",
    image: "/stainless-steel-sheet.png",
    description: "209 stainless steel coil offers premium-grade quality with superior corrosion resistance and high-temperature performance. Ideal for critical applications in power generation, aerospace, and high-performance industrial systems."
  }
]

export default function ProductCoilGradesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            200 Series Grades Available
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive selection of 200 series stainless steel coils. Each grade offers unique properties tailored to specific manufacturing and application requirements.
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

