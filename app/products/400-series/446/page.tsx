import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Wrench } from "lucide-react"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"

export const metadata: Metadata = {
  title: "446 Stainless Steel | High-Temperature Ferritic Grade - All Product Forms",
  description: "Explore 446 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. High-chromium ferritic alloy with excellent high-temperature oxidation resistance.",
}

const getMarkdownContent = (path: string) => {
  try {
    return getMarkdownByPath(path)?.content || ''
  } catch {
    return ''
  }
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
    title: "446 Stainless Steel Sheet & Plate",
    description: "High-quality 446 stainless steel sheets and plates with exceptional high-temperature oxidation resistance. Perfect for furnace components, heat exchangers, and high-temperature industrial applications.",
    image: "/400/446/446sheet1.jpg",
    href: "/products/stainless-steel-sheet/446",
    features: [
      "Exceptional high-temperature resistance",
      "Excellent oxidation resistance",
      "High chromium content",
      "Resistant to scaling",
      "Cost-effective alternative to 310"
    ]
  },
  {
    title: "446 Stainless Steel Coil",
    description: "Premium 446 stainless steel coils with superior high-temperature properties. Ideal for furnace belts, heat shields, and high-temperature processing applications.",
    image: "/400/446/446coil1.jpg",
    href: "/products/stainless-steel-coil/446",
    features: [
      "Continuous length supply",
      "High-temperature quality",
      "Consistent quality",
      "Easy to process",
      "Multiple finish options"
    ]
  },
  {
    title: "446 Stainless Steel Pipe & Tube",
    description: "Durable 446 stainless steel pipes and tubes designed for extreme high-temperature applications. Excellent for furnace components, heat exchangers, and petrochemical processing.",
    image: "/400/446/446pipe1.jpg",
    href: "/products/stainless-steel-pipe-tube/446",
    features: [
      "Various diameters available",
      "Excellent high-temperature resistance",
      "Superior oxidation resistance",
      "Suitable for extreme heat",
      "Long service life"
    ]
  },
  {
    title: "446 Stainless Steel Fittings",
    description: "Precision-manufactured 446 stainless steel fittings with exceptional high-temperature resistance. Perfect for high-temperature piping systems and furnace applications.",
    image: "/400/446/446fittings1.webp",
    href: "/products/stainless-steel-fittings/446",
    features: [
      "Precision manufacturing",
      "High-temperature resistance",
      "Multiple types available",
      "Easy installation",
      "Durable construction"
    ]
  }
]

export default function StainlessSteel446OverviewPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              446 Stainless Steel
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              446 stainless steel is a high-chromium ferritic alloy that offers excellent resistance to high-temperature oxidation and corrosion. 
              It is commonly used in applications where high heat resistance is required, such as furnace components, heat exchangers, and petrochemical processing.
            </p>
          </div>
          
          {/* Key Properties */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellent High-Temperature Oxidation Resistance</h3>
              <p className="text-gray-600 leading-relaxed">Up to 1100°C continuous</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">High Chromium Content</h3>
              <p className="text-gray-600 leading-relaxed">23-27% chromium</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Resistant to Scaling</h3>
              <p className="text-gray-600 leading-relaxed">Superior performance</p>
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
              446 stainless steel is widely used across various high-temperature industries and applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Furnace components",
              "Heat exchangers",
              "High-temperature industrial equipment",
              "Petrochemical processing",
              "Kiln components",
              "Recuperator tubes",
              "Thermal oxidizers",
              "Glass lehrs"
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
              Understanding the key technical characteristics of 446 stainless steel helps in selecting the right material for your application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemical Composition</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Chromium:</span>
                  <span className="font-semibold">23-27%</span>
                </li>
                <li className="flex justify-between">
                  <span>Carbon:</span>
                  <span className="font-semibold">≤0.20%</span>
                </li>
                <li className="flex justify-between">
                  <span>Manganese:</span>
                  <span className="font-semibold">≤1.50%</span>
                </li>
                <li className="flex justify-between">
                  <span>Silicon:</span>
                  <span className="font-semibold">≤1.00%</span>
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
                  <span className="font-semibold">≥310 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Elongation:</span>
                  <span className="font-semibold">≥20%</span>
                </li>
                <li className="flex justify-between">
                  <span>Hardness:</span>
                  <span className="font-semibold">≤170 HB</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Density:</span>
                  <span className="font-semibold">7.60 g/cm³</span>
                </li>
                <li className="flex justify-between">
                  <span>Melting Point:</span>
                  <span className="font-semibold">1425-1510°C</span>
                </li>
                <li className="flex justify-between">
                  <span>Thermal Conductivity:</span>
                  <span className="font-semibold">19.0 W/m·K</span>
                </li>
                <li className="flex justify-between">
                  <span>Electrical Resistivity:</span>
                  <span className="font-semibold">0.80 μΩ·m</span>
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
              Why Choose 446 Stainless Steel?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the key advantages that make 446 stainless steel an excellent choice for your high-temperature applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🔥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exceptional High-Temperature Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Can withstand continuous service temperatures up to 1100°C and intermittent temperatures up to 1150°C, making it ideal for extreme heat applications.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellent Oxidation Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                High chromium content (23-27%) provides superior resistance to oxidation and scaling at elevated temperatures.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective Alternative</h3>
              <p className="text-gray-600 leading-relaxed">
                30-50% cost savings compared to 310/309 austenitic grades while maintaining excellent high-temperature performance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🧲</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fully Magnetic</h3>
              <p className="text-gray-600 leading-relaxed">
                Magnetic properties simplify inspection and eliminate sigma-phase embrittlement concerns found in austenitic grades.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">📉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lower Thermal Expansion</h3>
              <p className="text-gray-600 leading-relaxed">
                30% lower thermal expansion than 310, reducing thermal fatigue and the need for expansion joints in high-temperature systems.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Good Sulfidation Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Outperforms 304H and 321 in reducing sulfur environments, making it suitable for petrochemical and refining applications.
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
              Explore our comprehensive range of 446 stainless steel products. Each form is designed 
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
            <MarkdownContent content={(() => { try { return getMarkdownByPath('app/400/446stainless steel.md')?.content || '' } catch { return '' } })()} />
          </article>
        </div>
      </section>

      <Footer />
    </>
  )
}

