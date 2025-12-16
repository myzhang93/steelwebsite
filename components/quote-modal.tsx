"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import WufooForm from "./wufoo-form"

interface QuoteModalProps {
  open: boolean
  onClose: () => void
  source?: string
}

export default function QuoteModal({ open, onClose, source }: QuoteModalProps) {
  useEffect(() => {
    // 当模态框打开时，阻止背景滚动
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  const handleSuccess = () => {
    onClose()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        // 点击背景关闭模态框
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* 模态框内容 */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10">
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* 表单内容 */}
        <div className="p-6 md:p-8">
          <WufooForm onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  )
}




