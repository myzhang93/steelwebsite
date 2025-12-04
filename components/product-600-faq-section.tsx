"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What Makes the 600 Series Steel Ideal for High-Stress Applications?",
    answer: "600 series stainless steel is specifically engineered with superior mechanical properties including high tensile strength, excellent yield strength, and exceptional fatigue resistance. These characteristics make it ideal for high-stress applications where reliability and durability are paramount. The material's ability to maintain its structural integrity under extreme loads and conditions ensures optimal performance in demanding industrial environments."
  },
  {
    id: 2,
    question: "How Does We Ensure the Quality of 600 Series Stainless Steel?",
    answer: "We implement comprehensive quality control processes throughout the manufacturing cycle. This includes rigorous material testing, dimensional inspections, and performance validation. Our quality assurance protocols adhere to international standards, ensuring that every batch of 600 series stainless steel meets stringent specifications for composition, mechanical properties, and surface finish. We also maintain detailed traceability records for complete quality transparency."
  }
]

export default function Product600FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


