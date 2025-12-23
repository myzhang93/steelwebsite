import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductsHeroSection from "@/components/products-hero-section"
import Image from "next/image"
import Link from "next/link"
import { readFileSync } from "fs"
import { join } from "path"
import ReactMarkdown from "react-markdown"

export const metadata: Metadata = {
  title: "Stainless Steel Products | Complete Range of Series & Forms",
  description: "Explore our comprehensive range of stainless steel products including 200, 300, 400, 500, 600 series, sheets, plates, coils, pipes, tubes, and fittings. Premium quality stainless steel for all your needs.",
}

const series = [
  {
    name: "200 Series",
    image: "/stainless-steel-sheet.png",
    link: "/products/200-series",
    description: "Cost-effective stainless steel with excellent formability"
  },
  {
    name: "300 Series",
    image: "/stainless-steel-sheet.png",
    link: "/products/300-series",
    description: "Most popular series with superior corrosion resistance"
  },
  {
    name: "400 Series",
    image: "/stainless-steel-sheet.png",
    link: "/products/400-series",
    description: "Martensitic and ferritic grades with high strength"
  },
  {
    name: "500 Series",
    image: "/stainless-steel-sheet.png",
    link: "/products/500-series",
    description: "Heat-resistant grades for high-temperature applications"
  },
  {
    name: "600 Series",
    image: "/stainless-steel-sheet.png",
    link: "/products/600-series",
    description: "Precipitation-hardening grades with exceptional strength"
  }
]

const productForms = [
  {
    name: "Stainless Steel Sheet & Plate",
    image: "/400/410/410sheet1.jpg",
    link: "/products/stainless-steel-sheet",
    description: "Stainless steel sheets and plates are flat products widely used in construction, fabrication, and manufacturing industries. Available in various grades and finishes, they offer excellent corrosion resistance, durability, and versatility for structural applications, architectural projects, and industrial equipment."
  },
  {
    name: "Stainless Steel Coil",
    image: "/Coils-2.jpg",
    link: "/products/stainless-steel-coil",
    description: "Stainless steel coils provide continuous material supply for high-volume manufacturing processes. Ideal for stamping, forming, and fabrication operations, these coils offer consistent quality, precise thickness control, and cost-effective production solutions for automotive, appliance, and industrial applications."
  },
  {
    name: "Stainless Steel Pipe & Tube",
    image: "/close-up-view-of-steel-pipes-in-iron-and-steel-mil-2021-12-20-19-43-13-utc-1.jpg",
    link: "/products/stainless-steel-pipe-tube",
    description: "Stainless steel pipes and tubes are essential components for fluid transportation, structural applications, and industrial systems. Available in various diameters, wall thicknesses, and grades, they provide superior corrosion resistance, high pressure tolerance, and long-lasting performance in demanding environments."
  },
  {
    name: "Stainless Steel Fittings",
    image: "/400/420/420fittings1.jpg",
    link: "/products/stainless-steel-fittings",
    description: "Stainless steel fittings are precision-engineered connectors designed for piping systems, ensuring secure and leak-free connections. Available in various types including elbows, tees, reducers, and flanges, these fittings provide excellent corrosion resistance and reliability for industrial, commercial, and residential applications."
  }
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <ProductsHeroSection />

        {/* Series Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Stainless Steel Series
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {series.map((product, index) => (
                <Link 
                  key={index} 
                  href={product.link} 
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-800 font-medium group-hover:text-blue-900 transition-colors">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Forms - Two Column Layout */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Product Forms
            </h2>
            <div className="space-y-16">
              {productForms.map((product, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                >
                  {/* Left/Right Column - Text */}
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors duration-300"
                    >
                      Learn More
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Right/Left Column - Image */}
                  <div className="flex-1 w-full">
                    <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Markdown Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article>
              {(() => {
                const markdownContent = readFileSync(join(process.cwd(), 'app/products/stainless steel.md'), 'utf-8')
                
                const markdownComponents = {
                  h1: ({node, ...props}: any) => <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-8" {...props} />,
                  h2: ({node, ...props}: any) => <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-6" {...props} />,
                  h3: ({node, ...props}: any) => <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
                  p: ({node, ...props}: any) => <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg" {...props} />,
                  ul: ({node, ...props}: any) => <ul className="list-disc list-outside mb-6 ml-6 text-gray-700 space-y-3" {...props} />,
                  ol: ({node, ...props}: any) => <ol className="list-decimal list-outside mb-6 ml-6 text-gray-700 space-y-3" {...props} />,
                  li: ({node, ...props}: any) => <li className="text-gray-700 leading-relaxed mb-1" {...props} />,
                  strong: ({node, ...props}: any) => <strong className="font-bold text-gray-900" {...props} />,
                  table: ({node, ...props}: any) => (
                    <div className="overflow-x-auto my-8 border border-gray-300 rounded-lg">
                      <table className="min-w-full border-collapse" {...props} />
                    </div>
                  ),
                  thead: ({node, ...props}: any) => <thead className="bg-gray-100" {...props} />,
                  tbody: ({node, ...props}: any) => <tbody {...props} />,
                  tr: ({node, ...props}: any) => <tr className="border-b border-gray-200 hover:bg-gray-50" {...props} />,
                  th: ({node, ...props}: any) => <th className="border-r border-gray-300 px-4 py-3 text-left font-bold text-gray-900 bg-gray-50 last:border-r-0" {...props} />,
                  td: ({node, ...props}: any) => <td className="border-r border-gray-300 px-4 py-3 text-gray-700 last:border-r-0" {...props} />,
                  blockquote: ({node, ...props}: any) => <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-600 my-8 py-2 bg-blue-50 rounded-r" {...props} />,
                  hr: ({node, ...props}: any) => <hr className="my-12 border-gray-300" {...props} />,
                }
                
                // Process markdown content and insert images within paragraphs
                const images = [
                  { src: "/steel-manufacturing.jpeg", alt: "Steel Manufacturing Process" },
                  { src: "/precision-engineering-stainless-steel.jpg", alt: "Precision Engineering" },
                  { src: "/manufacturing-facility-sparks-metal-cutting.jpg", alt: "Metal Cutting Process" }
                ]
                
                // Insert image markers in markdown content at strategic points
                let processedContent = markdownContent
                
                // Insert first image marker after "Shanxi Province" paragraph (in intro)
                processedContent = processedContent.replace(
                  /(Our strategically located facilities in Shanxi Province[^]*?47 countries[^]*?product forms\.)/,
                  '$1\n\n<!--IMAGE_0-->\n\n'
                )
                
                // Insert second image marker after 300 Series intro paragraph
                processedContent = processedContent.replace(
                  /(Representing over 70% of global stainless steel production[^]*?stainless steels are measured\.)/,
                  '$1\n\n<!--IMAGE_1-->\n\n'
                )
                
                // Insert third image marker after Product Forms intro
                processedContent = processedContent.replace(
                  /(## Product Forms: Precision-Manufactured for Your Success\n\n### Stainless Steel Sheet & Plate: Foundation of Modern Fabrication\n\nOur sheet and plate products[^]*?diverse applications\.)/,
                  '$1\n\n<!--IMAGE_2-->\n\n'
                )
                
                // Split by sections and process
                const sections = processedContent.split(/\n---\n/)
                let imageIndex = 0
                
                return sections.map((section, sectionIndex) => {
                  // Split section into blocks by image markers and paragraphs
                  const blocks = section.split(/(<!--IMAGE_\d+-->)/)
                  
                  return (
                    <div key={sectionIndex}>
                      {blocks.map((block, blockIndex) => {
                        if (block.match(/<!--IMAGE_(\d+)-->/)) {
                          const imgNum = parseInt(block.match(/<!--IMAGE_(\d+)/)?.[1] || '0')
                          return (
                            <div key={blockIndex} className="my-12">
                              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                  src={images[imgNum].src}
                                  alt={images[imgNum].alt}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          )
                        }
                        
                        if (block.trim()) {
                          return (
                            <ReactMarkdown key={blockIndex} components={markdownComponents}>
                              {block}
                            </ReactMarkdown>
                          )
                        }
                        
                        return null
                      })}
                    </div>
                  )
                })
              })()}
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

