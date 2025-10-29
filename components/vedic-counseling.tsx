"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MessageSquare, Star } from "lucide-react"

export function VedicCounseling() {
  const [selectedCounselor, setSelectedCounselor] = useState<string | null>(null)

  const counselors = [
    {
      id: "dr-sharma",
      name: "Dr. Rajesh Sharma",
      specialty: "Vedic Astrology & Life Guidance",
      experience: "25 years",
      rating: 4.9,
      reviews: 342,
      bio: "Expert in Vedic astrology with specialization in career and relationship guidance",
      availability: "Mon-Fri, 10 AM - 6 PM IST",
      sessionPrice: "$59/hour",
      image: "👨‍🏫",
    },
    {
      id: "priya-patel",
      name: "Priya Patel",
      specialty: "Kundali Matching & Relationships",
      experience: "18 years",
      rating: 4.8,
      reviews: 287,
      bio: "Specializes in relationship compatibility and marriage guidance",
      availability: "Tue-Sat, 2 PM - 8 PM IST",
      sessionPrice: "$49/hour",
      image: "👩‍🏫",
    },
    {
      id: "arun-kumar",
      name: "Arun Kumar",
      specialty: "Career & Business Astrology",
      experience: "20 years",
      rating: 4.7,
      reviews: 256,
      bio: "Expert in career planning and business success through Vedic insights",
      availability: "Mon-Thu, 9 AM - 5 PM IST",
      sessionPrice: "$69/hour",
      image: "👨‍💼",
    },
    {
      id: "meera-singh",
      name: "Meera Singh",
      specialty: "Health & Wellness Astrology",
      experience: "22 years",
      rating: 4.9,
      reviews: 318,
      bio: "Specializes in health predictions and wellness recommendations",
      availability: "Wed-Sun, 11 AM - 7 PM IST",
      sessionPrice: "$59/hour",
      image: "👩‍⚕️",
    },
  ]

  const sessionTypes = [
    {
      type: "Quick Consultation",
      duration: "30 minutes",
      price: "$29",
      description: "Quick answers to specific questions",
      includes: ["One specific question", "Quick guidance", "Email follow-up"],
    },
    {
      type: "Standard Session",
      duration: "60 minutes",
      price: "$59",
      description: "Comprehensive analysis and guidance",
      includes: ["Full Kundali analysis", "Detailed guidance", "Remedies", "Follow-up email"],
    },
    {
      type: "Premium Session",
      duration: "90 minutes",
      price: "$89",
      description: "In-depth consultation with action plan",
      includes: ["Complete analysis", "Personalized action plan", "Remedies & Pujas", "30-day support"],
    },
  ]

  const testimonials = [
    {
      name: "Anjali Verma",
      rating: 5,
      text: "Dr. Sharma's guidance completely changed my perspective on my career. Highly recommended!",
    },
    {
      name: "Vikram Patel",
      rating: 5,
      text: "Priya's Kundali matching was spot on. We got married and couldn't be happier!",
    },
    {
      name: "Neha Gupta",
      rating: 5,
      text: "Meera's health recommendations have improved my well-being significantly.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-saffron mb-2">Vedic Counseling</h2>
        <p className="text-dark-gray">Connect with expert astrologers for personalized guidance</p>
      </div>

      <Tabs defaultValue="counselors" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-cream border-2 border-saffron">
          <TabsTrigger
            value="counselors"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Counselors
          </TabsTrigger>
          <TabsTrigger
            value="sessions"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Sessions
          </TabsTrigger>
          <TabsTrigger
            value="booking"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Booking
          </TabsTrigger>
          <TabsTrigger
            value="testimonials"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white text-xs md:text-sm"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="counselors" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {counselors.map((counselor) => (
              <Card
                key={counselor.id}
                className={`vedic-card p-6 bg-white cursor-pointer transition-all ${
                  selectedCounselor === counselor.id ? "ring-2 ring-saffron shadow-lg" : ""
                }`}
                onClick={() => setSelectedCounselor(counselor.id)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{counselor.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-saffron">{counselor.name}</h3>
                    <p className="text-dark-gray text-sm">{counselor.specialty}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(counselor.rating) ? "fill-gold text-gold" : "text-light-gray"}`}
                          />
                        ))}
                      </div>
                      <span className="text-dark-gray text-sm">
                        {counselor.rating} ({counselor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-dark-gray text-sm mb-3">{counselor.bio}</p>

                <div className="bg-cream p-3 rounded-lg border-2 border-gold mb-4">
                  <p className="text-dark-gray text-xs font-semibold">Experience: {counselor.experience}</p>
                  <p className="text-dark-gray text-xs">Availability: {counselor.availability}</p>
                  <p className="text-saffron font-bold mt-2">{counselor.sessionPrice}</p>
                </div>

                <Button className="w-full bg-saffron hover:bg-saffron-light text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Session
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {sessionTypes.map((session, idx) => (
              <Card key={idx} className="vedic-card p-8 bg-white">
                <h3 className="text-2xl font-serif font-bold text-saffron mb-2">{session.type}</h3>
                <p className="text-dark-gray text-sm mb-4">{session.description}</p>

                <div className="bg-cream p-4 rounded-lg border-2 border-gold mb-6">
                  <p className="text-dark-gray text-sm font-semibold mb-1">Duration: {session.duration}</p>
                  <p className="text-3xl font-bold text-saffron">{session.price}</p>
                </div>

                <div className="mb-6">
                  <p className="text-dark-gray text-sm font-semibold mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {session.includes.map((item, i) => (
                      <li key={i} className="text-dark-gray text-sm flex items-center gap-2">
                        <span className="text-saffron">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-saffron hover:bg-saffron-light text-white">Choose Session</Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="booking" className="space-y-6">
          <Card className="vedic-card p-8 bg-white">
            <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Book Your Session</h3>

            <div className="space-y-6">
              <div>
                <label className="text-dark-gray font-semibold block mb-2">Select Counselor</label>
                <select className="w-full px-4 py-2 bg-light-gray border-2 border-cream text-dark-gray rounded-lg focus:border-saffron">
                  <option>Choose a counselor...</option>
                  {counselors.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} - {c.specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-dark-gray font-semibold block mb-2">Session Type</label>
                <select className="w-full px-4 py-2 bg-light-gray border-2 border-cream text-dark-gray rounded-lg focus:border-saffron">
                  <option>Choose session type...</option>
                  {sessionTypes.map((s, i) => (
                    <option key={i} value={s.type}>
                      {s.type} - {s.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-dark-gray font-semibold block mb-2">Preferred Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 bg-light-gray border-2 border-cream text-dark-gray rounded-lg focus:border-saffron"
                />
              </div>

              <div>
                <label className="text-dark-gray font-semibold block mb-2">Your Questions/Topics</label>
                <textarea
                  className="w-full px-4 py-2 bg-light-gray border-2 border-cream text-dark-gray rounded-lg focus:border-saffron"
                  rows={4}
                  placeholder="Tell us what you'd like to discuss..."
                ></textarea>
              </div>

              <Button className="w-full bg-saffron hover:bg-saffron-light text-white font-semibold py-3">
                <MessageSquare className="w-4 h-4 mr-2" />
                Confirm Booking
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials" className="space-y-6">
          <div className="space-y-4">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="vedic-card p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">👤</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-serif font-bold text-saffron">{testimonial.name}</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? "fill-gold text-gold" : "text-light-gray"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-dark-gray italic">"{testimonial.text}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
