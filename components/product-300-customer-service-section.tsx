import Image from "next/image"

export default function Product300CustomerServiceSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Exceptional Customer Service and Support
        </h2>
        <p className="text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
          We pride ourselves on our customer-centric approach. Our dedicated team is committed to 
          providing exceptional service, timely delivery, and comprehensive support throughout your entire project. 
          From initial consultation to final delivery, we work closely with our clients to understand their specific 
          requirements and deliver solutions that exceed expectations. Our responsive customer service ensures that 
          your questions are answered promptly and your needs are met with professionalism and expertise.
        </p>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/Modern-Industrial-Plant.webp"
              alt="Modern Industrial Plant"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/steel-plant-worker-iStock-143690125.jpg"
              alt="Steel Plant Worker"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}



