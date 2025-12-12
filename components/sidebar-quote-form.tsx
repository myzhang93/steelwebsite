"use client"

import { useEffect, useRef } from "react"
import WufooForm from "./wufoo-form"

interface SidebarQuoteFormProps {
  onSuccess?: () => void
  source?: string
}

export default function SidebarQuoteForm({ onSuccess, source }: SidebarQuoteFormProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 确保表单内容始终从顶部开始显示
    if (wrapperRef.current) {
      const scrollContainer = wrapperRef.current.closest('[class*="overflow-y-auto"]')
      if (scrollContainer) {
        (scrollContainer as HTMLElement).scrollTop = 0
      }
    }
  }, [])

  return (
    <div ref={wrapperRef} className="sidebar-quote-form-wrapper">
      <style dangerouslySetInnerHTML={{__html: `
        /* 侧边栏表单样式优化 - 更紧凑 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper #container {
          max-width: 100% !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        /* 保留 Contact Us 标题，但减小上边距 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper #header {
          margin-bottom: 8px !important;
          padding-bottom: 4px !important;
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        .sidebar-quote-form-wrapper .wufoo-form-wrapper #header h2 {
          font-size: 18px !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        /* 大幅减小字段之间的间距 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo li {
          width: 100% !important;
          margin-bottom: 8px !important;
          padding: 0 !important;
        }
        /* 所有输入框全宽 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo li#foli19 input,
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo li#foli12 input,
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo li#foli23 input {
          width: 100% !important;
        }
        /* 文本域全宽，减少高度 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo li#foli21 textarea {
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
          height: 80px !important;
        }
        /* 字体大小调整 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo label {
          font-size: 13px !important;
          margin-bottom: 3px !important;
          display: block !important;
        }
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo input,
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo textarea {
          font-size: 13px !important;
          padding: 6px 8px !important;
        }
        /* 减少标签和输入框之间的间距 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo li > div {
          margin-top: 2px !important;
        }
        /* 文件上传字段间距 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo li#foli9 {
          margin-bottom: 8px !important;
        }
        /* 文件上传按钮 - 只样式化按钮部分，不影响文件名显示 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo input[type="file"] {
          font-size: 13px !important;
          padding: 0 !important;
        }
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo input[type="file"]::file-selector-button {
          background-color: #f5f5f5 !important;
          border: 1px solid #999 !important;
          border-radius: 4px !important;
          padding: 6px 12px !important;
          font-size: 13px !important;
          color: #333 !important;
          cursor: pointer !important;
          margin-right: 8px !important;
        }
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo input[type="file"]::file-selector-button:hover {
          background-color: #e8e8e8 !important;
        }
        /* 提交按钮样式和间距 - 灰色方框样式，高度与选择文件按钮一致 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo .buttons {
          margin-top: 4px !important;
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo .buttons input[type="submit"] {
          background-color: #f5f5f5 !important;
          border: 1px solid #999 !important;
          border-radius: 4px !important;
          padding: 6px 16px !important;
          font-size: 13px !important;
          color: #333 !important;
          cursor: pointer !important;
          width: auto !important;
          min-width: 100px !important;
          height: auto !important;
          line-height: 1.5 !important;
        }
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo .buttons input[type="submit"]:hover {
          background-color: #e8e8e8 !important;
        }
        /* 减小表单容器的内边距 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper form.wufoo {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        /* 移除不必要的内边距 */
        .sidebar-quote-form-wrapper .wufoo-form-wrapper .wufoo ul {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}} />
      <WufooForm onSuccess={onSuccess} />
    </div>
  )
}

