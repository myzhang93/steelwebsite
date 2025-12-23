import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Wrench } from "lucide-react"
import { getMarkdownByPath } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"

export const metadata: Metadata = {
  title: "631 Stainless Steel | High-Strength Precipitation-Hardening Grade - All Product Forms",
  description: "Explore 631 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Exceptional strength up to 1650 MPa with excellent corrosion resistance.",
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
    title: "631 Stainless Steel Sheet & Plate",
    description: "High-quality 631 stainless steel sheets and plates with exceptional strength up to 1650 MPa. Perfect for aerospace, medical devices, and high-performance applications.",
    image: "/600/631sheet1.webp",
    href: "/products/stainless-steel-sheet/631",
    features: [
      "High strength up to 1650 MPa",
      "Precipitation hardening",
      "Excellent corrosion resistance",
      "Superior fatigue resistance",
      "Aerospace grade quality"
    ]
  },
  {
    title: "631 Stainless Steel Coil",
    description: "Premium 631 stainless steel coils with superior mechanical properties. Ideal for manufacturing processes requiring high-strength materials with excellent corrosion resistance.",
    image: "/600/631coil1.webp",
    href: "/products/stainless-steel-coil/631",
    features: [
      "Continuous length supply",
      "High strength",
      "Consistent quality",
      "Easy to process",
      "Multiple finish options"
    ]
  },
  {
    title: "631 Stainless Steel Pipe & Tube",
    description: "Durable 631 stainless steel pipes and tubes designed for high-pressure, high-temperature environments. Excellent for aerospace, medical devices, and hydraulic systems.",
    image: "/600/631pipe1.webp",
    href: "/products/stainless-steel-pipe-tube/631",
    features: [
      "Various diameters available",
      "High strength up to 1650 MPa",
      "Excellent corrosion resistance",
      "Suitable for critical applications",
      "Long service life"
    ]
  },
  {
    title: "631 Stainless Steel Fittings",
    description: "Precision-manufactured 631 stainless steel fittings with exceptional strength and corrosion resistance. Perfect for high-performance piping systems and aerospace applications.",
    image: "/600/631fittings1.jpg",
    href: "/products/stainless-steel-fittings/631",
    features: [
      "Precision manufacturing",
      "High strength",
      "Multiple types available",
      "Easy installation",
      "Durable construction"
    ]
  }
]

export default function StainlessSteel631OverviewPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              631 Stainless Steel
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              631 stainless steel is a semi-austenitic precipitation-hardening stainless steel known for its exceptional strength and corrosion resistance. 
              With a yield strength of up to 1650 MPa in its hardened form, it stands as one of the strongest options among precipitation-hardening stainless steels.
            </p>
          </div>
          
          {/* Key Properties */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Exceptional Strength</h3>
              <p className="text-gray-600 leading-relaxed">Up to 1650 MPa yield strength</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Corrosion Resistance</h3>
              <p className="text-gray-600 leading-relaxed">Excellent in harsh environments</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fatigue Resistance</h3>
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
              631 stainless steel is widely used across various critical industries and high-performance applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Aerospace components",
              "Medical devices",
              "Hydraulic systems",
              "Nuclear reactor components",
              "Aircraft hydraulic lines",
              "Pressure vessels",
              "Medical surgical tools",
              "High-strength springs"
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
              Understanding the key technical characteristics of 631 stainless steel helps in selecting the right material for your application.
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
                  <span className="font-semibold">6.5-7.75%</span>
                </li>
                <li className="flex justify-between">
                  <span>Aluminum:</span>
                  <span className="font-semibold">0.75-1.5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Carbon:</span>
                  <span className="font-semibold">≤0.07%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mechanical Properties (RH950)</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Tensile Strength:</span>
                  <span className="font-semibold">1200 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Yield Strength:</span>
                  <span className="font-semibold">950 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Elongation:</span>
                  <span className="font-semibold">10%</span>
                </li>
                <li className="flex justify-between">
                  <span>Hardness:</span>
                  <span className="font-semibold">38-42 HRC</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Density:</span>
                  <span className="font-semibold">7.81 g/cm³</span>
                </li>
                <li className="flex justify-between">
                  <span>Melting Point:</span>
                  <span className="font-semibold">1400-1440°C</span>
                </li>
                <li className="flex justify-between">
                  <span>Thermal Conductivity:</span>
                  <span className="font-semibold">16.0 W/m·K</span>
                </li>
                <li className="flex justify-between">
                  <span>Electrical Resistivity:</span>
                  <span className="font-semibold">0.82 μΩ·m</span>
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
              Why Choose 631 Stainless Steel?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the key advantages that make 631 stainless steel an excellent choice for your high-performance applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exceptional Strength</h3>
              <p className="text-gray-600 leading-relaxed">
                Achieve up to 1650 MPa yield strength in the hardened condition, making it the strongest among precipitation-hardening stainless steels.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellent Corrosion Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellent resistance to general corrosion, stress corrosion cracking, and pitting, especially in chloride and marine environments.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fatigue Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Designed to handle cyclic loading and high-stress applications, ideal for high-performance springs and turbine components.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">✈️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aerospace Applications</h3>
              <p className="text-gray-600 leading-relaxed">
                Superior strength-to-weight ratio makes it ideal for demanding applications such as aircraft hydraulic lines and nuclear piping.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellent Machinability</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellent machinability in the annealed condition, reducing the cost and complexity of production processes.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Heat Treatment Flexibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Multiple heat treatment options (e.g., RH950, CH900) for customized mechanical properties, including hardness and yield strength.
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
              Explore our comprehensive range of 631 stainless steel products. Each form is designed 
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
            <MarkdownContent content={(() => { try { return getMarkdownByPath('app/600/631stainless steel.md')?.content || '' } catch { return '' } })()} />
          </article>
        </div>
      </section>

      <Footer />
    </>
  )
}

