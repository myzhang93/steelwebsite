import Image from "next/image"
import Link from "next/link"

export default function ProductRelatedSection() {
  const relatedProducts = [
    {
      name: "300 Series",
      image: "/stainless-steel-sheet.png",
      link: "/products/300-series"
    },
    {
      name: "400 Series",
      image: "/stainless-steel-sheet.png",
      link: "/products/400-series"
    },
    {
      name: "500 Series",
      image: "/stainless-steel-sheet.png",
      link: "/products/500-series"
    },
    {
      name: "600 Series",
      image: "/stainless-steel-sheet.png",
      link: "/products/600-series"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Related Products
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {relatedProducts.map((product, index) => (
            <Link key={index} href={product.link} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}



