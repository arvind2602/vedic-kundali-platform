"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Sparkles, Heart, Zap, Users, Shield } from "lucide-react"

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-saffron shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-serif font-bold text-saffron">ॐ</div>
            <h1 className="text-2xl font-serif font-bold text-dark-gray">Vedic Kundali</h1>
          </div>
          <Button onClick={onGetStarted} className="bg-saffron hover:bg-saffron-light text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 mandala-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 via-transparent to-gold/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="text-6xl font-serif font-bold text-saffron mb-2">Discover Your Cosmic Blueprint</div>
            </div>
            <p className="text-xl text-dark-gray max-w-2xl mx-auto">
              Unlock the ancient wisdom of Vedic astrology. Generate your personalized birth chart and explore your
              destiny through authentic Kundali analysis.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button onClick={onGetStarted} className="bg-saffron hover:bg-saffron-light text-white px-8 py-3 text-lg">
                Generate Your Kundali
              </Button>
              <Button
                variant="outline"
                className="border-2 border-saffron text-saffron hover:bg-cream px-8 py-3 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold text-center text-saffron mb-12">Why Choose Vedic Kundali?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Accurate Calculations",
                description: "Precise Vedic astrology algorithms based on ancient texts and modern astronomical data.",
              },
              {
                icon: Sparkles,
                title: "Personalized Insights",
                description: "Get detailed reports on personality, career, health, relationships, and life purpose.",
              },
              {
                icon: Heart,
                title: "Kundali Matching",
                description: "Explore compatibility with potential partners through comprehensive Kundali matching.",
              },
              {
                icon: Zap,
                title: "Transit Predictions",
                description: "Understand current planetary influences and upcoming astrological events in your life.",
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description: "Connect with Vedic counselors for personalized astrological consultations.",
              },
              {
                icon: Shield,
                title: "Remedies & Solutions",
                description: "Discover Vedic remedies, Pujas, and rituals to harmonize your cosmic energies.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="vedic-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-saffron mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-dark-gray mb-2">{feature.title}</h3>
                <p className="text-dark-gray">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-center text-saffron mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: "Enter Your Birth Details", desc: "Provide your birth date, time, and location" },
              { step: 2, title: "Generate Your Chart", desc: "Our algorithms calculate your personalized Kundali" },
              { step: 3, title: "Explore Insights", desc: "Discover detailed reports and astrological analysis" },
              { step: 4, title: "Take Action", desc: "Follow remedies and guidance for your life path" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-saffron text-white font-serif font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-dark-gray">{item.title}</h3>
                  <p className="text-dark-gray mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold text-center text-saffron mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Free",
                features: ["1 Kundali Generation", "Basic Chart Visualization", "Personality Report"],
              },
              {
                name: "Premium",
                price: "$9.99/month",
                features: [
                  "Unlimited Kundalis",
                  "All Reports",
                  "Kundali Matching",
                  "Transit Predictions",
                  "Priority Support",
                ],
                highlighted: true,
              },
              {
                name: "Spiritual",
                price: "$19.99/month",
                features: [
                  "Everything in Premium",
                  "Vedic Counseling Sessions",
                  "Personalized Remedies",
                  "Puja Recommendations",
                  "Direct Expert Access",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 text-center ${plan.highlighted ? "vedic-card border-gold bg-cream" : "vedic-card"}`}
              >
                <h3 className="text-2xl font-serif font-bold text-saffron mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-dark-gray mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-dark-gray">
                      <span className="text-saffron">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-saffron hover:bg-saffron-light text-white">Choose Plan</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-center text-saffron mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Priya Sharma",
                text: "The Kundali analysis was incredibly accurate. It helped me understand my life path and make better decisions.",
              },
              {
                name: "Rajesh Kumar",
                text: "The Kundali matching feature helped us find perfect compatibility. Highly recommended for couples!",
              },
              {
                name: "Anjali Patel",
                text: "The personalized reports are detailed and insightful. Worth every penny for the spiritual guidance.",
              },
              {
                name: "Vikram Singh",
                text: "Finally, a platform that respects authentic Vedic astrology. The transit predictions have been spot on.",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="vedic-card p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-dark-gray mb-4 italic">"{testimonial.text}"</p>
                <p className="font-serif font-bold text-saffron">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-saffron to-gold">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Ready to Discover Your Destiny?</h2>
          <p className="text-white text-lg mb-8">
            Join thousands of users exploring their cosmic blueprint through Vedic astrology.
          </p>
          <Button onClick={onGetStarted} className="bg-white text-saffron hover:bg-cream px-8 py-3 text-lg font-bold">
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-gray text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-serif font-bold text-saffron mb-4">Vedic Kundali</h4>
              <p className="text-sm">Authentic Vedic astrology for modern seekers.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-saffron">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-saffron">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-saffron">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-saffron">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-saffron">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-saffron">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-saffron">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-saffron">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-saffron">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 Vedic Kundali Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
