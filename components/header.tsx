"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Phone, Mail, ArrowRight, ChevronDown } from "lucide-react"
import QuoteModal from "./quote-modal"

export default function Header() {
  const pathname = usePathname()
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  
  const productsRef = useRef<HTMLDivElement>(null)

  // No longer need click outside handler for hover-based dropdown

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="w-full mx-auto px-16 lg:px-32">
        {/* Top Bar - Logo and Contact Info */}
        <div className="py-7 flex items-center justify-between text-base">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-11 h-11 bg-blue-600 flex items-center justify-center font-bold text-white text-xl" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
              S
            </div>
            <span className="font-semibold text-xl text-gray-900" style={{ fontFamily: 'sans-serif' }}>Steel</span>
          </Link>

          {/* Contact Info - Top Right */}
          <div className="flex items-center gap-20">
            <div className="flex items-start gap-2.5">
              <Phone className="w-10 h-10 text-blue-600 flex-shrink-0 mt-0.5 stroke-1" />
              <div className="flex flex-col">
                <span className="text-gray-400 text-base whitespace-nowrap">Call Us 24/7</span>
                <span className="text-gray-900 text-base whitespace-nowrap">+8618662678180</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-10 h-10 text-blue-600 flex-shrink-0 mt-0.5 stroke-1" />
              <div className="flex flex-col">
                <span className="text-gray-400 text-base whitespace-nowrap">Send Us Mail</span>
                <span className="text-gray-900 text-base whitespace-nowrap">sales@lynsteel.com</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-base whitespace-nowrap">Our Location</span>
              <span className="text-gray-900 text-base whitespace-nowrap">Shengan Road, Wuxi City, Jiangsu Province, China</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="py-6 flex items-center justify-between border-t border-gray-200">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xl font-medium">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
              style={{ fontFamily: 'sans-serif' }}
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
                className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                style={{ fontFamily: 'sans-serif' }}
              >
                Products
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 bg-white border border-gray-200 rounded shadow-lg py-4 z-50">
                  <div className="flex gap-8 px-4">
                    {/* Left Column */}
                    <div className="flex flex-col min-w-[180px]">
                      <Link
                        href="/products/200-series"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        200 Series
                      </Link>
                      <Link
                        href="/products/300-series"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        300 Series
                      </Link>
                      <Link
                        href="/products/400-series"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        400 Series
                      </Link>
                      <Link
                        href="/products/500-series"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        500 Series
                      </Link>
                      <Link
                        href="/products/600-series"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        600 Series
                      </Link>
                    </div>
                    
                    {/* Right Column */}
                    <div className="flex flex-col min-w-[250px]">
                      <Link
                        href="/products/stainless-steel-sheet"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        Stainless Steel Sheet
                      </Link>
                      <Link
                        href="/products/stainless-steel-coil"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        Stainless Steel Coil
                      </Link>
                      <Link
                        href="/products/stainless-steel-pipe-tube"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        Stainless Steel Pipe & Tube
                      </Link>
                      <Link
                        href="/products/stainless-steel-fittings"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        Stainless Steel Fittings
                      </Link>
                      <Link
                        href="/products/customized-stainless-steel-parts"
                        className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap text-gray-900"
                      >
                        Customized Stainless Steel Parts
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/surface-finish" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
              style={{ fontFamily: 'sans-serif' }}
            >
              Surface Finish
            </Link>

            <Link 
              href="/applications" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
              style={{ fontFamily: 'sans-serif' }}
            >
              Applications
            </Link>

            <Link 
              href="/knowledge-base" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
              style={{ fontFamily: 'sans-serif' }}
            >
              Knowledge Base
            </Link>

            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
              style={{ fontFamily: 'sans-serif' }}
            >
              Blog
            </Link>

            <Link 
              href="/about-us" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
              style={{ fontFamily: 'sans-serif' }}
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
              style={{ fontFamily: 'sans-serif' }}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side - Search and Quote */}
          <div className="flex items-center gap-8">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <Search className="w-8 h-8 text-gray-900 stroke-1" />
            </button>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2.5 rounded font-semibold transition-colors flex items-center gap-3 text-lg"
              style={{ fontFamily: 'sans-serif' }}
            >
              GET A QUOTE
              <ArrowRight className="w-6 h-6" />
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

