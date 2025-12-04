export default function ProductFittingsSpecsSection() {
  const specifications = [
    {
      category: "Connection Types",
      value: "Threaded, Welded, Flanged"
    },
    {
      category: "Pressure Rating",
      value: "150# to 2500#"
    },
    {
      category: "Standards",
      value: "ASTM, ASME, ANSI, DIN"
    },
    {
      category: "Grades",
      value: "200, 300, 400 Series"
    },
    {
      category: "Surface Finish",
      value: "Pickled, Polished, Bright"
    },
    {
      category: "Size Range",
      value: "1/2\" to 48\""
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Specifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{spec.category}</h3>
              <p className="text-gray-600 text-xl">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

