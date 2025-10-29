import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Playfair_Display, Open_Sans, Noto_Sans_Devanagari, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })
const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })
const notoSansDevanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Vedic Kundali Platform - Birth Chart & Astrology",
  description:
    "Discover your cosmic blueprint through authentic Vedic astrology. Generate your birth chart, get personalized insights, and explore your destiny.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
