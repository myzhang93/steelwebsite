import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, DollarSign, Zap, Shield } from "lucide-react"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"

export const metadata: Metadata = {
  title: "209 Stainless Steel | Premium Austenitic Grade - All Product Forms",
  description: "Explore 209 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Premium grade with excellent strength and corrosion resistance.",
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
    title: "209 Stainless Steel Sheet & Plate",
    description: "Premium 209 stainless steel sheets and plates with excellent mechanical properties and superior corrosion resistance. Perfect for demanding applications.",
    image: "/200/209sheet.webp",
    href: "/products/stainless-steel-sheet/209",
    features: [
      "Premium quality",
      "Excellent formability",
      "Superior corrosion resistance",
      "Wide range of thicknesses",
      "Suitable for welding"
    ]
  },
  {
    title: "209 Stainless Steel Coil",
    description: "Premium 209 stainless steel coils with superior properties. Ideal for high-quality applications requiring continuous material supply.",
    image: "/200/209coil.webp",
    href: "/products/stainless-steel-coil/209",
    features: [
      "Continuous length supply",
      "Premium quality",
      "Consistent quality",
      "Easy to process",
      "Multiple finish options"
    ]
  },
  {
    title: "209 Stainless Steel Pipe & Tube",
    description: "Durable 209 stainless steel pipes and tubes with premium properties. Perfect for high-quality structural and pressure applications.",
    image: "/200/209pipe.webp",
    href: "/products/stainless-steel-pipe-tube/209",
    features: [
      "Various diameters available",
      "Excellent weldability",
      "Premium mechanical properties",
      "Suitable for pressure applications",
      "Long service life"
    ]
  },
  {
    title: "209 Stainless Steel Fittings",
    description: "Precision-manufactured 209 stainless steel fittings with premium quality. Perfect for high-quality piping systems.",
    image: "/200/209fittings.jpg",
    href: "/products/stainless-steel-fittings/209",
    features: [
      "Precision manufacturing",
      "Premium quality",
      "Multiple types available",
      "Easy installation",
      "Durable construction"
    ]
  }
]

export default function StainlessSteel209OverviewPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              209 Stainless Steel
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              209 stainless steel is a premium austenitic grade that offers excellent mechanical properties 
              and superior corrosion resistance. It provides enhanced performance for demanding applications 
              requiring high quality and reliability.
            </p>
          </div>
          
          {/* Key Properties */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">Excellent mechanical properties</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Superior Corrosion Resistance</h3>
              <p className="text-gray-600 leading-relaxed">Enhanced protection in various environments</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600 leading-relaxed">Premium performance at competitive pricing</p>
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
              209 stainless steel is widely used in premium applications requiring high quality and superior performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Premium architectural panels",
              "High-end kitchen equipment",
              "Food processing equipment",
              "Chemical processing",
              "Automotive components",
              "Industrial machinery",
              "Tanks and vessels",
              "Decorative applications"
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
              Understanding the key technical characteristics of 209 stainless steel helps in selecting the right material for your application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemical Composition</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Chromium:</span>
                  <span className="font-semibold">18-20%</span>
                </li>
                <li className="flex justify-between">
                  <span>Nickel:</span>
                  <span className="font-semibold">5-7%</span>
                </li>
                <li className="flex justify-between">
                  <span>Manganese:</span>
                  <span className="font-semibold">7-9%</span>
                </li>
                <li className="flex justify-between">
                  <span>Carbon:</span>
                  <span className="font-semibold">≤0.15%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mechanical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Tensile Strength:</span>
                  <span className="font-semibold">≥550 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Yield Strength:</span>
                  <span className="font-semibold">≥310 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Elongation:</span>
                  <span className="font-semibold">≥40%</span>
                </li>
                <li className="flex justify-between">
                  <span>Hardness:</span>
                  <span className="font-semibold">≤217 HB</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Density:</span>
                  <span className="font-semibold">7.93 g/cm³</span>
                </li>
                <li className="flex justify-between">
                  <span>Melting Point:</span>
                  <span className="font-semibold">1400-1450°C</span>
                </li>
                <li className="flex justify-between">
                  <span>Thermal Conductivity:</span>
                  <span className="font-semibold">16.3 W/m·K</span>
                </li>
                <li className="flex justify-between">
                  <span>Electrical Resistivity:</span>
                  <span className="font-semibold">0.72 μΩ·m</span>
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
              Why Choose 209 Stainless Steel?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the key advantages that make 209 stainless steel an excellent choice for your projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Superior mechanical properties and enhanced performance for demanding applications requiring high quality.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Superior Corrosion Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhanced protection against rust and corrosion in various environments, including more challenging conditions.
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
                <span className="text-white text-2xl font-bold">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Attractive Finish</h3>
              <p className="text-gray-600 leading-relaxed">
                Can be polished to a bright, mirror-like finish, making it perfect for decorative and architectural applications.
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
              Explore our comprehensive range of 209 stainless steel products. Each form is designed 
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
            <MarkdownContent content={(() => { try { return getMarkdownByPath('app/200/209stainless steel.md')?.content || '' } catch { return '' } })()} />
          </article>
        </div>
      </section>

      <Footer />
    </>
  )
}

