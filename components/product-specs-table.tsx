export default function ProductSpecsTable() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          200 Series Stainless Steel Specification
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
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">201</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">High strength, low nickel content, cost-effective, good weldability.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">202</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Enhanced corrosion resistance, slightly higher manganese content than 201.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">201L</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Low carbon content for improved weldability and corrosion resistance after welding.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">204</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Good strength, moderate corrosion resistance, cost-effective option.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold">209</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm * 2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">0.3mm - 120mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">High manganese content for increased strength, moderate corrosion resistance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}




