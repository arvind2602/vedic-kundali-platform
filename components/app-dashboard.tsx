"use client"

import { useState } from "react"
import { BirthDetailsForm } from "@/components/birth-details-form"
import { KundaliVisualization } from "@/components/kundali-visualization"
import { PersonalizedReports } from "@/components/personalized-reports"
import { Dashboard } from "@/components/dashboard"
import { KundaliMatching } from "@/components/kundali-matching"
import { TransitPredictions } from "@/components/transit-predictions"
import { AdvancedFeatures } from "@/components/advanced-features"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

type KundaliData = {
  id: string
  birthDate: string
  birthTime: string
  birthLocation: string
  latitude: number
  longitude: number
  timezone: string
  name: string
  gender: string
  createdAt: string
}

type ViewMode = "input" | "visualization" | "reports" | "dashboard" | "matching" | "transit" | "advanced"

interface AppDashboardProps {
  onBackToHome: () => void
}

export function AppDashboard({ onBackToHome }: AppDashboardProps) {
  const [kundaliData, setKundaliData] = useState<KundaliData | null>(null)
  const [savedKundalis, setSavedKundalis] = useState<KundaliData[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>("input")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleKundaliGenerated = (data: KundaliData) => {
    setKundaliData(data)
    setViewMode("visualization")
  }

  const handleSaveKundali = () => {
    if (kundaliData) {
      const updated = [...savedKundalis, kundaliData]
      setSavedKundalis(updated)
      localStorage.setItem("savedKundalis", JSON.stringify(updated))
    }
  }

  const handleLoadKundali = (data: KundaliData) => {
    setKundaliData(data)
    setViewMode("visualization")
  }

  const navItems = [
    { label: "Generate", mode: "input" as ViewMode },
    ...(kundaliData
      ? [
          { label: "Chart", mode: "visualization" as ViewMode },
          { label: "Reports", mode: "reports" as ViewMode },
          { label: "Matching", mode: "matching" as ViewMode },
          { label: "Transits", mode: "transit" as ViewMode },
          { label: "Remedies", mode: "advanced" as ViewMode },
        ]
      : []),
    { label: "Dashboard", mode: "dashboard" as ViewMode },
  ]

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-saffron shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-serif font-bold text-saffron">ॐ</div>
              <h1 className="text-2xl font-serif font-bold text-dark-gray">Vedic Kundali</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.mode}
                  onClick={() => setViewMode(item.mode)}
                  variant={viewMode === item.mode ? "default" : "outline"}
                  className={
                    viewMode === item.mode
                      ? "bg-saffron hover:bg-saffron-light text-white"
                      : "border-saffron text-saffron hover:bg-cream"
                  }
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={onBackToHome}
                variant="outline"
                className="border-maroon text-maroon hover:bg-red-50 bg-transparent"
              >
                Home
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4">
              {navItems.map((item) => (
                <Button
                  key={item.mode}
                  onClick={() => {
                    setViewMode(item.mode)
                    setMobileMenuOpen(false)
                  }}
                  variant={viewMode === item.mode ? "default" : "outline"}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              ))}
              <Button onClick={onBackToHome} variant="outline" className="w-full justify-start bg-transparent">
                Home
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {viewMode === "input" && <BirthDetailsForm onKundaliGenerated={handleKundaliGenerated} />}
        {viewMode === "visualization" && kundaliData && (
          <div className="space-y-6">
            <KundaliVisualization data={kundaliData} />
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={handleSaveKundali} className="bg-green-600 hover:bg-green-700 text-white">
                Save Kundali
              </Button>
            </div>
          </div>
        )}
        {viewMode === "reports" && kundaliData && <PersonalizedReports data={kundaliData} />}
        {viewMode === "dashboard" && <Dashboard savedKundalis={savedKundalis} onLoadKundali={handleLoadKundali} />}
        {viewMode === "matching" && kundaliData && <KundaliMatching primaryKundali={kundaliData} />}
        {viewMode === "transit" && kundaliData && <TransitPredictions data={kundaliData} />}
        {viewMode === "advanced" && kundaliData && <AdvancedFeatures data={kundaliData} />}
      </main>
    </div>
  )
}
