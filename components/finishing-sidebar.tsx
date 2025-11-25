"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function FinishingSidebar() {
  const pathname = usePathname()
  
  const services = [
    { id: "cutting", name: "Cutting", href: "/capabilities/cutting" },
    { id: "welding", name: "Welding", href: "/capabilities/welding" },
    { id: "finishing", name: "Finishing", href: "/capabilities/finishing" },
    { id: "treating", name: "Treating", href: "/capabilities/treating" },
    { id: "engineering", name: "Engineering", href: "/capabilities/engineering" },
    { id: "logistics", name: "Logistics", href: "/capabilities/logistics" }
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="space-y-8">
      {/* Our Services */}
      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <div className="bg-slate-700 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Our Services</h2>
        </div>
        <nav className="py-2">
          {services.map((service) => {
            const isActive = pathname === service.href || service.id === "finishing"
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`block px-6 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {service.name}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Contact Form */}
      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-slate-700">
          <h3 className="text-xl font-bold text-white">LET'S START WORK TOGETHER</h3>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-6 text-sm">
            Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Your Message*
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your message"
              />
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
    </div>
  )
}



