"use client"

import { useState, useRef } from "react"

function ConstructionQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" })
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
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
          Your Message*
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white rounded-md focus:ring-2 focus:ring-white focus:border-white placeholder:text-white/70"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          File Upload
        </label>
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="px-4 py-2 border border-white/30 bg-white/10 text-white rounded-md cursor-pointer hover:bg-white/20 transition"
          >
            选择文件
          </label>
          <span className="text-white/70 text-sm">
            {selectedFile ? selectedFile.name : "未选择文件"}
          </span>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "SEND"}
      </button>
    </form>
  )
}

export default function ConstructionContentSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of Stainless Steel Sheets
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Understanding the benefits of stainless steel sheets is crucial for making informed decisions in 
                construction projects. These benefits extend beyond mere durability, encompassing stability, corrosion 
                resistance, and long-term value that make stainless steel an ideal choice for modern construction 
                applications.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Durability and Longevity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stainless steel sheets offer exceptional durability that stands the test of time. Unlike traditional 
                    materials that deteriorate under environmental stress, stainless steel maintains its structural integrity 
                    for decades. This longevity reduces the need for frequent replacements and maintenance, resulting in 
                    significant cost savings over the building's lifecycle. The material's resistance to wear, impact, and 
                    fatigue makes it ideal for high-traffic areas and demanding applications where reliability is paramount.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Corrosion Resistance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    One of stainless steel's most significant advantages is its superior corrosion resistance. The chromium 
                    content in stainless steel forms a protective oxide layer that prevents rust and corrosion, even in 
                    harsh environments. This property is particularly valuable in coastal areas, industrial zones, and 
                    regions with high humidity or chemical exposure. The material's ability to resist corrosion ensures 
                    that structures maintain their appearance and structural integrity without constant maintenance or 
                    protective coatings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Aesthetic Appeal
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Beyond functional benefits, stainless steel sheets provide exceptional aesthetic appeal. The material's 
                    natural luster and ability to be finished in various textures—from mirror-polished to brushed—allow 
                    architects to create striking visual elements. This aesthetic versatility enables designers to achieve 
                    modern, sleek appearances while maintaining the material's practical advantages. The timeless elegance of 
                    stainless steel ensures that buildings remain visually appealing for generations.
                  </p>
                </div>
              </div>
            </div>

            {/* Applications Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Applications in Construction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Stainless steel's adaptability makes it suitable for a wide range of construction applications. From 
                structural components to decorative elements, the material's versatility allows architects and engineers to 
                explore innovative design solutions while ensuring performance and durability.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Structural Components
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stainless steel sheets are increasingly used in structural applications where strength and durability 
                    are critical. The material's high strength-to-weight ratio allows for lighter structures without 
                    compromising safety or stability. Structural components made from stainless steel include beams, columns, 
                    trusses, and support systems that must withstand significant loads while resisting environmental 
                    degradation. The material's ability to maintain its properties under extreme conditions makes it ideal 
                    for seismic-resistant structures and buildings in challenging environments.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Cladding and Roofing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The use of stainless steel sheets in cladding and roofing systems provides both protection and aesthetic 
                    enhancement. Cladding panels offer weather resistance, thermal insulation, and visual appeal, while 
                    stainless steel roofing systems provide exceptional durability and low maintenance requirements. These 
                    applications benefit from the material's ability to reflect heat, resist corrosion, and maintain 
                    appearance over decades of exposure to weather elements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Interior Design Elements
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Inside buildings, stainless steel sheets create striking interior design elements that combine 
                    functionality with visual appeal. From wall panels and ceiling systems to decorative features and 
                    functional components, stainless steel brings a modern, sophisticated aesthetic to interior spaces. The 
                    material's hygienic properties make it ideal for kitchens, bathrooms, and healthcare facilities, while 
                    its ease of cleaning ensures that interior elements maintain their appearance with minimal maintenance.
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comparison with Other Materials
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                When selecting materials for construction projects, understanding how stainless steel compares to 
                traditional alternatives is essential for making informed decisions that balance cost, performance, and 
                long-term value.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Strengths and Advantages over Traditional Materials
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stainless steel offers numerous advantages over traditional construction materials such as carbon steel, 
                  aluminum, and various composites. Unlike carbon steel, stainless steel requires no protective coatings or 
                  regular maintenance to prevent corrosion. Compared to aluminum, stainless steel provides superior strength 
                  and durability, making it suitable for load-bearing applications. The material's fire resistance exceeds 
                  that of many alternatives, providing enhanced safety in construction. Additionally, stainless steel's 
                  recyclability and long lifespan contribute to superior environmental performance compared to materials that 
                  require frequent replacement or extensive maintenance. While initial costs may be higher, the total cost of 
                  ownership over a building's lifetime often favors stainless steel due to reduced maintenance, longer 
                  service life, and superior performance characteristics.
                </p>
              </div>
            </div>

            {/* Case Studies Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Case Studies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Real-world examples demonstrate the successful application of stainless steel sheets in construction 
                projects worldwide, showcasing the material's versatility, durability, and aesthetic capabilities.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Real-World Examples of Successful Projects
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Iconic architectural projects around the world showcase stainless steel's capabilities in construction. 
                  New York's skyline features numerous buildings with stainless steel cladding and structural elements that 
                  have maintained their appearance and performance for decades. Singapore's modern architecture extensively 
                  uses stainless steel sheets for both functional and aesthetic purposes, creating buildings that reflect 
                  the city's forward-thinking design philosophy.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Burj Al Arab in Dubai demonstrates stainless steel's ability to create striking visual statements while 
                  withstanding harsh environmental conditions. The building's extensive use of stainless steel cladding 
                  provides both weather protection and iconic aesthetic appeal. Similarly, the Santander Waterfront Auditorium 
                  showcases how stainless steel sheets can be used to create fluid, organic forms that would be difficult 
                  or impossible to achieve with other materials.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These projects illustrate how stainless steel sheets enable architects to push the boundaries of design 
                  while ensuring long-term performance and durability. The material's combination of strength, corrosion 
                  resistance, and aesthetic versatility makes it an ideal choice for projects that require both visual 
                  impact and practical performance.
                </p>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Conclusion
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Stainless steel sheets represent a fundamental material in modern construction, offering a unique combination 
                of durability, aesthetic appeal, and environmental sustainability. As the construction industry continues to 
                evolve toward more sustainable and efficient building practices, stainless steel's role becomes increasingly 
                important. The material's ability to provide long-term value, reduce maintenance requirements, and enable 
                innovative design solutions positions it as a cornerstone of sustainable construction. By choosing stainless 
                steel sheets, architects, engineers, and builders invest in structures that will serve communities for 
                generations while contributing to a more sustainable built environment.
              </p>
            </div>
          </div>

          {/* Right Sidebar - Sticky Quote Form */}
          <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg" id="quote-form">
              <h3 className="text-2xl font-bold mb-6">Get A Quote Now!</h3>
              <ConstructionQuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

