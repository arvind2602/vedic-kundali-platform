"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Heart, BookOpen, Settings } from "lucide-react"

export function MobileQuickAccess() {
  const quickActions = [
    {
      icon: Zap,
      label: "Generate Kundali",
      description: "Create your birth chart",
      color: "bg-saffron",
    },
    {
      icon: Heart,
      label: "Kundali Matching",
      description: "Check compatibility",
      color: "bg-pink-500",
    },
    {
      icon: BookOpen,
      label: "Daily Horoscope",
      description: "Today's insights",
      color: "bg-blue-500",
    },
    {
      icon: Settings,
      label: "My Profile",
      description: "Account settings",
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 p-4 md:hidden">
      {quickActions.map((action, idx) => {
        const IconComponent = action.icon

        return (
          <Card key={idx} className="vedic-card p-4 bg-white text-center hover:shadow-lg transition-shadow">
            <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <p className="font-serif font-bold text-saffron text-sm">{action.label}</p>
            <p className="text-dark-gray text-xs">{action.description}</p>
            <Button className="w-full mt-2 bg-saffron hover:bg-saffron-light text-white text-xs py-1">Open</Button>
          </Card>
        )
      })}
    </div>
  )
}
