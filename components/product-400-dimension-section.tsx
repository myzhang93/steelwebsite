"use client"

export default function Product400DimensionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Dimension
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-4 text-left font-semibold">Grade</th>
                <th className="px-6 py-4 text-left font-semibold">Width</th>
                <th className="px-6 py-4 text-left font-semibold">Length</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-700">400 Series</td>
                <td className="px-6 py-4 text-gray-700">1000-2000mm</td>
                <td className="px-6 py-4 text-gray-700">
                  Customizable, can be cut into any size according to customer requirements.
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-700">400 Series</td>
                <td className="px-6 py-4 text-gray-700">1000-2000mm</td>
                <td className="px-6 py-4 text-gray-700">
                  Customizable, can be cut into any size according to customer requirements.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}



