"use client"

import WufooForm from "./wufoo-form"

export default function ContactFormSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
            Have questions or need a quote? Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
            <WufooForm />
          </div>
        </div>
      </div>
    </section>
  )
}




