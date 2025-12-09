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
        <div id="200-series-grades" className="text-center mb-12 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            200 Series Grades
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
              Discover our premium 300 series stainless steel pipes and tubes, offering superior corrosion resistance and exceptional performance for demanding applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="304 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="304 stainless steel pipes and tubes are one of the most widely used types, known for excellent corrosion resistance and good machinability. Perfect for food processing equipment, kitchenware, and general-purpose piping applications."
              link="/products/stainless-steel-pipe-tube#300-series-grades"
            />
            <GradeCard
              grade="316 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="316 stainless steel pipes and tubes offer superior corrosion resistance compared to 304, particularly in marine environments and chemical processing. Ideal for applications requiring high corrosion resistance and high-temperature properties."
              link="/products/stainless-steel-pipe-tube#300-series-grades"
            />
            <GradeCard
              grade="321 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="321 stainless steel pipes and tubes are titanium-stabilized austenitic alloys with excellent oxidation resistance in high-temperature environments. Perfect for aerospace, heat exchangers, and high-temperature furnace applications."
              link="/products/stainless-steel-pipe-tube#300-series-grades"
            />
            <GradeCard
              grade="303 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="303 stainless steel pipes and tubes are known for excellent machinability, making them ideal for precision machining applications. Perfect for aircraft parts, automotive components, and threaded parts requiring precise manufacturing."
              link="/products/stainless-steel-pipe-tube#300-series-grades"
            />
            <GradeCard
              grade="310 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="310 stainless steel pipes and tubes are high-temperature alloys that can withstand extremely high temperatures. Ideal for furnace parts, heat exchangers, and industrial equipment requiring resistance to oxidation at elevated temperatures."
              link="/products/stainless-steel-pipe-tube#300-series-grades"
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
              Explore our 400 series stainless steel pipes and tubes, featuring martensitic and ferritic alloys with excellent strength, magnetic properties, and superior machinability for specialized applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="410 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="410 stainless steel pipes and tubes are martensitic steel with good corrosion resistance and high strength. Perfect for applications requiring moderate corrosion resistance and high hardness, such as pumps, valves, and shafts."
              link="/products/stainless-steel-pipe-tube#400-series-grades"
            />
            <GradeCard
              grade="420 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="420 stainless steel pipes and tubes are known for high hardness and excellent wear resistance. Ideal for applications requiring sharp edges or high hardness, such as knives, surgical instruments, and cutting tools."
              link="/products/stainless-steel-pipe-tube#400-series-grades"
            />
            <GradeCard
              grade="430 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="430 stainless steel pipes and tubes are ferritic alloys with good corrosion resistance to atmospheric and mildly corrosive environments. Perfect for decorative applications, automotive trim, and kitchen appliances."
              link="/products/stainless-steel-pipe-tube#400-series-grades"
            />
            <GradeCard
              grade="446 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="446 stainless steel pipes and tubes are high-chromium ferritic alloys offering excellent resistance to high-temperature oxidation and corrosion. Ideal for furnace components and heat exchangers requiring high heat resistance."
              link="/products/stainless-steel-pipe-tube#400-series-grades"
            />
            <GradeCard
              grade="409 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="409 stainless steel pipes and tubes are ferritic alloys often used for automotive exhaust systems due to resistance to corrosion in high-temperature environments. Perfect for exhaust manifolds and catalytic converters."
              link="/products/stainless-steel-pipe-tube#400-series-grades"
            />
            <GradeCard
              grade="410S Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="410S stainless steel pipes and tubes are low-carbon versions offering enhanced weldability and resistance to stress corrosion cracking. Ideal for heat exchangers, pressure vessels, and welded structures."
              link="/products/stainless-steel-pipe-tube#400-series-grades"
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
              Discover our 500 series stainless steel pipes and tubes, engineered for exceptional high-temperature performance, superior oxidation resistance, and outstanding durability in demanding industrial applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="502 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="502 stainless steel pipes and tubes are high-chromium alloys offering excellent high-temperature oxidation resistance. Perfect for high-temperature energy conversion systems and industrial furnaces requiring superior heat resistance."
              link="/products/stainless-steel-pipe-tube#500-series-grades"
            />
            <GradeCard
              grade="503 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="503 stainless steel pipes and tubes provide good oxidation resistance and are ideal for high-temperature applications. Excellent for energy systems and industrial equipment where heat resistance and durability are critical."
              link="/products/stainless-steel-pipe-tube#500-series-grades"
            />
            <GradeCard
              grade="504 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="504 stainless steel pipes and tubes resist scaling and oxidation, making them ideal for furnace parts and high-temperature industrial applications. Maintains structural integrity at elevated temperatures."
              link="/products/stainless-steel-pipe-tube#500-series-grades"
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
              Explore our premium 600 series stainless steel pipes and tubes, featuring precipitation-hardening alloys with exceptional strength, superior fatigue resistance, and outstanding performance in high-stress applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="630 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="630 stainless steel pipes and tubes are precipitation-hardening alloys offering high strength and good corrosion resistance. Perfect for high-stress components, aerospace applications, and critical industrial equipment."
              link="/products/stainless-steel-pipe-tube#600-series-grades"
            />
            <GradeCard
              grade="631 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="631 stainless steel pipes and tubes offer excellent fatigue resistance, making them suitable for high-stress applications where reliability and durability are paramount. Ideal for oil and gas equipment and power generation."
              link="/products/stainless-steel-pipe-tube#600-series-grades"
            />
            <GradeCard
              grade="640 Stainless Steel Pipe & Tube"
              image="/stainless-steel-sheet.png"
              description="640 stainless steel pipes and tubes provide good high-temperature strength and oxidation resistance. Designed for high-temperature industrial processes and equipment requiring both mechanical strength and thermal stability."
              link="/products/stainless-steel-pipe-tube#600-series-grades"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

