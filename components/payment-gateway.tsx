"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Lock } from "lucide-react"

interface PaymentGatewayProps {
  amount: number
  planName: string
  onPaymentSuccess: () => void
}

export function PaymentGateway({ amount, planName, onPaymentSuccess }: PaymentGatewayProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      onPaymentSuccess()
    }, 2000)
  }

  return (
    <Card className="vedic-card p-8 bg-white max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-6 h-6 text-saffron" />
        <h2 className="text-2xl font-serif font-bold text-saffron">Complete Payment</h2>
      </div>

      <div className="bg-cream p-4 rounded-lg mb-6 border-2 border-gold">
        <p className="text-dark-gray text-sm">Plan: {planName}</p>
        <p className="text-2xl font-bold text-saffron">${amount.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-dark-gray font-semibold">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
            required
          />
        </div>

        <div>
          <Label htmlFor="cardName" className="text-dark-gray font-semibold">
            Cardholder Name
          </Label>
          <Input
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="John Doe"
            className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
            required
          />
        </div>

        <div>
          <Label htmlFor="cardNumber" className="text-dark-gray font-semibold">
            Card Number
          </Label>
          <Input
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiryDate" className="text-dark-gray font-semibold">
              Expiry Date
            </Label>
            <Input
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
              required
            />
          </div>
          <div>
            <Label htmlFor="cvv" className="text-dark-gray font-semibold">
              CVV
            </Label>
            <Input
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              className="bg-light-gray border-2 border-cream text-dark-gray focus:border-saffron"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-dark-gray text-sm mb-4">
          <Lock className="w-4 h-4 text-saffron" />
          <span>Your payment is secure and encrypted</span>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-saffron hover:bg-saffron-light text-white font-semibold py-3"
        >
          {loading ? "Processing..." : `Pay $${amount.toFixed(2)}`}
        </Button>
      </form>
    </Card>
  )
}
