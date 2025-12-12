"use client"

import Image from "next/image"
import Link from "next/link"

interface GradeCardProps {
  grade: string
  image: string
  description: string
  link?: string
}

function GradeCard({ grade, image, description, link = "/products/300-series" }: GradeCardProps) {
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

export default function ProductSheetOtherSeriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 300 Series Section */}
        <div id="300-series-grades" className="mb-16 scroll-mt-20">
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
              grade="304 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="304 stainless steel sheet is one of the most widely used types, known for its excellent corrosion resistance and good machinability. Perfect for food processing equipment, kitchenware, and general-purpose applications requiring reliable performance."
              link="/products/stainless-steel-sheet/304"
            />
            <GradeCard
              grade="316 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="316 stainless steel sheet offers superior corrosion resistance compared to 304, particularly in marine environments and chemical processing. Ideal for applications requiring high corrosion resistance and high-temperature properties."
              link="/products/stainless-steel-sheet/316"
            />
            <GradeCard
              grade="321 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="321 stainless steel sheet is a titanium-stabilized austenitic alloy with excellent oxidation resistance in high-temperature environments. Perfect for aerospace, heat exchangers, and high-temperature furnace applications."
              link="/products/stainless-steel-sheet/321"
            />
            <GradeCard
              grade="303 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="303 stainless steel sheet is known for its excellent machinability, making it ideal for precision machining applications. Perfect for aircraft parts, automotive components, and threaded parts requiring precise manufacturing."
              link="/products/stainless-steel-sheet/303"
            />
            <GradeCard
              grade="310 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="310 stainless steel sheet is a high-temperature alloy that can withstand extremely high temperatures. Ideal for furnace parts, heat exchangers, and industrial equipment requiring resistance to oxidation at elevated temperatures."
              link="/products/stainless-steel-sheet/310"
            />
          </div>

        </div>

        {/* 400 Series Section */}
        <div id="400-series-grades" className="mt-16 pt-16 border-t border-gray-300 mb-16 scroll-mt-20">
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
              grade="430 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="430 stainless steel sheet offers good corrosion resistance and excellent formability. Ideal for automotive trim, kitchen appliances, and architectural applications requiring magnetic properties and cost-effectiveness."
              link="/products/stainless-steel-sheet/430"
            />
            <GradeCard
              grade="410 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="410 stainless steel sheet provides good strength and moderate corrosion resistance. Perfect for applications requiring hardness and wear resistance, such as cutlery, fasteners, and industrial equipment."
              link="/products/stainless-steel-sheet/410"
            />
            <GradeCard
              grade="420 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="420 stainless steel sheet offers high hardness and excellent wear resistance. Ideal for applications requiring superior cutting performance, such as surgical instruments, cutlery, and precision tools."
              link="/products/stainless-steel-sheet/420"
            />
            <GradeCard
              grade="409 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="409 stainless steel sheet provides good corrosion resistance and formability at an economical price. Perfect for automotive exhaust systems, heat exchangers, and applications requiring moderate corrosion resistance."
              link="/products/stainless-steel-sheet/409"
            />
            <GradeCard
              grade="446 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="446 stainless steel sheet offers excellent high-temperature oxidation resistance. Ideal for applications requiring resistance to scaling at elevated temperatures, such as furnace parts and heat exchangers."
              link="/products/stainless-steel-sheet/446"
            />
          </div>

        </div>

        {/* 500 Series Section */}
        <div id="500-series-grades" className="mt-16 pt-16 border-t border-gray-300 mb-16 scroll-mt-20">
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
              grade="502 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="502 stainless steel sheet offers excellent high-temperature strength and oxidation resistance. Perfect for applications in power generation, industrial furnaces, and high-temperature processing equipment."
              link="/products/stainless-steel-sheet/502"
            />
            <GradeCard
              grade="503 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="503 stainless steel sheet provides superior high-temperature performance and excellent oxidation resistance. Ideal for heat exchangers, furnace components, and applications requiring exceptional thermal stability."
              link="/products/stainless-steel-sheet/503"
            />
            <GradeCard
              grade="504 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="504 stainless steel sheet offers outstanding high-temperature properties and superior resistance to scaling. Perfect for energy conversion systems, industrial heating equipment, and high-temperature applications."
              link="/products/stainless-steel-sheet/504"
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
              grade="630 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="630 stainless steel sheet (17-4 PH) offers exceptional strength and corrosion resistance. Perfect for aerospace components, chemical processing equipment, and applications requiring high strength-to-weight ratio."
              link="/products/stainless-steel-sheet/630"
            />
            <GradeCard
              grade="631 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="631 stainless steel sheet (17-7 PH) provides excellent strength and good corrosion resistance. Ideal for springs, fasteners, and applications requiring high strength and formability."
              link="/products/stainless-steel-sheet/631"
            />
            <GradeCard
              grade="640 Stainless Steel Sheet & Plate"
              image="/stainless-steel-sheet.png"
              description="640 stainless steel sheet offers superior strength and excellent corrosion resistance. Perfect for high-stress applications, aerospace components, and industrial equipment requiring exceptional mechanical properties."
              link="/products/stainless-steel-sheet/640"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

