"use client"

import { ArrowRight, Scissors, Wrench, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function ServicesSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const services = [
    {
      icon: Scissors,
      title: "Cutting",
      description: "Our advanced cutting services utilize state-of-the-art automation and precision technology to deliver exact specifications for your steel requirements.",
      image: "/manufacturing-facility-sparks-metal-cutting.jpg",
      link: "#"
    },
    {
      icon: Wrench,
      title: "Welding",
      description: "Professional welding services using advanced techniques and certified welders to ensure strong, durable connections for all your steel fabrication needs.",
      image: "/stainless-steel-welding-sparks.jpg",
      link: "#"
    },
    {
      icon: Sparkles,
      title: "Finishing",
      description: "Industrial construction and surface finishing services that enhance the appearance and durability of your steel products with precision and expertise.",
      image: "/professional-stainless-steel-finishing.jpg",
      link: "#"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Service We Provide
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide comprehensive steel solutions tailored to meet your specific needs and requirements.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 p-3 rounded-full">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{service.description}</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition"
                >
                  GET A QUOTE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Services Section"
      />
    </section>
  )
}




