"use client"

import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Linkedin } from "lucide-react"
import { useRouter } from "next/navigation"
import WufooForm from "./wufoo-form"

export default function ContactFormSection() {
  const router = useRouter()

  // CSS loading is handled by WufooForm component

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Column - Drop A Line */}
          <div className="bg-white py-16 px-8 text-gray-900">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Drop A Line</h2>
            <p className="text-gray-600 mb-8">Your email address will not be published.</p>
            
            <WufooForm onSuccess={() => router.push("/thank-you")} />
          </div>

          {/* Right Column - Let's Start a Project */}
          <div className="bg-gray-800 text-white py-16 px-8">
            <h2 className="text-3xl font-bold mb-4">Let's Start a Project</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  SHANXI STEEL ADDRESS
                </h3>
                <p className="text-gray-400 ml-7">
                  Shengan Road, Wuxi City, Jiangsu Province, China
                </p>
              </div>

              {/* Mail & Phone */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  MAIL & PHONE
                </h3>
                <div className="ml-7 space-y-2 text-gray-400">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    sales@lynsteel.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +8618662678180
                  </p>
                </div>
              </div>

              {/* Working Time */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  WORKING TIME
                </h3>
                <div className="ml-7 text-gray-400">
                  <p>7:00am - 6:00pm (Mon - Fri)</p>
                  <p>Sat, Sun & Holiday CLOSED</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                    aria-label="Social"
                  >
                    <span className="text-sm font-bold">S</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



