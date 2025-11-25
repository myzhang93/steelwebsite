"use client"

import { X } from "lucide-react"
import QuoteForm from "./quote-form"

interface QuoteModalProps {
  open: boolean
  onClose: () => void
  source?: string
}

export default function QuoteModal({ open, onClose, source }: QuoteModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Get A Quote</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="p-6">
          <QuoteForm onSuccess={onClose} source={source} />
        </div>
      </div>
    </div>
  )
}



