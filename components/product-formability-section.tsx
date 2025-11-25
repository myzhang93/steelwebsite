import Image from "next/image"

export default function ProductFormabilitySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Superior Formability and Weldability
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              200 Series Stainless Steel offers exceptional formability, allowing for easy shaping and 
              fabrication into complex designs. Its superior weldability ensures strong, reliable joints 
              in manufacturing processes, making it an ideal choice for custom applications and industrial 
              fabrication projects.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition">
              Learn More
            </button>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/stainless-steel-welding-sparks.jpg"
              alt="Welding Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}




