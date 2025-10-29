"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { calculateKundali } from "@/lib/kundali-calculator"

type BirthDetailsFormProps = {
  onKundaliGenerated: (data: any) => void
}

export function BirthDetailsForm({ onKundaliGenerated }: BirthDetailsFormProps) {
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
      // Validate required fields
      if (!formData.name || !formData.birthDate || !formData.birthTime || !formData.birthLocation) {
        throw new Error("Please fill in all required fields")
      }

      // For demo purposes, use default coordinates for major Indian cities
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
      const coords = cityCoordinates[cityLower] || [28.7041, 77.1025] // Default to Delhi

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

      // Calculate Kundali data
      const calculatedData = calculateKundali(kundaliData)
      onKundaliGenerated(calculatedData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-slate-800 border-purple-500 p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Enter Your Birth Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-white">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <Label htmlFor="gender" className="text-white">
              Gender
            </Label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-white rounded-md"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Birth Date */}
          <div>
            <Label htmlFor="birthDate" className="text-white">
              Birth Date *
            </Label>
            <Input
              id="birthDate"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>

          {/* Birth Time */}
          <div>
            <Label htmlFor="birthTime" className="text-white">
              Birth Time (HH:MM) *
            </Label>
            <Input
              id="birthTime"
              name="birthTime"
              type="time"
              value={formData.birthTime}
              onChange={handleChange}
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>

          {/* Birth Location */}
          <div className="md:col-span-2">
            <Label htmlFor="birthLocation" className="text-white">
              Birth Location (City) *
            </Label>
            <Input
              id="birthLocation"
              name="birthLocation"
              value={formData.birthLocation}
              onChange={handleChange}
              placeholder="e.g., Delhi, Mumbai, Bangalore"
              className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              required
            />
            <p className="text-xs text-slate-400 mt-2">
              Supported cities: Delhi, Mumbai, Bangalore, Kolkata, Hyderabad, Chennai, Pune, Jaipur
            </p>
          </div>

          {/* Timezone */}
          <div className="md:col-span-2">
            <Label htmlFor="timezone" className="text-white">
              Timezone
            </Label>
            <select
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 text-white rounded-md"
            >
              <option value="UTC">UTC</option>
              <option value="IST">IST (Indian Standard Time)</option>
              <option value="EST">EST (Eastern Standard Time)</option>
              <option value="PST">PST (Pacific Standard Time)</option>
            </select>
          </div>
        </div>

        {error && <div className="bg-red-900 border border-red-700 text-red-100 px-4 py-3 rounded">{error}</div>}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2"
        >
          {loading ? "Generating Kundali..." : "Generate Kundali"}
        </Button>
      </form>
    </Card>
  )
}
