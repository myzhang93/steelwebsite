"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/stainless-steel-welding-sparks.jpg",
  "/industrial-surface-treatment-facility.jpg",
  "/professional-stainless-steel-finishing.jpg"
]

export default function FinishingContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-12">
      {/* Image Gallery */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt="Finishing Process"
          fill
          className="object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Polishing Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Polishing</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Polishing is one of the most common finishing techniques for stainless steel, providing a smooth, reflective 
          surface that enhances both aesthetics and functionality. The process involves using various abrasives and 
          techniques to remove surface imperfections and create the desired finish. Sandblasting is often used as a 
          preliminary step to prepare the surface, followed by manual or power cutting tools to achieve the final polish.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Different polish finishes offer varying levels of reflectivity and texture. The #8 finish, also known as 
          mirror finish, provides the highest level of reflectivity and is achieved through extensive polishing with 
          progressively finer abrasives. The #4 finish offers a brushed appearance with visible directional lines, 
          while the 2B finish provides a smooth, bright surface that is standard for many applications. Each finish 
          type serves different purposes, from decorative applications requiring high reflectivity to functional 
          components where surface texture affects performance.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The choice of polishing technique depends on the material grade, desired finish, and application requirements. 
          Our experienced technicians use state-of-the-art equipment and proven methodologies to ensure consistent, 
          high-quality results that meet your specifications and enhance the performance and appearance of your 
          stainless steel components.
        </p>
      </section>

      {/* Etching Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Etching</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Etching is a versatile finishing technique used to create decorative and textural effects on stainless steel 
          surfaces. This process involves selectively removing material from specific areas to create patterns, designs, 
          or textures. Chemical etching uses acid solutions to dissolve the metal in controlled patterns, while ground 
          coating techniques protect certain areas during the etching process.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The etching process can be combined with other finishing techniques to achieve unique visual effects. For 
          example, etching can be applied to 2B finish surfaces to create contrast, or combined with #4 finish to 
          produce intricate patterns. The depth and detail of etched designs can be precisely controlled, making this 
          technique ideal for logos, decorative elements, and functional textures that enhance grip or reduce glare.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our etching capabilities include both chemical and electrochemical methods, allowing us to create everything 
          from subtle textures to deep, detailed patterns. We work closely with clients to develop etching designs that 
          complement their overall aesthetic while maintaining the material's corrosion resistance and structural integrity.
        </p>
      </section>

      {/* Texturing Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Texturing</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Texturing involves creating specific surface patterns and textures on stainless steel through mechanical or 
          chemical treatments. This finishing technique can enhance both the visual appeal and functional properties of 
          stainless steel components. Mechanical texturing uses tools and abrasives to create patterns, while chemical 
          treatments can produce more complex textures.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Brushed finishes are a popular form of texturing, creating a distinctive directional pattern that reduces 
          the visibility of fingerprints and scratches. These finishes can range from coarse to fine, depending on the 
          application. Different finish types like 2B, #7, #8, and #6 offer various levels of texture and reflectivity, 
          each suited to different aesthetic and functional requirements.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Texturing can also be used to color stainless steel, creating unique visual effects through controlled oxidation 
          or specialized coating processes. Our texturing capabilities allow us to create custom surface patterns that 
          enhance both the appearance and performance of your stainless steel components, whether for decorative purposes 
          or functional applications requiring specific surface characteristics.
        </p>
      </section>

      {/* Painting Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Painting</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Painting and coating solutions provide additional protection and aesthetic options for stainless steel components. 
          Various coating types are available, including chromium, enamel, epoxy, and polyurethane, each offering 
          different properties and applications. These coatings can serve both functional purposes, such as enhanced 
          corrosion resistance and sanitation, and aesthetic goals, creating custom colors and finishes.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The painting process begins with proper surface preparation, which is critical for coating adhesion and longevity. 
          Surface vulnerabilities must be addressed, and processes like phosphating and hydroblasting are used to prepare 
          the substrate. The choice of coating depends on the application environment, exposure conditions, and desired 
          performance characteristics.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our painting and coating services include comprehensive surface preparation, application of high-quality coatings, 
          and quality assurance testing to ensure durability and performance. We work with clients to select the most 
          appropriate coating system for their specific requirements, considering factors such as chemical resistance, 
          temperature tolerance, and aesthetic preferences.
        </p>
      </section>

      {/* Electroplating Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Electroplating</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Electroplating involves coating objects with a thin metal layer to enhance strength, lifespan, and conductivity. 
          This electrochemical process deposits metal ions onto the stainless steel surface, creating a uniform, 
          adherent coating. Electroplating can improve various properties, including corrosion resistance, electrical 
          conductivity, wear resistance, and aesthetic appearance.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The electroplating process requires careful control of process parameters, including current density, solution 
          composition, and temperature. Surface preparation is crucial, and techniques like bead blasting may be used to 
          prepare the substrate. The resulting surface finishes are classified based on their appearance, thickness, and 
          properties, ensuring they meet specific application requirements.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our electroplating capabilities include various metal coatings, each selected based on the desired properties and 
          application requirements. We maintain strict quality control throughout the process, ensuring consistent coating 
          thickness, adhesion, and performance. Whether you need enhanced corrosion resistance, improved conductivity, or 
          specific aesthetic properties, our electroplating services can provide the solution.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Start Your Custom Finish Project Today</h2>
        <p className="text-lg leading-relaxed mb-6">
          Ready to elevate your stainless steel project with custom finishing? Contact Shanxi Steel today to discuss your 
          requirements and discover how our comprehensive finishing services can transform your stainless steel ambitions 
          into reality. Our team of experts is ready to guide you through the process and deliver results that exceed 
          your expectations.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  )
}



