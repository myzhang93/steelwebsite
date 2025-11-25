export default function Product300MaterialProperties() {
  return (
    <section id="material-properties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          300 Series Stainless Steel Material Properties
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
          Shanxi Steel is committed to delivering exceptional quality stainless steel products through advanced technology, 
          rigorous quality control, and a skilled workforce. Our 300 series stainless steel materials are manufactured 
          to meet the highest industry standards, ensuring durability, corrosion resistance, and superior performance 
          in diverse applications.
        </p>

        {/* Dimension Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Type</th>
                <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Size</th>
                <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Sheet</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm*2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Thickness: 0.3mm-120mm</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Coil</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">1000mm-2000mm</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">Thickness: 0.3mm-120mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}


