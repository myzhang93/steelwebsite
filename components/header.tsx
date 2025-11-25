"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, Phone, Mail, ArrowRight, ChevronDown } from "lucide-react"
import QuoteModal from "./quote-modal"

export default function Header() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isCapabilitiesDropdownOpen, setIsCapabilitiesDropdownOpen] = useState(false)
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false)
  const [isTreatmentDropdownOpen, setIsTreatmentDropdownOpen] = useState(false)
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false)
  
  const productsRef = useRef<HTMLDivElement>(null)
  const capabilitiesRef = useRef<HTMLDivElement>(null)
  const industryRef = useRef<HTMLDivElement>(null)
  const treatmentRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false)
      }
      if (capabilitiesRef.current && !capabilitiesRef.current.contains(event.target as Node)) {
        setIsCapabilitiesDropdownOpen(false)
      }
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setIsIndustryDropdownOpen(false)
      }
      if (treatmentRef.current && !treatmentRef.current.contains(event.target as Node)) {
        setIsTreatmentDropdownOpen(false)
      }
      if (supportRef.current && !supportRef.current.contains(event.target as Node)) {
        setIsSupportDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Contact Info */}
        <div className="py-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Call Us 24/7</span>
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">+8618662678180</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Send Us Mail</span>
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">sales@lynsteel.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Our Location</span>
              <span className="text-gray-700">Shengan Road, Wuxi City, Jiangsu Province, China</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center font-bold text-white text-lg rounded">
              S
            </div>
            <span className="font-bold text-xl text-blue-600">Steel</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition">
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button 
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="text-gray-800 hover:text-blue-600 transition flex items-center gap-1"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] z-50">
                  <Link
                    href="/products/200-series"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    200 Series
                  </Link>
                  <Link
                    href="/products/300-series"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    300 Series
                  </Link>
                  <Link
                    href="/products/400-series"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    400 Series
                  </Link>
                  <Link
                    href="/products/500-series"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    500 Series
                  </Link>
                  <Link
                    href="/products/600-series"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    600 Series
                  </Link>
                  <Link
                    href="/products/stainless-steel-pipes"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Stainless Steel Pipes
                  </Link>
                </div>
              )}
            </div>

            {/* Capabilities Dropdown */}
            <div className="relative" ref={capabilitiesRef}>
              <button 
                onClick={() => setIsCapabilitiesDropdownOpen(!isCapabilitiesDropdownOpen)}
                className="text-gray-800 hover:text-blue-600 transition flex items-center gap-1"
              >
                Capabilities
                <ChevronDown className={`w-4 h-4 transition-transform ${isCapabilitiesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCapabilitiesDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] z-50">
                  <Link
                    href="/capabilities/cutting"
                    onClick={() => setIsCapabilitiesDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Cutting
                  </Link>
                  <Link
                    href="/capabilities/welding"
                    onClick={() => setIsCapabilitiesDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Welding
                  </Link>
                  <Link
                    href="/capabilities/finishing"
                    onClick={() => setIsCapabilitiesDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Finishing
                  </Link>
                  <Link
                    href="/capabilities/treating"
                    onClick={() => setIsCapabilitiesDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Treating
                  </Link>
                  <Link
                    href="/capabilities/engineering"
                    onClick={() => setIsCapabilitiesDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Engineering
                  </Link>
                  <Link
                    href="/capabilities/logistics"
                    onClick={() => setIsCapabilitiesDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Logistics
                  </Link>
                </div>
              )}
            </div>

            {/* Industry Dropdown */}
            <div className="relative" ref={industryRef}>
              <button 
                onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
                className="text-gray-800 hover:text-blue-600 transition flex items-center gap-1"
              >
                Industry
                <ChevronDown className={`w-4 h-4 transition-transform ${isIndustryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isIndustryDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] z-50">
                  <Link
                    href="/industry/construction"
                    onClick={() => setIsIndustryDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Construction
                  </Link>
                  <Link
                    href="/industry/kitchen"
                    onClick={() => setIsIndustryDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Kitchen
                  </Link>
                  <Link
                    href="/industry/food-and-catering"
                    onClick={() => setIsIndustryDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Food and Catering
                  </Link>
                  <Link
                    href="/industry/automotive"
                    onClick={() => setIsIndustryDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Automotive
                  </Link>
                  <Link
                    href="/industry/chemical"
                    onClick={() => setIsIndustryDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Chemical
                  </Link>
                  <Link
                    href="/industry/medical"
                    onClick={() => setIsIndustryDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Medical
                  </Link>
                </div>
              )}
            </div>

            {/* Treatment Dropdown */}
            <div className="relative" ref={treatmentRef}>
              <button 
                onClick={() => setIsTreatmentDropdownOpen(!isTreatmentDropdownOpen)}
                className="text-gray-800 hover:text-blue-600 transition flex items-center gap-1"
              >
                Treatment
                <ChevronDown className={`w-4 h-4 transition-transform ${isTreatmentDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isTreatmentDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] z-50">
                  <Link
                    href="/treatment/electropolishing"
                    onClick={() => setIsTreatmentDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Electropolishing
                  </Link>
                  <Link
                    href="/treatment/brushing"
                    onClick={() => setIsTreatmentDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Brushing
                  </Link>
                  <Link
                    href="/treatment/etching"
                    onClick={() => setIsTreatmentDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Etching
                  </Link>
                  <Link
                    href="/treatment/coating"
                    onClick={() => setIsTreatmentDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Coating
                  </Link>
                  <Link
                    href="/treatment/passivation"
                    onClick={() => setIsTreatmentDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Passivation
                  </Link>
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative" ref={supportRef}>
              <button 
                onClick={() => setIsSupportDropdownOpen(!isSupportDropdownOpen)}
                className="text-gray-800 hover:text-blue-600 transition flex items-center gap-1"
              >
                Support
                <ChevronDown className={`w-4 h-4 transition-transform ${isSupportDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSupportDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[200px] z-50">
                  <Link
                    href="/support/blog"
                    onClick={() => setIsSupportDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/support/faqs"
                    onClick={() => setIsSupportDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap"
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition">
              Contact Us
            </Link>
          </nav>

          {/* Right Side - Search and Quote */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded transition">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition flex items-center gap-2"
            >
              GET A QUOTE
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="Header"
      />
    </header>
  )
}

