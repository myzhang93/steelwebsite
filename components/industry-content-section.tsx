"use client"

import { useState } from "react"

function IndustryQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
          Your Name*
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white rounded-md focus:ring-2 focus:ring-white focus:border-white placeholder:text-white/70"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white rounded-md focus:ring-2 focus:ring-white focus:border-white placeholder:text-white/70"
          placeholder="Enter your phone"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
          Email*
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white rounded-md focus:ring-2 focus:ring-white focus:border-white placeholder:text-white/70"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white rounded-md focus:ring-2 focus:ring-white focus:border-white placeholder:text-white/70"
          placeholder="Enter your message"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}

export default function IndustryContentSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Stainless Steel in Automotives: Vigor Beneath the Shimmer
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    A Review of Stainless Steel Characteristics and Advantages
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stainless steel stands out in the automotive industry due to its exceptional combination of strength, durability, and corrosion resistance. Unlike traditional materials, stainless steel maintains its structural integrity even under extreme conditions, making it ideal for critical automotive components. Its unique alloy composition, primarily chromium and nickel, creates a protective oxide layer that prevents rust and degradation over time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Meeting the High Demands of the Automotive Industry
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The automotive sector requires materials that can withstand rigorous testing and harsh environments. Stainless steel excels in meeting these demands, offering superior performance in temperature extremes, chemical exposure, and mechanical stress. Manufacturers rely on stainless steel for components that must maintain precision and reliability throughout the vehicle's lifespan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    The Sheen of Stainless Steel on Your Daily Drive
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Beyond its functional benefits, stainless steel brings an aesthetic appeal that enhances vehicle design. The material's natural luster and ability to be polished to a mirror finish make it a preferred choice for visible components. This combination of beauty and durability ensures that vehicles not only perform well but also maintain their visual appeal over years of use.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Versatility in Vehicular Construction
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Exterior Elegance and Durability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stainless steel's application in vehicle exteriors goes beyond mere aesthetics. It provides exceptional protection against environmental factors such as road salt, moisture, and UV radiation. The material's resistance to dents and scratches ensures that vehicles maintain their pristine appearance even after years of daily use, reducing maintenance costs and preserving resale value.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Tailoring the Underlying Framework
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The structural framework of modern vehicles benefits significantly from stainless steel's high strength-to-weight ratio. Engineers can design lighter yet stronger chassis components, improving fuel efficiency without compromising safety. This material's flexibility in manufacturing allows for complex shapes and precise tolerances, enabling innovative vehicle designs that were previously impossible.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    The Seamless Interiors
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Inside the vehicle, stainless steel contributes to both functionality and comfort. From dashboard components to seat frames, the material's hygienic properties and ease of cleaning make it ideal for interior applications. Its thermal conductivity properties also help in climate control systems, ensuring efficient heating and cooling throughout the cabin.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Superiority of Stainless Steel in the Auto Sector
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Corrosion Resistance: When Time Favors Steel
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    One of stainless steel's most significant advantages is its exceptional resistance to corrosion. This property is crucial in automotive applications where components are constantly exposed to moisture, road chemicals, and varying temperatures. Unlike other metals that deteriorate over time, stainless steel maintains its integrity, ensuring long-term reliability and reducing the need for frequent replacements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    A Strong Hold on Weight and Strength
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The automotive industry's push toward lighter vehicles for better fuel economy has made stainless steel increasingly valuable. Its superior strength-to-weight ratio allows manufacturers to reduce overall vehicle weight while maintaining or even improving structural integrity. This balance is essential for meeting modern fuel efficiency standards without compromising safety ratings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Form and Function in Perfect Harmony
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stainless steel's versatility extends to its formability, allowing manufacturers to create components with complex geometries and precise specifications. This material can be shaped, welded, and finished to meet exact design requirements, enabling engineers to optimize both the aesthetic and functional aspects of automotive components simultaneously.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    The Artistry That Moves Us
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Beyond technical specifications, stainless steel contributes to the artistic vision of vehicle design. Its ability to be finished in various textures and finishes—from brushed to mirror-polished—allows designers to create distinctive visual elements that set vehicles apart in the marketplace. This aesthetic flexibility is increasingly important as consumers seek vehicles that reflect their personal style.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    An Industry Committed to the Planet
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The automotive industry's commitment to environmental sustainability aligns perfectly with stainless steel's eco-friendly properties. The material's longevity means fewer replacements and less waste over a vehicle's lifetime. Additionally, stainless steel's production processes have become increasingly efficient, reducing the environmental impact of manufacturing while maintaining high quality standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Integral Recyclability - Closing the Circle Sustainably
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stainless steel is 100% recyclable, making it an ideal material for a circular economy. At the end of a vehicle's life, stainless steel components can be recovered and recycled without loss of quality or properties. This recyclability reduces the need for new raw materials and minimizes the environmental footprint of automotive manufacturing, contributing to a more sustainable industry.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Paving the Way for Innovations in Steel Processing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ongoing research and development in stainless steel processing continue to expand its applications in the automotive sector. Advanced manufacturing techniques, such as precision laser cutting and automated welding, enable the production of components with unprecedented accuracy and consistency. These innovations open new possibilities for vehicle design and performance optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Overcoming Obstacles, Paving the Way for Progress
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Balancing Cost against Material Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    While stainless steel offers numerous advantages, cost considerations remain an important factor in material selection. However, the long-term benefits—including reduced maintenance, extended lifespan, and improved resale value—often offset initial material costs. Manufacturers are increasingly recognizing that investing in high-quality stainless steel components provides better value over the vehicle's entire lifecycle.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Research and Development - The Engine Room of Change
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuous innovation in stainless steel alloys and processing techniques drives the material's evolution in automotive applications. Research focuses on developing new grades with enhanced properties, improved manufacturing efficiency, and reduced costs. These developments ensure that stainless steel remains at the forefront of automotive material science, meeting the industry's evolving needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Environmental Responsibilities - Beyond Compliance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The automotive industry's environmental responsibilities extend beyond meeting regulatory requirements. Stainless steel's sustainability credentials align with manufacturers' commitments to reducing their environmental impact. By choosing materials that are durable, recyclable, and produced through increasingly efficient processes, the industry moves toward a more sustainable future.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Riding the Technological Wave with Stainless Steel
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As automotive technology advances—from electric vehicles to autonomous driving systems—stainless steel adapts to meet new requirements. The material's properties make it suitable for battery enclosures, sensor mounts, and other critical components in next-generation vehicles. This adaptability ensures that stainless steel will continue to play a vital role as the automotive industry evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Fixed Quote Form */}
          <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg" id="quote-form">
              <h3 className="text-2xl font-bold mb-6">Get A Quote Now!</h3>
              <IndustryQuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

