"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface Testimonial {
  initials: string
  name: string
  title: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    initials: "DR",
    name: "DEREK ROBERTS",
    title: "Senior Construction Expert",
    rating: 5,
    text: "Working with Shanxi Steel has been an exceptional experience. Their commitment to quality and attention to detail is unmatched. The steel products we've received have consistently exceeded our expectations, and their customer service team is always responsive and helpful. I highly recommend Shanxi Steel for any construction project."
  },
  {
    initials: "MA",
    name: "MARK AUCOIN",
    title: "Operations Manager",
    rating: 5,
    text: "Working with Shanxi Steel has been an absolute game-changer for our construction projects. Their 600 series stainless steel plates are incredibly durable and resistant to the harsh coastal environment we often work in. What impressed me the most was the personalized service and the way they catered to our specific needs, ensuring timely delivery and flawless product quality. Shanxi Steel truly stands out for its commitment to sustainability and excellence. Highly recommended!"
  },
  {
    initials: "SL",
    name: "SARAH LI",
    title: "Project Director",
    rating: 5,
    text: "Shanxi Steel has been our trusted partner for over three years. Their 304 and 316 stainless steel products have been integral to our manufacturing operations. The consistency in quality, competitive pricing, and exceptional technical support make them our go-to supplier. Their team's expertise in helping us select the right grades and finishes for our applications has saved us both time and money. Outstanding service from start to finish."
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          WHAT OUR CLIENTS ARE SAYING
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Blue Circle */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white">
              <div className="text-6xl font-bold mb-2">1+</div>
              <div className="text-lg font-medium">CUSTOMER'S EXPERIENCE</div>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">{currentTestimonial.initials}</span>
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</div>
                <div className="text-gray-600 text-sm">{currentTestimonial.title}</div>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              "{currentTestimonial.text}"
            </p>
            
            {/* Pagination Indicators */}
            <div className="flex gap-2 justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded transition-all ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




