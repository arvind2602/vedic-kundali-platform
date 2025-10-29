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
      <Card className="bg-slate-800 border-purple-500 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Your Kundali Chart</h2>
          <div className="flex gap-2">
            <Button
              onClick={() => setChartFormat("north")}
              variant={chartFormat === "north" ? "default" : "outline"}
              className={chartFormat === "north" ? "bg-purple-600" : ""}
            >
              North Indian
            </Button>
            <Button
              onClick={() => setChartFormat("south")}
              variant={chartFormat === "south" ? "default" : "outline"}
              className={chartFormat === "south" ? "bg-purple-600" : ""}
            >
              South Indian
            </Button>
          </div>
        </div>

        <KundaliChart data={data} format={chartFormat} />

        {/* Birth Details Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-400 text-sm">Name</p>
            <p className="text-white font-semibold">{data.name}</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-400 text-sm">Birth Date</p>
            <p className="text-white font-semibold">{data.birthDate}</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-400 text-sm">Birth Time</p>
            <p className="text-white font-semibold">{data.birthTime}</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-400 text-sm">Location</p>
            <p className="text-white font-semibold">{data.birthLocation}</p>
          </div>
        </div>
      </Card>

      {/* Planetary Positions */}
      <Card className="bg-slate-800 border-purple-500 p-8">
        <h3 className="text-xl font-bold text-white mb-4">Planetary Positions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.planets &&
            Object.entries(data.planets).map(([planet, position]: [string, any]) => (
              <div key={planet} className="bg-slate-700 p-4 rounded-lg">
                <p className="text-purple-300 font-semibold capitalize">{planet}</p>
                <p className="text-white text-sm mt-2">
                  {position.sign} {position.degree.toFixed(2)}°
                </p>
                <p className="text-slate-400 text-xs mt-1">House {position.house}</p>
              </div>
            ))}
        </div>
      </Card>
    </div>
  )
}
