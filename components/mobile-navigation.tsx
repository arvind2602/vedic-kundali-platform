"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, BarChart3, Heart, Settings, Menu, X } from "lucide-react"

interface MobileNavigationProps {
  currentView: string
  onNavigate: (view: string) => void
}

export function MobileNavigation({ currentView, onNavigate }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-saffron md:hidden z-40">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const IconComponent = item.icon
            const isActive = currentView === item.id

            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsOpen(false)
                }}
                className={`flex-1 py-3 flex flex-col items-center gap-1 transition-colors ${
                  isActive
                    ? "bg-saffron/10 text-saffron border-t-2 border-saffron"
                    : "text-dark-gray hover:bg-light-gray"
                }`}
                aria-label={item.label}
              >
                <IconComponent className="w-6 h-6" />
                <span className="text-xs font-semibold">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-saffron text-white rounded-lg"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-out Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-lg p-6 space-y-4">
            <h2 className="text-2xl font-serif font-bold text-saffron mb-6">Menu</h2>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsOpen(false)
                }}
                className="w-full justify-start bg-cream hover:bg-saffron/10 text-dark-gray hover:text-saffron"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
