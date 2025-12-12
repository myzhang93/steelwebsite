import { CheckCircle } from "lucide-react"

export default function ProductCoilBenefitsSection() {
  const benefits = [
    "Consistent thickness and quality throughout the entire coil",
    "Excellent surface finish for superior product appearance",
    "High formability for complex manufacturing processes",
    "Cost-effective solution for high-volume production",
    "Available in various grades to meet specific requirements",
    "Precision width and thickness tolerances",
    "Reduced waste with optimized coil dimensions",
    "Fast delivery and reliable supply chain"
  ]

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Key Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}







