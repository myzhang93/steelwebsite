export default function ProductCTABanner() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/industrial-manufacturing-steel-production.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Empower Your Creations with Shanxi Steel's 200 Series: Affordable Strength, Timeless Elegance
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded font-semibold text-lg transition">
          Learn More
        </button>
      </div>
    </section>
  )
}




