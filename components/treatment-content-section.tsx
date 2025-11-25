"use client"

import { useRef, useState } from "react"

interface TreatmentContentSectionProps {
  content: {
    sections: Array<{
      title: string
      paragraphs: string[]
    }>
  }
}

function QuoteForm() {
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
    <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg" id="quote-form">
      <h3 className="text-2xl font-bold mb-6">Get A Quote Now!</h3>
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
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white"
            placeholder="Enter your message"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">File Upload</label>
          <div className="flex gap-2">
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
            <span className="px-4 py-2 text-white/70">
              {file ? file.name : "未选择文件"}
            </span>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded font-semibold transition disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "SEND"}
        </button>
      </form>
    </div>
  )
}

export default function TreatmentContentSection({ content }: TreatmentContentSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar - Fixed Quote Form */}
          <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}


