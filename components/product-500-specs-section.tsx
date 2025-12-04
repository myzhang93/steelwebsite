export default function Product500SpecsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          500 Series Stainless Steel Specifications
        </h2>
        <div className="overflow-x-auto">
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
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold whitespace-nowrap">502</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">High chromium, excellent high-temperature oxidation resistance.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold whitespace-nowrap">503</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Good oxidation resistance, ideal for high-temperature use.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold whitespace-nowrap">504</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Resists scaling and oxidation, used in furnace parts.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

