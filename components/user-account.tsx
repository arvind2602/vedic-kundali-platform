"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, CreditCard, Settings, LogOut } from "lucide-react"

interface UserAccountProps {
  user: {
    name: string
    email: string
    subscription: "free" | "premium" | "spiritual"
    joinDate: string
  }
  onLogout: () => void
}

export function UserAccount({ user, onLogout }: UserAccountProps) {
  const [showSettings, setShowSettings] = useState(false)

  const subscriptionDetails = {
    free: { name: "Starter", color: "text-gray-600", bgColor: "bg-gray-100" },
    premium: { name: "Premium", color: "text-saffron", bgColor: "bg-cream" },
    spiritual: { name: "Spiritual", color: "text-saffron", bgColor: "bg-saffron/10" },
  }

  const details = subscriptionDetails[user.subscription]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-cream border-2 border-saffron">
          <TabsTrigger
            value="profile"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="subscription"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Subscription
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-saffron">{user.name}</h2>
                <p className="text-dark-gray">{user.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-cream p-4 rounded-lg border-2 border-gold">
                <p className="text-dark-gray text-sm font-semibold">Member Since</p>
                <p className="text-saffron font-bold">{user.joinDate}</p>
              </div>
              <div className={`${details.bgColor} p-4 rounded-lg border-2 border-gold`}>
                <p className="text-dark-gray text-sm font-semibold">Current Plan</p>
                <p className={`${details.color} font-bold text-lg`}>{details.name}</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="subscription">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-saffron" />
              <h3 className="text-2xl font-serif font-bold text-saffron">Subscription Details</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-cream p-6 rounded-lg border-2 border-gold">
                <p className="text-dark-gray text-sm font-semibold mb-2">Current Plan</p>
                <p className="text-2xl font-bold text-saffron mb-4">{details.name}</p>
                <Button className="bg-saffron hover:bg-saffron-light text-white">Manage Subscription</Button>
              </div>

              <div className="bg-light-gray p-6 rounded-lg border-2 border-cream">
                <p className="text-dark-gray text-sm font-semibold mb-2">Billing Information</p>
                <p className="text-dark-gray">Next billing date: January 15, 2025</p>
                <p className="text-dark-gray">Amount: $9.99/month</p>
              </div>

              <div className="bg-saffron/10 p-6 rounded-lg border-2 border-saffron">
                <p className="text-saffron font-semibold mb-2">Need help?</p>
                <p className="text-dark-gray text-sm mb-4">Contact our support team for billing inquiries</p>
                <Button variant="outline" className="border-saffron text-saffron hover:bg-cream bg-transparent">
                  Contact Support
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-saffron" />
              <h3 className="text-2xl font-serif font-bold text-saffron">Account Settings</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-cream p-6 rounded-lg border-2 border-gold">
                <p className="text-dark-gray font-semibold mb-2">Email Notifications</p>
                <p className="text-dark-gray text-sm mb-4">Receive updates about your Kundali and horoscope</p>
                <Button variant="outline" className="border-saffron text-saffron hover:bg-cream bg-transparent">
                  Manage Preferences
                </Button>
              </div>

              <div className="bg-cream p-6 rounded-lg border-2 border-gold">
                <p className="text-dark-gray font-semibold mb-2">Privacy & Security</p>
                <p className="text-dark-gray text-sm mb-4">Control how your data is used and shared</p>
                <Button variant="outline" className="border-saffron text-saffron hover:bg-cream bg-transparent">
                  Privacy Settings
                </Button>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-2 border-maroon">
                <p className="text-maroon font-semibold mb-2">Danger Zone</p>
                <p className="text-dark-gray text-sm mb-4">Permanently delete your account and all data</p>
                <Button variant="outline" className="border-maroon text-maroon hover:bg-red-100 bg-transparent">
                  Delete Account
                </Button>
              </div>

              <Button
                onClick={onLogout}
                className="w-full bg-maroon hover:bg-red-700 text-white font-semibold py-2 flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
