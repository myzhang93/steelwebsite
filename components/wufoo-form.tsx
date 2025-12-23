"use client"

import Script from "next/script"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"

interface WufooFormProps {
  onSuccess?: () => void
}

function WufooForm({ onSuccess }: WufooFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const submitErrorRef = useRef<string | null>(null)
  const isSubmittingRef = useRef(false)
  
  useEffect(() => {
    submitErrorRef.current = submitError
    isSubmittingRef.current = isSubmitting
  }, [submitError, isSubmitting])
  
  const wufooActionUrl = "https://wxlanyunadmin.wufoo.com/forms/r1pebtt51el7qt8/"
  
  useEffect(() => {
    let iframe = document.getElementById("hidden_iframe") as HTMLIFrameElement
    if (!iframe) {
      iframe = document.createElement("iframe")
      iframe.name = "hidden_iframe"
      iframe.id = "hidden_iframe"
      iframe.style.display = "none"
      iframe.style.width = "0"
      iframe.style.height = "0"
      iframe.style.border = "none"
      iframe.style.position = "absolute"
      iframe.style.left = "-9999px"
      document.body.appendChild(iframe)
    }

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

    let formSubmitted = false
    let jumpTimer: NodeJS.Timeout | null = null
    let submitTimeoutTimer: NodeJS.Timeout | null = null
    let iframeLoadCount = 0
    let isFormSubmitting = false
    let submitTime = 0

    iframe.onload = () => {
      iframeLoadCount++
      
      if (isFormSubmitting && iframeLoadCount >= 1) {
        if (submitTimeoutTimer) {
          clearTimeout(submitTimeoutTimer)
          submitTimeoutTimer = null
        }
        if (jumpTimer) {
          clearTimeout(jumpTimer)
        }
        
        jumpTimer = setTimeout(() => {
          isFormSubmitting = false
          formSubmitted = true
          setIsSubmitting(false)
          if (onSuccess) {
            onSuccess()
          }
          router.push("/thank-you")
        }, 1000)
      }
    }

    // Function to hide honeypot field
    const hideHoneypotField = () => {
      const form = document.getElementById("form4") as HTMLFormElement
      if (form) {
        // Find all labels and check for "Do Not Fill This Out" text
        const labels = form.querySelectorAll('label.desc')
        labels.forEach((label) => {
          const labelText = label.textContent || label.innerText
          if (labelText && labelText.toLowerCase().includes('do not fill this out')) {
            const listItem = label.closest('li')
            if (listItem) {
              listItem.style.display = 'none'
              listItem.style.visibility = 'hidden'
              listItem.style.height = '0'
              listItem.style.overflow = 'hidden'
            }
          }
        })
      }
    }

    let handleFormSubmit: ((e: Event) => void) | null = null
    let form: HTMLFormElement | null = null
    const setupFormListener = () => {
      form = document.getElementById("form4") as HTMLFormElement
      if (form) {
        // Hide honeypot field
        hideHoneypotField()
        handleFormSubmit = (e: Event) => {
          setIsSubmitting(true)
          setSubmitError(null)
          
          const nameField = form.querySelector('#Field19') as HTMLInputElement
          const emailField = form.querySelector('#Field23') as HTMLInputElement
          
          const hasName = nameField && nameField.value.trim().length > 0
          const hasEmail = emailField && emailField.value.trim().length > 0
          
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          const isValidEmail = hasEmail && emailRegex.test(emailField.value.trim())
          
          if (hasName && isValidEmail) {
            formSubmitted = true
            isFormSubmitting = true
            submitTime = Date.now()
            iframeLoadCount = 0
            
            if (submitTimeoutTimer) {
              clearTimeout(submitTimeoutTimer)
            }
            submitTimeoutTimer = setTimeout(() => {
              if (isSubmittingRef.current && isFormSubmitting) {
                console.warn('15 second timeout - iframe did not respond, but form was submitted to Wufoo')
              }
            }, 15000)
          } else {
            if (e) {
              e.preventDefault()
              e.stopPropagation()
            }
            formSubmitted = false
            isFormSubmitting = false
            
            if (!hasName) {
              setSubmitError('Please enter your name')
            } else if (!hasEmail) {
              setSubmitError('Please enter your email')
            } else if (!isValidEmail) {
              setSubmitError('Please enter a valid email address')
            }
            
            setTimeout(() => {
              setIsSubmitting(false)
            }, 1000)
            return false
          }
        }
        form.addEventListener("submit", handleFormSubmit)
      }
    }
    
    const setupTimer = setTimeout(() => {
      setupFormListener()
      // Also try to hide honeypot field after a delay in case it loads later
      setTimeout(hideHoneypotField, 500)
    }, 100)

    return () => {
      clearTimeout(setupTimer)
      const formCss = document.getElementById("wufoo-form-css")
      const themeCss = document.getElementById("wufoo-theme-css")
      if (formCss) document.head.removeChild(formCss)
      if (themeCss) document.head.removeChild(themeCss)
      const iframe = document.getElementById("hidden_iframe")
      if (iframe) document.body.removeChild(iframe)
      if (jumpTimer) {
        clearTimeout(jumpTimer)
      }
      if (submitTimeoutTimer) {
        clearTimeout(submitTimeoutTimer)
      }
      if (form && handleFormSubmit) {
        form.removeEventListener("submit", handleFormSubmit)
      }
    }
  }, [router, onSuccess])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Form onSubmit handler called - allowing default submission')
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .wufoo-form-wrapper #container {
          text-align: left !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          margin: 0 auto !important;
          width: 100% !important;
          max-width: 600px !important;
        }
        .wufoo-form-wrapper form.wufoo {
          margin: 0 !important;
          padding: 0 !important;
          position: relative;
        }
        .wufoo-form-wrapper #logo {
          display: none !important;
        }
        .wufoo-form-wrapper .powertiny {
          display: none !important;
        }
        .wufoo-form-wrapper .wufoo li {
          width: 100% !important;
        }
        .wufoo-form-wrapper .wufoo li#foli19 input,
        .wufoo-form-wrapper .wufoo li#foli12 input,
        .wufoo-form-wrapper .wufoo li#foli23 input {
          width: 50% !important;
        }
        .wufoo-form-wrapper .wufoo li#foli21 textarea {
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
        }
        .wufoo-form-wrapper .wufoo input.small,
        .wufoo-form-wrapper .wufoo input.text {
          width: 100% !important;
        }
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
        .wufoo-form-wrapper .wufoo .buttons input[type="submit"] {
          background-color: #f5f5f5 !important;
          border: 1px solid #999 !important;
          border-radius: 4px !important;
          padding: 6px 32px !important;
          font-size: 16px !important;
          color: #333 !important;
          cursor: pointer !important;
          width: auto !important;
          min-width: 180px !important;
          height: auto !important;
          line-height: 1.5 !important;
        }
        .wufoo-form-wrapper .wufoo .buttons input[type="submit"]:hover:not(:disabled) {
          background-color: #e8e8e8 !important;
        }
        .wufoo-form-wrapper .wufoo .buttons input[type="submit"]:disabled {
          opacity: 0.6 !important;
          cursor: not-allowed !important;
        }
        .wufoo-form-wrapper .wufoo li.buttons {
          text-align: center !important;
        }
        .wufoo-form-wrapper .wufoo li.buttons > div {
          text-align: center !important;
          display: flex !important;
          justify-content: center !important;
        }
        /* Hide honeypot field "Do Not Fill This Out" */
        .wufoo-form-wrapper .wufoo li.honeypot,
        .wufoo-form-wrapper .wufoo li[style*="position: absolute"],
        .wufoo-form-wrapper .wufoo li[style*="left: -9999px"] {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          overflow: hidden !important;
        }
      `}} />
      <div className="wufoo-form-wrapper">
        <div id="container" className="ltr">
          <h1 id="logo">
            <a href="http://www.wufoo.com" title="Powered by Wufoo">Wufoo</a>
          </h1>
          
          <form
            id="form4"
            name="form4"
            className="wufoo topLabel page"
            acceptCharset="UTF-8"
            autoComplete="off"
            encType="multipart/form-data"
            method="post"
            action={wufooActionUrl}
            target="hidden_iframe"
            noValidate
            onSubmit={handleSubmit}
          >
          <header id="header" className="info">
            <h2 className="0">Contact Us</h2>
            <div className="0"></div>
          </header>
          
          <ul>
            <li id="foli19" data-wufoo-field data-field-type="text" className="notranslate      ">
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

            <li id="foli12" className="notranslate      ">
              <label className="desc " id="title12" htmlFor="Field12">
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

            <li id="foli23" data-wufoo-field data-field-type="text" className="notranslate      ">
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

            <li id="foli21" className="notranslate      ">
              <label className="desc" id="title21" htmlFor="Field21">
                Your Message
              </label>
              <div>
                <textarea
                  id="Field21"
                  name="Field21"
                  className="field textarea small"
                  spellCheck="true"
                  rows={10}
                  cols={50}
                  tabIndex={0}
                  onKeyUp={() => {
                    if (typeof (window as any).validateRange === 'function') {
                      (window as any).validateRange(21, 'character')
                    }
                  }}
                  placeholder=""
                ></textarea>
              </div>
            </li>

            <li id="foli9" className="notranslate       ">
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
                  data-file-max-size="10"
                  tabIndex={0}
                  data-wufoo-field="file-upload"
                />
              </div>
            </li>

            <li className="buttons ">
              <div>
                <input
                  id="saveForm"
                  name="saveForm"
                  className="btTxt submit"
                  type="submit"
                  value={isSubmitting ? "Submitting..." : "Submit"}
                  disabled={isSubmitting}
                  style={{
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                />
              </div>
              {submitError && (
                <div style={{
                  marginTop: '12px',
                  padding: '8px 12px',
                  backgroundColor: '#fee',
                  border: '1px solid #fcc',
                  borderRadius: '4px',
                  color: '#c33',
                  fontSize: '14px'
                }}>
                  {submitError}
                </div>
              )}
            </li>
          </ul>
        </form>
        </div>
      </div>

      <Script src="/scripts/wufoo.js" strategy="afterInteractive" />
    </>
  )
}

export default WufooForm

