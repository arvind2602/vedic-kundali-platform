"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame, Gift, Calendar } from "lucide-react"

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

interface PujaRecommendationsProps {
  data: KundaliData
}

export function PujaRecommendations({ data }: PujaRecommendationsProps) {
  const pujas = [
    {
      name: "Surya Puja",
      planet: "Sun",
      benefits: ["Vitality", "Leadership", "Success"],
      frequency: "Weekly on Sundays",
      cost: "$49",
      description: "Worship of the Sun God to enhance energy and confidence",
      timing: "Early morning (6-7 AM)",
      items: ["Flowers", "Incense", "Ghee", "Fruits"],
    },
    {
      name: "Chandra Puja",
      planet: "Moon",
      benefits: ["Emotional Balance", "Peace", "Intuition"],
      frequency: "Weekly on Mondays",
      cost: "$49",
      description: "Worship of the Moon God for emotional harmony",
      timing: "Evening (6-7 PM)",
      items: ["White Flowers", "Milk", "Rice", "Honey"],
    },
    {
      name: "Mangal Puja",
      planet: "Mars",
      benefits: ["Courage", "Energy", "Confidence"],
      frequency: "Weekly on Tuesdays",
      cost: "$59",
      description: "Worship of Mars to overcome obstacles and build strength",
      timing: "Morning (7-8 AM)",
      items: ["Red Flowers", "Lentils", "Sesame", "Ghee"],
    },
    {
      name: "Budh Puja",
      planet: "Mercury",
      benefits: ["Communication", "Intelligence", "Business"],
      frequency: "Weekly on Wednesdays",
      cost: "$49",
      description: "Worship of Mercury for intellectual growth",
      timing: "Morning (8-9 AM)",
      items: ["Green Flowers", "Moong Dal", "Herbs", "Honey"],
    },
    {
      name: "Guru Puja",
      planet: "Jupiter",
      benefits: ["Wisdom", "Prosperity", "Guidance"],
      frequency: "Weekly on Thursdays",
      cost: "$69",
      description: "Worship of Jupiter for expansion and blessings",
      timing: "Morning (9-10 AM)",
      items: ["Yellow Flowers", "Chickpeas", "Turmeric", "Ghee"],
    },
    {
      name: "Shukra Puja",
      planet: "Venus",
      benefits: ["Love", "Beauty", "Harmony"],
      frequency: "Weekly on Fridays",
      cost: "$59",
      description: "Worship of Venus for relationships and creativity",
      timing: "Evening (5-6 PM)",
      items: ["White Flowers", "Coconut", "Perfume", "Sweets"],
    },
  ]

  const remedies = [
    {
      title: "Gemstone Therapy",
      description: "Wear specific gemstones aligned with your planetary positions",
      recommendations: ["Ruby for Sun", "Pearl for Moon", "Red Coral for Mars"],
      duration: "Continuous wear",
      cost: "$199-$999",
    },
    {
      title: "Mantra Chanting",
      description: "Recite powerful Vedic mantras to harmonize planetary energies",
      recommendations: ["Surya Mantra", "Gayatri Mantra", "Mahamrityunjaya Mantra"],
      duration: "40 days minimum",
      cost: "Free",
    },
    {
      title: "Fasting & Diet",
      description: "Follow specific dietary practices to balance doshas",
      recommendations: ["Sattvic Diet", "Seasonal Foods", "Herbal Remedies"],
      duration: "Ongoing",
      cost: "Minimal",
    },
    {
      title: "Yoga & Meditation",
      description: "Practice specific asanas and meditation techniques",
      recommendations: ["Surya Namaskar", "Pranayama", "Chakra Meditation"],
      duration: "Daily practice",
      cost: "Free",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-saffron mb-2">Puja & Remedies</h2>
        <p className="text-dark-gray">Personalized rituals and remedies for your well-being</p>
      </div>

      {/* Pujas Section */}
      <div>
        <h3 className="text-3xl font-serif font-bold text-saffron mb-6">Recommended Pujas</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pujas.map((puja, idx) => (
            <Card key={idx} className="vedic-card p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-6 h-6 text-saffron" />
                <h4 className="text-xl font-serif font-bold text-saffron">{puja.name}</h4>
              </div>

              <p className="text-dark-gray text-sm mb-3">{puja.description}</p>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-dark-gray text-xs font-semibold mb-1">Benefits:</p>
                  <div className="flex flex-wrap gap-1">
                    {puja.benefits.map((benefit, i) => (
                      <span key={i} className="bg-saffron/20 text-saffron px-2 py-1 rounded text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-dark-gray text-xs font-semibold">Timing: {puja.timing}</p>
                  <p className="text-dark-gray text-xs">Frequency: {puja.frequency}</p>
                </div>

                <div>
                  <p className="text-dark-gray text-xs font-semibold mb-1">Items Needed:</p>
                  <p className="text-dark-gray text-xs">{puja.items.join(", ")}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-saffron font-bold">{puja.cost}</span>
                <Button className="bg-saffron hover:bg-saffron-light text-white text-sm">Book Puja</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Remedies Section */}
      <div>
        <h3 className="text-3xl font-serif font-bold text-saffron mb-6">Vedic Remedies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {remedies.map((remedy, idx) => (
            <Card key={idx} className="vedic-card p-8 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-saffron" />
                <h4 className="text-2xl font-serif font-bold text-saffron">{remedy.title}</h4>
              </div>

              <p className="text-dark-gray mb-4">{remedy.description}</p>

              <div className="bg-cream p-4 rounded-lg border-2 border-gold mb-4">
                <p className="text-dark-gray text-sm font-semibold mb-2">Recommendations:</p>
                <ul className="space-y-1">
                  {remedy.recommendations.map((rec, i) => (
                    <li key={i} className="text-dark-gray text-sm flex items-center gap-2">
                      <span className="text-saffron">•</span> {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-dark-gray text-xs font-semibold">Duration: {remedy.duration}</p>
                  <p className="text-saffron font-bold">{remedy.cost}</p>
                </div>
                <Button className="bg-saffron hover:bg-saffron-light text-white">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Consultation Section */}
      <Card className="vedic-card p-8 bg-cream border-2 border-gold">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-8 h-8 text-saffron" />
          <h3 className="text-2xl font-serif font-bold text-saffron">Book Expert Consultation</h3>
        </div>

        <p className="text-dark-gray mb-6">
          Get personalized puja recommendations and remedies from experienced Vedic astrologers
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { duration: "30 min", price: "$29", type: "Quick Consultation" },
            { duration: "60 min", price: "$59", type: "Detailed Analysis" },
            { duration: "90 min", price: "$89", type: "Complete Guidance" },
          ].map((session, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border-2 border-saffron">
              <p className="font-serif font-bold text-saffron mb-1">{session.type}</p>
              <p className="text-dark-gray text-sm mb-3">{session.duration}</p>
              <div className="flex justify-between items-center">
                <span className="text-saffron font-bold">{session.price}</span>
                <Button className="bg-saffron hover:bg-saffron-light text-white text-sm">Book</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
