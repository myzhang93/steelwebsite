import { Shield, Check } from "lucide-react"

export default function SafetySection() {
  return (
    <section className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-4 rounded-full">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Health & Safety
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              Shanxi Steel is deeply committed to maintaining the highest health and safety standards 
              for our employees, customers, and the environment. We implement rigorous safety protocols 
              and continuously invest in training and equipment to ensure a safe working environment 
              and sustainable operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}




