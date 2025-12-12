import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeroSection from "@/components/page-hero-section"
import { Factory, Award, Users, Globe, Target, Shield, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <PageHeroSection
        title="About Shanxi Steel"
        description="A Leading Global Supplier of Premium Stainless Steel Products"
        backgroundImage="/modern-manufacturing-facility.png"
      />

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Shanxi Steel has been a leading force in the global stainless steel industry for over four decades. 
                Founded with a vision to revolutionize steel manufacturing, we have consistently delivered superior 
                quality products that meet and exceed international standards.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Our commitment to excellence, combined with cutting-edge technology and a dedicated team of 
                professionals, has established us as a trusted partner for businesses worldwide. From construction 
                to manufacturing, our steel products power industries across the globe.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                With state-of-the-art facilities in Wuxi City, Jiangsu Province, and a relentless focus on 
                innovation, Shanxi Steel continues to set new benchmarks in quality, sustainability, and customer 
                satisfaction.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Factory className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">40+ Years Experience</h4>
                    <p className="text-gray-600">Four decades of excellence in steel manufacturing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Reach</h4>
                    <p className="text-gray-600">Serving customers in over 50 countries worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">ISO Certified</h4>
                    <p className="text-gray-600">ISO 9001 quality management system certified</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-gray-600">500+ skilled professionals and engineers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Shanxi Steel, our mission is to deliver superior quality stainless steel products that empower 
                industries and drive global progress. We are committed to manufacturing excellence, ensuring every 
                product meets the highest standards of durability, precision, and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe in building lasting relationships with our customers by providing exceptional service, 
                customized solutions, and unwavering support throughout their journey with us.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our dedication to continuous improvement and innovation positions us as a premier global supplier, 
                ready to meet the evolving needs of industries worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through strategic investments in technology, sustainable practices, and talent development, we are 
                building a future where Shanxi Steel remains at the forefront of the global stainless steel industry.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To become the world's most trusted and innovative stainless steel supplier, recognized for our 
                commitment to quality, sustainability, and customer success. We envision a future where our products 
                and solutions contribute to building a more sustainable and prosperous world.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Through continuous innovation, strategic partnerships, and a customer-centric approach, we aim to 
                expand our global footprint while maintaining the highest standards of excellence in everything we do.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We strive to be the preferred choice for businesses seeking reliable, high-quality stainless steel 
                solutions that drive their success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                Uncompromising commitment to delivering products that exceed industry standards and customer expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Putting our customers at the heart of everything we do, ensuring their success is our success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our processes and products through cutting-edge technology and creative solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Conducting business with honesty, transparency, and ethical practices in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Shanxi Steel</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Product Range</h3>
              <p className="text-gray-600">
                From 200 to 600 series stainless steel, we offer a complete range of products including coils, 
                sheets, plates, pipes, tubes, and fittings in various grades and finishes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                Our engineering team works closely with customers to provide customized solutions tailored to 
                specific project requirements and applications.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Logistics</h3>
              <p className="text-gray-600">
                With established logistics networks, we ensure timely delivery to customers worldwide, backed by 
                reliable shipping and handling services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous quality testing and inspection to ensure it meets international 
                standards and specifications.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer competitive pricing without compromising on quality, providing excellent value for our 
                customers' investments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our technical support team is available 24/7 to assist with product selection, technical queries, 
                and after-sales service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your stainless steel needs and discover how we can help 
            your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

