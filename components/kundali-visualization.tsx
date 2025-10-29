"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { KundaliChart } from "@/components/kundali-chart"

type KundaliVisualizationProps = {
  data: any
}

export function KundaliVisualization({ data }: KundaliVisualizationProps) {
  const [chartFormat, setChartFormat] = useState<"north" | "south">("north")

  return (
    <div className="space-y-6">
      <Card className="vedic-card p-8 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-3xl font-serif font-bold text-saffron">Your Kundali Chart</h2>
          <div className="flex gap-2">
            <Button
              onClick={() => setChartFormat("north")}
              variant={chartFormat === "north" ? "default" : "outline"}
              className={
                chartFormat === "north"
                  ? "bg-saffron hover:bg-saffron-light text-white"
                  : "border-2 border-saffron text-saffron hover:bg-cream"
              }
            >
              North Indian
            </Button>
            <Button
              onClick={() => setChartFormat("south")}
              variant={chartFormat === "south" ? "default" : "outline"}
              className={
                chartFormat === "south"
                  ? "bg-saffron hover:bg-saffron-light text-white"
                  : "border-2 border-saffron text-saffron hover:bg-cream"
              }
            >
              South Indian
            </Button>
          </div>
        </div>

        <KundaliChart data={data} format={chartFormat} />

        {/* Birth Details Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-cream border-2 border-gold p-4 rounded-lg">
            <p className="text-dark-gray text-sm font-semibold">Name</p>
            <p className="text-saffron font-bold mt-1">{data.name}</p>
          </div>
          <div className="bg-cream border-2 border-gold p-4 rounded-lg">
            <p className="text-dark-gray text-sm font-semibold">Birth Date</p>
            <p className="text-saffron font-bold mt-1">{data.birthDate}</p>
          </div>
          <div className="bg-cream border-2 border-gold p-4 rounded-lg">
            <p className="text-dark-gray text-sm font-semibold">Birth Time</p>
            <p className="text-saffron font-bold mt-1">{data.birthTime}</p>
          </div>
          <div className="bg-cream border-2 border-gold p-4 rounded-lg">
            <p className="text-dark-gray text-sm font-semibold">Location</p>
            <p className="text-saffron font-bold mt-1">{data.birthLocation}</p>
          </div>
        </div>
      </Card>

      {/* Planetary Positions */}
      <Card className="vedic-card p-8 bg-white">
        <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Planetary Positions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.planets &&
            Object.entries(data.planets).map(([planet, position]: [string, any]) => (
              <div key={planet} className="bg-cream border-2 border-gold p-4 rounded-lg">
                <p className="text-saffron font-serif font-bold capitalize">{planet}</p>
                <p className="text-dark-gray font-semibold text-sm mt-2">
                  {position.sign} {position.degree.toFixed(2)}°
                </p>
                <p className="text-dark-gray text-xs mt-1">House {position.house}</p>
              </div>
            ))}
        </div>
      </Card>
    </div>
  )
}
