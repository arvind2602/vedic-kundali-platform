"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Volume2, Type, Contrast } from "lucide-react"

interface AccessibilitySettings {
  highContrast: boolean
  largeText: boolean
  screenReader: boolean
  reducedMotion: boolean
  fontSize: "normal" | "large" | "xlarge"
}

interface AccessibilityFeaturesProps {
  onSettingsChange: (settings: AccessibilitySettings) => void
}

export function AccessibilityFeatures({ onSettingsChange }: AccessibilityFeaturesProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    screenReader: false,
    reducedMotion: false,
    fontSize: "normal",
  })

  const handleToggle = (key: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [key]: !settings[key],
    }
    setSettings(newSettings)
    onSettingsChange(newSettings)
  }

  const handleFontSizeChange = (size: "normal" | "large" | "xlarge") => {
    const newSettings = {
      ...settings,
      fontSize: size,
    }
    setSettings(newSettings)
    onSettingsChange(newSettings)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif font-bold text-saffron mb-2">Accessibility Settings</h2>
        <p className="text-dark-gray">Customize your experience for optimal comfort and usability</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Visual Accessibility */}
        <Card className="vedic-card p-8 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-saffron" />
            <h3 className="text-2xl font-serif font-bold text-saffron">Visual</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-cream p-4 rounded-lg border-2 border-gold">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-dark-gray">High Contrast Mode</label>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={() => handleToggle("highContrast")}
                  className="w-5 h-5 cursor-pointer"
                  aria-label="Toggle high contrast mode"
                />
              </div>
              <p className="text-dark-gray text-sm">Increases contrast for better visibility</p>
            </div>

            <div className="bg-cream p-4 rounded-lg border-2 border-gold">
              <label className="font-semibold text-dark-gray block mb-3">Font Size</label>
              <div className="space-y-2">
                {["normal", "large", "xlarge"].map((size) => (
                  <label key={size} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="fontSize"
                      value={size}
                      checked={settings.fontSize === size}
                      onChange={() => handleFontSizeChange(size as "normal" | "large" | "xlarge")}
                      className="w-4 h-4"
                      aria-label={`Set font size to ${size}`}
                    />
                    <span className="text-dark-gray capitalize">{size}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Audio Accessibility */}
        <Card className="vedic-card p-8 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Volume2 className="w-8 h-8 text-saffron" />
            <h3 className="text-2xl font-serif font-bold text-saffron">Audio</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-cream p-4 rounded-lg border-2 border-gold">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-dark-gray">Screen Reader Support</label>
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={() => handleToggle("screenReader")}
                  className="w-5 h-5 cursor-pointer"
                  aria-label="Toggle screen reader support"
                />
              </div>
              <p className="text-dark-gray text-sm">Optimizes content for screen readers</p>
            </div>

            <div className="bg-cream p-4 rounded-lg border-2 border-gold">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-dark-gray">Captions & Transcripts</label>
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  aria-label="Enable captions and transcripts"
                />
              </div>
              <p className="text-dark-gray text-sm">Display captions for audio content</p>
            </div>
          </div>
        </Card>

        {/* Motion & Animation */}
        <Card className="vedic-card p-8 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Contrast className="w-8 h-8 text-saffron" />
            <h3 className="text-2xl font-serif font-bold text-saffron">Motion</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-cream p-4 rounded-lg border-2 border-gold">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-dark-gray">Reduce Motion</label>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={() => handleToggle("reducedMotion")}
                  className="w-5 h-5 cursor-pointer"
                  aria-label="Toggle reduced motion"
                />
              </div>
              <p className="text-dark-gray text-sm">Minimizes animations and transitions</p>
            </div>

            <div className="bg-cream p-4 rounded-lg border-2 border-gold">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-dark-gray">Pause Animations</label>
                <input type="checkbox" className="w-5 h-5 cursor-pointer" aria-label="Pause all animations" />
              </div>
              <p className="text-dark-gray text-sm">Stops all moving elements</p>
            </div>
          </div>
        </Card>

        {/* Keyboard Navigation */}
        <Card className="vedic-card p-8 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Type className="w-8 h-8 text-saffron" />
            <h3 className="text-2xl font-serif font-bold text-saffron">Keyboard</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-cream p-4 rounded-lg border-2 border-gold">
              <p className="font-semibold text-dark-gray mb-2">Keyboard Shortcuts</p>
              <ul className="space-y-1 text-dark-gray text-sm">
                <li>Tab - Navigate forward</li>
                <li>Shift + Tab - Navigate backward</li>
                <li>Enter - Activate button</li>
                <li>Space - Toggle checkbox</li>
              </ul>
            </div>

            <div className="bg-cream p-4 rounded-lg border-2 border-gold">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-dark-gray">Focus Indicator</label>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 cursor-pointer"
                  aria-label="Show focus indicator"
                />
              </div>
              <p className="text-dark-gray text-sm">Highlights focused elements</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Reset Button */}
      <div className="text-center">
        <Button
          onClick={() => {
            const defaultSettings: AccessibilitySettings = {
              highContrast: false,
              largeText: false,
              screenReader: false,
              reducedMotion: false,
              fontSize: "normal",
            }
            setSettings(defaultSettings)
            onSettingsChange(defaultSettings)
          }}
          variant="outline"
          className="border-2 border-saffron text-saffron hover:bg-cream bg-transparent"
        >
          Reset to Default
        </Button>
      </div>

      {/* Accessibility Statement */}
      <Card className="vedic-card p-8 bg-cream border-2 border-gold">
        <h3 className="font-serif font-bold text-saffron mb-3">Accessibility Commitment</h3>
        <p className="text-dark-gray mb-4">
          We are committed to making the Vedic Kundali Platform accessible to everyone. Our platform complies with WCAG
          2.1 Level AA standards and is continuously improved based on user feedback.
        </p>
        <p className="text-dark-gray text-sm">
          If you encounter any accessibility issues, please contact our support team at accessibility@vedickundali.com
        </p>
      </Card>
    </div>
  )
}
