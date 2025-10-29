"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Volume2, Sparkles, BookOpen, Music } from "lucide-react"

export function DevotionalFeatures() {
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [selectedMantra, setSelectedMantra] = useState<string | null>(null)

  const mantras = [
    {
      id: "om",
      name: "Om (ॐ)",
      sanskrit: "ॐ",
      meaning: "The primordial sound of the universe",
      benefits: ["Meditation", "Spiritual awakening", "Inner peace"],
      duration: "3:45",
    },
    {
      id: "gayatri",
      name: "Gayatri Mantra",
      sanskrit: "ॐ भूर्भुवः स्वः",
      meaning: "Invocation of the divine light",
      benefits: ["Wisdom", "Clarity", "Spiritual growth"],
      duration: "4:20",
    },
    {
      id: "shiva",
      name: "Mahamrityunjaya Mantra",
      sanskrit: "ॐ त्र्यम्बकं यजामहे",
      meaning: "Mantra for health and longevity",
      benefits: ["Health", "Healing", "Protection"],
      duration: "5:10",
    },
    {
      id: "durga",
      name: "Durga Mantra",
      sanskrit: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे",
      meaning: "Invocation of divine feminine power",
      benefits: ["Strength", "Protection", "Courage"],
      duration: "4:50",
    },
  ]

  const vedaQuotes = [
    {
      text: "The greatest religion is to be true to this dharma; there is no greater religion than this.",
      source: "Mahabharata",
      author: "Ancient Vedic Text",
    },
    {
      text: "As a man thinks, so he becomes.",
      source: "Upanishads",
      author: "Vedic Philosophy",
    },
    {
      text: "The soul is neither born, and nor can it die.",
      source: "Bhagavad Gita 2.20",
      author: "Lord Krishna",
    },
    {
      text: "Yoga is the journey of the self, through the self, to the self.",
      source: "Bhagavad Gita",
      author: "Vedic Wisdom",
    },
    {
      text: "In a day, when you don't come across any problems - you can be sure that you are traveling the wrong path.",
      source: "Vedic Teaching",
      author: "Ancient Wisdom",
    },
  ]

  const mandalaPatterns = [
    { name: "Chakra Mandala", description: "Represents the seven energy centers" },
    { name: "Yantra Mandala", description: "Sacred geometric patterns for meditation" },
    { name: "Flower Mandala", description: "Symbolizes the lotus of enlightenment" },
    { name: "Cosmic Mandala", description: "Represents the universe and infinity" },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-saffron mb-2">Devotional & Spiritual Practices</h2>
        <p className="text-dark-gray">Enhance your spiritual journey with Vedic wisdom and practices</p>
      </div>

      <Tabs defaultValue="mantras" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-cream border-2 border-saffron">
          <TabsTrigger
            value="mantras"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Mantras
          </TabsTrigger>
          <TabsTrigger
            value="quotes"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Wisdom
          </TabsTrigger>
          <TabsTrigger
            value="mandala"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Mandalas
          </TabsTrigger>
          <TabsTrigger
            value="practices"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Practices
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mantras" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-8 h-8 text-saffron" />
              <h3 className="text-2xl font-serif font-bold text-saffron">Sacred Mantras</h3>
            </div>

            <div className="flex items-center gap-4 mb-6 bg-cream p-4 rounded-lg border-2 border-gold">
              <Volume2 className="w-6 h-6 text-saffron" />
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={soundEnabled}
                  onChange={(e) => setSoundEnabled(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-dark-gray font-semibold">Enable Sound</span>
              </label>
            </div>

            <div className="space-y-4">
              {mantras.map((mantra) => (
                <Card
                  key={mantra.id}
                  className={`p-6 border-2 cursor-pointer transition-all ${
                    selectedMantra === mantra.id
                      ? "bg-cream border-gold shadow-lg"
                      : "bg-light-gray border-cream hover:border-gold"
                  }`}
                  onClick={() => setSelectedMantra(mantra.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-serif font-bold text-saffron">{mantra.name}</h4>
                      <p className="text-2xl font-serif text-saffron mt-1">{mantra.sanskrit}</p>
                    </div>
                    <span className="text-dark-gray text-sm font-semibold">{mantra.duration}</span>
                  </div>

                  <p className="text-dark-gray mb-3">{mantra.meaning}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {mantra.benefits.map((benefit, idx) => (
                      <span key={idx} className="bg-saffron text-white px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {selectedMantra === mantra.id && (
                    <Button className="w-full bg-saffron hover:bg-saffron-light text-white">
                      <Music className="w-4 h-4 mr-2" />
                      Play Mantra
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="quotes" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-saffron" />
              <h3 className="text-2xl font-serif font-bold text-saffron">Vedic Wisdom & Teachings</h3>
            </div>

            <div className="space-y-4">
              {vedaQuotes.map((quote, idx) => (
                <div key={idx} className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                  <p className="text-dark-gray italic text-lg mb-3">"{quote.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="text-saffron font-semibold">{quote.source}</p>
                    <p className="text-dark-gray text-sm">— {quote.author}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-saffron/10 p-6 rounded-lg border-2 border-saffron">
              <h4 className="font-serif font-bold text-saffron mb-3">Daily Reflection</h4>
              <p className="text-dark-gray mb-4">
                Take a moment each day to reflect on these timeless teachings. Let them guide your actions and thoughts
                towards a more meaningful and purposeful life.
              </p>
              <Button className="bg-saffron hover:bg-saffron-light text-white">Get Daily Quote</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="mandala" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-saffron" />
              <h3 className="text-2xl font-serif font-bold text-saffron">Meditation Mandalas</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mandalaPatterns.map((mandala, idx) => (
                <Card key={idx} className="bg-cream border-2 border-gold p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center">
                    <div className="text-4xl">ॐ</div>
                  </div>
                  <h4 className="font-serif font-bold text-saffron mb-2">{mandala.name}</h4>
                  <p className="text-dark-gray text-sm mb-4">{mandala.description}</p>
                  <Button className="w-full bg-saffron hover:bg-saffron-light text-white">Meditate</Button>
                </Card>
              ))}
            </div>

            <div className="mt-6 bg-saffron/10 p-6 rounded-lg border-2 border-saffron">
              <h4 className="font-serif font-bold text-saffron mb-3">How to Use Mandalas</h4>
              <ul className="space-y-2 text-dark-gray">
                <li>1. Find a quiet, comfortable place to sit</li>
                <li>2. Focus your gaze on the center of the mandala</li>
                <li>3. Take deep, slow breaths and let your mind relax</li>
                <li>4. Allow the patterns to guide your meditation for 10-20 minutes</li>
                <li>5. End with gratitude and positive intentions</li>
              </ul>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="practices" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Daily Spiritual Practices</h3>

            <div className="space-y-4">
              {[
                {
                  title: "Morning Meditation",
                  time: "15-20 minutes",
                  description: "Start your day with clarity and peace",
                  steps: ["Sit in a quiet place", "Focus on your breath", "Chant Om 108 times"],
                },
                {
                  title: "Yoga & Pranayama",
                  time: "30-45 minutes",
                  description: "Balance your body and mind",
                  steps: ["Warm-up stretches", "Asanas (poses)", "Pranayama (breathing)"],
                },
                {
                  title: "Evening Reflection",
                  time: "10-15 minutes",
                  description: "Review your day with gratitude",
                  steps: ["Sit comfortably", "Reflect on the day", "Practice gratitude"],
                },
                {
                  title: "Mantra Chanting",
                  time: "20-30 minutes",
                  description: "Harmonize your energy",
                  steps: ["Choose a mantra", "Chant with intention", "Feel the vibrations"],
                },
              ].map((practice, idx) => (
                <Card key={idx} className="bg-cream border-2 border-gold p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-serif font-bold text-saffron text-lg">{practice.title}</h4>
                      <p className="text-dark-gray text-sm">{practice.time}</p>
                    </div>
                  </div>
                  <p className="text-dark-gray mb-4">{practice.description}</p>
                  <div className="space-y-2 mb-4">
                    {practice.steps.map((step, i) => (
                      <p key={i} className="text-dark-gray text-sm flex items-center gap-2">
                        <span className="text-saffron font-bold">•</span> {step}
                      </p>
                    ))}
                  </div>
                  <Button className="w-full bg-saffron hover:bg-saffron-light text-white">Start Practice</Button>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
