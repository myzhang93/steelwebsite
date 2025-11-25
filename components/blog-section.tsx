import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogSection() {
  const posts = [
    {
      image: "/manufacturing-facility-sparks-metal-cutting.jpg",
      date: "10 Feb 24",
      title: "The New Customer-Centric Post-Purchase Customer-Facing Strategy",
      description: "Exploring innovative approaches to customer engagement and satisfaction in the steel industry.",
      link: "#"
    },
    {
      image: "/molten-steel-industrial-furnace.jpg",
      date: "06 Feb 24",
      title: "Leveraging AI in Welding Operations with HR Integrated",
      description: "How artificial intelligence is revolutionizing welding processes and improving efficiency.",
      link: "#"
    },
    {
      image: "/oil-platform-sunset-offshore-industrial.jpg",
      date: "02 Feb 24",
      title: "Managing Disruptions: The Digital Twin for Supply Chain",
      description: "Understanding the role of digital twin technology in optimizing supply chain management.",
      link: "#"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          What's Going On In Our Blog?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay updated with the latest insights, trends, and innovations in the steel industry.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
                <a href={post.link} className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition">
                  READ MORE
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}



