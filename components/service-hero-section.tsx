import Link from "next/link"

interface ServiceHeroSectionProps {
  title: string
  description: string
  breadcrumbs: string[]
}

export default function ServiceHeroSection({ title, description, breadcrumbs }: ServiceHeroSectionProps) {
  return (
    <section className="relative w-full h-[500px] bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/manufacturing-facility-sparks-metal-cutting.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
            {description}
          </p>
        </div>
        
        {/* Breadcrumbs */}
        <div className="absolute bottom-8 right-8 bg-blue-600/90 px-6 py-3 rounded">
          <div className="flex items-center gap-2 text-white text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <Link href={index === 0 ? "/" : "#"} className="hover:text-blue-200 transition">
                  {crumb}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-blue-200">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



