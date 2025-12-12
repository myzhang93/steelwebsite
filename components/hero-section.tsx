"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface HeroSlide {
  image: string
  title: string
  description: string
}

const heroSlides: HeroSlide[] = [
  {
    image: "/molten-steel-industrial-furnace.jpg",
    title: "Best Quality",
    description: "Choose Shanxi Steel for the best quality steel—engineered with precision, trusted for durability, and built to exceed expectations."
  },
  {
    image: "/industrial-manufacturing-steel-production.jpg",
    title: "Advanced Manufacturing",
    description: "State-of-the-art facilities and cutting-edge technology ensure superior steel products that meet the highest international standards."
  },
  {
    image: "/industrial-steel-machinery-equipment.jpg",
    title: "Precision Engineering",
    description: "Expert craftsmanship and meticulous attention to detail deliver steel solutions that power industries worldwide."
  },
  {
    image: "/steel-factory-manufacturers.webp",
    title: "Global Excellence",
    description: "Serving customers across 50+ countries with reliable supply chains and exceptional customer service."
  }
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIsVisible(false)
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
      setIsTransitioning(false)
      setTimeout(() => {
        setIsVisible(true)
      }, 50)
    }, 400)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIsVisible(false)
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setIsTransitioning(false)
      setTimeout(() => {
        setIsVisible(true)
      }, 50)
    }, 400)
  }

  const currentSlide = heroSlides[currentIndex]

  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-slate-900 flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
          transition: 'opacity 0.8s ease-out, transform 1.2s ease-out'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content - Left Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 bg-red-600 flex-shrink-0 rounded-full"></div>
            <h1 
              key={`title-${currentIndex}`}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
              }}
            >
              {currentSlide.title}
            </h1>
          </div>
          <p 
            key={`desc-${currentIndex}`}
            className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
            }}
          >
            {currentSlide.description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
        <button 
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return
              setIsTransitioning(true)
              setIsVisible(false)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsTransitioning(false)
                setTimeout(() => {
                  setIsVisible(true)
                }, 50)
              }, 400)
            }}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}




