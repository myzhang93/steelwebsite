export default function Product300MaterialProperties() {
  return (
    <section id="material-properties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          300 Series Stainless Steel Products
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
          The 300 series stainless steels are austenitic alloys with superior corrosion resistance, high strength, and excellent weldability. The most commonly used grades in the 300 series are 304, 316, and 321, known for their versatility and durability in a wide range of applications. These alloys are highly resistant to oxidation, making them ideal for environments with higher corrosive elements.
        </p>

        {/* Dimension Table */}
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
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">304</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Most commonly used, excellent corrosion resistance, versatile.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">316</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Superior resistance to pitting and crevice corrosion, ideal for marine and chemical environments.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">321</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Good oxidation resistance at higher temperatures, stabilized with titanium.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">303</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Excellent machinability, high strength, good corrosion resistance.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">310</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-nowrap">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">High resistance to oxidation at elevated temperatures, ideal for high-heat environments.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}



