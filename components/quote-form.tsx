"use client"

import WufooForm from "./wufoo-form"

interface QuoteFormProps {
  onSuccess?: () => void
  source?: string
}

export default function QuoteForm({ onSuccess, source }: QuoteFormProps) {
  return <WufooForm onSuccess={onSuccess} />
}




