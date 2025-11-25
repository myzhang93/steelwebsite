"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center font-bold text-white text-lg rounded">
                S
              </div>
              <span className="font-bold text-xl text-white">Steel</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A leading developer of A-grade commercial, industrial and residential projects in China. Since its foundation the company.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/300-series" className="text-gray-400 hover:text-white transition">
                  300 Series
                </Link>
              </li>
              <li>
                <Link href="/industry/aerospace" className="text-gray-400 hover:text-white transition">
                  Aerospace
                </Link>
              </li>
              <li>
                <Link href="/treatment/electropolishing" className="text-gray-400 hover:text-white transition">
                  Polishing
                </Link>
              </li>
              <li>
                <Link href="/capabilities/cutting" className="text-gray-400 hover:text-white transition">
                  Cutting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+8618662678180</li>
              <li>sales@lynsteel.com</li>
              <li>No. 8 Jinci Road, Wanbailin, Taiyuan City, Shanxi Province</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">
              Terms of Service
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 text-sm">
              Copyright © 2024 Shanxi Steel | All Rights Reserved.
            </span>
            <span className="text-gray-400">|</span>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  )
}

