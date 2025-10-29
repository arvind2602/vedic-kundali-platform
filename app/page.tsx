"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing-page"
import { AppDashboard } from "@/components/app-dashboard"

export default function Home() {
  const [showApp, setShowApp] = useState(false)

  return showApp ? (
    <AppDashboard onBackToHome={() => setShowApp(false)} />
  ) : (
    <LandingPage onGetStarted={() => setShowApp(true)} />
  )
}
