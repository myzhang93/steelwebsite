"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import QuoteModal from "./quote-modal"

export default function BlogSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const posts = [
    {
      image: "/industrial-steel-machinery-equipment.jpg",
      date: "10 Feb 24",
      title: "The New Customer-Centric Post-Purchase Customer-Facing Strategy",
      description: "Exploring innovative approaches to customer engagement and satisfaction in the steel industry.",
      link: "#"
    },
    {
      image: "/steel-bar-heat-treating-1122x567.jpeg",
      date: "06 Feb 24",
      title: "Leveraging AI in Welding Operations with HR Integrated",
      description: "How artificial intelligence is revolutionizing welding processes and improving efficiency.",
      link: "#"
    },
    {
      image: "/Eagle-Aluminum-Aluminum-vs-Steel.jpg",
      date: "02 Feb 24",
      title: "Managing Disruptions: The Digital Twin for Supply Chain",
      description: "Understanding the role of digital twin technology in optimizing supply chain management.",
      link: "#"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          What's Going On In Our Blog?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay updated with the latest insights, trends, and innovations in the steel industry.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{post.description}</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition"
                >
                  GET A QUOTE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Blog Section"
      />
    </section>
  )
}




