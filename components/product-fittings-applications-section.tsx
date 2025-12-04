import { Droplets, Factory, Home, Wrench } from "lucide-react"

export default function ProductFittingsApplicationsSection() {
  const applications = [
    {
      icon: Droplets,
      title: "Plumbing Systems",
      description: "Essential for residential and commercial plumbing, providing reliable connections for water supply, drainage, and HVAC systems."
    },
    {
      icon: Factory,
      title: "Industrial Piping",
      description: "Critical components in process piping, chemical plants, and manufacturing facilities requiring robust connections."
    },
    {
      icon: Home,
      title: "Food & Beverage",
      description: "Ideal for food processing equipment, breweries, and pharmaceutical applications where hygiene and corrosion resistance are essential."
    },
    {
      icon: Wrench,
      title: "Oil & Gas",
      description: "Reliable fittings for pipelines, refineries, and petrochemical facilities operating under high pressure and temperature conditions."
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

