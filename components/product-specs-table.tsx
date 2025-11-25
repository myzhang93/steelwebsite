export default function ProductSpecsTable() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          200 Series Stainless Steel Specification
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Grade</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tensile Strength</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Yield Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-600">201</td>
                <td className="px-6 py-4 text-sm text-gray-600">515 MPa</td>
                <td className="px-6 py-4 text-sm text-gray-600">275 MPa</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-600">202</td>
                <td className="px-6 py-4 text-sm text-gray-600">520 MPa</td>
                <td className="px-6 py-4 text-sm text-gray-600">275 MPa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}



