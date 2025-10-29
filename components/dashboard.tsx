"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, Zap } from "lucide-react"

type DashboardProps = {
  savedKundalis: any[]
  onLoadKundali: (data: any) => void
}

export function Dashboard({ savedKundalis, onLoadKundali }: DashboardProps) {
  return (
    <div className="space-y-6">
      <Card className="vedic-card p-8 bg-white">
        <h2 className="text-3xl font-serif font-bold text-saffron mb-6">Your Kundali Collection</h2>

        {savedKundalis.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">ॐ</div>
            <p className="text-dark-gray mb-2 font-semibold">No Kundalis saved yet</p>
            <p className="text-dark-gray text-sm">Generate and save your first Kundali to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedKundalis.map((kundali) => (
              <Card key={kundali.id} className="bg-cream border-2 border-gold p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-serif font-bold text-saffron mb-3">{kundali.name}</h3>
                <div className="space-y-2 text-sm text-dark-gray mb-4">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-saffron" />
                    {kundali.birthDate}
                  </p>
                  <p>Time: {kundali.birthTime}</p>
                  <p>Location: {kundali.birthLocation}</p>
                  <p className="font-semibold text-saffron">Sun Sign: {kundali.sunSign}</p>
                  <p className="font-semibold text-saffron">Moon Sign: {kundali.moonSign}</p>
                </div>
                <Button
                  onClick={() => onLoadKundali(kundali)}
                  className="w-full bg-saffron hover:bg-saffron-light text-white font-semibold"
                >
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        )}
      </Card>

      {/* Statistics */}
      <Card className="vedic-card p-8 bg-white">
        <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-cream border-2 border-gold p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-6 h-6 text-saffron" />
              <p className="text-dark-gray text-sm font-semibold">Total Kundalis</p>
            </div>
            <p className="text-4xl font-bold text-saffron">{savedKundalis.length}</p>
          </div>
          <div className="bg-cream border-2 border-gold p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-saffron" />
              <p className="text-dark-gray text-sm font-semibold">Last Generated</p>
            </div>
            <p className="text-lg font-bold text-saffron">
              {savedKundalis.length > 0
                ? new Date(savedKundalis[savedKundalis.length - 1].createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
          <div className="bg-cream border-2 border-gold p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-saffron" />
              <p className="text-dark-gray text-sm font-semibold">Most Common Sign</p>
            </div>
            <p className="text-lg font-bold text-saffron">
              {savedKundalis.length > 0 ? savedKundalis[0].sunSign : "N/A"}
            </p>
          </div>
        </div>
      </Card>

      {/* Horoscope Updates */}
      <Card className="vedic-card p-8 bg-white">
        <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Daily Horoscope Updates</h3>
        <div className="space-y-4">
          {["Aries", "Taurus", "Gemini"].map((sign) => (
            <div key={sign} className="bg-cream p-4 rounded-lg border-l-4 border-gold">
              <p className="font-serif font-bold text-saffron mb-1">{sign}</p>
              <p className="text-dark-gray text-sm">
                Today brings opportunities for growth and positive changes. Focus on your goals and maintain balance.
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
