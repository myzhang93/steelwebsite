"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface ServiceSidebarProps {
  currentService: string
}

export default function ServiceSidebar({ currentService }: ServiceSidebarProps) {
  const pathname = usePathname()
  
  const services = [
    { id: "cutting", name: "Cutting", href: "/capabilities/cutting" },
    { id: "welding", name: "Welding", href: "/capabilities/welding" },
    { id: "finishing", name: "Finishing", href: "/capabilities/finishing" },
    { id: "treating", name: "Treating", href: "/capabilities/treating" },
    { id: "engineering", name: "Engineering", href: "/capabilities/engineering" },
    { id: "logistics", name: "Logistics", href: "/capabilities/logistics" }
  ]

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden mb-8">
      <div className="bg-blue-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white">Our Services</h2>
      </div>
      <nav className="py-2">
        {services.map((service) => {
          const isActive = pathname === service.href || currentService === service.id
          return (
            <Link
              key={service.id}
              href={service.href}
              className={`block px-6 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {service.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}



