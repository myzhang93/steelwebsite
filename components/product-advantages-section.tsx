import { DollarSign, Zap, Sparkles } from "lucide-react"

export default function ProductAdvantagesSection() {
  const advantages = [
    {
      icon: DollarSign,
      title: "Cost-Effectiveness",
      description: "200 Series Stainless Steel provides excellent value for money, offering superior performance at a competitive price point."
    },
    {
      icon: Zap,
      title: "High Strength",
      description: "Exceptional tensile and yield strength properties ensure durability and reliability in demanding applications."
    },
    {
      icon: Sparkles,
      title: "Aesthetic Appeal",
      description: "Beautiful polished finish and timeless elegance make it perfect for both functional and decorative applications."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Advantages of 200 Series Stainless Steel Sheet
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



