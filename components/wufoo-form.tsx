"use client"

import { useRouter } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

interface WufooFormProps {
  onSuccess?: () => void
}

export default function WufooForm({ onSuccess }: WufooFormProps) {
  const router = useRouter()

  useEffect(() => {
    // Load only form.css and theme.css, skip structure.css to avoid global styles
    const link2 = document.createElement("link")
    link2.rel = "stylesheet"
    link2.href = "/css/form.css"
    link2.id = "wufoo-form-css"
    document.head.appendChild(link2)

    const link3 = document.createElement("link")
    link3.rel = "stylesheet"
    link3.href = "/css/theme.css"
    link3.id = "wufoo-theme-css"
    document.head.appendChild(link3)

    return () => {
      const formCss = document.getElementById("wufoo-form-css")
      const themeCss = document.getElementById("wufoo-theme-css")
      if (formCss) document.head.removeChild(formCss)
      if (themeCss) document.head.removeChild(themeCss)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // 检查是否有文件
    const fileInput = formData.get("Field9") as File | null
    const hasFile = fileInput && fileInput.size > 0

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        // 不要设置 Content-Type，让浏览器自动设置（包含 boundary）
        body: formData,
      })

      if (response.ok) {
        form.reset()
        if (onSuccess) {
          onSuccess()
        }
        router.push("/thank-you")
      } else {
        const errorData = await response.json().catch(() => ({}))
        alert(errorData.error || "提交失败，请稍后重试")
      }
    } catch (error) {
      console.error("提交错误:", error)
      alert("提交失败，请稍后重试")
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* 限制 Wufoo CSS 只作用于表单容器 */
        .wufoo-form-wrapper #container {
          text-align: left !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          margin: 0 auto !important;
          width: 100% !important;
          max-width: 900px !important;
        }
        .wufoo-form-wrapper form.wufoo {
          margin: 0 !important;
          padding: 0 !important;
          position: relative;
        }
        /* 增加表单字段宽度 */
        .wufoo-form-wrapper .wufoo li {
          width: 100% !important;
        }
        /* name, phone, email 字段宽度为 message 的一半 */
        .wufoo-form-wrapper .wufoo li#foli19 input,
        .wufoo-form-wrapper .wufoo li#foli12 input,
        .wufoo-form-wrapper .wufoo li#foli23 input {
          width: 50% !important;
        }
        /* message 字段保持全宽 */
        .wufoo-form-wrapper .wufoo li#foli21 textarea {
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
        }
        /* 其他输入框默认全宽 */
        .wufoo-form-wrapper .wufoo input.small,
        .wufoo-form-wrapper .wufoo input.text {
          width: 100% !important;
        }
        /* 文件上传按钮 - 只样式化按钮部分，不影响文件名显示 */
        .wufoo-form-wrapper .wufoo input[type="file"] {
          font-size: 13px !important;
          padding: 0 !important;
        }
        .wufoo-form-wrapper .wufoo input[type="file"]::file-selector-button {
          background-color: #f5f5f5 !important;
          border: 1px solid #999 !important;
          border-radius: 4px !important;
          padding: 6px 12px !important;
          font-size: 13px !important;
          color: #333 !important;
          cursor: pointer !important;
          margin-right: 8px !important;
        }
        .wufoo-form-wrapper .wufoo input[type="file"]::file-selector-button:hover {
          background-color: #e8e8e8 !important;
        }
        /* 提交按钮样式 - 灰色方框样式，高度与选择文件按钮一致 */
        .wufoo-form-wrapper .wufoo .buttons input[type="submit"] {
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
        .wufoo-form-wrapper .wufoo .buttons input[type="submit"]:hover {
          background-color: #e8e8e8 !important;
        }
      `}} />
      <div className="wufoo-form-wrapper">
        <div id="container" className="ltr">
          <form
            id="form4"
            name="form4"
            className="wufoo topLabel page"
            acceptCharset="UTF-8"
            autoComplete="off"
            encType="multipart/form-data"
            method="post"
            noValidate
            onSubmit={handleSubmit}
          >
          <header id="header" className="info">
            <h2 className="0">Contact Us</h2>
            <div className="0"></div>
          </header>
          
          <ul>
            <li id="foli19" data-wufoo-field data-field-type="text" className="notranslate">
              <label className="desc" id="title19" htmlFor="Field19">
                Your Name
              </label>
              <div>
                <input
                  id="Field19"
                  name="Field19"
                  type="text"
                  className="field text small"
                  defaultValue=""
                  maxLength={255}
                  tabIndex={0}
                  placeholder=""
                />
              </div>
            </li>

            <li id="foli12" className="notranslate">
              <label className="desc" id="title12" htmlFor="Field12">
                Your Phone
              </label>
              <div>
                <input
                  id="Field12"
                  name="Field12"
                  type="text"
                  className="field text nospin small"
                  defaultValue=""
                  tabIndex={0}
                  placeholder=""
                />
              </div>
            </li>

            <li id="foli23" data-wufoo-field data-field-type="text" className="notranslate">
              <label className="desc" id="title23" htmlFor="Field23">
                Your Email
              </label>
              <div>
                <input
                  id="Field23"
                  name="Field23"
                  type="text"
                  className="field text small"
                  defaultValue=""
                  maxLength={255}
                  tabIndex={0}
                  placeholder=""
                />
              </div>
            </li>

            <li id="foli21" className="notranslate">
              <label className="desc" id="title21" htmlFor="Field21">
                Your Message
              </label>
              <div>
                <textarea
                  id="Field21"
                  name="Field21"
                  className="field textarea small"
                  spellCheck="true"
                  rows={5}
                  cols={50}
                  tabIndex={0}
                  onKeyUp={() => {}}
                  placeholder=""
                ></textarea>
              </div>
            </li>

            <li id="foli9" className="notranslate">
              <label className="desc" id="title9" htmlFor="Field9">
                Attach a File
              </label>
              <div>
                <input
                  id="Field9"
                  name="Field9"
                  type="file"
                  className="field file"
                  size={12}
                  data-file-max-size="50"
                  tabIndex={0}
                  data-wufoo-field="file-upload"
                />
              </div>
            </li>

            <li className="buttons">
              <div>
                <input
                  id="saveForm"
                  name="saveForm"
                  className="btTxt submit"
                  type="submit"
                  value="Submit"
                />
              </div>
            </li>
          </ul>
        </form>
        </div>
      </div>

      <Script src="/scripts/wufoo.js" strategy="afterInteractive" />
    </>
  )
}
