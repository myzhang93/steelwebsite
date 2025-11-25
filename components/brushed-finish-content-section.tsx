"use client"

import { useState, useRef } from "react"

function BrushedFinishQuoteForm() {
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

export default function BrushedFinishContentSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Understanding Brushed Stainless Steel
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Brushed stainless steel represents one of the most popular and versatile finishes available for metal 
                  products. This finish is created by applying a consistent, unidirectional satin texture to the 
                  surface, typically using abrasive brushes or belts. The result is a surface that combines aesthetic 
                  appeal with practical benefits, making it ideal for a wide range of applications.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The material's flexibility allows it to be used in numerous applications, from decorative fixtures to 
                  functional components. The brushed finish provides a modern, sophisticated appearance that complements 
                  various design styles, from industrial to contemporary. This aesthetic appeal, combined with the 
                  material's inherent durability, makes brushed stainless steel a preferred choice for many projects.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  One of the key advantages of brushed stainless steel is its ease of maintenance. While brush finishes 
                  may show more fingerprints than mirror-finished products, regular cleaning can help conceal these 
                  marks, leaving the material looking its best. The unidirectional texture of the brushed finish makes 
                  it easier to maintain than polished surfaces, as scratches and wear blend into the existing texture 
                  pattern rather than standing out prominently.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Stainless Steel Brushing for Metal Fabricators
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For metal fabricators, brushed stainless steel offers unique advantages that make it an essential 
                  finishing option. The process of creating a brushed finish can be integrated into production workflows, 
                  providing consistent results across large production runs. This consistency is crucial for maintaining 
                  quality standards and meeting customer expectations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The brushed finish finds extensive use in decorative fixtures, architectural trim, and automotive 
                  detailing. In these applications, the finish provides both aesthetic appeal and functional benefits. 
                  The unidirectional texture helps hide minor surface imperfections and wear, making it ideal for 
                  high-traffic areas where appearance maintenance is important.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  An important aspect of the brushing process is its ability to uncover defects in the base material. 
                  As the surface is worked, any inconsistencies, inclusions, or imperfections become more visible, 
                  allowing fabricators to identify and address quality issues before products reach customers. This 
                  quality control aspect makes brushing an important step in the manufacturing process, ensuring that 
                  only high-quality products are delivered.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Home Improvement Projects with Brushed Stainless Steel
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Brushed stainless steel has become increasingly popular in home improvement projects, offering 
                  homeowners a durable and attractive material for various applications. From kitchen appliances to 
                  bathroom fixtures, the brushed finish provides a modern aesthetic that complements contemporary home 
                  design trends.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The durability of brushed stainless steel makes it ideal for home applications where materials must 
                  withstand daily use and exposure to various environmental conditions. Unlike some finishes that degrade 
                  over time, brushed stainless steel maintains its appearance and functionality for many years, providing 
                  excellent long-term value for homeowners.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  One of the practical benefits for home use is the finish's ability to hide smudges and fingerprints. 
                  While brush finishes may show more fingerprints than mirror-finished products, the unidirectional 
                  texture helps distribute these marks more evenly, making them less noticeable. Regular cleaning with 
                  appropriate products can help maintain the finish's appearance, and wiping in one direction is 
                  essential for maintaining the brushed appearance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The ease of cleaning is another significant advantage for home applications. The non-porous surface of 
                  stainless steel, combined with the brushed texture, makes it easy to remove dirt, grease, and other 
                  contaminants. This ease of maintenance is particularly valuable in kitchen and bathroom applications 
                  where hygiene and cleanliness are important.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Tools of the Trade for Stainless Steel Brushing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Creating a brushed finish on stainless steel requires the right tools and techniques. The brushing 
                  process represents the final stage of production, where the surface texture is applied to achieve the 
                  desired appearance and performance characteristics. Understanding the tools available and their 
                  appropriate applications is essential for achieving consistent, high-quality results.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Different brushes are designed for specific tasks in the brushing process. For rust and paint removal, 
                  heavy-duty wire brushes provide the aggressive action needed to remove surface contaminants and 
                  prepare the material for finishing. These brushes are typically used in the initial stages of 
                  surface preparation, removing oxidation, scale, and other surface defects.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For cleaning mildew and grease, specialized brushes with appropriate bristle materials and 
                  configurations are used. These brushes must be compatible with cleaning solutions and capable of 
                  removing contaminants without damaging the underlying stainless steel surface. The selection of the 
                  appropriate brush depends on the specific contaminants present and the desired finish quality.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Creating a Brushed Finish on Stainless Steel
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Creating a brushed finish on stainless steel requires craftsmanship, attention to detail, and 
                  understanding of the material's properties. The process involves several steps, each critical to 
                  achieving the desired finish quality. Proper technique ensures consistent results and maintains the 
                  material's performance characteristics.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The brushing process typically begins with surface preparation. The material must be clean and free of 
                  contaminants, oils, and surface defects. This preparation ensures that the brushing process produces 
                  uniform results and that the finish adheres properly to the base material. Any surface imperfections 
                  should be addressed before brushing begins.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Abrasive brushes, wire brushes, or belt grinders are used to create the unidirectional texture 
                  characteristic of brushed finishes. The choice of tool depends on the material thickness, desired 
                  finish quality, and production requirements. Each tool produces slightly different results, and 
                  understanding these differences helps fabricators select the appropriate method for each application.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The brushing direction is critical for achieving a consistent finish. All brushing should be done in 
                  the same direction, creating parallel lines that define the brushed appearance. This unidirectional 
                  texture is essential for maintaining the finish's aesthetic appeal and for ensuring that maintenance 
                  and cleaning can be performed effectively. Proper technique and consistent application ensure that 
                  the finished product meets quality standards and customer expectations.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Brushed Metal Finish Paint and Alternative Methods
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While mechanical brushing is the traditional method for creating brushed finishes, alternative 
                  approaches using paint and coatings can achieve similar aesthetic results. These methods offer 
                  flexibility in application and can be used in situations where mechanical brushing is not practical 
                  or cost-effective.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Brushing as a finishing technique offers several advantages, including the ability to create consistent 
                  textures across large surface areas and the flexibility to adjust finish characteristics based on 
                  application requirements. When using paint or coating methods, surface preparation remains critical for 
                  achieving durable, long-lasting results.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The type of brush used and coating parameters significantly impact the final finish appearance. 
                  Different brush types create different texture patterns, and the coating application method determines 
                  how these patterns are transferred to the surface. Understanding the relationship between brush type, 
                  coating parameters, and final appearance is essential for achieving desired results.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Alternative methods can provide cost-effective solutions for achieving brushed finishes, particularly 
                  for large-scale applications or when working with materials that are difficult to brush mechanically. 
                  However, these methods may have different maintenance requirements and durability characteristics 
                  compared to mechanical brushing, making it important to select the appropriate method based on 
                  application requirements and performance expectations.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Brushed Stainless Steel vs. Other Metal Finishes
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Understanding how brushed stainless steel compares to other metal finishes helps fabricators and 
                  designers make informed decisions about material selection. Each finish type offers unique 
                  characteristics that make it suitable for specific applications, and comparing these characteristics 
                  ensures that the right finish is selected for each project.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Compared to hairline stainless steel, brushed finishes offer a more pronounced texture that helps 
                  hide surface imperfections and wear. Hairline finishes provide a finer texture that creates a more 
                  subtle appearance, while brushed finishes offer a more distinct visual character. The choice between 
                  these finishes often depends on aesthetic preferences and application requirements.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When compared to chrome and nickel alloys, brushed stainless steel offers superior durability and 
                  corrosion resistance. While chrome and nickel provide excellent appearance and corrosion resistance, 
                  they may require more maintenance and can be more susceptible to damage in harsh environments. 
                  Brushed stainless steel's inherent corrosion resistance and durability make it a preferred choice for 
                  applications where long-term performance is important.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The maintenance requirements of brushed stainless steel compare favorably to other finishes. While 
                  brush finishes may show more fingerprints than mirror-finished products, regular cleaning can help 
                  maintain appearance. The unidirectional texture makes it easier to maintain than polished surfaces, 
                  and the material's durability ensures that the finish maintains its appearance over time with proper 
                  care.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  In Conclusion: The Art of Brushed Stainless Steel
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Brushed stainless steel represents a perfect balance between aesthetic appeal and functional 
                  performance. The finish meets customer expectations for modern, sophisticated appearance while 
                  providing practical benefits that enhance product value and longevity. Understanding the art and 
                  science of creating brushed finishes enables fabricators to deliver products that exceed customer 
                  expectations.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The aesthetic and functional benefits of brushed stainless steel make it an ideal choice for a wide 
                  range of applications. From decorative fixtures to functional components, the finish provides the 
                  appearance and performance characteristics that modern applications demand. The material's versatility 
                  and durability ensure that brushed stainless steel will continue to be a preferred choice for 
                  fabricators and designers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Applications in architecture and home design showcase the versatility of brushed stainless steel. The 
                  finish complements various design styles, from industrial to contemporary, and provides the durability 
                  and maintenance characteristics required for long-term use. As design trends evolve and performance 
                  requirements become more demanding, brushed stainless steel continues to provide solutions that meet 
                  both aesthetic and functional needs. The art of brushed stainless steel lies in understanding these 
                  characteristics and applying them effectively to create products that are both beautiful and 
                  functional.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Sticky Quote Form */}
          <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg" id="quote-form">
              <h3 className="text-2xl font-bold mb-6">Get A Quote Now!</h3>
              <BrushedFinishQuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

