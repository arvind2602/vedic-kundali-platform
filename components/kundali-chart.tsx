"use client"

import { useEffect, useRef } from "react"

type KundaliChartProps = {
  data: any
  format: "north" | "south"
}

export function KundaliChart({ data, format }: KundaliChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !data.planets) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 150

    // Clear canvas
    ctx.fillStyle = "#1e293b"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (format === "north") {
      drawNorthIndianChart(ctx, centerX, centerY, radius, data)
    } else {
      drawSouthIndianChart(ctx, centerX, centerY, radius, data)
    }
  }, [data, format])

  const drawNorthIndianChart = (
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    data: any,
  ) => {
    // Draw outer circle
    ctx.strokeStyle = "#a78bfa"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.stroke()

    // Draw 12 houses (square divided into 12 sections)
    ctx.strokeStyle = "#7c3aed"
    ctx.lineWidth = 1

    const houseSize = (radius * 2) / 3
    const startX = centerX - houseSize / 2
    const startY = centerY - houseSize / 2

    // Draw main square
    ctx.strokeRect(startX, startY, houseSize, houseSize)

    // Draw divisions for 12 houses
    const divisionSize = houseSize / 3
    for (let i = 1; i < 3; i++) {
      ctx.beginPath()
      ctx.moveTo(startX + divisionSize * i, startY)
      ctx.lineTo(startX + divisionSize * i, startY + houseSize)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(startX, startY + divisionSize * i)
      ctx.lineTo(startX + houseSize, startY + divisionSize * i)
      ctx.stroke()
    }

    // Draw planets
    const planetSymbols: Record<string, string> = {
      sun: "☉",
      moon: "☽",
      mars: "♂",
      mercury: "☿",
      jupiter: "♃",
      venus: "♀",
      saturn: "♄",
      rahu: "Rahu",
      ketu: "Ketu",
    }

    ctx.fillStyle = "#fbbf24"
    ctx.font = "bold 14px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    Object.entries(data.planets).forEach(([planet, position]: [string, any]) => {
      const angle = (position.degree * Math.PI) / 180
      const x = centerX + Math.cos(angle) * (radius - 30)
      const y = centerY + Math.sin(angle) * (radius - 30)

      ctx.fillText(planetSymbols[planet] || planet.charAt(0).toUpperCase(), x, y)
    })

    // Draw zodiac signs
    ctx.fillStyle = "#e0e7ff"
    ctx.font = "12px Arial"
    const zodiacSigns = [
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
      "Aquarius",
      "Pisces",
    ]
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 * Math.PI) / 180
      const x = centerX + Math.cos(angle) * (radius + 20)
      const y = centerY + Math.sin(angle) * (radius + 20)
      ctx.fillText(zodiacSigns[i], x, y)
    }
  }

  const drawSouthIndianChart = (
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    data: any,
  ) => {
    // Draw outer circle
    ctx.strokeStyle = "#a78bfa"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.stroke()

    // Draw inner circle
    ctx.strokeStyle = "#7c3aed"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.7, 0, Math.PI * 2)
    ctx.stroke()

    // Draw 12 segments (pie chart style)
    ctx.strokeStyle = "#7c3aed"
    ctx.lineWidth = 1
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 * Math.PI) / 180
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()
    }

    // Draw planets
    const planetSymbols: Record<string, string> = {
      sun: "☉",
      moon: "☽",
      mars: "♂",
      mercury: "☿",
      jupiter: "♃",
      venus: "♀",
      saturn: "♄",
      rahu: "Rahu",
      ketu: "Ketu",
    }

    ctx.fillStyle = "#fbbf24"
    ctx.font = "bold 14px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    Object.entries(data.planets).forEach(([planet, position]: [string, any]) => {
      const angle = (position.degree * Math.PI) / 180
      const x = centerX + Math.cos(angle) * (radius * 0.85)
      const y = centerY + Math.sin(angle) * (radius * 0.85)

      ctx.fillText(planetSymbols[planet] || planet.charAt(0).toUpperCase(), x, y)
    })
  }

  return <canvas ref={canvasRef} width={400} height={400} className="mx-auto border border-purple-500 rounded-lg" />
}
