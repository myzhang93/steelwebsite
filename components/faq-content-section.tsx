"use client"

import { useState, useRef } from "react"
import { DollarSign, Settings, Plus, Minus } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string
  isOpen?: boolean
}

const commonQuestions: FAQItem[] = [
  {
    id: 1,
    question: "What range of stainless steel products does Shanxi Steel offer?",
    answer: "Shanxi Steel offers a comprehensive selection of stainless steel products, including sheets, plates, coils, bars, and pipes, available in various grades and finishes to meet diverse industry needs.",
    isOpen: true
  },
  {
    id: 2,
    question: "How does Shanxi Steel ensure the quality of its stainless steel products?",
    answer: "Shanxi Steel maintains rigorous quality control standards throughout the manufacturing process. Our products undergo comprehensive testing and inspection procedures, including material composition analysis, mechanical property testing, and surface quality assessment. We are certified to international standards such as ISO 9001, ensuring consistent quality and reliability in every product we deliver."
  },
  {
    id: 3,
    question: "Can Shanxi Steel provide customized stainless steel solutions?",
    answer: "Yes, Shanxi Steel specializes in providing customized stainless steel solutions tailored to specific customer requirements. Our engineering team works closely with clients to develop products that meet exact specifications, including custom dimensions, grades, finishes, and processing requirements."
  },
  {
    id: 4,
    question: "What industries does Shanxi Steel serve with its stainless steel products?",
    answer: "Shanxi Steel serves a wide range of industries including construction, automotive, food and catering, chemical processing, medical equipment, aerospace, and energy sectors. Our products are designed to meet the specific requirements and standards of each industry we serve."
  },
  {
    id: 5,
    question: "How competitive are Shanxi Steel's prices for stainless steel products?",
    answer: "Shanxi Steel offers competitive pricing while maintaining high quality standards. Our pricing is based on market conditions, material specifications, order volume, and processing requirements. We work with customers to provide cost-effective solutions that deliver excellent value for their investment."
  }
]

const professionalQuestions: FAQItem[] = [
  {
    id: 1,
    question: "Does Shanxi Steel have any certifications for its stainless steel products?",
    answer: "Yes, our products and processes are certified according to international standards, including ISO 9001 for quality management systems, ensuring reliability and trust.",
    isOpen: true
  },
  {
    id: 2,
    question: "What is the lead time for orders from Shanxi Steel?",
    answer: "Lead times vary depending on product specifications, order quantity, and current production schedules. Standard products typically have shorter lead times, while customized solutions may require additional time for engineering and production. We provide detailed lead time estimates during the quotation process and work to meet or exceed customer expectations."
  },
  {
    id: 3,
    question: "How does Shanxi Steel handle international shipping?",
    answer: "Shanxi Steel has extensive experience in international shipping and logistics. We work with reliable shipping partners to ensure safe and timely delivery of products worldwide. Our logistics team handles all necessary documentation, customs clearance, and shipping arrangements to provide a seamless experience for our international customers."
  },
  {
    id: 4,
    question: "Can Shanxi Steel assist with technical queries and engineering support?",
    answer: "Absolutely. Shanxi Steel provides comprehensive technical support and engineering assistance to help customers select the right products and solutions for their applications. Our technical team is available to answer questions, provide material recommendations, and assist with design considerations."
  },
  {
    id: 5,
    question: "How can new customers start working with Shanxi Steel?",
    answer: "New customers can start by contacting our sales team through our website, email, or phone. We'll discuss your requirements, provide product information and quotations, and guide you through our ordering process. Our team is committed to building long-term partnerships and ensuring a smooth experience from initial inquiry to delivery."
  }
]

function FAQAccordion({ title, icon: Icon, items }: { title: string; icon: any; items: FAQItem[] }) {
  const [openItems, setOpenItems] = useState<number[]>(
    items.filter(item => item.isOpen).map(item => item.id)
  )

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item) => {
          const isOpen = openItems.includes(item.id)
          return (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              {isOpen && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" })
    setFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="bg-blue-900 text-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-800 px-6 py-4">
        <h3 className="text-2xl font-bold">Can't Find Answer? Ask Us</h3>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-white/90 mb-6">
          If you have any questions please contact us we will answer your questions via email as quickly as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white"
              placeholder="Enter your phone"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message*
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white"
              placeholder="Enter your message"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">File Upload</label>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-white/10 border border-white/30 rounded hover:bg-white/20 transition"
            >
              选择文件
            </button>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            {file && (
              <span className="ml-3 text-white/70">{file.name}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "SEND"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function FAQContentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - FAQ Sections */}
          <div className="md:col-span-2">
            <FAQAccordion
              title="Common Questions"
              icon={DollarSign}
              items={commonQuestions}
            />
            <FAQAccordion
              title="Professional Questions"
              icon={Settings}
              items={professionalQuestions}
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


