import { Shield, Zap, CheckCircle2, Award } from "lucide-react"

export default function ProductPipeTubeAdvantagesSection() {
  const advantages = [
    {
      icon: Shield,
      title: "Superior Corrosion Resistance",
      description: "Excellent resistance to rust, oxidation, and chemical attack, ensuring long-lasting performance in harsh environments."
    },
    {
      icon: Zap,
      title: "High Pressure Tolerance",
      description: "Designed to withstand high internal and external pressures, making them ideal for critical applications."
    },
    {
      icon: CheckCircle2,
      title: "Precision Manufacturing",
      description: "Tight dimensional tolerances and consistent quality ensure reliable performance and easy installation."
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "All products meet international standards and come with comprehensive quality certificates and test reports."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Key Advantages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-8 h-8 text-blue-800" />
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


