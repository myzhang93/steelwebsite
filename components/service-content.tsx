"use client"

import { useState } from "react"
import Image from "next/image"

interface ServiceContentProps {
  serviceType: string
}

export default function ServiceContent({ serviceType }: ServiceContentProps) {
  const [activeTab, setActiveTab] = useState("quality")

  const tabs = [
    { id: "quality", label: "QUALITY" },
    { id: "demands", label: "DEMANDS" },
    { id: "sustainability", label: "SUSTAINABILITY" }
  ]

  const tabContent = {
    quality: "At Shanxi Steel, quality is not just a standard—it's our foundation. Every custom cut stainless steel sheet undergoes stringent quality checks, ensuring dimensional accuracy, surface finish, and material integrity. Our quality assurance protocols are designed to meet and exceed international standards, giving you confidence in every component we deliver.",
    demands: "We understand that every project has unique demands and deadlines. Our flexible production capabilities allow us to accommodate both small-scale custom orders and large-volume production runs. With state-of-the-art equipment and experienced technicians, we can meet your most challenging requirements while maintaining our commitment to excellence.",
    sustainability: "Shanxi Steel is committed to sustainable manufacturing practices. Our cutting processes are optimized to minimize waste, and we prioritize the use of recycled materials where possible. We believe that exceptional quality and environmental responsibility go hand in hand, ensuring a better future for generations to come."
  }

  return (
    <div className="space-y-8">
      {/* Image */}
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image
          src="/stainless-steel-sheet.png"
          alt="Custom Cut Stainless Steel"
          fill
          className="object-cover"
        />
      </div>

      {/* Our Expertise */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise in Stainless Steel</h2>
        <p className="text-gray-600 leading-relaxed">
          With years of experience in the stainless steel industry, Shanxi Steel has established itself as a 
          trusted partner for businesses requiring precision-cut stainless steel components. Our team of skilled 
          professionals combines traditional craftsmanship with modern technology to deliver exceptional results 
          that meet the most demanding specifications.
        </p>
      </section>

      {/* The Custom Cutting Process */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Custom Cutting Process</h2>
        <p className="text-gray-600 leading-relaxed">
          Our custom cutting process begins with understanding your unique requirements. From initial consultation 
          to final delivery, we work closely with you to transform your vision into tangible, precision-engineered 
          components. Every step is carefully planned and executed to ensure optimal results that align perfectly 
          with your project goals.
        </p>
      </section>

      {/* Cutting-Edge Technology */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h2>
        <p className="text-gray-600 leading-relaxed">
          We utilize state-of-the-art cutting technology, including high-powered laser cutting systems and precision 
          CNC machinery. Our advanced equipment enables us to achieve exceptional accuracy and consistency, whether 
          you need simple straight cuts or complex custom shapes. This technological advantage, combined with our 
          expert operators, ensures superior results every time.
        </p>
      </section>

      {/* Material Selection */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Material Selection</h2>
        <p className="text-gray-600 leading-relaxed">
          The foundation of exceptional custom cutting lies in selecting the right stainless steel grade for your 
          application. Our team provides expert guidance on material selection, considering factors such as corrosion 
          resistance, strength requirements, and environmental conditions. We work with a wide range of stainless 
          steel grades to ensure the perfect match for your specific needs.
        </p>
      </section>

      {/* Applications and Capabilities */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications and Capabilities</h2>
        <p className="text-gray-600 leading-relaxed">
          Our custom cutting services serve diverse industries and applications, from architectural panels and 
          kitchen equipment to industrial machinery and medical devices. Whatever your application, we have the 
          expertise and capabilities to deliver precision-cut stainless steel components that meet your exact 
          specifications and quality standards.
        </p>
      </section>

      {/* Quality, Demands, Sustainability Tabs */}
      <section>
        <div className="flex gap-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            {tabContent[activeTab as keyof typeof tabContent]}
          </p>
        </div>
      </section>

      {/* Why Choose Shanxi Steel */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Shanxi Steel</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Choosing Shanxi Steel for your custom cutting needs means partnering with a company that values precision, 
          quality, and customer satisfaction above all else. Our commitment to excellence, combined with our advanced 
          technology and experienced team, ensures that you receive components that not only meet but exceed your 
          expectations.
        </p>
      </section>

      {/* Case Studies and Testimonials */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies and Testimonials</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our track record speaks for itself. We have successfully completed numerous projects across various industries, 
          earning the trust and satisfaction of our clients. Our case studies demonstrate our ability to handle complex 
          requirements and deliver exceptional results, while our testimonials reflect the positive relationships we 
          build with every customer.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Shanxi Steel is more than just a cutting service provider—we are your partner in bringing your stainless 
          steel projects to life. From concept to completion, we work alongside you to ensure success, providing 
          expert guidance, reliable service, and uncompromising quality every step of the way.
        </p>
      </section>
    </div>
  )
}

