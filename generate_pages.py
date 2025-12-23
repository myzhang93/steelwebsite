#!/usr/bin/env python3
# Script to generate all stainless steel overview pages

import os
import re

# Page configurations with grade-specific details
PAGES_CONFIG = {
    # 400 Series
    '430': {
        'series': '400',
        'path': 'app/products/400-series/430/page.tsx',
        'title': '430 Stainless Steel | Ferritic Grade - All Product Forms',
        'description': 'Explore 430 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Cost-effective ferritic grade with good corrosion resistance and magnetic properties.',
        'hero_desc': '430 stainless steel is a ferritic stainless steel with good corrosion resistance to atmospheric and mildly corrosive environments. It is magnetic and offers good formability, making it suitable for decorative applications.',
        'images': {
            'sheet': '/400/430/430sheet1.jpg',
            'coil': '/400/430/430coil1.jpg',
            'pipe': '/400/430/430pipe1.jpg',
            'fittings': '/400/430/430fittings1.jpg'
        },
        'markdown': 'app/400/430stainless steel.md',
        'applications': [
            'Automotive trim',
            'Kitchen appliances',
            'Decorative products',
            'Refrigerator liners',
            'Elevator doors',
            'Architectural panels',
            'Food processing equipment',
            'Furniture and fixtures'
        ],
        'properties': {
            'chromium': '16-18%',
            'carbon': '≤0.12%',
            'manganese': '≤1.0%',
            'silicon': '≤1.0%'
        },
        'key_props': ['Good Corrosion Resistance', 'Magnetic', 'Good Formability']
    },
    '446': {
        'series': '400',
        'path': 'app/products/400-series/446/page.tsx',
        'title': '446 Stainless Steel | High-Temperature Ferritic Grade - All Product Forms',
        'description': 'Explore 446 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. High-chromium ferritic alloy with excellent high-temperature oxidation resistance.',
        'hero_desc': '446 stainless steel is a high-chromium ferritic alloy that offers excellent resistance to high-temperature oxidation and corrosion. It is commonly used in applications where high heat resistance is required.',
        'images': {
            'sheet': '/400/446/446sheet1.jpg',
            'coil': '/400/446/446coil1.jpg',
            'pipe': '/400/446/446pipe1.jpg',
            'fittings': '/400/446/446fittings1.webp'
        },
        'markdown': 'app/400/446stainless steel.md',
        'applications': [
            'Furnace components',
            'Heat exchangers',
            'High-temperature industrial equipment',
            'Petrochemical processing',
            'Kiln components',
            'Recuperator tubes',
            'Thermal oxidizers',
            'Glass lehrs'
        ],
        'properties': {
            'chromium': '23-27%',
            'carbon': '≤0.20%',
            'manganese': '≤1.50%',
            'silicon': '≤1.00%'
        },
        'key_props': ['Excellent High-Temperature Oxidation Resistance', 'High Chromium Content', 'Resistant to Scaling']
    },
    '409': {
        'series': '400',
        'path': 'app/products/400-series/409/page.tsx',
        'title': '409 Stainless Steel | Automotive Exhaust Grade - All Product Forms',
        'description': 'Explore 409 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Cost-effective ferritic grade ideal for automotive exhaust systems.',
        'hero_desc': '409 stainless steel is a ferritic alloy often used for automotive exhaust systems due to its resistance to corrosion in high-temperature environments. It offers good resistance to heat and oxidation.',
        'images': {
            'sheet': '/400/409/409sheet1.jpg',
            'coil': '/400/409/409coil1.jpg',
            'pipe': '/400/409/409pipe1.jpg',
            'fittings': '/400/409/409fittings1.png'
        },
        'markdown': 'app/400/409-stainless steel.md',
        'applications': [
            'Automotive exhaust systems',
            'Exhaust manifolds',
            'Catalytic converters',
            'Automotive parts',
            'Heat exchangers',
            'Agricultural equipment',
            'Railway wagons',
            'Sugar industry tubing'
        ],
        'properties': {
            'chromium': '10.5-11.75%',
            'carbon': '0.08-0.20%',
            'manganese': '0.80-1.25%',
            'silicon': '≤1.00%'
        },
        'key_props': ['Heat Resistance', 'Oxidation Resistance', 'Cost-Effective']
    },
    '410S': {
        'series': '400',
        'path': 'app/products/400-series/410S/page.tsx',
        'title': '410S Stainless Steel | Low Carbon Ferritic Grade - All Product Forms',
        'description': 'Explore 410S stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Low-carbon version of 410 with enhanced weldability.',
        'hero_desc': '410S stainless steel is a low-carbon version of 410 stainless steel that offers enhanced weldability and resistance to stress corrosion cracking. It is often used in applications requiring moderate strength and good corrosion resistance.',
        'images': {
            'sheet': '/400/410S/410ssheet3.jpg',
            'coil': '/400/410S/410scoil1.webp',
            'pipe': '/400/410S/410spipe2.jpg',
            'fittings': '/400/410S/410sfittings1.jpg'
        },
        'markdown': 'app/400/410sstainless steel.md',
        'applications': [
            'Heat exchangers',
            'Pressure vessels',
            'Industrial applications',
            'Automotive exhaust systems',
            'Refinery piping',
            'Power plant ducts',
            'Distillation columns',
            'Petrochemical reactors'
        ],
        'properties': {
            'chromium': '11.5-13.5%',
            'carbon': '≤0.08%',
            'manganese': '≤1.0%',
            'silicon': '≤1.0%'
        },
        'key_props': ['Enhanced Weldability', 'Resistance to Stress Corrosion Cracking', 'Low Carbon']
    },
    # 500 Series
    '502': {
        'series': '500',
        'path': 'app/products/500-series/502/page.tsx',
        'title': '502 Stainless Steel | High-Temperature Ferritic Grade - All Product Forms',
        'description': 'Explore 502 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. High-chromium ferritic alloy with outstanding oxidation resistance up to 980°C.',
        'hero_desc': '502 stainless steel is a ferritic stainless steel alloy known for its outstanding high-temperature oxidation resistance and thermal fatigue resistance. With a maximum continuous service temperature of up to 980°C.',
        'images': {
            'sheet': '/500/502sheet1.jpg',
            'coil': '/500/502coil1.jpg',
            'pipe': '/500/502pipe1.jpg',
            'fittings': '/500/502fittings1.jpg'
        },
        'markdown': 'app/products/201stainless steel sheet.md',  # Placeholder
        'applications': [
            'Furnace parts',
            'Heat shields',
            'High-temperature equipment',
            'Heat exchangers',
            'Thermal processing',
            'Industrial furnaces',
            'Kiln components',
            'Power generation equipment'
        ],
        'properties': {
            'chromium': '4.0-6.0%',
            'carbon': '≤0.15%',
            'manganese': '≤1.0%',
            'silicon': '≤1.0%'
        },
        'key_props': ['Outstanding High-Temperature Oxidation Resistance', 'Thermal Fatigue Resistance', 'Cost-Effective']
    },
    '503': {
        'series': '500',
        'path': 'app/products/500-series/503/page.tsx',
        'title': '503 Stainless Steel | High-Temperature Ferritic Grade - All Product Forms',
        'description': 'Explore 503 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Excellent oxidation resistance up to 1000°C for furnace linings and heat shields.',
        'hero_desc': '503 stainless steel provides good oxidation resistance and is ideal for high-temperature applications. It offers excellent performance in environments where heat resistance and durability are critical.',
        'images': {
            'sheet': '/500/503sheet1.jpg',
            'coil': '/500/503coil1.jpg',
            'pipe': '/500/503pipe1.jpg',
            'fittings': '/500/503fittings1.jpg'
        },
        'markdown': 'app/products/201stainless steel sheet.md',  # Placeholder
        'applications': [
            'Furnace linings',
            'Heat shields',
            'High-temperature industrial applications',
            'Heat exchangers',
            'Thermal processing equipment',
            'Industrial furnaces',
            'Kiln components',
            'Power generation'
        ],
        'properties': {
            'chromium': '4.0-6.0%',
            'carbon': '≤0.15%',
            'manganese': '≤1.0%',
            'silicon': '≤1.0%'
        },
        'key_props': ['Good Oxidation Resistance', 'High-Temperature Performance', 'Durability']
    },
    '504': {
        'series': '500',
        'path': 'app/products/500-series/504/page.tsx',
        'title': '504 Stainless Steel | High-Temperature Ferritic Grade - All Product Forms',
        'description': 'Explore 504 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Resists scaling and oxidation, ideal for furnace parts and high-temperature applications.',
        'hero_desc': '504 stainless steel resists scaling and oxidation, making it ideal for use in furnace parts and high-temperature industrial applications. It maintains structural integrity at elevated temperatures.',
        'images': {
            'sheet': '/500/504sheet1.jpg',
            'coil': '/500/504coil1.jpg',
            'pipe': '/500/504pipe1.jpg',
            'fittings': '/500/504fittings1.webp'
        },
        'markdown': 'app/products/201stainless steel sheet.md',  # Placeholder
        'applications': [
            'Furnace parts',
            'High-temperature industrial applications',
            'Heat exchangers',
            'Thermal processing',
            'Industrial furnaces',
            'Kiln components',
            'Power generation',
            'Refinery equipment'
        ],
        'properties': {
            'chromium': '4.0-6.0%',
            'carbon': '≤0.15%',
            'manganese': '≤1.0%',
            'silicon': '≤1.0%'
        },
        'key_props': ['Scaling Resistance', 'Oxidation Resistance', 'High-Temperature Stability']
    },
    # 600 Series
    '630': {
        'series': '600',
        'path': 'app/products/600-series/630/page.tsx',
        'title': '630 Stainless Steel | Precipitation-Hardening Grade - All Product Forms',
        'description': 'Explore 630 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Precipitation-hardening alloy offering high strength and good corrosion resistance.',
        'hero_desc': '630 stainless steel is a precipitation-hardening alloy offering high strength and good corrosion resistance. It is ideal for applications requiring exceptional mechanical properties.',
        'images': {
            'sheet': '/600/630sheet1.jpg',
            'coil': '/600/630coil1.jpg',
            'pipe': '/600/630pipe1.jpg',
            'fittings': '/600/630fittings1.jpg'
        },
        'markdown': 'app/products/201stainless steel sheet.md',  # Placeholder
        'applications': [
            'High-stress components',
            'Aerospace applications',
            'Critical industrial equipment',
            'Precision components',
            'Marine applications',
            'Chemical processing',
            'Power generation',
            'Medical devices'
        ],
        'properties': {
            'chromium': '15.0-17.5%',
            'nickel': '3.0-5.0%',
            'copper': '3.0-5.0%',
            'carbon': '≤0.07%'
        },
        'key_props': ['High Strength', 'Good Corrosion Resistance', 'Precipitation-Hardenable']
    },
    '631': {
        'series': '600',
        'path': 'app/products/600-series/631/page.tsx',
        'title': '631 Stainless Steel | Precipitation-Hardening Grade - All Product Forms',
        'description': 'Explore 631 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Excellent fatigue resistance for high-stress applications.',
        'hero_desc': '631 stainless steel offers excellent fatigue resistance, making it suitable for high-stress applications where reliability and durability are paramount.',
        'images': {
            'sheet': '/600/631sheet1.jpg',
            'coil': '/600/631coil1.jpg',
            'pipe': '/600/631pipe1.jpg',
            'fittings': '/600/631fittings1.jpg'
        },
        'markdown': 'app/products/201stainless steel sheet.md',  # Placeholder
        'applications': [
            'High-stress applications',
            'Aerospace components',
            'Marine applications',
            'Precision machinery',
            'Medical equipment',
            'Chemical processing',
            'Power generation',
            'Industrial equipment'
        ],
        'properties': {
            'chromium': '16.0-18.0%',
            'nickel': '6.5-7.5%',
            'carbon': '≤0.09%',
            'manganese': '≤1.0%'
        },
        'key_props': ['Excellent Fatigue Resistance', 'High Strength', 'Reliability']
    },
    '640': {
        'series': '600',
        'path': 'app/products/600-series/640/page.tsx',
        'title': '640 Stainless Steel | Precipitation-Hardening Grade - All Product Forms',
        'description': 'Explore 640 stainless steel products including sheets, plates, coils, pipes, tubes, and fittings. Good high-temperature strength and oxidation resistance.',
        'hero_desc': '640 stainless steel provides good high-temperature strength and oxidation resistance. It is designed for applications requiring both mechanical strength and thermal stability.',
        'images': {
            'sheet': '/600/640sheet1.jpg',
            'coil': '/600/640coil1.jpg',
            'pipe': '/600/640pipe1.jpg',
            'fittings': '/600/640fittings1.jpg'
        },
        'markdown': 'app/products/201stainless steel sheet.md',  # Placeholder
        'applications': [
            'High-temperature industrial processes',
            'Industrial equipment',
            'Heat exchangers',
            'Furnace components',
            'Power generation',
            'Chemical processing',
            'Marine applications',
            'Aerospace components'
        ],
        'properties': {
            'chromium': '15.0-17.5%',
            'nickel': '3.0-5.0%',
            'carbon': '≤0.07%',
            'manganese': '≤1.0%'
        },
        'key_props': ['High-Temperature Strength', 'Oxidation Resistance', 'Thermal Stability']
    }
}

TEMPLATE = '''import type {{ Metadata }} from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {{ ArrowRight, Shield, Zap, Wrench }} from "lucide-react"
import {{ getMarkdownByPath }} from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"

export const metadata: Metadata = {{
  title: "{title}",
  description: "{description}",
}}

interface ProductCardProps {{
  title: string
  description: string
  image: string
  href: string
  features: string[]
}}

function ProductCard({{ title, description, image, href, features }}: ProductCardProps) {{
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={{image}}
          alt={{title}}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{{{{title}}}}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{{{{description}}}}</p>
        
        <Link
          href={{href}}
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-auto group/button"
        >
          View Details
          <ArrowRight className="ml-2 w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}}

const products = [
  {{
    title: "{grade} Stainless Steel Sheet & Plate",
    description: "{sheet_desc}",
    image: "{sheet_image}",
    href: "/products/stainless-steel-sheet/{grade}",
    features: [
      "Good corrosion resistance",
      "High strength",
      "Wide range of thicknesses",
      "Suitable for welding",
      "Long service life"
    ]
  }},
  {{
    title: "{grade} Stainless Steel Coil",
    description: "{coil_desc}",
    image: "{coil_image}",
    href: "/products/stainless-steel-coil/{grade}",
    features: [
      "Continuous length supply",
      "Consistent quality",
      "Easy to process",
      "Multiple finish options",
      "Cost-effective"
    ]
  }},
  {{
    title: "{grade} Stainless Steel Pipe & Tube",
    description: "{pipe_desc}",
    image: "{pipe_image}",
    href: "/products/stainless-steel-pipe-tube/{grade}",
    features: [
      "Various diameters available",
      "Excellent weldability",
      "Good mechanical properties",
      "Suitable for pressure applications",
      "Long service life"
    ]
  }},
  {{
    title: "{grade} Stainless Steel Fittings",
    description: "{fittings_desc}",
    image: "{fittings_image}",
    href: "/products/stainless-steel-fittings/{grade}",
    features: [
      "Precision manufacturing",
      "Multiple types available",
      "Easy installation",
      "Compatible with pipes",
      "Durable construction"
    ]
  }}
]

export default function StainlessSteel{Grade}OverviewPage() {{
  return (
    <>
      <Header />
      
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {grade} Stainless Steel
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {hero_desc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{prop1}</h3>
              <p className="text-gray-600 leading-relaxed">Excellent performance</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{prop2}</h3>
              <p className="text-gray-600 leading-relaxed">Superior properties</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{prop3}</h3>
              <p className="text-gray-600 leading-relaxed">Ideal choice</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {grade} stainless steel is widely used across various industries and applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications_list}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the key technical characteristics of {grade} stainless steel helps in selecting the right material for your application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemical Composition</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Chromium:</span>
                  <span className="font-semibold">{chromium}</span>
                </li>
                <li className="flex justify-between">
                  <span>Carbon:</span>
                  <span className="font-semibold">{carbon}</span>
                </li>
                <li className="flex justify-between">
                  <span>Manganese:</span>
                  <span className="font-semibold">{manganese}</span>
                </li>
                <li className="flex justify-between">
                  <span>Silicon:</span>
                  <span className="font-semibold">{silicon}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mechanical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Tensile Strength:</span>
                  <span className="font-semibold">≥480 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Yield Strength:</span>
                  <span className="font-semibold">≥275 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>Elongation:</span>
                  <span className="font-semibold">≥15%</span>
                </li>
                <li className="flex justify-between">
                  <span>Hardness:</span>
                  <span className="font-semibold">≤217 HB</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Density:</span>
                  <span className="font-semibold">7.75 g/cm³</span>
                </li>
                <li className="flex justify-between">
                  <span>Melting Point:</span>
                  <span className="font-semibold">1400-1450°C</span>
                </li>
                <li className="flex justify-between">
                  <span>Thermal Conductivity:</span>
                  <span className="font-semibold">16.3 W/m·K</span>
                </li>
                <li className="flex justify-between">
                  <span>Electrical Resistivity:</span>
                  <span className="font-semibold">0.72 μΩ·m</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Product Forms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of {grade} stainless steel products. Each form is designed 
              to meet specific application requirements and manufacturing needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {{products.map((product, idx) => (
              <ProductCard key={{idx}} {{...product}} />
            ))}}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <MarkdownContent content={{getMarkdownByPath('{markdown}')?.content || ''}} />
          </article>
        </div>
      </section>

      <Footer />
    </>
  )
}}
'''

def generate_applications_list(apps):
    items = []
    for app in apps:
        items.append(f'              <div key={{idx}} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">\n                <div className="flex items-start">\n                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />\n                  <p className="text-gray-700">{app}</p>\n                </div>\n              </div>')
    return '\n'.join([f'            {item}' for item in items])

for grade, config in PAGES_CONFIG.items():
    grade_upper = grade.upper() if len(grade) == 3 else grade
    grade_func = grade_upper.replace('S', 'S').replace('L', 'L')
    
    applications_html = generate_applications_list(config['applications'])
    
    content = TEMPLATE.format(
        title=config['title'],
        description=config['description'],
        grade=grade_upper,
        Grade=grade_func,
        hero_desc=config['hero_desc'],
        sheet_image=config['images']['sheet'],
        coil_image=config['images']['coil'],
        pipe_image=config['images']['pipe'],
        fittings_image=config['images']['fittings'],
        sheet_desc=f'High-quality {grade_upper} stainless steel sheets and plates.',
        coil_desc=f'Premium {grade_upper} stainless steel coils.',
        pipe_desc=f'Durable {grade_upper} stainless steel pipes and tubes.',
        fittings_desc=f'Precision-manufactured {grade_upper} stainless steel fittings.',
        prop1=config['key_props'][0],
        prop2=config['key_props'][1] if len(config['key_props']) > 1 else config['key_props'][0],
        prop3=config['key_props'][2] if len(config['key_props']) > 2 else config['key_props'][0],
        chromium=config['properties']['chromium'],
        carbon=config['properties']['carbon'],
        manganese=config['properties']['manganese'],
        silicon=config['properties']['silicon'],
        applications_list=applications_html,
        markdown=config['markdown']
    )
    
    # Create directory if it doesn't exist
    os.makedirs(os.path.dirname(config['path']), exist_ok=True)
    
    # Write file
    with open(config['path'], 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'Generated: {config["path"]}')

print('All pages generated!')

