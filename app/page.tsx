"use client"

import { useState, useEffect } from "react"
import { BirthDetailsForm } from "@/components/birth-details-form"
import { KundaliVisualization } from "@/components/kundali-visualization"
import { PersonalizedReports } from "@/components/personalized-reports"
import { Dashboard } from "@/components/dashboard"
import { KundaliMatching } from "@/components/kundali-matching"
import { TransitPredictions } from "@/components/transit-predictions"
import { Button } from "@/components/ui/button"

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

type ViewMode = "input" | "visualization" | "reports" | "dashboard" | "matching" | "transit"

export default function Home() {
  const [kundaliData, setKundaliData] = useState<KundaliData | null>(null)
  const [savedKundalis, setSavedKundalis] = useState<KundaliData[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>("input")

  // Load saved Kundalis from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("savedKundalis")
    if (saved) {
      setSavedKundalis(JSON.parse(saved))
    }
  }, [])

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Vedic Kundali Platform</h1>
          <p className="text-purple-200">Discover your cosmic blueprint through Vedic astrology</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Button
            onClick={() => setViewMode("input")}
            variant={viewMode === "input" ? "default" : "outline"}
            className={viewMode === "input" ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            Generate Kundali
          </Button>
          {kundaliData && (
            <>
              <Button
                onClick={() => setViewMode("visualization")}
                variant={viewMode === "visualization" ? "default" : "outline"}
                className={viewMode === "visualization" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                View Chart
              </Button>
              <Button
                onClick={() => setViewMode("reports")}
                variant={viewMode === "reports" ? "default" : "outline"}
                className={viewMode === "reports" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Reports
              </Button>
              <Button
                onClick={() => setViewMode("matching")}
                variant={viewMode === "matching" ? "default" : "outline"}
                className={viewMode === "matching" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Kundali Matching
              </Button>
              <Button
                onClick={() => setViewMode("transit")}
                variant={viewMode === "transit" ? "default" : "outline"}
                className={viewMode === "transit" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Transits
              </Button>
            </>
          )}
          <Button
            onClick={() => setViewMode("dashboard")}
            variant={viewMode === "dashboard" ? "default" : "outline"}
            className={viewMode === "dashboard" ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            Dashboard
          </Button>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          {viewMode === "input" && <BirthDetailsForm onKundaliGenerated={handleKundaliGenerated} />}
          {viewMode === "visualization" && kundaliData && (
            <div className="space-y-6">
              <KundaliVisualization data={kundaliData} />
              <div className="flex gap-4 justify-center">
                <Button onClick={handleSaveKundali} className="bg-green-600 hover:bg-green-700">
                  Save Kundali
                </Button>
              </div>
            </div>
          )}
          {viewMode === "reports" && kundaliData && <PersonalizedReports data={kundaliData} />}
          {viewMode === "dashboard" && <Dashboard savedKundalis={savedKundalis} onLoadKundali={handleLoadKundali} />}
          {viewMode === "matching" && kundaliData && <KundaliMatching primaryKundali={kundaliData} />}
          {viewMode === "transit" && kundaliData && <TransitPredictions data={kundaliData} />}
        </div>
      </div>
    </main>
  )
}
