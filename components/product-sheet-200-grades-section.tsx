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
        ) : grade === "304 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/304"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "316 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/316"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "321 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/321"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "303 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/303"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "310 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet/310"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "410 Stainless Steel" || grade === "420 Stainless Steel" || grade === "430 Stainless Steel" || grade === "446 Stainless Steel" || grade === "409 Stainless Steel" || grade === "410S Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet#400-series-grades"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "502 Stainless Steel" || grade === "503 Stainless Steel" || grade === "504 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet#500-series-grades"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition text-center w-full mt-auto"
          >
            Learn More
          </Link>
        ) : grade === "630 Stainless Steel" || grade === "631 Stainless Steel" || grade === "640 Stainless Steel" ? (
          <Link
            href="/products/stainless-steel-sheet#600-series-grades"
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
        <div id="200-series-grades" className="text-center mb-12 scroll-mt-20">
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

        {/* 300 Series Section */}
        <div id="300-series-grades" className="mt-16 pt-16 border-t border-gray-300 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              300 Series Grades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our premium 300 series stainless steel sheets and plates, offering superior corrosion resistance and exceptional performance for demanding applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="304 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="304 stainless steel is one of the most widely used types of stainless steel, known for its excellent corrosion resistance and good machinability. It is commonly used in food processing equipment, kitchenware, chemical containers, and other applications where corrosion resistance is important."
              properties={[
                "Excellent corrosion resistance",
                "Good machinability",
                "High formability",
                "Good weldability",
                "General-purpose applications"
              ]}
              applications={[
                "Food processing equipment",
                "Kitchenware",
                "Chemical containers",
                "Architectural applications",
                "Medical equipment"
              ]}
            />
            <GradeCard
              grade="316 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="316 stainless steel offers superior corrosion resistance compared to 304, particularly in resistance to pitting and crevice corrosion. It is ideal for use in marine environments, chemical processing, and pharmaceutical industries."
              properties={[
                "Superior corrosion resistance",
                "Resistance to pitting corrosion",
                "High-temperature properties",
                "Excellent for marine environments",
                "Pharmaceutical grade"
              ]}
              applications={[
                "Marine equipment",
                "Medical devices",
                "Chemical containers",
                "Pharmaceutical equipment",
                "Coastal architecture"
              ]}
            />
            <GradeCard
              grade="321 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="321 stainless steel is a titanium-stabilized austenitic stainless steel with excellent oxidation resistance, especially in high-temperature environments. Its main applications include aerospace, heat exchangers, and high-temperature furnace parts."
              properties={[
                "Titanium-stabilized",
                "Excellent oxidation resistance",
                "High-temperature performance",
                "Resistance to intergranular corrosion",
                "Aerospace grade"
              ]}
              applications={[
                "Aerospace components",
                "Heat exchangers",
                "High-temperature furnace parts",
                "Exhaust systems",
                "Welded structures"
              ]}
            />
            <GradeCard
              grade="303 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="303 stainless steel is known for its excellent machinability, making it ideal for precision machining applications. It has high strength and good corrosion resistance, making it suitable for use in components that require precise machining."
              properties={[
                "Excellent machinability",
                "High strength",
                "Good corrosion resistance",
                "Precision machining",
                "Superior to 304 in machinability"
              ]}
              applications={[
                "Aircraft parts",
                "Automotive components",
                "Threaded parts",
                "Precision components",
                "Machined parts"
              ]}
            />
            <GradeCard
              grade="310 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="310 stainless steel is a high-temperature alloy that can withstand extremely high temperatures, making it ideal for use in high-heat environments. It is commonly used in furnace parts, heat exchangers, and industrial equipment that require resistance to oxidation at elevated temperatures."
              properties={[
                "High-temperature resistance",
                "Excellent oxidation resistance",
                "Heat and corrosion resistance",
                "Furnace-grade quality",
                "Industrial strength"
              ]}
              applications={[
                "Furnace parts",
                "Heat exchangers",
                "Industrial equipment",
                "High-temperature processes",
                "Thermal processing"
              ]}
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
              Explore our 400 series stainless steel sheets and plates, featuring martensitic and ferritic alloys with excellent strength, magnetic properties, and superior machinability for specialized applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="410 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="410 stainless steel is a martensitic steel with good corrosion resistance and high strength. It is commonly used in applications where moderate corrosion resistance and high hardness are required. 410 is often used for parts that require good machinability and the ability to be hardened, such as pumps, valves, and shafts."
              properties={[
                "Good corrosion resistance",
                "High strength",
                "High hardness",
                "Good machinability",
                "Excellent wear resistance"
              ]}
              applications={[
                "Pumps",
                "Valves",
                "Shafts",
                "Cutting tools",
                "Blades"
              ]}
            />
            <GradeCard
              grade="420 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="420 stainless steel is another martensitic stainless steel, known for its high hardness and excellent wear resistance. It is often used in applications that require a sharp edge or high hardness, such as knives, surgical instruments, and other cutting tools."
              properties={[
                "High hardness",
                "Excellent wear resistance",
                "Sharp edge retention",
                "Martensitic structure",
                "Specialized applications"
              ]}
              applications={[
                "Knives",
                "Surgical instruments",
                "Cutting tools",
                "Specialized tools",
                "Blades"
              ]}
            />
            <GradeCard
              grade="430 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="430 stainless steel is a ferritic stainless steel with good corrosion resistance to atmospheric and mildly corrosive environments. It is magnetic and offers good formability, making it suitable for decorative applications."
              properties={[
                "Good corrosion resistance",
                "Magnetic",
                "Good formability",
                "Ferritic structure",
                "Decorative applications"
              ]}
              applications={[
                "Automotive trim",
                "Kitchen appliances",
                "Decorative products",
                "Architectural trim",
                "Household items"
              ]}
            />
            <GradeCard
              grade="446 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="446 stainless steel is a high-chromium ferritic alloy that offers excellent resistance to high-temperature oxidation and corrosion. It is commonly used in applications where high heat resistance is required, such as in furnace components and heat exchangers."
              properties={[
                "Excellent high-temperature oxidation resistance",
                "High chromium content",
                "Resistant to scaling",
                "Ferritic structure",
                "Extreme environment resistance"
              ]}
              applications={[
                "Furnace components",
                "Heat exchangers",
                "High-temperature industrial equipment",
                "Thermal processing",
                "Industrial furnaces"
              ]}
            />
            <GradeCard
              grade="409 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="409 stainless steel is a ferritic alloy often used for automotive exhaust systems due to its resistance to corrosion in high-temperature environments. It offers good resistance to heat and oxidation but is not as corrosion-resistant as the austenitic alloys."
              properties={[
                "Heat resistance",
                "Oxidation resistance",
                "Ferritic structure",
                "Cost-effective",
                "Automotive grade"
              ]}
              applications={[
                "Automotive exhaust systems",
                "Exhaust manifolds",
                "Catalytic converters",
                "Automotive parts",
                "Heat-resistant components"
              ]}
            />
            <GradeCard
              grade="410S Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="410S stainless steel is a low-carbon version of 410 stainless steel that offers enhanced weldability and resistance to stress corrosion cracking. It is often used in applications requiring moderate strength, good corrosion resistance, and the ability to withstand higher temperatures."
              properties={[
                "Enhanced weldability",
                "Resistance to stress corrosion cracking",
                "Moderate strength",
                "Good corrosion resistance",
                "Low carbon"
              ]}
              applications={[
                "Heat exchangers",
                "Pressure vessels",
                "Industrial applications",
                "Welded structures",
                "High-temperature components"
              ]}
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
              Discover our 500 series stainless steel sheets and plates, engineered for exceptional high-temperature performance, superior oxidation resistance, and outstanding durability in demanding industrial applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="502 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="502 stainless steel is a high-chromium alloy offering excellent high-temperature oxidation resistance. It is ideal for applications requiring superior heat resistance and durability in extreme environments, making it perfect for high-temperature energy conversion systems and industrial furnaces."
              properties={[
                "High chromium content",
                "Excellent high-temperature oxidation resistance",
                "Superior heat resistance",
                "Durable in extreme environments",
                "Industrial grade quality"
              ]}
              applications={[
                "High-temperature energy conversion",
                "Industrial furnaces",
                "Heat exchangers",
                "Power generation equipment",
                "Thermal processing systems"
              ]}
            />
            <GradeCard
              grade="503 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="503 stainless steel provides good oxidation resistance and is ideal for high-temperature applications. It offers excellent performance in environments where heat resistance and durability are critical, making it suitable for various industrial and energy applications."
              properties={[
                "Good oxidation resistance",
                "High-temperature performance",
                "Excellent durability",
                "Heat resistant",
                "Industrial applications"
              ]}
              applications={[
                "High-temperature applications",
                "Energy systems",
                "Industrial equipment",
                "Thermal systems",
                "Heat-resistant components"
              ]}
            />
            <GradeCard
              grade="504 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="504 stainless steel resists scaling and oxidation, making it ideal for use in furnace parts and high-temperature industrial applications. It maintains structural integrity at elevated temperatures, ensuring reliable performance in demanding thermal environments."
              properties={[
                "Resists scaling and oxidation",
                "High-temperature stability",
                "Excellent for furnace applications",
                "Maintains structural integrity",
                "Thermal resistance"
              ]}
              applications={[
                "Furnace parts",
                "High-temperature industrial equipment",
                "Thermal processing",
                "Heat treatment equipment",
                "Industrial furnaces"
              ]}
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
              Explore our premium 600 series stainless steel sheets and plates, featuring precipitation-hardening alloys with exceptional strength, superior fatigue resistance, and outstanding performance in high-stress applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GradeCard
              grade="630 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="630 stainless steel is a precipitation-hardening alloy offering high strength and good corrosion resistance. It is ideal for applications requiring exceptional mechanical properties, making it perfect for high-stress components, aerospace applications, and critical industrial equipment."
              properties={[
                "Precipitation hardening",
                "High strength",
                "Good corrosion resistance",
                "Exceptional mechanical properties",
                "Aerospace grade"
              ]}
              applications={[
                "High-stress components",
                "Aerospace applications",
                "Critical industrial equipment",
                "Precision components",
                "Structural applications"
              ]}
            />
            <GradeCard
              grade="631 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="631 stainless steel offers excellent fatigue resistance, making it suitable for high-stress applications where reliability and durability are paramount. It maintains its structural integrity under extreme loads and conditions, ensuring optimal performance in demanding environments."
              properties={[
                "Excellent fatigue resistance",
                "High-stress performance",
                "Superior reliability",
                "Maintains structural integrity",
                "Premium grade quality"
              ]}
              applications={[
                "High-stress applications",
                "Oil and gas equipment",
                "Power generation",
                "Automotive components",
                "Critical systems"
              ]}
            />
            <GradeCard
              grade="640 Stainless Steel"
              image="/stainless-steel-sheet.png"
              description="640 stainless steel provides good high-temperature strength and oxidation resistance. It is designed for applications requiring both mechanical strength and thermal stability, making it ideal for high-temperature industrial processes and equipment."
              properties={[
                "Good high-temperature strength",
                "Oxidation resistance",
                "Mechanical strength",
                "Thermal stability",
                "Industrial performance"
              ]}
              applications={[
                "High-temperature industrial processes",
                "Thermal equipment",
                "Industrial machinery",
                "Heat-resistant components",
                "Manufacturing equipment"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

