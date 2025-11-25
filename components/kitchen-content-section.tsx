"use client"

import { useState, useRef } from "react"

function KitchenQuoteForm() {
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
          Your name
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
            {selectedFile ? selectedFile.name : "未选择任何文件"}
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

export default function KitchenContentSection() {
  const tableOfContents = [
    "Kitchen Essentials: The Versatile Stainless Steel Sheets",
    "Stainless Steel in the Kitchen: More than Meets the Eye",
    "Stainless Steel Countertops: A Market Favorite",
    "Kitchen Cabinets with a Difference",
    "Stainless Steel Equipment: The Professional Edge",
    "Stainless Steel Tableware and Kitchenware",
    "The Stainless Advantage",
    "Durability that Stands the Test of Time",
    "Safety First with Stainless Steel",
    "Aesthetic Modernism in Your Home",
    "The Cleanliness Conundrum Solved",
    "Choosing and Maintaining Your Stainless Steel Kitchen Equipment",
    "Selecting Your Stainless Steel",
    "Avoiding the Pitfalls",
    "Routine Maintenance is Key",
    "In Conclusion: The Bright Future of Stainless in Kitchens"
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Table of Contents */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {tableOfContents.map((item, index) => (
                  <li key={index} className="hover:text-blue-600 transition cursor-pointer">
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-lg shadow-md p-8 space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kitchen Essentials: The Versatile Stainless Steel Sheets
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  The modern kitchen represents more than just a space for food preparation—it's the heart of the home, 
                  a place where functionality meets aesthetics, and where durability is as important as design. In this 
                  comprehensive exploration, we delve into the world of stainless steel sheets and their transformative 
                  role in kitchen environments. From professional culinary spaces to residential kitchens, stainless steel 
                  has become the material of choice for those seeking the perfect balance of performance, hygiene, and 
                  timeless appeal.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Stainless Steel in the Kitchen: More than Meets the Eye
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Stainless steel's presence in kitchens extends far beyond its visible applications. While we immediately 
                  recognize it in countertops, sinks, and appliances, its influence permeates every aspect of kitchen 
                  design and functionality. The material's unique properties make it indispensable for both professional 
                  chefs and home cooks who demand the highest standards of performance and hygiene.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The versatility of stainless steel sheets allows for seamless integration into various kitchen components. 
                  Whether used as a surface material, structural element, or decorative feature, stainless steel adapts to 
                  diverse design requirements while maintaining its core benefits. This adaptability has made it the 
                  foundation of modern kitchen design, enabling architects and designers to create spaces that are both 
                  beautiful and functional.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Stainless Steel Countertops: A Market Favorite
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Stainless steel countertops have emerged as a market favorite, particularly in professional kitchens and 
                  modern residential designs. Their popularity stems from a combination of practical benefits and aesthetic 
                  appeal that few other materials can match. The seamless, non-porous surface provides an ideal workspace 
                  for food preparation, while the material's natural resistance to heat, stains, and bacteria makes it 
                  perfect for culinary environments.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The professional kitchen aesthetic that stainless steel countertops provide has influenced residential 
                  design trends, with homeowners increasingly choosing this material for its durability and low maintenance 
                  requirements. The material's ability to withstand heavy use, resist scratches, and maintain its appearance 
                  over time makes it an investment that pays dividends in both functionality and longevity.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Custom fabrication of stainless steel countertops allows for perfect integration with kitchen layouts, 
                  creating seamless surfaces that accommodate sinks, cooktops, and other fixtures. This customization 
                  capability ensures that every kitchen can benefit from stainless steel's advantages, regardless of size 
                  or configuration.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kitchen Cabinets with a Difference
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kitchen cabinets constructed with stainless steel sheets offer a distinctive alternative to traditional 
                  materials. These cabinets combine the durability and hygiene benefits of stainless steel with modern design 
                  sensibilities, creating storage solutions that are both functional and visually striking. The material's 
                  resistance to moisture, heat, and wear makes it ideal for the demanding environment of a kitchen.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Stainless steel cabinets provide excellent protection for stored items, maintaining consistent 
                  temperatures and preventing moisture damage. The non-porous surface resists bacteria and odors, ensuring 
                  that food stored in these cabinets remains fresh and safe. Additionally, the material's reflective 
                  properties can help brighten kitchen spaces, creating a more open and inviting atmosphere.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The sleek, modern appearance of stainless steel cabinets complements various design styles, from 
                  industrial to minimalist. Their ability to integrate seamlessly with other kitchen elements creates a 
                  cohesive design that enhances the overall aesthetic of the space.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Stainless Steel Equipment: The Professional Edge
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Professional kitchens rely on stainless steel equipment for its unmatched performance and durability. From 
                  commercial ranges and ovens to prep tables and storage systems, stainless steel provides the foundation 
                  for efficient kitchen operations. The material's ability to withstand high temperatures, resist 
                  corrosion, and maintain hygiene standards makes it essential for professional culinary environments.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The professional-grade quality of stainless steel equipment has made it increasingly popular in 
                  residential kitchens as well. Homeowners seeking restaurant-quality performance and durability are 
                  turning to stainless steel appliances and fixtures that offer the same reliability found in commercial 
                  kitchens. This trend reflects a growing appreciation for materials that combine form and function.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Stainless steel's thermal conductivity properties make it ideal for cooking equipment, ensuring even 
                  heat distribution and consistent cooking results. The material's resistance to thermal shock allows it 
                  to withstand rapid temperature changes without damage, extending the lifespan of kitchen equipment and 
                  reducing replacement costs.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Stainless Steel Tableware and Kitchenware
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The use of stainless steel in tableware and kitchenware extends the material's benefits to every aspect 
                  of food preparation and service. From pots and pans to utensils and serving dishes, stainless steel 
                  provides durability, hygiene, and performance that enhance the cooking and dining experience. The 
                  material's non-reactive properties ensure that food flavors remain pure, while its ease of cleaning 
                  maintains high hygiene standards.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Modern manufacturing techniques have enabled the creation of lightweight yet durable stainless steel 
                  kitchenware that combines performance with convenience. The material's ability to conduct heat evenly 
                  makes it ideal for cookware, while its resistance to staining and corrosion ensures that tableware 
                  maintains its appearance over years of use.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The aesthetic appeal of stainless steel tableware complements modern kitchen designs, creating a 
                  cohesive look that extends from preparation to presentation. The material's timeless elegance ensures 
                  that kitchenware remains stylish and functional for generations.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Stainless Advantage
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The advantages of stainless steel in kitchen applications are numerous and compelling. Beyond its 
                  obvious durability and aesthetic appeal, stainless steel offers benefits that directly impact daily 
                  kitchen operations and long-term value. Understanding these advantages helps homeowners and professionals 
                  make informed decisions about kitchen materials and equipment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  One of the most significant advantages is stainless steel's resistance to bacterial growth. The 
                  non-porous surface prevents bacteria from establishing colonies, making it easier to maintain hygiene 
                  standards. This property is particularly important in food preparation areas where cleanliness is 
                  paramount. The material's ability to be sanitized easily and thoroughly ensures that kitchens meet 
                  health and safety requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Stainless steel's environmental benefits also contribute to its appeal. The material is fully 
                  recyclable, reducing the environmental impact of kitchen renovations and equipment replacement. Its 
                  long lifespan means fewer resources are consumed over time, making it a sustainable choice for 
                  environmentally conscious consumers.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Durability that Stands the Test of Time
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The durability of stainless steel is legendary, with kitchen components made from this material 
                  often outlasting the buildings they inhabit. This longevity stems from the material's resistance to 
                  corrosion, wear, and environmental degradation. Unlike other materials that require frequent replacement 
                  or extensive maintenance, stainless steel maintains its integrity and appearance for decades.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The material's ability to withstand heavy use makes it ideal for high-traffic kitchen environments. 
                  Professional kitchens subject materials to extreme conditions, including high temperatures, moisture, 
                  chemical exposure, and physical impact. Stainless steel's resilience under these conditions demonstrates 
                  its superior durability compared to alternative materials.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For residential kitchens, this durability translates to long-term value. Homeowners can invest in 
                  stainless steel components with confidence, knowing that they will provide reliable service for many 
                  years. The reduced need for replacement and maintenance offsets the initial investment, making 
                  stainless steel a cost-effective choice over the long term.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Safety First with Stainless Steel
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Safety is a paramount concern in kitchen environments, and stainless steel contributes significantly to 
                  creating safe spaces for food preparation and cooking. The material's non-reactive properties ensure 
                  that it doesn't leach harmful substances into food, maintaining food safety and preserving flavors. 
                  This inert quality makes stainless steel ideal for direct food contact applications.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The material's resistance to fire and heat makes it a safe choice for areas near cooking equipment. 
                  Unlike some materials that can melt, burn, or release toxic fumes when exposed to high temperatures, 
                  stainless steel maintains its structural integrity and safety properties even under extreme heat. This 
                  fire resistance is particularly important in professional kitchens where safety regulations are strict.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Stainless steel's smooth, non-porous surface also contributes to safety by preventing the 
                  accumulation of bacteria and other pathogens. The ease of cleaning ensures that surfaces can be 
                  thoroughly sanitized, reducing the risk of foodborne illness. These safety properties make stainless 
                  steel an essential material for kitchens where food safety is a priority.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Aesthetic Modernism in Your Home
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The aesthetic appeal of stainless steel has made it a defining element of modern kitchen design. The 
                  material's clean lines, reflective surface, and industrial aesthetic create spaces that feel contemporary 
                  and sophisticated. This modernism extends beyond mere appearance, reflecting a design philosophy that 
                  values simplicity, functionality, and timeless elegance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Stainless steel's versatility in design allows it to complement various styles, from minimalist to 
                  industrial to contemporary. The material can be finished in different textures—from mirror-polished to 
                  brushed—allowing designers to create unique visual effects. This flexibility ensures that stainless steel 
                  can be integrated into kitchens with diverse aesthetic requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The material's ability to reflect light helps brighten kitchen spaces, creating a more open and 
                  inviting atmosphere. This property is particularly valuable in smaller kitchens or spaces with limited 
                  natural light. The reflective quality also helps maintain the visual cleanliness of the space, as 
                  surfaces appear bright and well-maintained.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Cleanliness Conundrum Solved
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Maintaining cleanliness in kitchen environments presents ongoing challenges, but stainless steel 
                  provides solutions that simplify this task. The material's non-porous surface prevents the absorption 
                  of liquids, odors, and bacteria, making it easier to keep clean and sanitized. Unlike porous materials 
                  that can trap dirt and bacteria, stainless steel surfaces can be thoroughly cleaned with simple 
                  cleaning agents.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The ease of cleaning stainless steel reduces the time and effort required for kitchen maintenance. 
                  Regular cleaning with appropriate products keeps surfaces looking new and maintains hygiene standards. 
                  The material's resistance to staining means that spills and splatters don't permanently mar the 
                  surface, preserving the kitchen's appearance over time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Professional kitchens rely on stainless steel's cleanability to meet health and safety regulations. 
                  The material's ability to be sanitized effectively ensures compliance with food safety standards, 
                  making it essential for commercial kitchen operations. This same benefit extends to residential kitchens, 
                  where maintaining cleanliness contributes to a healthy home environment.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Choosing and Maintaining Your Stainless Steel Kitchen Equipment
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selecting the right stainless steel products for your kitchen requires understanding the material's 
                  grades, finishes, and applications. Different grades of stainless steel offer varying levels of corrosion 
                  resistance and durability, making it important to choose products appropriate for specific uses. 
                  Understanding these distinctions ensures that kitchen investments provide optimal performance and value.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Proper maintenance extends the life and appearance of stainless steel kitchen components. While the 
                  material is inherently durable, following recommended cleaning and care procedures ensures that surfaces 
                  maintain their luster and functionality. Regular maintenance prevents the accumulation of stains and 
                  preserves the material's aesthetic appeal.
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Selecting Your Stainless Steel
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When selecting stainless steel for kitchen applications, several factors should be considered. The grade 
                  of stainless steel determines its corrosion resistance and durability, with higher grades offering 
                  superior performance in demanding environments. Understanding the specific requirements of your kitchen 
                  application helps guide the selection process.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The finish of stainless steel also plays an important role in both appearance and maintenance. Different 
                  finishes offer varying levels of reflectivity, texture, and fingerprint resistance. Choosing the 
                  appropriate finish for each application ensures that stainless steel components meet both aesthetic and 
                  functional requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Working with experienced suppliers and fabricators ensures that stainless steel products are properly 
                  specified and installed. Professional guidance helps avoid common pitfalls and ensures that kitchen 
                  components provide optimal performance and longevity.
                </p>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Avoiding the Pitfalls
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While stainless steel offers numerous advantages, understanding potential challenges helps ensure 
                  successful kitchen applications. Common pitfalls include improper grade selection, inadequate surface 
                  preparation, and incorrect installation techniques. Awareness of these issues enables proactive 
                  prevention and ensures optimal results.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  One common mistake is selecting stainless steel grades that are insufficient for the intended 
                  application. Lower grades may be more economical initially but can fail prematurely in demanding 
                  environments. Investing in appropriate grades ensures long-term performance and reduces the need for 
                  replacement or extensive maintenance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Proper installation is also critical for stainless steel kitchen components. Inadequate support, 
                  improper fastening, or incorrect fabrication can compromise performance and durability. Working with 
                  experienced professionals ensures that installation meets industry standards and provides optimal results.
                </p>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Routine Maintenance is Key
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Regular maintenance is essential for preserving the appearance and performance of stainless steel 
                  kitchen components. While the material is inherently durable, proper care extends its lifespan and 
                  maintains its aesthetic appeal. Establishing a maintenance routine ensures that kitchen surfaces remain 
                  clean, hygienic, and attractive.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Daily cleaning with appropriate products removes surface contaminants and prevents the accumulation of 
                  stains. Following the grain of brushed finishes and using non-abrasive cleaners preserves the material's 
                  surface texture. Regular deep cleaning addresses accumulated grime and maintains hygiene standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Periodic inspection and maintenance identify potential issues before they become problems. Addressing 
                  minor scratches, dents, or surface damage promptly prevents more extensive deterioration. This proactive 
                  approach ensures that stainless steel kitchen components provide reliable service for many years.
                </p>
              </div>

              {/* Section 16 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  In Conclusion: The Bright Future of Stainless in Kitchens
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The future of stainless steel in kitchen applications is bright, with continued innovation expanding its 
                  capabilities and applications. As manufacturing techniques advance and design trends evolve, stainless 
                  steel remains at the forefront of kitchen material choices. Its combination of durability, hygiene, 
                  and aesthetic appeal ensures its continued relevance in both professional and residential kitchens.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Emerging trends in kitchen design increasingly favor materials that combine sustainability with 
                  performance, and stainless steel excels in both areas. The material's recyclability and long lifespan 
                  align with environmental concerns, while its performance characteristics meet the demands of modern 
                  kitchen operations. This alignment positions stainless steel as a material of choice for the future.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As consumers become more aware of the benefits of stainless steel, its adoption in kitchen applications 
                  continues to grow. The material's proven track record, combined with ongoing innovation, ensures that 
                  stainless steel will remain an essential element of kitchen design for generations to come. Whether in 
                  professional culinary spaces or residential kitchens, stainless steel provides the foundation for 
                  efficient, hygienic, and beautiful environments that enhance the cooking and dining experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Sticky Quote Form */}
          <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg" id="quote-form">
              <h3 className="text-2xl font-bold mb-6">Get A Quote Now!</h3>
              <KitchenQuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


