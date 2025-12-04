import type { Metadata } from "next"
import { Merriweather_Sans } from "next/font/google"
import "./globals.css"

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
})

export const metadata: Metadata = {
  title: "Steel Website",
  description: "Steel company website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={merriweatherSans.variable}>{children}</body>
    </html>
  )
}
