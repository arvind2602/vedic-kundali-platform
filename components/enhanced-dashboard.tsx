"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, TrendingUp, Zap, Download } from "lucide-react"

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
  sunSign?: string
  moonSign?: string
}

interface EnhancedDashboardProps {
  savedKundalis: KundaliData[]
  onLoadKundali: (data: KundaliData) => void
}

export function EnhancedDashboard({ savedKundalis, onLoadKundali }: EnhancedDashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month" | "year">("month")

  const horoscopeData = {
    Aries: {
      rating: 8,
      description: "A favorable period for new beginnings and bold initiatives",
      lucky: { color: "Red", number: 9, day: "Tuesday" },
    },
    Taurus: {
      rating: 7,
      description: "Focus on stability and financial growth this month",
      lucky: { color: "Green", number: 6, day: "Friday" },
    },
    Gemini: {
      rating: 9,
      description: "Communication and creativity are at their peak",
      lucky: { color: "Yellow", number: 5, day: "Wednesday" },
    },
    Cancer: {
      rating: 6,
      description: "Emotional balance and family matters take priority",
      lucky: { color: "White", number: 2, day: "Monday" },
    },
    Leo: {
      rating: 8,
      description: "Leadership opportunities and recognition await you",
      lucky: { color: "Gold", number: 1, day: "Sunday" },
    },
    Virgo: {
      rating: 7,
      description: "Health and wellness improvements are highlighted",
      lucky: { color: "Green", number: 5, day: "Wednesday" },
    },
  }

  const upcomingTransits = [
    {
      date: "January 15, 2025",
      planet: "Mercury",
      sign: "Capricorn",
      effect: "Enhanced communication and analytical abilities",
      impact: "positive",
    },
    {
      date: "January 22, 2025",
      planet: "Venus",
      sign: "Aquarius",
      effect: "Social connections and creative expression flourish",
      impact: "positive",
    },
    {
      date: "February 5, 2025",
      planet: "Mars",
      sign: "Pisces",
      effect: "Energy levels may fluctuate, practice patience",
      impact: "neutral",
    },
    {
      date: "February 18, 2025",
      planet: "Jupiter",
      sign: "Gemini",
      effect: "Expansion and growth opportunities emerge",
      impact: "positive",
    },
  ]

  const compatibilityMatches = [
    { name: "Priya Sharma", sign: "Leo", compatibility: 92, status: "Excellent Match" },
    { name: "Anjali Patel", sign: "Sagittarius", compatibility: 88, status: "Very Good" },
    { name: "Neha Singh", sign: "Gemini", compatibility: 75, status: "Good" },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-saffron mb-2">Your Astrological Dashboard</h2>
        <p className="text-dark-gray">Comprehensive insights and personalized guidance</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-cream border-2 border-saffron">
          <TabsTrigger
            value="overview"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="horoscope"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Horoscope
          </TabsTrigger>
          <TabsTrigger
            value="transits"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Transits
          </TabsTrigger>
          <TabsTrigger
            value="compatibility"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Matches
          </TabsTrigger>
          <TabsTrigger
            value="collection"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Collection
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="bg-cream border-2 border-gold p-6 text-center">
              <BarChart3 className="w-8 h-8 text-saffron mx-auto mb-2" />
              <p className="text-dark-gray text-sm font-semibold">Total Kundalis</p>
              <p className="text-3xl font-bold text-saffron">{savedKundalis.length}</p>
            </Card>
            <Card className="bg-cream border-2 border-gold p-6 text-center">
              <Calendar className="w-8 h-8 text-saffron mx-auto mb-2" />
              <p className="text-dark-gray text-sm font-semibold">Last Generated</p>
              <p className="text-lg font-bold text-saffron">
                {savedKundalis.length > 0
                  ? new Date(savedKundalis[savedKundalis.length - 1].createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </Card>
            <Card className="bg-cream border-2 border-gold p-6 text-center">
              <TrendingUp className="w-8 h-8 text-saffron mx-auto mb-2" />
              <p className="text-dark-gray text-sm font-semibold">Current Dasha</p>
              <p className="text-lg font-bold text-saffron">Shani</p>
            </Card>
            <Card className="bg-cream border-2 border-gold p-6 text-center">
              <Zap className="w-8 h-8 text-saffron mx-auto mb-2" />
              <p className="text-dark-gray text-sm font-semibold">Life Path</p>
              <p className="text-lg font-bold text-saffron">Balanced</p>
            </Card>
          </div>

          <Card className="vedic-card p-8 bg-white">
            <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Quick Insights</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Planetary Strength",
                  value: "Strong",
                  description: "Your birth chart shows strong planetary positions",
                },
                {
                  title: "Life Purpose",
                  value: "Creative",
                  description: "Your chart indicates a creative and expressive life path",
                },
                {
                  title: "Challenges",
                  value: "Growth",
                  description: "Current challenges are opportunities for personal growth",
                },
              ].map((insight, idx) => (
                <div key={idx} className="bg-cream p-4 rounded-lg border-l-4 border-gold">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-serif font-bold text-saffron">{insight.title}</p>
                      <p className="text-dark-gray text-sm mt-1">{insight.description}</p>
                    </div>
                    <span className="bg-saffron text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {insight.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Horoscope Tab */}
        <TabsContent value="horoscope" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-bold text-saffron">Monthly Horoscope</h3>
              <div className="flex gap-2">
                {(["week", "month", "year"] as const).map((period) => (
                  <Button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    variant={selectedPeriod === period ? "default" : "outline"}
                    className={
                      selectedPeriod === period
                        ? "bg-saffron hover:bg-saffron-light text-white"
                        : "border-2 border-saffron text-saffron hover:bg-cream"
                    }
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries(horoscopeData).map(([sign, data]) => (
                <Card key={sign} className="bg-cream border-2 border-gold p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-serif font-bold text-saffron text-lg">{sign}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < data.rating ? "text-gold" : "text-light-gray"}`}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-dark-gray mb-4">{data.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-dark-gray text-sm font-semibold">Lucky Color</p>
                      <p className="text-saffron font-bold">{data.lucky.color}</p>
                    </div>
                    <div>
                      <p className="text-dark-gray text-sm font-semibold">Lucky Number</p>
                      <p className="text-saffron font-bold">{data.lucky.number}</p>
                    </div>
                    <div>
                      <p className="text-dark-gray text-sm font-semibold">Lucky Day</p>
                      <p className="text-saffron font-bold">{data.lucky.day}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Transits Tab */}
        <TabsContent value="transits" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Upcoming Planetary Transits</h3>
            <div className="space-y-4">
              {upcomingTransits.map((transit, idx) => (
                <Card
                  key={idx}
                  className={`p-6 border-2 ${
                    transit.impact === "positive"
                      ? "bg-green-50 border-green-500"
                      : transit.impact === "negative"
                        ? "bg-red-50 border-maroon"
                        : "bg-cream border-gold"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-serif font-bold text-saffron text-lg">{transit.planet}</p>
                      <p className="text-dark-gray text-sm">Entering {transit.sign}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        transit.impact === "positive"
                          ? "bg-green-500 text-white"
                          : transit.impact === "negative"
                            ? "bg-maroon text-white"
                            : "bg-gold text-dark-gray"
                      }`}
                    >
                      {transit.impact.charAt(0).toUpperCase() + transit.impact.slice(1)}
                    </span>
                  </div>
                  <p className="text-dark-gray mb-2">{transit.effect}</p>
                  <p className="text-dark-gray text-sm font-semibold">{transit.date}</p>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Compatibility Tab */}
        <TabsContent value="compatibility" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Compatibility Matches</h3>
            <div className="space-y-4">
              {compatibilityMatches.map((match, idx) => (
                <Card key={idx} className="bg-cream border-2 border-gold p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-serif font-bold text-saffron text-lg">{match.name}</p>
                      <p className="text-dark-gray text-sm">{match.sign}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-saffron">{match.compatibility}%</p>
                      <p className="text-dark-gray text-sm font-semibold">{match.status}</p>
                    </div>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2">
                    <div className="bg-saffron h-2 rounded-full" style={{ width: `${match.compatibility}%` }}></div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Collection Tab */}
        <TabsContent value="collection" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <h2 className="text-2xl font-serif font-bold text-saffron mb-6">Your Kundali Collection</h2>

            {savedKundalis.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">ॐ</div>
                <p className="text-dark-gray mb-2 font-semibold">No Kundalis saved yet</p>
                <p className="text-dark-gray text-sm">Generate and save your first Kundali to get started</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedKundalis.map((kundali) => (
                  <Card
                    key={kundali.id}
                    className="bg-cream border-2 border-gold p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-serif font-bold text-saffron mb-3">{kundali.name}</h3>
                    <div className="space-y-2 text-sm text-dark-gray mb-4">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-saffron" />
                        {kundali.birthDate}
                      </p>
                      <p>Time: {kundali.birthTime}</p>
                      <p>Location: {kundali.birthLocation}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => onLoadKundali(kundali)}
                        className="flex-1 bg-saffron hover:bg-saffron-light text-white font-semibold"
                      >
                        View
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-2 border-saffron text-saffron hover:bg-cream bg-transparent"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
