"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import QuoteModal from "./quote-modal"
import Image from "next/image"

interface PageHeroSectionProps {
  title: string
  description: string
  backgroundImage: string
}

export default function PageHeroSection({ title, description, backgroundImage }: PageHeroSectionProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 触发动画
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(1.1);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes slideUpFade {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}} />
        
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(1.1)',
            transition: 'opacity 1.2s ease-out, transform 1.2s ease-out'
          }}
        >
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
            }}
          >
            {title}
          </h1>
          <p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
            }}
          >
            {description}
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto transition shadow-lg hover:shadow-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
            }}
          >
            Get A Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <QuoteModal
        open={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        source="Hero Section"
      />
    </>
  )
}

