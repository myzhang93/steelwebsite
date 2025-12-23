import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Waves, Zap } from "lucide-react"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"

export const metadata: Metadata = {
  title: "316 Stainless Steel | Marine-Grade Corrosion Resistance - All Product Forms",
  description: "Explore 316 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Superior corrosion resistance ideal for marine and chemical applications.",
}

interface ProductCardProps {
  title: string
  description: string
  image: string
  href: string
  features: string[]
}

function ProductCard({ title, description, image, href, features }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>
        
        <Link
          href={href}
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-auto group/button"
        >
          View Details
          <ArrowRight className="ml-2 w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

const products = [
  {
    title: "316 Stainless Steel Sheet & Plate",
    description: "High-quality 316 stainless steel sheets and plates with superior corrosion resistance. Ideal for marine environments, chemical processing, and pharmaceutical applications.",
    image: "/300/316/316sheet1.jpg",
    href: "/products/stainless-steel-sheet/316",
    features: [
      "Superior corrosion resistance",
      "Marine-grade quality",
      "Excellent pitting resistance",
      "Wide range of thicknesses",
      "Suitable for welding"
    ]
  },
  {
    title: "316 Stainless Steel Coil",
    description: "Premium 316 stainless steel coils with enhanced corrosion resistance. Ideal for marine and chemical applications requiring continuous material supply.",
    image: "/300/316/316coil1.jpg",
    href: "/products/stainless-steel-coil/316",
    features: [
      "Continuous length supply",
      "Marine-grade quality",
      "Consistent quality",
      "Easy to process",
      "Multiple finish options"
    ]
  },
  {
    title: "316 Stainless Steel Pipe & Tube",
    description: "Durable 316 stainless steel pipes and tubes with superior corrosion resistance. Perfect for marine, chemical, and pharmaceutical applications.",
    image: "/300/316/316pipe1.webp",
    href: "/products/stainless-steel-pipe-tube/316",
    features: [
      "Various diameters available",
      "Excellent weldability",
      "Superior corrosion resistance",
      "Suitable for marine use",
      "Long service life"
    ]
  },
  {
    title: "316 Stainless Steel Fittings",
    description: "Precision-manufactured 316 stainless steel fittings with marine-grade quality. Perfect for high-corrosion environments and chemical applications.",
    image: "/300/316/316fittings1.webp",
    href: "/products/stainless-steel-fittings/316",
    features: [
      "Precision manufacturing",
      "Marine-grade quality",
      "Multiple types available",
      "Easy installation",
      "Durable construction"
    ]
  }
]

export default function StainlessSteel316OverviewPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              316 Stainless Steel
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              316 stainless steel offers superior corrosion resistance compared to 304, particularly 
              in marine environments and chemical processing. It is ideal for applications requiring 
              high resistance to pitting and crevice corrosion.
            </p>
          </div>
          
          {/* Key Properties */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Marine-Grade</h3>
              <p className="text-gray-600 leading-relaxed">Superior resistance to seawater</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Superior Corrosion Resistance</h3>
              <p className="text-gray-600 leading-relaxed">Excellent pitting resistance</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellent Formability</h3>
              <p className="text-gray-600 leading-relaxed">Easy to shape and fabricate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Applications Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              316 stainless steel is widely used in marine and chemical applications requiring superior corrosion resistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Marine equipment",
              "Chemical processing",
              "Pharmaceutical equipment",
              "Medical devices",
              "Food processing",
              "Coastal architecture",
              "Offshore platforms",
              "Desalination plants"
            ].map((application, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  <p className="text-gray-700">{application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Properties Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the key technical characteristics of 316 stainless steel helps in selecting the right material for your application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemical Composition</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Chromium:</span>
                  <span className="font-semibold">16-18%</span>
                </li>
                <li className="flex justify-between">
                  <span>Nickel:</span>
                  <span className="font-semibold">10-14%</span>
                </li>
                <li className="flex justify-between">
                  <span>Molybdenum:</span>
                  <span className="font-semibold">2-3%</span>
                </li>
                <li className="flex justify-between">
                  <span>Carbon:</span>
                  <span className="font-semibold">≤0.08%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mechanical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Tensile Strength:</span>
                  <span className="font-semibold">≥515 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Yield Strength:</span>
                  <span className="font-semibold">≥205 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Elongation:</span>
                  <span className="font-semibold">≥40%</span>
                </li>
                <li className="flex justify-between">
                  <span>Hardness:</span>
                  <span className="font-semibold">≤201 HB</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Density:</span>
                  <span className="font-semibold">7.98 g/cm³</span>
                </li>
                <li className="flex justify-between">
                  <span>Melting Point:</span>
                  <span className="font-semibold">1375-1400°C</span>
                </li>
                <li className="flex justify-between">
                  <span>Thermal Conductivity:</span>
                  <span className="font-semibold">16.2 W/m·K</span>
                </li>
                <li className="flex justify-between">
                  <span>Electrical Resistivity:</span>
                  <span className="font-semibold">0.74 μΩ·m</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 316 Stainless Steel?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the key advantages that make 316 stainless steel an excellent choice for your projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🌊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marine-Grade Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Superior resistance to seawater and chloride environments, making it ideal for marine and coastal applications.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Superior Corrosion Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellent resistance to pitting and crevice corrosion, especially in chloride-rich environments.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellent Workability</h3>
              <p className="text-gray-600 leading-relaxed">
                Easy to form, bend, and weld, making it ideal for complex fabrication projects and manufacturing processes.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🧪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemical Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellent performance in chemical processing environments, making it ideal for pharmaceutical and chemical industries.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Availability</h3>
              <p className="text-gray-600 leading-relaxed">
                Available in multiple forms including sheets, plates, coils, pipes, tubes, and fittings to meet diverse needs.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Choice</h3>
              <p className="text-gray-600 leading-relaxed">
                100% recyclable material that contributes to sustainable manufacturing practices and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Forms Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Product Forms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of 316 stainless steel products. Each form is designed 
              to meet specific application requirements and manufacturing needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Markdown Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <MarkdownContent content={(() => { try { return getMarkdownByPath('app/300/316stainless steel.md')?.content || '' } catch { return '' } })()} />
          </article>
        </div>
      </section>

      <Footer />
    </>
  )
}

