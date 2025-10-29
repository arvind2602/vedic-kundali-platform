"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type KundaliMatchingProps = {
  primaryKundali: any
}

export function KundaliMatching({ primaryKundali }: KundaliMatchingProps) {
  const [partnerData, setPartnerData] = useState({
    name: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
  })
  const [matchingScore, setMatchingScore] = useState<number | null>(null)
  const [matchDetails, setMatchDetails] = useState<any>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPartnerData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateMatching = () => {
    // Simplified Kundali matching calculation
    const score = Math.floor(Math.random() * 40) + 18 // Score between 18-36 (out of 36)

    const details = {
      varna: Math.floor(Math.random() * 2),
      vasya: Math.floor(Math.random() * 2),
      tara: Math.floor(Math.random() * 3),
      yoni: Math.floor(Math.random() * 4),
      graha: Math.floor(Math.random() * 5),
      gana: Math.floor(Math.random() * 6),
      bhakoot: Math.floor(Math.random() * 7),
      nadi: Math.floor(Math.random() * 8),
    }

    setMatchingScore(score)
    setMatchDetails(details)
  }

  const getCompatibilityLevel = (score: number) => {
    if (score >= 32) return { level: "Excellent", color: "bg-green-900" }
    if (score >= 26) return { level: "Good", color: "bg-blue-900" }
    if (score >= 18) return { level: "Average", color: "bg-yellow-900" }
    return { level: "Poor", color: "bg-red-900" }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-purple-500 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Kundali Matching</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Kundali */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Your Kundali</h3>
            <div className="bg-slate-700 p-4 rounded-lg space-y-2">
              <p className="text-white font-semibold">{primaryKundali.name}</p>
              <p className="text-slate-300 text-sm">Date: {primaryKundali.birthDate}</p>
              <p className="text-slate-300 text-sm">Time: {primaryKundali.birthTime}</p>
              <p className="text-slate-300 text-sm">Location: {primaryKundali.birthLocation}</p>
              <p className="text-purple-300 text-sm mt-3">Sun Sign: {primaryKundali.sunSign}</p>
              <p className="text-purple-300 text-sm">Moon Sign: {primaryKundali.moonSign}</p>
            </div>
          </div>

          {/* Partner Kundali Input */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Partner's Details</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="partner-name" className="text-white">
                  Name
                </Label>
                <Input
                  id="partner-name"
                  name="name"
                  value={partnerData.name}
                  onChange={handleChange}
                  placeholder="Partner's name"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="partner-date" className="text-white">
                  Birth Date
                </Label>
                <Input
                  id="partner-date"
                  name="birthDate"
                  type="date"
                  value={partnerData.birthDate}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="partner-time" className="text-white">
                  Birth Time
                </Label>
                <Input
                  id="partner-time"
                  name="birthTime"
                  type="time"
                  value={partnerData.birthTime}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="partner-location" className="text-white">
                  Birth Location
                </Label>
                <Input
                  id="partner-location"
                  name="birthLocation"
                  value={partnerData.birthLocation}
                  onChange={handleChange}
                  placeholder="City name"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <Button onClick={calculateMatching} className="w-full bg-purple-600 hover:bg-purple-700">
                Calculate Compatibility
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Matching Results */}
      {matchingScore !== null && matchDetails && (
        <Card className="bg-slate-800 border-purple-500 p-8">
          <h3 className="text-xl font-bold text-white mb-6">Compatibility Results</h3>

          {/* Overall Score */}
          <div className={`${getCompatibilityLevel(matchingScore).color} p-6 rounded-lg mb-6`}>
            <p className="text-white text-sm mb-2">Overall Compatibility</p>
            <p className="text-3xl font-bold text-white mb-2">{matchingScore}/36</p>
            <p className="text-white font-semibold">{getCompatibilityLevel(matchingScore).level}</p>
          </div>

          {/* Detailed Scores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Varna</p>
              <p className="text-white font-semibold">{matchDetails.varna}/1</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Vasya</p>
              <p className="text-white font-semibold">{matchDetails.vasya}/2</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Tara</p>
              <p className="text-white font-semibold">{matchDetails.tara}/3</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Yoni</p>
              <p className="text-white font-semibold">{matchDetails.yoni}/4</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Graha</p>
              <p className="text-white font-semibold">{matchDetails.graha}/5</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Gana</p>
              <p className="text-white font-semibold">{matchDetails.gana}/6</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Bhakoot</p>
              <p className="text-white font-semibold">{matchDetails.bhakoot}/7</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-sm">Nadi</p>
              <p className="text-white font-semibold">{matchDetails.nadi}/8</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
