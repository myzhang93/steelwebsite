import { Droplets, Factory, Wrench, Building2 } from "lucide-react"

export default function ProductPipeTubeApplicationsSection() {
  const applications = [
    {
      icon: Droplets,
      title: "Oil & Gas",
      description: "Critical applications in pipelines, refineries, and offshore platforms requiring superior corrosion resistance and high pressure tolerance."
    },
    {
      icon: Factory,
      title: "Chemical Processing",
      description: "Essential for handling corrosive chemicals, acids, and high-temperature processes in manufacturing facilities."
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Used in structural applications, handrails, and architectural elements requiring both strength and aesthetic appeal."
    },
    {
      icon: Wrench,
      title: "Mechanical Engineering",
      description: "Perfect for hydraulic systems, heat exchangers, and machinery components demanding precision and durability."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Applications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <app.icon className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
              <p className="text-gray-600 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


