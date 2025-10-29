"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { calculateKundali } from "@/lib/kundali-calculator"

type MobileOptimizedFormProps = {
  onKundaliGenerated: (data: any) => void
}

export function MobileOptimizedForm({ onKundaliGenerated }: MobileOptimizedFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    gender: "male",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
    latitude: 0,
    longitude: 0,
    timezone: "UTC",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      if (!formData.name || !formData.birthDate || !formData.birthTime || !formData.birthLocation) {
        throw new Error("Please fill in all required fields")
      }

      const cityCoordinates: Record<string, [number, number]> = {
        delhi: [28.7041, 77.1025],
        mumbai: [19.076, 72.8777],
        bangalore: [12.9716, 77.5946],
        kolkata: [22.5726, 88.3639],
        hyderabad: [17.385, 78.4867],
        chennai: [13.0827, 80.2707],
        pune: [18.5204, 73.8567],
        jaipur: [26.9124, 75.7873],
      }

      const cityLower = formData.birthLocation.toLowerCase()
      const coords = cityCoordinates[cityLower] || [28.7041, 77.1025]

      const kundaliData = {
        id: Date.now().toString(),
        name: formData.name,
        gender: formData.gender,
        birthDate: formData.birthDate,
        birthTime: formData.birthTime,
        birthLocation: formData.birthLocation,
        latitude: coords[0],
        longitude: coords[1],
        timezone: formData.timezone,
        createdAt: new Date().toISOString(),
      }

      const calculatedData = calculateKundali(kundaliData)
      onKundaliGenerated(calculatedData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pb-24 md:pb-0">
      <Card className="vedic-card p-6 bg-white mx-4 my-4 md:p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-serif font-bold text-saffron">Your Birth Details</h2>
            <span className="text-sm font-semibold text-dark-gray">Step {step} of 3</span>
          </div>
          <div className="w-full bg-light-gray rounded-full h-2">
            <div className="bg-saffron h-2 rounded-full transition-all" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-dark-gray font-semibold">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
                  required
                />
              </div>

              <div>
                <Label htmlFor="gender" className="text-dark-gray font-semibold">
                  Gender
                </Label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-light-gray border-2 border-cream text-dark-gray rounded-lg focus:border-saffron appearance-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-saffron hover:bg-saffron-light text-white font-semibold py-3"
              >
                Next
              </Button>
            </div>
          )}

          {/* Step 2: Birth Date & Time */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="birthDate" className="text-dark-gray font-semibold">
                  Birth Date *
                </Label>
                <Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
                  required
                />
              </div>

              <div>
                <Label htmlFor="birthTime" className="text-dark-gray font-semibold">
                  Birth Time (HH:MM) *
                </Label>
                <Input
                  id="birthTime"
                  name="birthTime"
                  type="time"
                  value={formData.birthTime}
                  onChange={handleChange}
                  className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
                  required
                />
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1 border-2 border-saffron text-saffron hover:bg-cream bg-transparent"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 bg-saffron hover:bg-saffron-light text-white font-semibold"
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Location & Timezone */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="birthLocation" className="text-dark-gray font-semibold">
                  Birth Location (City) *
                </Label>
                <Input
                  id="birthLocation"
                  name="birthLocation"
                  value={formData.birthLocation}
                  onChange={handleChange}
                  placeholder="e.g., Delhi, Mumbai"
                  className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
                  required
                />
                <p className="text-xs text-dark-gray mt-2">
                  Delhi, Mumbai, Bangalore, Kolkata, Hyderabad, Chennai, Pune, Jaipur
                </p>
              </div>

              <div>
                <Label htmlFor="timezone" className="text-dark-gray font-semibold">
                  Timezone
                </Label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-light-gray border-2 border-cream text-dark-gray rounded-lg focus:border-saffron appearance-none"
                >
                  <option value="UTC">UTC</option>
                  <option value="IST">IST (Indian Standard Time)</option>
                  <option value="EST">EST (Eastern Standard Time)</option>
                  <option value="PST">PST (Pacific Standard Time)</option>
                </select>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-maroon text-maroon px-4 py-3 rounded-lg text-sm">{error}</div>
              )}

              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="flex-1 border-2 border-saffron text-saffron hover:bg-cream bg-transparent"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-saffron hover:bg-saffron-light text-white font-semibold py-3"
                >
                  {loading ? "Generating..." : "Generate Kundali"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </Card>
    </div>
  )
}
