import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-start justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            
            <p className="text-lg text-gray-600 mb-2">
              Your inquiry has been successfully submitted.
            </p>
            
            <p className="text-base text-gray-500 mb-8">
              We have received your message and will get back to you as soon as possible, typically within 24 hours on business days.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
              >
                Return to Home
              </Link>
              
              <div className="text-sm text-gray-500">
                <p>Need immediate assistance?</p>
                <p className="mt-1">
                  Call us at <a href="tel:+8618662678180" className="text-blue-600 hover:text-blue-700 font-medium">+86 18662678180</a> or email us at <a href="mailto:sales@lynsteel.com" className="text-blue-600 hover:text-blue-700 font-medium">sales@lynsteel.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}



