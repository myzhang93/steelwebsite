"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Phone, Mail, ChevronDown, ArrowRight } from "lucide-react"
import QuoteModal from "./quote-modal"

export default function Header() {
  const pathname = usePathname()
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isSurfaceFinishDropdownOpen, setIsSurfaceFinishDropdownOpen] = useState(false)
  const [isApplicationsDropdownOpen, setIsApplicationsDropdownOpen] = useState(false)
  const [isKnowledgeBaseDropdownOpen, setIsKnowledgeBaseDropdownOpen] = useState(false)
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  
  const productsRef = useRef<HTMLDivElement>(null)
  const surfaceFinishRef = useRef<HTMLDivElement>(null)
  const applicationsRef = useRef<HTMLDivElement>(null)
  const knowledgeBaseRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)

  // No longer need click outside handler for hover-based dropdown

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="w-full mx-auto px-12 lg:px-24">
        {/* Top Bar - Logo and Contact Info */}
        <div className="py-7 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-11 h-11 bg-blue-800 flex items-center justify-center font-bold text-white text-xl" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
              S
            </div>
            <span className="font-semibold text-3xl text-gray-900" style={{ fontFamily: 'sans-serif' }}>Steel</span>
          </Link>

          {/* Contact Info - Top Right */}
          <div className="flex items-center gap-18" style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}>
            <a href="tel:+8618662678180" className="flex items-start gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <Phone className="w-10 h-10 text-blue-800 flex-shrink-0 mt-0.5 stroke-1" />
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm whitespace-nowrap">Call Us 24/7</span>
                <span className="text-gray-900 text-base whitespace-nowrap">+8618662678180</span>
              </div>
            </a>
            <a href="mailto:sales@lynsteel.com" className="flex items-start gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <Mail className="w-10 h-10 text-blue-800 flex-shrink-0 mt-0.5 stroke-1" />
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm whitespace-nowrap">Send Us Mail</span>
                <span className="text-gray-900 text-base whitespace-nowrap">sales@lynsteel.com</span>
              </div>
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Shengan+Road,+Wuxi+City,+Jiangsu+Province,+China" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="text-gray-400 text-sm whitespace-nowrap">Our Location</span>
              <span className="text-gray-900 text-base whitespace-nowrap">Shengan Road, Wuxi City, Jiangsu Province, China</span>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="py-5 flex items-center justify-between border-t border-gray-200">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium" style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}>
            <Link 
              href="/" 
              className="text-blue-800 hover:text-blue-900 transition-colors"
              style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative" 
              ref={productsRef}
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button 
                className="text-blue-800 hover:text-blue-900 transition-colors flex items-center gap-1"
                style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
              >
                Products
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute -left-[64px] top-full bg-white border border-gray-200 rounded shadow-lg py-4 z-50 min-w-[600px]">
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute -top-1 left-0 right-0 h-1"></div>
                  <div className="flex gap-12 px-10">
                    {/* Left Column */}
                    <div className="flex flex-col min-w-[220px]">
                      <Link
                        href="/products/200-series"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        200 Series
                      </Link>
                      <Link
                        href="/products/300-series"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        300 Series
                      </Link>
                      <Link
                        href="/products/400-series"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        400 Series
                      </Link>
                      <Link
                        href="/products/500-series"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        500 Series
                      </Link>
                      <Link
                        href="/products/600-series"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        600 Series
                      </Link>
                    </div>
                    
                    {/* Right Column */}
                    <div className="flex flex-col min-w-[300px]">
                      <Link
                        href="/products/stainless-steel-sheet"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        Stainless Steel Sheet & Plate
                      </Link>
                      <Link
                        href="/products/stainless-steel-coil"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        Stainless Steel Coil
                      </Link>
                      <Link
                        href="/products/stainless-steel-pipe-tube"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        Stainless Steel Pipe & Tube
                      </Link>
                      <Link
                        href="/products/stainless-steel-fittings"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        Stainless Steel Fittings
                      </Link>
                      <Link
                        href="/products/customized-stainless-steel-parts"
                        className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                      >
                        Customized Stainless Steel Parts
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Surface Finish Dropdown */}
            <div 
              className="relative" 
              ref={surfaceFinishRef}
              onMouseEnter={() => setIsSurfaceFinishDropdownOpen(true)}
              onMouseLeave={() => setIsSurfaceFinishDropdownOpen(false)}
            >
              <button 
                className="text-blue-800 hover:text-blue-900 transition-colors flex items-center gap-1"
                style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
              >
                Surface Finish
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSurfaceFinishDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSurfaceFinishDropdownOpen && (
                <div className="absolute left-0 top-full bg-white border border-gray-200 rounded shadow-lg py-4 z-50">
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute -top-1 left-0 right-0 h-1"></div>
                  <div className="flex flex-col min-w-[180px] px-4">
                    <Link
                      href="/surface-finish/2b"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      2B
                    </Link>
                    <Link
                      href="/surface-finish/ba"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      BA
                    </Link>
                    <Link
                      href="/surface-finish/no4"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      No.4
                    </Link>
                    <Link
                      href="/surface-finish/hl"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      HL
                    </Link>
                    <Link
                      href="/surface-finish/mirror"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Mirror
                    </Link>
                    <Link
                      href="/surface-finish/embossed"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Embossed
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Applications Dropdown */}
            <div 
              className="relative" 
              ref={applicationsRef}
              onMouseEnter={() => setIsApplicationsDropdownOpen(true)}
              onMouseLeave={() => setIsApplicationsDropdownOpen(false)}
            >
              <button 
                className="text-blue-800 hover:text-blue-900 transition-colors flex items-center gap-1"
                style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
              >
                Applications
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isApplicationsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isApplicationsDropdownOpen && (
                <div className="absolute left-0 top-full bg-white border border-gray-200 rounded shadow-lg py-4 z-50">
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute -top-1 left-0 right-0 h-1"></div>
                  <div className="flex flex-col min-w-[180px] px-4">
                    <Link
                      href="/applications/kitchen-equipment"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Kitchen Equipment
                    </Link>
                    <Link
                      href="/applications/construction"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Construction
                    </Link>
                    <Link
                      href="/applications/automotive"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Automotive
                    </Link>
                    <Link
                      href="/applications/food-processing"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Food Processing
                    </Link>
                    <Link
                      href="/applications/water-treatment"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Water Treatment
                    </Link>
                    <Link
                      href="/applications/chemical"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Chemical
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Knowledge Base Dropdown */}
            <div 
              className="relative" 
              ref={knowledgeBaseRef}
              onMouseEnter={() => setIsKnowledgeBaseDropdownOpen(true)}
              onMouseLeave={() => setIsKnowledgeBaseDropdownOpen(false)}
            >
              <button 
                className="text-blue-800 hover:text-blue-900 transition-colors flex items-center gap-1"
                style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
              >
                Knowledge Base
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isKnowledgeBaseDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isKnowledgeBaseDropdownOpen && (
                <div className="absolute left-0 top-full bg-white border border-gray-200 rounded shadow-lg py-4 z-50">
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute -top-1 left-0 right-0 h-1"></div>
                  <div className="flex flex-col min-w-[180px] px-4">
                    <Link
                      href="/knowledge-base/grades"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Grades
                    </Link>
                    <Link
                      href="/knowledge-base/technical-guide"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Technical Guide
                    </Link>
                    <Link
                      href="/knowledge-base/manufacturing-process"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Manufacturing Process
                    </Link>
                    <Link
                      href="/knowledge-base/buyers-guide"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Buyer's Guide
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div 
              className="relative" 
              ref={blogRef}
              onMouseEnter={() => setIsBlogDropdownOpen(true)}
              onMouseLeave={() => setIsBlogDropdownOpen(false)}
            >
              <button 
                className="text-blue-800 hover:text-blue-900 transition-colors flex items-center gap-1"
                style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
              >
                Blog
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isBlogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isBlogDropdownOpen && (
                <div className="absolute left-0 top-full bg-white border border-gray-200 rounded shadow-lg py-4 z-50">
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute -top-1 left-0 right-0 h-1"></div>
                  <div className="flex flex-col min-w-[180px] px-4">
                    <Link
                      href="/blog/comparison"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Comparison
                    </Link>
                    <Link
                      href="/blog/pricing"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/blog/trends"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Trends
                    </Link>
                    <Link
                      href="/blog/applications"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Applications
                    </Link>
                    <Link
                      href="/blog/lists"
                      className="block px-3 py-2 hover:bg-blue-100 hover:text-blue-800 transition whitespace-nowrap text-gray-900 text-base"
                    >
                      Lists
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/about-us" 
              className="text-blue-800 hover:text-blue-900 transition-colors"
              style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="text-blue-800 hover:text-blue-900 transition-colors"
              style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side - Search and Quote */}
          <div className="flex items-center gap-8">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <Search className="w-6 h-6 text-gray-900 stroke-1" />
            </button>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-2.5 rounded font-semibold transition-colors flex items-center gap-2 text-base"
              style={{ fontFamily: 'var(--font-merriweather-sans), Merriweather Sans, sans-serif' }}
            >
              GET A QUOTE
              <ArrowRight className="w-5 h-5" />
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

