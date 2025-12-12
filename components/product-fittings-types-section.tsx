export default function ProductFittingsTypesSection() {
  const types = [
    {
      title: "Elbows",
      description: "Available in 45° and 90° angles, these fittings are essential for changing direction in piping systems while maintaining smooth flow.",
      sizes: "1/2\" to 24\""
    },
    {
      title: "Tees",
      description: "Standard and reducing tees for branching pipelines, providing efficient flow distribution and connection points.",
      sizes: "1/2\" to 24\""
    },
    {
      title: "Reducers",
      description: "Concentric and eccentric reducers for connecting pipes of different diameters, ensuring smooth transitions.",
      sizes: "1/2\" to 24\""
    },
    {
      title: "Flanges",
      description: "Slip-on, weld neck, and blind flanges in various pressure ratings, providing secure and removable connections.",
      sizes: "1/2\" to 48\""
    },
    {
      title: "Caps & Plugs",
      description: "End caps and plugs for sealing pipe ends, available in various thread types and connection methods.",
      sizes: "1/2\" to 24\""
    },
    {
      title: "Unions",
      description: "Threaded unions for easy disconnection and maintenance of piping systems without cutting pipes.",
      sizes: "1/2\" to 6\""
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Product Types
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Available Sizes:</p>
                <p className="text-lg font-semibold text-blue-600">{type.sizes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}







