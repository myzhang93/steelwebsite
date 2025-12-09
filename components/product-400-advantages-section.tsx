"use client"

import { Shield, Upload, Search } from "lucide-react"

export default function Product400AdvantagesSection() {
  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Advantages of 400 Series Stainless Steel Sheet
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Customization and Flexibility</h3>
            <p className="text-gray-600 leading-relaxed">
              Our 400 series stainless steel sheets can be customized to meet your specific requirements. 
              We offer flexible sizing, thickness options, and finishing treatments to ensure the perfect 
              solution for your project needs.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Expertise and Support</h3>
            <p className="text-gray-600 leading-relaxed">
              With years of industry experience, our team provides expert guidance and comprehensive support 
              throughout your project. From material selection to technical consultation, we're here to help 
              you achieve the best results.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Competitive Pricing and Value</h3>
            <p className="text-gray-600 leading-relaxed">
              We offer competitive pricing without compromising on quality. Our 400 series stainless steel 
              sheets provide exceptional value, combining superior performance with cost-effectiveness for 
              your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}






