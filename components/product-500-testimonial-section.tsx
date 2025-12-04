"use client"

import Image from "next/image"

export default function Product500TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Amanda Riley"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-blue-600 mb-4 mx-auto md:mx-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z" />
                </svg>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  "The quality and performance of 500 series stainless steel have exceeded our expectations. 
                  The materials have proven to be reliable and durable in our most demanding applications, 
                  and the customer service is outstanding."
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-lg">Amanda Riley</p>
                <p className="text-gray-600">Purchasing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

