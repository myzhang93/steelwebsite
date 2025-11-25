"use client"

import { useState, useRef } from "react"

function FoodCateringQuoteForm() {
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
          Your Name
        </label>
        <input
          type="text"
          id="name"
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
          Email
        </label>
        <input
          type="email"
          id="email"
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

export default function FoodCateringContentSection() {
  const [isTocOpen, setIsTocOpen] = useState(false)

  const tableOfContents = [
    "The Ubiquity of Stainless Steel in Catering: A Material Refined by Fire",
    "Kitchen Equipment: The Invisible Spartan of Culinary Battles",
    "Tableware and Utensils: The Elegance of Service",
    "Catering Environment Decoration and Furniture",
    "Food Processing Equipment",
    "Stainless Steel Sheets' Advantages in the Catering World"
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
                    <li key={index} className="hover:text-blue-600 transition cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-lg shadow-md p-8 space-y-12">
              {/* Main Title */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Ubiquity of Stainless Steel in Catering: A Material Refined by Fire
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Stainless steel has become the cornerstone of the food and catering industry, serving as the material 
                  of choice for equipment, surfaces, and utensils that must meet the highest standards of hygiene, 
                  durability, and performance. From professional kitchens to fine dining establishments, stainless steel 
                  sheets provide the foundation for creating safe, efficient, and aesthetically pleasing food service 
                  environments. This comprehensive exploration examines the various applications of stainless steel in 
                  catering and the advantages that make it indispensable in this demanding industry.
                </p>
              </div>

              {/* Section 1: Kitchen Equipment */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kitchen Equipment: The Invisible Spartan of Culinary Battles
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Kitchen equipment represents the backbone of any food service operation, and stainless steel sheets form 
                  the foundation of this critical infrastructure. The material's unique properties make it ideal for 
                  equipment that must withstand constant use, high temperatures, and rigorous cleaning protocols while 
                  maintaining performance and appearance.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Cooking Equipment
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Stainless steel sheets are extensively used in cooking equipment, where they provide durability, 
                      heat resistance, and ease of maintenance. Frying pans, steam cabinets, griddles, and ovens all 
                      benefit from stainless steel's ability to conduct heat evenly while resisting corrosion and thermal 
                      shock. The material's non-reactive properties ensure that food flavors remain pure, while its 
                      smooth surface facilitates easy cleaning and prevents food from sticking.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Professional cooking equipment made from stainless steel sheets withstands the rigors of commercial 
                      kitchen operations, maintaining performance and appearance through years of heavy use. The material's 
                      resistance to warping and deformation under high temperatures ensures consistent cooking results, 
                      while its hygienic properties meet the strictest food safety standards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Storage Equipment
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Refrigerators, freezers, and storage cabinets constructed with stainless steel sheets provide 
                      optimal conditions for food preservation. The material's thermal properties help maintain consistent 
                      temperatures, while its non-porous surface prevents the accumulation of bacteria and odors. 
                      Stainless steel storage equipment ensures that food remains fresh and safe, meeting health and 
                      safety regulations while maintaining aesthetic appeal.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The durability of stainless steel storage equipment makes it ideal for commercial applications where 
                      reliability is paramount. The material's resistance to corrosion and wear ensures that storage 
                      systems maintain their functionality and appearance over many years of operation, providing excellent 
                      long-term value for food service establishments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Washing Equipment
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Dishwashers, sinks, and washing stations made from stainless steel sheets provide the foundation for 
                      maintaining hygiene standards in food service operations. The material's resistance to water, 
                      detergents, and high temperatures makes it ideal for washing equipment that must withstand constant 
                      exposure to cleaning agents and moisture. Stainless steel's non-porous surface prevents the 
                      accumulation of bacteria and facilitates thorough cleaning.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The smooth, seamless surfaces of stainless steel washing equipment reduce the risk of contamination 
                      and make cleaning more efficient. The material's ability to withstand harsh cleaning chemicals 
                      ensures that washing equipment maintains its appearance and functionality while meeting the highest 
                      hygiene standards required in food service environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Tableware and Utensils */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tableware and Utensils: The Elegance of Service
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Stainless steel tableware and utensils combine functionality with aesthetic appeal, creating dining 
                  experiences that are both practical and elegant. The material's properties make it ideal for items that 
                  come into direct contact with food, ensuring safety while maintaining visual appeal.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Cutlery and Utensils
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Knives, forks, spoons, and other cutlery made from stainless steel provide durability, hygiene, and 
                    aesthetic appeal. The material's resistance to corrosion ensures that cutlery maintains its appearance 
                    and functionality through years of use and washing. Stainless steel's non-reactive properties preserve 
                    food flavors while its smooth surface facilitates easy cleaning.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Trays, dishes, and cups constructed from stainless steel sheets offer the same benefits, combining 
                    durability with visual appeal. The material's ability to maintain temperature makes it ideal for 
                    serving hot and cold foods, while its hygienic properties ensure food safety. Stainless steel 
                    tableware creates a professional appearance that enhances the dining experience while meeting practical 
                    requirements.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The versatility of stainless steel allows for the creation of tableware in various designs and finishes, 
                    from traditional to contemporary styles. This flexibility enables food service establishments to 
                    choose tableware that complements their aesthetic while benefiting from stainless steel's practical 
                    advantages.
                  </p>
                </div>
              </div>

              {/* Section 3: Catering Environment Decoration and Furniture */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Catering Environment Decoration and Furniture
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Stainless steel sheets extend beyond functional equipment to create decorative elements and furniture that 
                  enhance the aesthetic appeal of catering environments. The material's versatility allows for the creation 
                  of design elements that are both beautiful and practical.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Decorative Elements
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Panels, separators, and other decorative elements made from stainless steel sheets create visual 
                      interest while maintaining functionality. The material's reflective properties can brighten spaces, 
                      while its ability to be finished in various textures allows for unique design expressions. Stainless 
                      steel decorative elements contribute to creating modern, sophisticated catering environments that 
                      appeal to contemporary diners.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The durability of stainless steel decorative elements ensures that they maintain their appearance 
                      over time, reducing the need for replacement and maintenance. The material's resistance to wear and 
                      environmental factors makes it ideal for high-traffic areas where appearance is important.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Furniture
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Dining tables, chairs, and storage cabinets constructed with stainless steel sheets combine 
                      durability with aesthetic appeal. The material's strength allows for the creation of furniture that 
                      withstands heavy use while maintaining its appearance. Stainless steel furniture creates a modern, 
                      professional look that enhances the overall dining experience.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The hygienic properties of stainless steel make it ideal for furniture in food service environments. 
                      The material's non-porous surface prevents the accumulation of bacteria and facilitates easy 
                      cleaning, ensuring that furniture maintains hygiene standards while providing comfort and 
                      functionality for diners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: Food Processing Equipment */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Food Processing Equipment
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Stainless steel sheets form the foundation of food processing equipment that must meet strict hygiene and 
                  performance standards. The material's properties make it ideal for equipment used in food preparation, 
                  ensuring safety and efficiency in commercial kitchen operations.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Cutting Equipment
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Slicers, shredders, and other cutting equipment made from stainless steel sheets provide durability 
                      and hygiene in food preparation. The material's resistance to corrosion and wear ensures that cutting 
                      equipment maintains sharp edges and performance over time. Stainless steel's non-reactive properties 
                      preserve food quality while its smooth surface facilitates easy cleaning.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The precision and consistency of stainless steel cutting equipment contribute to efficient food 
                      preparation operations. The material's ability to maintain dimensional stability ensures accurate 
                      cutting results, while its hygienic properties meet food safety requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Mixing and Molding Equipment
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Mixers, pasta machines, and other mixing and molding equipment constructed with stainless steel 
                      sheets provide the durability and performance required in commercial food preparation. The 
                      material's resistance to food acids and cleaning agents ensures long-term performance, while its 
                      smooth surface prevents food from sticking and facilitates thorough cleaning.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Stainless steel mixing and molding equipment maintains its performance and appearance through years 
                      of heavy use. The material's strength and durability ensure that equipment withstands the mechanical 
                      stresses of mixing and molding operations while maintaining precision and consistency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Advantages */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Stainless Steel Sheets' Advantages in the Catering World
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The advantages of stainless steel sheets in the catering industry are numerous and compelling. These 
                  benefits directly impact operations, hygiene standards, and long-term value, making stainless steel the 
                  material of choice for food service establishments.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Corrosion Resistance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stainless steel's exceptional corrosion resistance makes it ideal for food service environments where 
                      equipment is constantly exposed to moisture, food acids, and cleaning agents. The material's 
                      chromium content forms a protective oxide layer that prevents rust and corrosion, ensuring that 
                      equipment maintains its appearance and functionality over many years. This resistance to corrosion 
                      reduces maintenance requirements and extends equipment lifespan, providing excellent long-term value.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Ease of Cleaning
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The non-porous surface of stainless steel sheets facilitates easy and thorough cleaning, essential 
                      for maintaining hygiene standards in food service operations. The material's smooth surface 
                      prevents the accumulation of bacteria and food particles, while its resistance to staining ensures 
                      that surfaces maintain their appearance. This ease of cleaning reduces labor costs and ensures 
                      compliance with health and safety regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Aesthetics
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stainless steel's clean, modern appearance enhances the aesthetic appeal of catering environments. 
                      The material's reflective properties can brighten spaces, while its ability to be finished in 
                      various textures allows for unique design expressions. Stainless steel creates a professional, 
                      sophisticated look that appeals to contemporary diners while maintaining practical functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Safety
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stainless steel's non-reactive properties ensure that it doesn't leach harmful substances into food, 
                      maintaining food safety and preserving flavors. The material's resistance to fire and heat makes it 
                      safe for use near cooking equipment, while its smooth surface reduces the risk of injury from sharp 
                      edges or rough surfaces. These safety properties make stainless steel essential for food service 
                      environments where food safety is paramount.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Durability
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The exceptional durability of stainless steel sheets ensures that equipment and surfaces maintain 
                      their performance and appearance through years of heavy use. The material's resistance to wear, 
                      impact, and environmental degradation reduces the need for replacement and maintenance, providing 
                      excellent long-term value. This durability is particularly important in commercial food service 
                      operations where equipment must withstand constant use and rigorous cleaning protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Sticky Quote Form */}
          <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg" id="quote-form">
              <h3 className="text-2xl font-bold mb-6">Get A Quote Now!</h3>
              <FoodCateringQuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

