"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

interface ArticleNavigationProps {
  sheetContent: React.ReactNode
  plateContent: React.ReactNode
}

export default function ArticleNavigation({ sheetContent, plateContent }: ArticleNavigationProps) {
  const [activeSection, setActiveSection] = useState('sheet')

  useEffect(() => {
    const handleScroll = () => {
      const sheetSection = document.getElementById('sheet-section')
      const plateSection = document.getElementById('plate-section')
      
      if (sheetSection && plateSection) {
        const sheetTop = sheetSection.getBoundingClientRect().top
        const plateTop = plateSection.getBoundingClientRect().top
        
        if (plateTop < 200) {
          setActiveSection('plate')
        } else {
          setActiveSection('sheet')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 py-3">
            <button
              onClick={() => scrollToSection('sheet-section')}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                activeSection === 'sheet'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sheet Information
            </button>
            <button
              onClick={() => scrollToSection('plate-section')}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                activeSection === 'plate'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Plate Information
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article id="sheet-section" className="prose prose-lg max-w-none scroll-mt-24">
          {sheetContent}
          
          {/* Jump to Plate Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => scrollToSection('plate-section')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
            >
              <span>View Plate Information</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </article>
        
        <article id="plate-section" className="prose prose-lg max-w-none scroll-mt-24 mt-20">
          {plateContent}
          
          {/* Jump to Sheet Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => scrollToSection('sheet-section')}
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
            >
              <ArrowDown className="w-5 h-5 rotate-180" />
              <span>Back to Sheet Information</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

