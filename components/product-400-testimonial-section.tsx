"use client"

import Image from "next/image"

export default function Product400TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-start gap-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Customer"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-blue-600 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z" />
                </svg>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  "Working with this company has been an exceptional experience. The quality of their 400 series 
                  stainless steel sheets is outstanding, and their customer service is second to none. They 
                  consistently deliver on time and exceed our expectations in every way."
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-lg">Jane Doe</p>
                <p className="text-gray-600">CEO, Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

