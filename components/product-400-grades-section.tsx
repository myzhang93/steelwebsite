"use client"

import Link from "next/link"
import Image from "next/image"

interface GradeCardProps {
  grade: string
  image: string
  description: string
  properties: string[]
  applications: string[]
  wordpressId?: string | null
}

function GradeCard({ grade, image, description, properties, applications }: GradeCardProps) {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`${grade} Stainless Steel`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{grade}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Properties:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {properties.map((prop, idx) => (
              <li key={idx}>{prop}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {applications.map((app, idx) => (
              <li key={idx}>{app}</li>
            ))}
          </ul>
        </div>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center"
        >
          Get A Quote
        </Link>
      </div>
    </div>
  )
}

const grades = [
  {
    grade: "408 Stainless Steel",
    image: "/stainless-steel-sheet.png",
    description: "High strength and good corrosion resistance make 408 ideal for various industrial applications.",
    properties: ["High strength", "Good corrosion resistance", "Magnetic properties", "Good machinability"],
    applications: ["Automotive components", "Industrial equipment", "Kitchen appliances"],
    wordpressId: "423" // 从图片描述中看到的 WordPress post ID
  },
  {
    grade: "409 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "Excellent formability and weldability make 409 perfect for automotive exhaust systems.",
    properties: ["Good formability", "Excellent weldability", "Heat resistance", "Cost-effective"],
    applications: ["Automotive exhaust systems", "Heat exchangers", "Industrial equipment"]
  },
  {
    grade: "410 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "High strength and heat resistance make 410 suitable for demanding applications.",
    properties: ["High strength", "Heat resistance", "Good hardness", "Magnetic"],
    applications: ["Cutlery", "Valves", "Pumps", "Shafts"]
  },
  {
    grade: "413 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "Excellent corrosion resistance and good polishability make 413 ideal for decorative applications.",
    properties: ["Excellent corrosion resistance", "Good polishability", "High strength", "Durable"],
    applications: ["Decorative trim", "Architectural elements", "Consumer products"]
  },
  {
    grade: "416 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "Good machinability and moderate corrosion resistance make 416 perfect for precision components.",
    properties: ["Good machinability", "Moderate corrosion resistance", "High strength", "Magnetic"],
    applications: ["Screws", "Bolts", "Nuts", "Precision components"]
  },
  {
    grade: "420 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "High hardness and wear resistance make 420 ideal for cutting tools and surgical instruments.",
    properties: ["High hardness", "Wear resistance", "Good polishability", "Magnetic"],
    applications: ["Cutting tools", "Surgical instruments", "Bearings", "Valves"]
  },
  {
    grade: "422 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "High strength at elevated temperatures and good creep resistance make 422 suitable for high-temperature applications.",
    properties: ["High strength at elevated temperatures", "Good creep resistance", "Heat resistance", "Durable"],
    applications: ["Turbine blades", "High-temperature equipment", "Aerospace components"]
  },
  {
    grade: "430 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "Good corrosion resistance and formability make 430 one of the most popular 400 series grades.",
    properties: ["Good corrosion resistance", "Excellent formability", "Magnetic", "Cost-effective"],
    applications: ["Kitchen appliances", "Automotive trim", "Architectural panels", "Decorative products"]
  },
  {
    grade: "434 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "Improved pitting corrosion resistance and good formability make 434 ideal for automotive applications.",
    properties: ["Improved pitting corrosion resistance", "Good formability", "Magnetic", "Durable"],
    applications: ["Automotive trim", "Exhaust systems", "Decorative applications"]
  },
  {
    grade: "440 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "High hardness and wear resistance make 440 perfect for cutting tools and high-wear applications.",
    properties: ["High hardness", "Wear resistance", "Good corrosion resistance", "Magnetic"],
    applications: ["Cutting tools", "Bearings", "Valves", "Surgical instruments"]
  },
  {
    grade: "443 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "Excellent corrosion resistance and good formability make 443 suitable for various applications.",
    properties: ["Excellent corrosion resistance", "Good formability", "Magnetic", "Durable"],
    applications: ["Kitchen equipment", "Architectural applications", "Consumer products"]
  },
  {
    grade: "444 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "High corrosion resistance and good weldability make 444 ideal for demanding applications.",
    properties: ["High corrosion resistance", "Good weldability", "Magnetic", "Durable"],
    applications: ["Heat exchangers", "Water tanks", "Industrial equipment"]
  },
  {
    grade: "446 Stainless Steel Sheet",
    image: "/stainless-steel-sheet.png",
    description: "Excellent oxidation resistance at high temperatures and good corrosion resistance make 446 perfect for high-temperature applications.",
    properties: ["Excellent oxidation resistance at high temperatures", "Good corrosion resistance", "Heat resistance", "Durable"],
    applications: ["Furnace components", "Heat treatment equipment", "High-temperature applications"]
  }
]

export default function Product400GradesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Grades
        </h2>
        
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

