import { CheckCircle } from "lucide-react"

export default function ProductFittingsBenefitsSection() {
  const benefits = [
    "Leak-proof connections with precision machining",
    "Excellent corrosion resistance for long service life",
    "Wide range of sizes and connection types available",
    "Compliance with international standards and certifications",
    "High pressure and temperature tolerance",
    "Easy installation and maintenance",
    "Compatible with various pipe materials",
    "Cost-effective solutions for all applications"
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Key Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg shadow-md">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}







