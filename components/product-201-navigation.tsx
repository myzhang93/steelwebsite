"use client"

import { useState } from "react"

interface Product201NavigationProps {
  sheetPlateContent: React.ReactNode
  coilContent: React.ReactNode
  pipeTubeContent: React.ReactNode
  fittingsContent: React.ReactNode
}

export default function Product201Navigation({ 
  sheetPlateContent, 
  coilContent, 
  pipeTubeContent, 
  fittingsContent 
}: Product201NavigationProps) {
  const [activeTab, setActiveTab] = useState('sheet-plate')

  const tabs = [
    { id: 'sheet-plate', label: 'Sheet & Plate' },
    { id: 'coil', label: 'Coil' },
    { id: 'pipe-tube', label: 'Pipe & Tube' },
    { id: 'fittings', label: 'Fittings' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              201 Stainless Steel
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Cost-effective austenitic stainless steel with excellent formability and good corrosion resistance. 
              Available in multiple product forms to meet your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'sheet-plate' && (
          <article className="prose prose-lg max-w-none">
            {sheetPlateContent}
          </article>
        )}
        
        {activeTab === 'coil' && (
          <article className="prose prose-lg max-w-none">
            {coilContent}
          </article>
        )}
        
        {activeTab === 'pipe-tube' && (
          <article className="prose prose-lg max-w-none">
            {pipeTubeContent}
          </article>
        )}
        
        {activeTab === 'fittings' && (
          <article className="prose prose-lg max-w-none">
            {fittingsContent}
          </article>
        )}
      </div>
    </div>
  )
}

