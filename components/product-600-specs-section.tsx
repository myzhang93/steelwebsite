export default function Product600SpecsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          600 Series Stainless Steel Specifications
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Type</th>
                <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Size</th>
                <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Thickness Range</th>
                <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">630</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Precipitation hardening, high strength, good corrosion resistance.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">631</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Excellent fatigue resistance, suitable for high-stress applications.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">640</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Good high-temperature strength and oxidation resistance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

