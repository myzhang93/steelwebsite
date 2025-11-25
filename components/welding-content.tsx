"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/stainless-steel-welding-sparks.jpg",
  "/stainless-steel-pipes-welding.jpg",
  "/molten-metal-welding-industrial-process.jpg"
]

export default function WeldingContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("solutions1")

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const tabContent = {
    solutions1: "The applications for stainless steel welding are as wide and varied as the industries they serve. From architectural structures that require aesthetic appeal and structural integrity to industrial equipment that demands corrosion resistance and durability, stainless steel welding plays a crucial role. In the food and beverage industry, welded stainless steel components ensure hygiene and easy cleanability. In the pharmaceutical sector, precision welding maintains sterile environments. From medical devices that require biocompatibility to aerospace components that demand extreme precision, Shanxi Steel's expertise in crafting custom solutions ensures that every welded component meets the highest standards of quality and performance.",
    solutions2: "Our advanced welding solutions incorporate state-of-the-art technology and proven methodologies to deliver exceptional results. We utilize automated welding systems for consistent, high-quality welds in production environments, while maintaining the flexibility to provide manual welding for custom applications. Our team continuously invests in training and equipment upgrades to stay at the forefront of welding technology, ensuring that we can meet the evolving needs of our clients across various industries.",
    solutions3: "Quality assurance is integral to our welding solutions. Every weld undergoes comprehensive inspection and testing to ensure it meets or exceeds industry standards. We maintain detailed documentation for traceability and quality control, providing our clients with confidence in the reliability and performance of our welded components. Our commitment to excellence extends beyond the welding process itself, encompassing material selection, preparation, and post-weld treatments to ensure optimal results."
  }

  return (
    <div className="space-y-12">
      {/* Image Gallery */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt="Welding Process"
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

      {/* Welding Techniques */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Welding Techniques</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Stainless steel has become one of the most prevalent materials in modern manufacturing and construction, 
          valued for its exceptional corrosion resistance, durability, and aesthetic appeal. The success of any 
          stainless steel welding project depends heavily on the proper selection and execution of welding techniques. 
          Different applications require different approaches, and understanding the nuances of each technique is 
          essential for achieving optimal results.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Process selection is critical in stainless steel welding. The choice between SMAW (Shielded Metal Arc Welding), 
          MIG (Metal Inert Gas) welding, TIG (Tungsten Inert Gas) welding, and other processes depends on factors such as 
          material thickness, joint configuration, application requirements, and production volume. Each process offers 
          distinct advantages and limitations, and selecting the appropriate method ensures both quality and efficiency.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Preparation is fundamental to successful welding. The base metal must be thoroughly cleaned to remove any 
          contaminants, oils, or surface oxides that could compromise weld quality. Proper joint preparation, including 
          beveling and fit-up, ensures optimal penetration and fusion. Temperature monitoring throughout the welding 
          process is essential, as excessive heat can degrade the material's corrosion resistance and mechanical 
          properties.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Techniques such as backstepping and staggering are employed to control distortion, which is particularly 
          important when working with thin materials or large structures. These techniques help manage heat input and 
          minimize the thermal stresses that can cause warping or dimensional changes. Experienced welders understand 
          how to apply these techniques effectively, balancing the need for quality welds with the requirement to 
          maintain dimensional accuracy.
        </p>
      </section>

      {/* Welding Equipment */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Welding Equipment</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The quality of stainless steel welding is directly influenced by the equipment used. Modern welding operations 
          require sophisticated machinery, including spray arc welders and automatic seam welders that provide precise 
          control over welding parameters. Plasma cutters enable accurate material preparation, while welding guns must 
          be properly maintained and calibrated to ensure consistent performance. The selection of appropriate equipment 
          for each application is crucial for achieving optimal results.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Workspace cleanliness cannot be overstated in stainless steel welding. Contamination from other materials, 
          particularly carbon steel, can lead to corrosion and weld defects. Dedicated work areas, proper material 
          handling procedures, and regular cleaning protocols are essential for maintaining the integrity of stainless 
          steel components throughout the welding process.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Filler material selection is another critical aspect of welding equipment and consumables. The filler metal 
          must be compatible with the base material and appropriate for the intended application. MIG welding offers 
          significant advantages in stainless steel applications, including higher deposition rates, improved productivity, 
          and better control over the welding process. Temperature tracking devices monitor heat input during welding, 
          ensuring that the material remains within acceptable temperature ranges to preserve its properties and prevent 
          distortion.
        </p>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("solutions1")}
              className={`px-6 py-3 font-semibold transition ${
                activeTab === "solutions1"
                  ? "bg-blue-600 text-white border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              SOLUTIONS 1
            </button>
            <button
              onClick={() => setActiveTab("solutions2")}
              className={`px-6 py-3 font-semibold transition ${
                activeTab === "solutions2"
                  ? "bg-blue-600 text-white border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              SOLUTIONS 2
            </button>
            <button
              onClick={() => setActiveTab("solutions3")}
              className={`px-6 py-3 font-semibold transition ${
                activeTab === "solutions3"
                  ? "bg-blue-600 text-white border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              SOLUTIONS 3
            </button>
          </div>
        </div>
        <div className="text-gray-600 leading-relaxed">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>
      </section>

      {/* Welding Procedures */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Welding Procedures</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Stainless steel's unique properties make it suitable for a wide range of applications, from architectural 
          features to critical industrial components. However, these same properties require careful attention to 
          welding procedures to ensure that the material's characteristics are preserved. Proper procedures encompass 
          everything from initial material preparation to final inspection and post-weld treatment.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Heat management during welding is a critical consideration. Stainless steel has lower thermal conductivity 
          than carbon steel, which means heat tends to concentrate in the weld area. This requires careful control of 
          welding parameters, including current, voltage, travel speed, and interpass temperature. Excessive heat input 
          can lead to sensitization, where chromium carbides form at grain boundaries, reducing corrosion resistance. 
          Proper heat management ensures that the material maintains its protective oxide layer and corrosion resistance.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The use of specific wire brushes is important for cleaning between passes and preparing surfaces. Stainless 
          steel brushes must be used exclusively for stainless steel work to prevent contamination. These brushes help 
          remove oxide layers and ensure clean surfaces for subsequent weld passes, contributing to overall weld quality 
          and appearance.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Prolonged heat exposure can have detrimental effects on stainless steel, potentially causing sensitization, 
          distortion, or changes in material properties. Understanding how to manage heat input and interpass temperatures 
          is essential for maintaining the material's corrosion resistance and mechanical properties throughout the welding 
          process.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The importance of experienced professionals cannot be overstated. Welding stainless steel requires not only 
          technical skill but also deep understanding of the material's behavior and the specific requirements of each 
          application. Experienced welders can recognize potential issues before they become problems, adjust procedures 
          as needed, and ensure that every weld meets the highest standards of quality and performance.
        </p>
      </section>

      {/* Safety */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welding operations involve inherent risks that must be carefully managed through comprehensive safety protocols. 
          The intense heat, ultraviolet radiation, and potential for fire or explosion require strict adherence to safety 
          procedures. Understanding and mitigating these risks is essential for protecting both personnel and equipment 
          during welding operations.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Protective equipment is mandatory for all welding operations. This includes flame-resistant aprons to protect 
          against sparks and heat, heavy-duty gloves to prevent burns, face masks with appropriate filters to protect 
          against fumes and radiation, and eye protection with the correct shade lenses for the welding process being 
          used. Each piece of protective equipment serves a specific purpose and must be properly maintained and used 
          correctly.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Proper preparation extends beyond the material to include workspace safety. The work area must be free of 
          flammable materials, well-ventilated to remove fumes, and equipped with fire suppression equipment. Filler 
          metal selection is important not only for weld quality but also for safety, as certain filler materials may 
          produce more hazardous fumes or require specific handling procedures.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Temperature monitoring is important for both quality and safety. Overheating can create hazardous conditions, 
          and monitoring helps prevent equipment damage and potential accidents. Precautions for handling flammable 
          materials and gases are critical, including proper storage, handling procedures, and emergency response 
          protocols. All personnel must be trained in these safety procedures and understand the importance of 
          compliance for their own protection and that of their colleagues.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Safety in welding is not optional—it is fundamental to successful operations. By implementing comprehensive 
          safety protocols, providing proper training, and maintaining vigilance, we ensure that welding operations 
          are conducted safely and efficiently, protecting both people and property while delivering high-quality results.
        </p>
      </section>
    </div>
  )
}


