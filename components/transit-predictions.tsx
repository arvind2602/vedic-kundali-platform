"use client"

import { Card } from "@/components/ui/card"

type TransitPredictionsProps = {
  data: any
}

export function TransitPredictions({ data }: TransitPredictionsProps) {
  const generateTransitPredictions = () => {
    const predictions = [
      {
        planet: "Jupiter",
        sign: "Sagittarius",
        effect: "Expansion and growth in career and finances",
        duration: "12 months",
        intensity: "Strong",
      },
      {
        planet: "Saturn",
        sign: "Aquarius",
        effect: "Challenges and lessons in personal relationships",
        duration: "2.5 years",
        intensity: "Moderate",
      },
      {
        planet: "Mars",
        sign: "Aries",
        effect: "Energy and motivation for new projects",
        duration: "2 months",
        intensity: "Strong",
      },
      {
        planet: "Venus",
        sign: "Libra",
        effect: "Harmony and love in relationships",
        duration: "1 month",
        intensity: "Mild",
      },
      {
        planet: "Mercury",
        sign: "Gemini",
        effect: "Communication and intellectual pursuits flourish",
        duration: "3 weeks",
        intensity: "Moderate",
      },
    ]

    return predictions
  }

  const predictions = generateTransitPredictions()

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-purple-500 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Transit Predictions</h2>
        <p className="text-slate-300 mb-6">
          Current planetary transits and their influence on your life for the next 12 months
        </p>

        <div className="space-y-4">
          {predictions.map((prediction, index) => (
            <div key={index} className="bg-slate-700 p-6 rounded-lg border border-purple-500">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{prediction.planet}</h3>
                  <p className="text-purple-300 text-sm">Currently in {prediction.sign}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-sm">Duration</p>
                  <p className="text-white font-semibold">{prediction.duration}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-3">{prediction.effect}</p>

              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Intensity:</span>
                <span
                  className={`px-3 py-1 rounded text-sm font-semibold ${
                    prediction.intensity === "Strong"
                      ? "bg-red-900 text-red-200"
                      : prediction.intensity === "Moderate"
                        ? "bg-yellow-900 text-yellow-200"
                        : "bg-green-900 text-green-200"
                  }`}
                >
                  {prediction.intensity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Events */}
      <Card className="bg-slate-800 border-purple-500 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Upcoming Astrological Events</h2>

        <div className="space-y-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-semibold">Full Moon in Taurus</p>
            <p className="text-slate-400 text-sm">Next occurrence: 15 days</p>
            <p className="text-slate-300 text-sm mt-2">Emotional culmination and manifestation of intentions</p>
          </div>

          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-semibold">New Moon in Gemini</p>
            <p className="text-slate-400 text-sm">Next occurrence: 30 days</p>
            <p className="text-slate-300 text-sm mt-2">New beginnings and fresh starts in communication</p>
          </div>

          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-semibold">Mercury Retrograde</p>
            <p className="text-slate-400 text-sm">Next occurrence: 45 days</p>
            <p className="text-slate-300 text-sm mt-2">Review and reflection period - avoid major decisions</p>
          </div>

          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-semibold">Solar Eclipse</p>
            <p className="text-slate-400 text-sm">Next occurrence: 60 days</p>
            <p className="text-slate-300 text-sm mt-2">Powerful new beginnings and major life changes</p>
          </div>
        </div>
      </Card>

      {/* Remedies */}
      <Card className="bg-slate-800 border-purple-500 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Recommended Remedies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Gemstones</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Yellow Sapphire for Jupiter</li>
              <li>• Blue Sapphire for Saturn</li>
              <li>• Red Coral for Mars</li>
            </ul>
          </div>

          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Mantras</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Om Namah Shivaya</li>
              <li>• Gayatri Mantra</li>
              <li>• Maha Mrityunjaya Mantra</li>
            </ul>
          </div>

          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Rituals</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Puja and Havan</li>
              <li>• Fasting on auspicious days</li>
              <li>• Charity and donations</li>
            </ul>
          </div>

          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Lifestyle</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Meditation and Yoga</li>
              <li>• Pranayama practice</li>
              <li>• Spiritual reading</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
