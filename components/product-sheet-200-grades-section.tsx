"use client"

import Image from "next/image"
import Link from "next/link"

interface GradeCardProps {
  grade: string
  image: string
  description: string
  properties: string[]
  applications: string[]
}

function GradeCard({ grade, image, description, properties, applications }: GradeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${grade} Stainless Steel Sheet & Plate`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{grade}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{description}</p>
        
        {grade === "201 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/201"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "202 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/202"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "201L Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/201L"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "204 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/204"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "209 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/209"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : (
          <Link
            href="/products/200-series"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  )
}

const grades = [
  {
    grade: "201 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "201 stainless steel is a cost-effective alternative to 304, offering good corrosion resistance and excellent formability. It's widely used in decorative applications, cookware, and food processing equipment. The alloy maintains strength at high temperatures and provides good weldability.",
    properties: [
      "Good corrosion resistance",
      "Excellent formability",
      "High strength at elevated temperatures",
      "Good weldability",
      "Cost-effective"
    ],
    applications: [
      "Decorative trim",
      "Cookware",
      "Food processing equipment",
      "Kitchen sinks",
      "Architectural applications"
    ]
  },
  {
    grade: "202 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "202 stainless steel offers improved corrosion resistance compared to 201, with better performance in mildly corrosive environments. It's ideal for applications requiring durability and aesthetic appeal, such as architectural panels, automotive trim, and household appliances.",
    properties: [
      "Improved corrosion resistance",
      "Good formability and weldability",
      "Attractive surface finish",
      "Durable and long-lasting",
      "Magnetic properties"
    ],
    applications: [
      "Architectural panels",
      "Automotive trim",
      "Household appliances",
      "Window frames",
      "Furniture"
    ]
  },
  {
    grade: "201L Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "201L is the low-carbon version of 201 stainless steel, offering enhanced weldability and reduced susceptibility to intergranular corrosion. This grade is perfect for welded structures and applications requiring better corrosion resistance in welded areas.",
    properties: [
      "Low carbon content",
      "Enhanced weldability",
      "Reduced intergranular corrosion",
      "Good formability",
      "Excellent for welded structures"
    ],
    applications: [
      "Welded structures",
      "Tanks and containers",
      "Heat exchangers",
      "Automotive exhaust systems",
      "Chemical processing equipment"
    ]
  },
  {
    grade: "204 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "204 stainless steel provides enhanced corrosion resistance and strength compared to standard 200 series alloys. It's designed for applications that require better performance in corrosive environments while maintaining cost-effectiveness. Ideal for chemical processing, marine applications, and industrial equipment.",
    properties: [
      "Enhanced corrosion resistance",
      "Higher strength",
      "Good resistance to pitting",
      "Excellent machinability",
      "Better performance in corrosive environments"
    ],
    applications: [
      "Chemical processing equipment",
      "Marine applications",
      "Industrial equipment",
      "Water treatment systems",
      "Pharmaceutical equipment"
    ]
  },
  {
    grade: "209 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "209 stainless steel offers superior corrosion resistance and strength characteristics within the 200 series. This premium grade is designed for demanding applications where enhanced performance is required, such as high-temperature environments, aggressive chemical exposure, and critical industrial applications.",
    properties: [
      "Superior corrosion resistance",
      "High strength and durability",
      "Excellent high-temperature performance",
      "Superior resistance to stress corrosion cracking",
      "Premium grade quality"
    ],
    applications: [
      "High-temperature applications",
      "Chemical processing",
      "Power generation equipment",
      "Aerospace components",
      "Critical industrial applications"
    ]
  }
]

export default function ProductSheet200GradesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            200 Series Grades
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive selection of 200 series stainless steel sheets and plates. Each grade offers unique properties tailored to specific applications and requirements.
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

        <div className="mt-12 text-center">
          <Link 
            href="/products/200-series"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
          >
            Learn more about 200 Series →
          </Link>
        </div>
      </div>
    </section>
  )
}

