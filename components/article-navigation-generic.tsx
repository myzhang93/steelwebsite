"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

interface ArticleNavigationGenericProps {
  firstContent: React.ReactNode
  secondContent: React.ReactNode
  firstSectionId: string
  secondSectionId: string
  firstSectionName: string
  secondSectionName: string
  separatorText: string
  firstButtonText: string
  secondButtonText: string
}

export default function ArticleNavigationGeneric({
  firstContent,
  secondContent,
  firstSectionId,
  secondSectionId,
  firstSectionName,
  secondSectionName,
  separatorText,
  firstButtonText,
  secondButtonText,
}: ArticleNavigationGenericProps) {
  const [activeSection, setActiveSection] = useState(firstSectionId)

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById(firstSectionId)
      const secondSection = document.getElementById(secondSectionId)
      
      if (firstSection && secondSection) {
        const firstTop = firstSection.getBoundingClientRect().top
        const secondTop = secondSection.getBoundingClientRect().top
        
        if (secondTop < 200) {
          setActiveSection(secondSectionId)
        } else {
          setActiveSection(firstSectionId)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [firstSectionId, secondSectionId])

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
              onClick={() => scrollToSection(firstSectionId)}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                activeSection === firstSectionId
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {firstSectionName}
            </button>
            <button
              onClick={() => scrollToSection(secondSectionId)}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                activeSection === secondSectionId
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {secondSectionName}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article id={firstSectionId} className="prose prose-lg max-w-none scroll-mt-24">
          {firstContent}
          
          {/* Jump to Second Section Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => scrollToSection(secondSectionId)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
            >
              <span>{firstButtonText}</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </article>
        
        <article id={secondSectionId} className="prose prose-lg max-w-none scroll-mt-24 mt-20">
          {secondContent}
          
          {/* Jump to First Section Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => scrollToSection(firstSectionId)}
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
            >
              <ArrowDown className="w-5 h-5 rotate-180" />
              <span>{secondButtonText}</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

