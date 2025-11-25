import { FileText, Wrench, ShoppingCart } from "lucide-react"

export default function ContactServiceFeatures() {
  const services = [
    {
      icon: FileText,
      title: "A FULL SERVICE",
      description: "Providing a wide range of services related to the factory production lines. You will find yourself working in a true partnership."
    },
    {
      icon: Wrench,
      title: "MAINTENANCE",
      description: "Providing a wide range of services related to the factory production lines. You will find yourself working in a true partnership."
    },
    {
      icon: ShoppingCart,
      title: "DELIVERY",
      description: "Providing a wide range of services related to the factory production lines. You will find yourself working in a true partnership."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



