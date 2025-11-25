export default function ClientsSection() {
  const clients = [
    { name: "Electrolux", logo: "/placeholder-logo.png" },
    { name: "TATA STEEL", logo: "/placeholder-logo.png" },
    { name: "BECHTEL", logo: "/placeholder-logo.png" },
    { name: "VINCI", logo: "/placeholder-logo.png" }
  ]

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="text-gray-400 font-bold text-xl">{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



