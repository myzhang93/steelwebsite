export default function ProductPipeTubeTypesSection() {
  const types = [
    {
      title: "Seamless Pipes",
      description: "Manufactured without welds, providing superior strength and uniformity. Ideal for high-pressure and critical applications.",
      features: ["Higher pressure rating", "Smooth interior surface", "Uniform wall thickness", "Superior structural integrity"]
    },
    {
      title: "Welded Pipes",
      description: "Cost-effective solution for standard applications with excellent dimensional consistency and quality welds.",
      features: ["Cost-efficient", "Consistent dimensions", "Available in longer lengths", "Versatile applications"]
    },
    {
      title: "Round Tubes",
      description: "Precision-engineered round tubes for structural, mechanical, and fluid transport applications.",
      features: ["Precise tolerances", "Multiple grades available", "Various surface finishes", "Custom sizes"]
    },
    {
      title: "Square & Rectangular Tubes",
      description: "Ideal for structural applications requiring aesthetic appeal and functional design.",
      features: ["Modern appearance", "High strength", "Easy fabrication", "Architectural applications"]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Product Types
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {types.map((type, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

