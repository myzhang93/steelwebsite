import Image from "next/image"

export default function RecognitionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Overlays */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/molten-steel-industrial-furnace.jpg"
              alt="Steel Manufacturing"
              fill
              className="object-cover"
            />
            {/* Overlay Boxes */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-4">
              <div className="bg-slate-800 text-white px-6 py-4 rounded">
                <div className="text-sm font-medium mb-1">SUCCEEDED PROJECTS</div>
                <div className="text-3xl font-bold">1</div>
              </div>
              <div className="bg-slate-800 text-white px-6 py-4 rounded">
                <div className="text-sm font-medium mb-1">H&R SAFETY & HEALTH</div>
                <div className="text-3xl font-bold">1</div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us? To Be Recognized As The Premier Global Supplier
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Shanxi Steel, we are committed to leveraging cutting-edge technology and innovation 
              to establish ourselves as the premier global supplier of high-quality steel products. 
              Our dedication to excellence drives everything we do.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Shanxi Steel stands out for its unwavering commitment to national and international standards, 
                  ensuring every product meets the highest quality benchmarks.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Shanxi Steel is a trusted name with 40+ years of experience in the industry, 
                  backed by a team of seasoned professionals.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Shanxi Steel's products are known for their exceptional quality, durability, 
                  and reliability across diverse applications.
                </p>
              </li>
            </ul>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="text-sm font-medium text-gray-700 mb-2">
                STATISTICS OF GROWTH IN THE PAST 2 YEARS
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                READ MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




