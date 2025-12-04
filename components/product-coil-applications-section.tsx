import { Factory, Car, Building2, UtensilsCrossed } from "lucide-react"

export default function ProductCoilApplicationsSection() {
  const applications = [
    {
      icon: Factory,
      title: "Automotive Industry",
      description: "Used in automotive components, exhaust systems, and structural parts requiring high corrosion resistance and formability."
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Ideal for architectural cladding, roofing, and structural elements that demand durability and aesthetic appeal."
    },
    {
      icon: UtensilsCrossed,
      title: "Food Processing",
      description: "Perfect for kitchen equipment, food processing machinery, and storage containers where hygiene is critical."
    },
    {
      icon: Car,
      title: "Household Appliances",
      description: "Widely used in refrigerators, washing machines, and other appliances requiring corrosion resistance and clean appearance."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Applications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
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

