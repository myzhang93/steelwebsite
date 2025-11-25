"use client"

import { useState, useRef } from "react"

function ElectropolishingQuoteForm() {
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
          Phone*
        </label>
        <input
          type="tel"
          id="phone"
          required
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

export default function ElectropolishingContentSection() {
  const [isTocOpen, setIsTocOpen] = useState(false)

  const tableOfContents = [
    "The Electropolishing Symphony",
    "The Advantages of an Electropolished Surface",
    "Preparing for the Electropolishing Journey",
    "  Fixture and Fixation",
    "  The Rigorous Clean",
    "  Cathode and Anode: The Pillars of the Process",
    "The Electropolishing Voyage",
    "  The Art of Timing",
    "  The Sheen of Control",
    "The Latest Equipment on the Market",
    "Setting Sail on the Electropolished Horizon"
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Table of Contents */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-gray-900">Table of Contents</h2>
                <svg
                  className={`w-5 h-5 transition-transform ${isTocOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isTocOpen && (
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-4">
                  {tableOfContents.map((item, index) => (
                    <li key={index} className={`hover:text-blue-600 transition cursor-pointer ${item.startsWith('  ') ? 'ml-4' : ''}`}>
                      {item.trim()}
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-lg shadow-md p-8 space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Electropolishing Symphony
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Electropolishing is an electrochemical metal finishing process that uses direct electric current to 
                  dissolve the metal's surface, creating a smooth, bright, and corrosion-resistant finish. This process 
                  transforms the microscopic peaks and valleys of a metal surface into a uniform, mirror-like surface 
                  that not only looks exceptional but also performs better in demanding applications.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At its core, electropolishing relies on the principles of electrochemistry. When a stainless steel 
                  component is submerged in an electrolyte solution and connected as the anode (positive terminal) in an 
                  electrical circuit, metal ions are selectively removed from the surface. The process is controlled by 
                  several critical factors: the charged species in the electrolyte, the electric potential applied, the 
                  current density, and the chemistry of the electrolyte solution.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The science behind electropolishing involves the preferential removal of surface material from high 
                  points and irregularities. As electric current flows through the system, the electrochemical reaction 
                  dissolves metal more rapidly from peaks and protrusions than from valleys and depressions. This 
                  selective removal creates a leveling effect that smooths the surface and enhances its reflectivity. 
                  The result is a surface that not only looks superior but also has improved corrosion resistance, 
                  reduced friction, and enhanced cleanability.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Advantages of an Electropolished Surface
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Electropolishing offers numerous advantages that make it an essential finishing process for stainless 
                  steel components. These benefits extend beyond mere aesthetics, impacting performance, durability, 
                  and functionality in significant ways.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Corrosion Resistance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      One of the most significant advantages of electropolishing is the reduction of surface irregularities 
                      that can serve as initiation sites for corrosion. The process removes surface contaminants, 
                      embedded particles, and microscopic defects that could compromise the material's protective oxide 
                      layer. By creating a smoother, more uniform surface, electropolishing enhances the natural 
                      corrosion resistance of stainless steel, extending the component's service life in harsh 
                      environments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Hygiene and Cleanability
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The mirror-like finish created by electropolishing makes surfaces significantly easier to clean and 
                      maintain. The smooth, non-porous surface prevents the accumulation of bacteria, contaminants, and 
                      residues that can harbor in surface irregularities. This property is particularly valuable in 
                      industries such as food processing, pharmaceuticals, and medical equipment, where hygiene standards 
                      are critical. The reduced surface area and smooth finish mean less contaminant harboring and easier 
                      sterilization.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Strength and Performance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Electropolishing can improve the mechanical properties of stainless steel surfaces. The process 
                      removes surface stress concentrations and micro-cracks that could serve as failure initiation 
                      points. Additionally, the smooth surface reduces friction and wear, improving the component's 
                      performance in moving applications. The enhanced surface quality contributes to better fatigue 
                      resistance and overall component reliability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Aesthetic Appeal
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The mirror-like finish achieved through electropolishing creates a visually stunning surface that 
                      enhances the aesthetic appeal of stainless steel components. This finish is particularly valuable 
                      for visible components in architectural, automotive, and consumer product applications. The 
                      consistent, uniform appearance achieved through electropolishing is difficult to replicate through 
                      mechanical polishing methods, making it the preferred choice for applications where appearance 
                      matters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Preparing for the Electropolishing Journey
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Successful electropolishing requires meticulous preparation. The process begins long before the 
                  component enters the electrolyte bath, with careful attention to fixture design, surface cleaning, 
                  and process setup. Proper preparation ensures optimal results and prevents defects that could 
                  compromise the finished surface quality.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Fixture and Fixation
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The way stainless steel components are held during electropolishing is critical to achieving uniform 
                      results. Components must be securely fixed without direct contact with the cathode ring, as contact 
                      would create areas of high current density that could cause burning or uneven finishing. Tailored 
                      fixtures and suspension systems are designed to hold components in the optimal position within the 
                      electrolyte bath, ensuring even current distribution across all surfaces.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Fixture design must account for the component's geometry, ensuring that all surfaces receive 
                      adequate current flow. Complex shapes may require custom fixtures that position the component to 
                      minimize shadowing effects and ensure uniform material removal. The fixture material must also be 
                      compatible with the electrolyte solution and capable of withstanding the process conditions without 
                      degradation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      The Rigorous Clean
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Before electropolishing, components must undergo thorough cleaning to remove all contaminants, 
                      oils, fingerprints, and surface oxides. Any remaining contamination will interfere with the 
                      electrochemical process, leading to uneven finishing, defects, or process failure. Ultrasonic 
                      cleaning is often employed to remove embedded particles and surface films that could compromise the 
                      electropolishing results.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      After cleaning, components may undergo passivation to ensure the surface is in the optimal 
                      condition for electropolishing. This step removes any remaining surface oxides and prepares the 
                      metal for the electrochemical process. The cleaning and preparation steps are as critical as the 
                      electropolishing process itself, as they determine the quality of the final finish.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Cathode and Anode: The Pillars of the Process
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The electropolishing process relies on the fundamental principles of electrochemistry, with the 
                      cathode and anode playing pivotal roles in determining current flow and process progress. The 
                      stainless steel component serves as the anode (positive terminal), where metal ions are removed from 
                      the surface. The cathode (negative terminal), typically made from lead or other suitable materials, 
                      completes the electrical circuit and facilitates the flow of current through the electrolyte.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The relationship between the cathode and anode determines the current density distribution across 
                      the component's surface. Proper positioning and design of both electrodes ensure uniform current 
                      flow, preventing areas of excessive or insufficient material removal. The cathode design must 
                      account for the component's geometry to ensure even current distribution, while the anode 
                      connection must provide secure electrical contact without creating localized high-current areas 
                      that could cause burning or defects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Electropolishing Voyage
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Once preparation is complete, the component embarks on its electropolishing journey. The process 
                  involves submersion in the electrolyte bath, controlled application of electric current, and careful 
                  monitoring of process parameters. This voyage transforms the surface from its initial state to a 
                  gleaming, mirror-like finish that meets the highest quality standards.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      The Art of Timing
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The duration of the electropolishing process varies significantly based on several factors: part 
                      geometry, material composition, desired finish quality, and process conditions. Simple geometries 
                      may require only minutes, while complex components with intricate features might need hours of 
                      processing. Understanding the relationship between time and material removal is essential for 
                      achieving optimal results.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Too short a processing time results in incomplete surface leveling and insufficient material removal, 
                      leaving surface irregularities and defects. Too long a processing time can cause excessive material 
                      removal, dimensional changes, or surface defects. The art of timing involves finding the optimal 
                      duration that achieves the desired finish quality while maintaining dimensional accuracy and 
                      surface integrity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      The Sheen of Control
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Modern electropolishing equipment incorporates sophisticated control systems that monitor and adjust 
                      critical process parameters in real-time. Temperature control ensures the electrolyte maintains 
                      optimal viscosity and conductivity, while current density control prevents excessive material 
                      removal and ensures uniform finishing. Solution flow management maintains consistent electrolyte 
                      composition and prevents localized depletion of active species.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      These control systems enable precise management of the electropolishing process, ensuring 
                      consistent results across production runs. Automated systems can adjust parameters based on 
                      feedback from sensors, compensating for variations in component geometry, material properties, or 
                      process conditions. This level of control is essential for achieving the high-quality finishes 
                      required in demanding applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Latest Equipment on the Market
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advancements in electropolishing equipment continue to push the boundaries of what's possible in 
                  surface finishing. Modern systems incorporate automated controls, data feedback mechanisms, and 
                  diagnostic capabilities that minimize human error and ensure consistent, high-quality results. These 
                  innovations make electropolishing more accessible, reliable, and efficient than ever before.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Automated electropolishing systems can handle complex production requirements with minimal operator 
                  intervention. Programmable process parameters allow for optimization of different component types, 
                  while data logging capabilities provide traceability and quality assurance. These systems can monitor 
                  electrolyte condition, adjust process parameters automatically, and provide alerts when maintenance or 
                  replenishment is required.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The integration of feedback systems and diagnostics enables real-time process monitoring and 
                  adjustment. Sensors can detect variations in electrolyte composition, temperature, or current density, 
                  allowing the system to compensate automatically. This capability minimizes the risk of process defects 
                  and ensures consistent quality across production runs, making electropolishing a reliable choice for 
                  high-volume manufacturing applications.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Setting Sail on the Electropolished Horizon
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Electropolishing represents more than just a finishing process—it's a strategic step that enhances 
                  product value, reliability, and aesthetic appeal. As manufacturers continue to demand higher quality 
                  standards and better performance from their stainless steel components, electropolishing provides the 
                  solution that meets these requirements.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The future of stainless steel applications is being shaped by processes like electropolishing that 
                  combine scientific precision with manufacturing excellence. As equipment becomes more sophisticated and 
                  process understanding deepens, electropolishing will continue to evolve, offering even better results 
                  and broader applications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For manufacturers seeking to achieve the highest quality and luster in their stainless steel products, 
                  electropolishing offers a proven path forward. The process's ability to enhance corrosion resistance, 
                  improve cleanability, and create stunning aesthetic finishes makes it an essential tool in the modern 
                  manufacturing arsenal. As we set sail on the electropolished horizon, the possibilities for creating 
                  superior stainless steel components are limited only by our understanding and application of this 
                  remarkable process.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Sticky Quote Form */}
          <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg" id="quote-form">
              <h3 className="text-2xl font-bold mb-6">Get A Quote Now!</h3>
              <ElectropolishingQuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

