"use client"

import Link from "next/link"
import Image from "next/image"

export default function FoodCateringHeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/food-catering-stainless-steel.jpg"
          alt="Food and Catering Kitchen"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-400">
          Stainless Steel Sheets in the Food and Catering Industry
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          In the food and catering industry, stainless steel sheets play a crucial role in ensuring health, preserving 
          flavor, and maintaining aesthetic appeal. From professional kitchens to dining establishments, stainless steel 
          provides the foundation for equipment, surfaces, and utensils that meet the highest standards of hygiene and 
          performance. This versatile material has become indispensable in creating safe, efficient, and beautiful food 
          service environments.
        </p>
        <Link
          href="#quote-form"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-lg transition"
        >
          Get A Quick Quote
        </Link>
      </div>
    </section>
  )
}

