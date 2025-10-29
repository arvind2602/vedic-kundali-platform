"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, BookOpen } from "lucide-react"

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

interface AdvancedFeaturesProps {
  data: KundaliData
}

export function AdvancedFeatures({ data }: AdvancedFeaturesProps) {
  const remedies = [
    {
      title: "Chanting Mantras",
      description: "Recite specific Vedic mantras to harmonize planetary energies",
      mantra: "ॐ नमः शिवाय",
      benefits: ["Mental clarity", "Spiritual growth", "Inner peace"],
    },
    {
      title: "Gemstone Recommendations",
      description: "Wear specific gemstones to strengthen planetary influences",
      gemstones: ["Ruby", "Pearl", "Emerald"],
      benefits: ["Enhanced prosperity", "Better health", "Improved relationships"],
    },
    {
      title: "Puja Rituals",
      description: "Perform sacred rituals to appease planetary deities",
      rituals: ["Surya Puja", "Chandra Puja", "Navagraha Puja"],
      benefits: ["Cosmic alignment", "Obstacle removal", "Blessings"],
    },
  ]

  const vedaQuotes = [
    "The greatest religion is to be true to this dharma; there is no greater religion than this. - Mahabharata",
    "As a man thinks, so he becomes. - Upanishads",
    "The soul is neither born, and nor can it die. - Bhagavad Gita",
    "Yoga is the journey of the self, through the self, to the self. - Bhagavad Gita",
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-saffron mb-2">Vedic Remedies & Guidance</h2>
        <p className="text-dark-gray">Harmonize your cosmic energies through ancient Vedic practices</p>
      </div>

      <Tabs defaultValue="remedies" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-cream border-2 border-saffron">
          <TabsTrigger value="remedies" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
            Remedies
          </TabsTrigger>
          <TabsTrigger value="counseling" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
            Counseling
          </TabsTrigger>
          <TabsTrigger value="wisdom" className="data-[state=active]:bg-saffron data-[state=active]:text-white">
            Vedic Wisdom
          </TabsTrigger>
        </TabsList>

        <TabsContent value="remedies" className="space-y-6">
          {remedies.map((remedy, idx) => (
            <Card key={idx} className="vedic-card p-6">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-saffron flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-saffron mb-2">{remedy.title}</h3>
                  <p className="text-dark-gray mb-4">{remedy.description}</p>

                  {remedy.mantra && (
                    <div className="bg-cream p-4 rounded-lg mb-4 border-l-4 border-gold">
                      <p className="text-center text-2xl font-serif text-saffron">{remedy.mantra}</p>
                    </div>
                  )}

                  {(remedy.gemstones || remedy.rituals) && (
                    <div className="mb-4">
                      <p className="font-bold text-dark-gray mb-2">
                        {remedy.gemstones ? "Recommended Gemstones:" : "Recommended Rituals:"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(remedy.gemstones || remedy.rituals)?.map((item, i) => (
                          <span key={i} className="bg-saffron text-white px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="font-bold text-dark-gray mb-2">Benefits:</p>
                    <ul className="space-y-1">
                      {remedy.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-dark-gray">
                          <span className="text-saffron">✓</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="counseling" className="space-y-6">
          <Card className="vedic-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-saffron flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-saffron mb-2">Vedic Counseling Sessions</h3>
                <p className="text-dark-gray mb-4">
                  Connect with experienced Vedic astrologers for personalized guidance on your life path, relationships,
                  career, and spiritual growth.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {[
                {
                  title: "Career Guidance",
                  description: "Discover your ideal career path based on your Kundali",
                  duration: "60 min",
                  price: "$49",
                },
                {
                  title: "Relationship Counseling",
                  description: "Understand relationship dynamics and compatibility",
                  duration: "60 min",
                  price: "$49",
                },
                {
                  title: "Life Purpose Reading",
                  description: "Explore your soul's purpose and life mission",
                  duration: "90 min",
                  price: "$79",
                },
                {
                  title: "Health & Wellness",
                  description: "Vedic insights for optimal health and wellbeing",
                  duration: "60 min",
                  price: "$49",
                },
              ].map((session, idx) => (
                <Card key={idx} className="bg-cream border-2 border-gold p-6">
                  <h4 className="font-serif font-bold text-saffron mb-2">{session.title}</h4>
                  <p className="text-dark-gray text-sm mb-4">{session.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-dark-gray">{session.duration}</span>
                    <span className="font-bold text-saffron">{session.price}</span>
                  </div>
                  <Button className="w-full mt-4 bg-saffron hover:bg-saffron-light text-white">Book Session</Button>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="wisdom" className="space-y-6">
          <Card className="vedic-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-saffron flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-saffron mb-2">Vedic Wisdom & Teachings</h3>
                <p className="text-dark-gray">
                  Explore timeless wisdom from the Vedas, Upanishads, and Bhagavad Gita to guide your spiritual journey.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {vedaQuotes.map((quote, idx) => (
                <div key={idx} className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                  <p className="text-dark-gray italic text-lg">"{quote}"</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-lg">
              <h4 className="font-serif font-bold text-saffron mb-3">Daily Vedic Practice</h4>
              <ul className="space-y-2 text-dark-gray">
                <li>• Start your day with meditation and gratitude</li>
                <li>• Chant mantras aligned with your planetary influences</li>
                <li>• Practice yoga and pranayama for energy balance</li>
                <li>• End your day with reflection and journaling</li>
              </ul>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
