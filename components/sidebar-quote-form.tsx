"use client"

import WufooForm from "./wufoo-form"

interface SidebarQuoteFormProps {
  source?: string
}

export default function SidebarQuoteForm({ source }: SidebarQuoteFormProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* 侧边栏表单样式优化 */
        .sidebar-quote-form .wufoo-form-wrapper .wufoo li#foli19 input,
        .sidebar-quote-form .wufoo-form-wrapper .wufoo li#foli12 input,
        .sidebar-quote-form .wufoo-form-wrapper .wufoo li#foli23 input {
          width: 100% !important;
        }
        .sidebar-quote-form .wufoo-form-wrapper #container {
          max-width: 100% !important;
        }
      `}} />
      <div className="sidebar-quote-form">
        <WufooForm />
      </div>
    </>
  )
}

