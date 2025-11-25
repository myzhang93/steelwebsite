"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import QuoteForm from "./quote-form"

export default function ContactFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "What Sets Shanxi Steel Apart from Other Stainless Steel Manufacturers?",
      answer: "Shanxi Steel distinguishes itself through our unwavering commitment to quality, innovation, and customer satisfaction. With over 40 years of experience, state-of-the-art facilities, and a team of seasoned professionals, we deliver superior products that meet and exceed international standards."
    },
    {
      question: "How Does Shanxi Steel Ensure the Quality of its Stainless Steel Products?",
      answer: "We implement rigorous quality control processes at every stage of production, from raw material selection to final inspection. Our products undergo comprehensive testing and certification to ensure they meet the highest industry standards."
    },
    {
      question: "Does Shanxi Steel Provide Customized Stainless Steel Solutions?",
      answer: "Yes, we specialize in providing customized solutions tailored to meet your specific requirements. Our engineering team works closely with clients to develop products that perfectly match their needs and applications."
    },
    {
      question: "What Range of Stainless Steel Products Does Shanxi Steel Offer?",
      answer: "We offer a comprehensive range of stainless steel products including sheets, plates, pipes, bars, and custom fabricated components. Our product line covers various grades and specifications to meet diverse industry needs."
    },
    {
      question: "Does Shanxi Steel Support its Customers Post-Purchase?",
      answer: "Absolutely. We provide comprehensive post-purchase support including technical assistance, maintenance guidance, and ongoing consultation to ensure your complete satisfaction and success with our products."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <QuoteForm />
          </div>

          {/* Right Column - FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQ Of Customer</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




