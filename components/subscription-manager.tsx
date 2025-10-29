"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Zap, Crown } from "lucide-react"

type SubscriptionTier = "free" | "premium" | "spiritual"

interface SubscriptionManagerProps {
  currentTier: SubscriptionTier
  onSubscribe: (tier: SubscriptionTier) => void
}

export function SubscriptionManager({ currentTier, onSubscribe }: SubscriptionManagerProps) {
  const [selectedTier, setSelectedTier] = useState<SubscriptionTier>(currentTier)

  const tiers = [
    {
      id: "free" as SubscriptionTier,
      name: "Starter",
      price: "Free",
      description: "Perfect for exploring Vedic astrology",
      icon: Zap,
      features: [
        "1 Kundali Generation per month",
        "Basic Chart Visualization",
        "Personality Report",
        "Limited Planetary Data",
      ],
      color: "border-light-gray",
      bgColor: "bg-light-gray",
    },
    {
      id: "premium" as SubscriptionTier,
      name: "Premium",
      price: "$9.99/month",
      description: "For serious astrology enthusiasts",
      icon: Crown,
      features: [
        "Unlimited Kundali Generations",
        "All Chart Formats",
        "Complete Reports (Personality, Career, Health, Relationships)",
        "Kundali Matching",
        "Transit Predictions",
        "Priority Email Support",
        "Save up to 50 Kundalis",
      ],
      color: "border-gold",
      bgColor: "bg-cream",
      highlighted: true,
    },
    {
      id: "spiritual" as SubscriptionTier,
      name: "Spiritual",
      price: "$19.99/month",
      description: "Complete spiritual guidance",
      icon: Crown,
      features: [
        "Everything in Premium",
        "Vedic Counseling Sessions (2/month)",
        "Personalized Remedies & Pujas",
        "Advanced Yoga Analysis",
        "Dosha Balancing Guidance",
        "Direct Expert Access",
        "Unlimited Kundali Storage",
        "Monthly Horoscope Reports",
      ],
      color: "border-saffron",
      bgColor: "bg-saffron/5",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-saffron mb-2">Choose Your Plan</h2>
        <p className="text-dark-gray">Unlock the full power of Vedic astrology</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => {
          const IconComponent = tier.icon
          const isSelected = selectedTier === tier.id
          const isCurrent = currentTier === tier.id

          return (
            <Card
              key={tier.id}
              className={`vedic-card p-8 transition-all ${
                tier.highlighted
                  ? `${tier.bgColor} border-2 ${tier.color} shadow-xl`
                  : `bg-white border-2 ${tier.color}`
              } ${isSelected ? "ring-2 ring-saffron" : ""}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <IconComponent className="w-6 h-6 text-saffron" />
                <h3 className="text-2xl font-serif font-bold text-saffron">{tier.name}</h3>
              </div>

              <div className="mb-2">
                <div className="text-3xl font-bold text-dark-gray">{tier.price}</div>
                <p className="text-dark-gray text-sm">{tier.description}</p>
              </div>

              {isCurrent && (
                <div className="bg-green-50 border border-green-500 text-green-700 px-3 py-2 rounded-lg text-sm font-semibold mb-4">
                  Current Plan
                </div>
              )}

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-dark-gray">
                    <Check className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  setSelectedTier(tier.id)
                  onSubscribe(tier.id)
                }}
                disabled={isCurrent}
                className={`w-full font-semibold py-2 ${
                  isCurrent
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : tier.highlighted
                      ? "bg-saffron hover:bg-saffron-light text-white"
                      : "bg-saffron hover:bg-saffron-light text-white"
                }`}
              >
                {isCurrent ? "Current Plan" : tier.id === "free" ? "Get Started" : "Subscribe Now"}
              </Button>
            </Card>
          )
        })}
      </div>

      <Card className="vedic-card p-8 bg-cream border-2 border-gold">
        <h3 className="text-2xl font-serif font-bold text-saffron mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes, you can cancel your subscription at any time without any penalties.",
            },
            {
              q: "Is my data secure?",
              a: "Absolutely. We use industry-standard encryption to protect your personal and astrological data.",
            },
            {
              q: "Do you offer refunds?",
              a: "We offer a 7-day money-back guarantee if you're not satisfied with your subscription.",
            },
            {
              q: "Can I upgrade or downgrade my plan?",
              a: "Yes, you can change your plan at any time. Changes take effect at the next billing cycle.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="border-b border-gold pb-4 last:border-b-0">
              <p className="font-serif font-bold text-saffron mb-2">{faq.q}</p>
              <p className="text-dark-gray text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
