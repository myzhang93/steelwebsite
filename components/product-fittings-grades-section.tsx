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
          alt={`${grade} Stainless Steel Fittings`}
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
    grade: "201 Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "201 stainless steel fittings offer cost-effective solutions with good corrosion resistance and excellent weldability. Perfect for general plumbing, industrial piping, and decorative applications requiring reliable connections.",
    link: "/products/stainless-steel-fittings/201"
  },
  {
    grade: "202 Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "202 stainless steel fittings provide enhanced corrosion resistance suitable for mildly corrosive environments. Ideal for architectural systems, automotive applications, and decorative installations requiring durability and aesthetic appeal.",
    link: "/products/stainless-steel-fittings/202"
  },
  {
    grade: "201L Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "201L fittings feature low carbon content for superior weldability and reduced intergranular corrosion risk. Perfect for welded piping systems, tanks, and applications requiring enhanced corrosion resistance in welded areas.",
    link: "/products/stainless-steel-fittings/201L"
  },
  {
    grade: "204 Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "204 stainless steel fittings deliver enhanced performance with superior corrosion resistance and higher strength. Designed for chemical processing, marine environments, and industrial applications demanding superior durability.",
    link: "/products/stainless-steel-fittings/204"
  },
  {
    grade: "209 Stainless Steel Fittings",
    image: "/stainless-steel-sheet.png",
    description: "209 fittings represent premium-grade quality with exceptional corrosion resistance and high-temperature performance. Ideal for critical applications in power generation, aerospace, and high-performance industrial systems requiring maximum reliability.",
    link: "/products/stainless-steel-fittings/209"
  }
]

export default function ProductFittingsGradesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="200-series-grades" className="text-center mb-12 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            200 Series Grades
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

        <div className="mt-12 text-center">
          <Link 
            href="/products/200-series"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
          >
            Learn more about 200 Series →
          </Link>
        </div>

        {/* 300 Series Section */}
        <div id="300-series-grades" className="mt-16 pt-16 border-t border-gray-300 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              300 Series Grades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our premium 300 series stainless steel fittings, offering superior corrosion resistance and exceptional performance for demanding applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="304 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="304 stainless steel fittings are one of the most widely used types, known for excellent corrosion resistance and good machinability. Perfect for food processing equipment, kitchenware, and general-purpose piping connections."
              link="/products/stainless-steel-fittings#300-series-grades"
            />
            <GradeCard
              grade="316 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="316 stainless steel fittings offer superior corrosion resistance compared to 304, particularly in marine environments and chemical processing. Ideal for applications requiring high corrosion resistance and high-temperature properties."
              link="/products/stainless-steel-fittings#300-series-grades"
            />
            <GradeCard
              grade="321 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="321 stainless steel fittings are titanium-stabilized austenitic alloys with excellent oxidation resistance in high-temperature environments. Perfect for aerospace, heat exchangers, and high-temperature furnace applications."
              link="/products/stainless-steel-fittings#300-series-grades"
            />
            <GradeCard
              grade="303 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="303 stainless steel fittings are known for excellent machinability, making them ideal for precision machining applications. Perfect for aircraft parts, automotive components, and threaded parts requiring precise manufacturing."
              link="/products/stainless-steel-fittings#300-series-grades"
            />
            <GradeCard
              grade="310 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="310 stainless steel fittings are high-temperature alloys that can withstand extremely high temperatures. Ideal for furnace parts, heat exchangers, and industrial equipment requiring resistance to oxidation at elevated temperatures."
              link="/products/stainless-steel-fittings#300-series-grades"
            />
          </div>
        </div>

        {/* 400 Series Section */}
        <div id="400-series-grades" className="mt-16 pt-16 border-t border-gray-300 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              400 Series Grades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our 400 series stainless steel fittings, featuring martensitic and ferritic alloys with excellent strength, magnetic properties, and superior machinability for specialized applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="410 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="410 stainless steel fittings are martensitic steel with good corrosion resistance and high strength. Perfect for applications requiring moderate corrosion resistance and high hardness, such as pumps, valves, and shafts."
              link="/products/stainless-steel-fittings#400-series-grades"
            />
            <GradeCard
              grade="420 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="420 stainless steel fittings are known for high hardness and excellent wear resistance. Ideal for applications requiring sharp edges or high hardness, such as knives, surgical instruments, and cutting tools."
              link="/products/stainless-steel-fittings#400-series-grades"
            />
            <GradeCard
              grade="430 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="430 stainless steel fittings are ferritic alloys with good corrosion resistance to atmospheric and mildly corrosive environments. Perfect for decorative applications, automotive trim, and kitchen appliances."
              link="/products/stainless-steel-fittings#400-series-grades"
            />
            <GradeCard
              grade="446 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="446 stainless steel fittings are high-chromium ferritic alloys offering excellent resistance to high-temperature oxidation and corrosion. Ideal for furnace components and heat exchangers requiring high heat resistance."
              link="/products/stainless-steel-fittings#400-series-grades"
            />
            <GradeCard
              grade="409 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="409 stainless steel fittings are ferritic alloys often used for automotive exhaust systems due to resistance to corrosion in high-temperature environments. Perfect for exhaust manifolds and catalytic converters."
              link="/products/stainless-steel-fittings#400-series-grades"
            />
            <GradeCard
              grade="410S Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="410S stainless steel fittings are low-carbon versions offering enhanced weldability and resistance to stress corrosion cracking. Ideal for heat exchangers, pressure vessels, and welded structures."
              link="/products/stainless-steel-fittings#400-series-grades"
            />
          </div>
        </div>

        {/* 500 Series Section */}
        <div id="500-series-grades" className="mt-16 pt-16 border-t border-gray-300 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              500 Series Grades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our 500 series stainless steel fittings, engineered for exceptional high-temperature performance, superior oxidation resistance, and outstanding durability in demanding industrial applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="502 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="502 stainless steel fittings are high-chromium alloys offering excellent high-temperature oxidation resistance. Perfect for high-temperature energy conversion systems and industrial furnaces requiring superior heat resistance."
              link="/products/stainless-steel-fittings#500-series-grades"
            />
            <GradeCard
              grade="503 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="503 stainless steel fittings provide good oxidation resistance and are ideal for high-temperature applications. Excellent for energy systems and industrial equipment where heat resistance and durability are critical."
              link="/products/stainless-steel-fittings#500-series-grades"
            />
            <GradeCard
              grade="504 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="504 stainless steel fittings resist scaling and oxidation, making them ideal for furnace parts and high-temperature industrial applications. Maintains structural integrity at elevated temperatures."
              link="/products/stainless-steel-fittings#500-series-grades"
            />
          </div>
        </div>

        {/* 600 Series Section */}
        <div id="600-series-grades" className="mt-16 pt-16 border-t border-gray-300 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              600 Series Grades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our premium 600 series stainless steel fittings, featuring precipitation-hardening alloys with exceptional strength, superior fatigue resistance, and outstanding performance in high-stress applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="630 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="630 stainless steel fittings are precipitation-hardening alloys offering high strength and good corrosion resistance. Perfect for high-stress components, aerospace applications, and critical industrial equipment."
              link="/products/stainless-steel-fittings#600-series-grades"
            />
            <GradeCard
              grade="631 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="631 stainless steel fittings offer excellent fatigue resistance, making them suitable for high-stress applications where reliability and durability are paramount. Ideal for oil and gas equipment and power generation."
              link="/products/stainless-steel-fittings#600-series-grades"
            />
            <GradeCard
              grade="640 Stainless Steel Fittings"
              image="/stainless-steel-sheet.png"
              description="640 stainless steel fittings provide good high-temperature strength and oxidation resistance. Designed for high-temperature industrial processes and equipment requiring both mechanical strength and thermal stability."
              link="/products/stainless-steel-fittings#600-series-grades"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

