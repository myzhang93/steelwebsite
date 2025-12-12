import { Award, FileCheck, TestTube, Shield } from "lucide-react"

export default function ProductFittingsQualitySection() {
  const qualityFeatures = [
    {
      icon: Award,
      title: "Certified Quality",
      description: "All fittings meet or exceed international standards including ASTM, ASME, and ANSI specifications."
    },
    {
      icon: FileCheck,
      title: "Comprehensive Testing",
      description: "Rigorous quality control including dimensional inspection, pressure testing, and material certification."
    },
    {
      icon: TestTube,
      title: "Material Traceability",
      description: "Full material traceability with mill certificates and test reports for quality assurance."
    },
    {
      icon: Shield,
      title: "Warranty Guaranteed",
      description: "Manufacturer warranty covering defects in materials and workmanship for peace of mind."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Quality Assurance
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}







