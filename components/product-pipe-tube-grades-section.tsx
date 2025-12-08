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
          alt={`${grade} Stainless Steel Pipe & Tube`}
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
    grade: "201 Stainless Steel Pipe & Tube",
    image: "/stainless-steel-sheet.png",
    description: "201 stainless steel pipes and tubes offer excellent corrosion resistance and good weldability at a cost-effective price point. Ideal for fluid transport, structural applications, and general industrial piping systems.",
    link: "/products/stainless-steel-pipe-tube/201"
  },
  {
    grade: "202 Stainless Steel Pipe & Tube",
    image: "/stainless-steel-sheet.png",
    description: "202 stainless steel pipes and tubes provide enhanced corrosion resistance suitable for mildly corrosive environments. Perfect for architectural applications, decorative structures, and automotive exhaust systems.",
    link: "/products/stainless-steel-pipe-tube/202"
  },
  {
    grade: "201L Stainless Steel Pipe & Tube",
    image: "/stainless-steel-sheet.png",
    description: "201L pipes and tubes feature low carbon content for superior weldability and reduced susceptibility to intergranular corrosion. Ideal for welded piping systems, heat exchangers, and critical welded structures.",
    link: "/products/stainless-steel-pipe-tube/201L"
  },
  {
    grade: "204 Stainless Steel Pipe & Tube",
    image: "/stainless-steel-sheet.png",
    description: "204 stainless steel pipes and tubes deliver enhanced performance with superior corrosion resistance and higher strength. Designed for chemical processing, marine applications, and demanding industrial environments.",
    link: "/products/stainless-steel-pipe-tube/204"
  },
  {
    grade: "209 Stainless Steel Pipe & Tube",
    image: "/stainless-steel-sheet.png",
    description: "209 pipes and tubes represent premium-grade quality with exceptional corrosion resistance and high-temperature performance. Perfect for power generation, aerospace components, and critical industrial applications requiring superior reliability.",
    link: "/products/stainless-steel-pipe-tube/209"
  }
]

export default function ProductPipeTubeGradesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            200 Series Grades Available
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive selection of 200 series stainless steel pipes and tubes. Each grade offers unique properties tailored to specific piping and structural requirements.
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

