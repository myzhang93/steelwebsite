import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialSection() {
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
                <span className="text-2xl font-bold text-gray-600">DR</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">DEREK ROBERTS</div>
                <div className="text-gray-600 text-sm">Senior Construction Expert</div>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Working with Shanxi Steel has been an exceptional experience. Their commitment to quality 
              and attention to detail is unmatched. The steel products we've received have consistently 
              exceeded our expectations, and their customer service team is always responsive and helpful. 
              I highly recommend Shanxi Steel for any construction project."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



