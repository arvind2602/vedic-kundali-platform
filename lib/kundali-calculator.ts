// Vedic Astrology Calculation Engine
// This is a simplified implementation for demonstration purposes

const ZODIAC_SIGNS = [
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

const PLANETS = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn", "rahu", "ketu"]

interface BirthData {
  id: string
  name: string
  gender: string
  birthDate: string
  birthTime: string
  birthLocation: string
  latitude: number
  longitude: number
  timezone: string
  createdAt: string
}

interface PlanetPosition {
  degree: number
  sign: string
  house: number
  retrograde: boolean
}

interface KundaliData extends BirthData {
  planets: Record<string, PlanetPosition>
  ascendant: string
  ascendantDegree: number
  moonSign: string
  sunSign: string
  doshas: {
    mangal: boolean
    pitra: boolean
    nadi: boolean
  }
  yogas: string[]
  dashaSystem: {
    currentDasha: string
    currentBhukti: string
    endDate: string
  }
}

export function calculateKundali(birthData: BirthData): KundaliData {
  // Parse birth date and time
  const [year, month, day] = birthData.birthDate.split("-").map(Number)
  const [hours, minutes] = birthData.birthTime.split(":").map(Number)

  // Calculate Julian Day Number (simplified)
  const jd = calculateJulianDay(year, month, day, hours, minutes)

  // Calculate planetary positions
  const planets = calculatePlanetaryPositions(jd)

  // Calculate ascendant (Lagna)
  const ascendant = calculateAscendant(jd, birthData.latitude, birthData.longitude)

  // Calculate houses
  const houses = calculateHouses(ascendant, jd)

  // Assign planets to houses
  const planetsWithHouses = assignPlanetsToHouses(planets, houses)

  // Calculate moon sign
  const moonSign = ZODIAC_SIGNS[Math.floor(planets.moon.degree / 30)]

  // Calculate sun sign
  const sunSign = ZODIAC_SIGNS[Math.floor(planets.sun.degree / 30)]

  // Calculate doshas
  const doshas = calculateDoshas(planetsWithHouses, ascendant)

  // Calculate yogas
  const yogas = calculateYogas(planetsWithHouses)

  // Calculate Dasha system
  const dashaSystem = calculateDashaSystem(birthData.birthDate, planets.moon.degree)

  return {
    ...birthData,
    planets: planetsWithHouses,
    ascendant: ZODIAC_SIGNS[Math.floor(ascendant.degree / 30)],
    ascendantDegree: ascendant.degree,
    moonSign,
    sunSign,
    doshas,
    yogas,
    dashaSystem,
  }
}

function calculateJulianDay(year: number, month: number, day: number, hours: number, minutes: number): number {
  // Simplified Julian Day calculation
  const a = Math.floor((14 - month) / 12)
  const y = year + 4800 - a
  const m = month + 12 * a - 3

  const jdn =
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  const jd = jdn + (hours - 12) / 24 + minutes / 1440

  return jd
}

function calculatePlanetaryPositions(jd: number): Record<string, any> {
  // Simplified planetary position calculation
  // In a real implementation, this would use complex astronomical algorithms
  const T = (jd - 2451545.0) / 36525.0

  const positions: Record<string, any> = {}

  // Sun position (simplified)
  const sunLongitude = (280.46646 + 36000.76983 * T + 0.0003032 * T * T) % 360
  positions.sun = {
    degree: sunLongitude,
    sign: ZODIAC_SIGNS[Math.floor(sunLongitude / 30)],
    retrograde: false,
  }

  // Moon position (simplified)
  const moonLongitude = (218.3165 + 481267.8813 * T) % 360
  positions.moon = {
    degree: moonLongitude,
    sign: ZODIAC_SIGNS[Math.floor(moonLongitude / 30)],
    retrograde: false,
  }

  // Other planets (simplified - using pseudo-random based on JD)
  const planets = ["mars", "mercury", "jupiter", "venus", "saturn"]
  planets.forEach((planet, index) => {
    const degree = (sunLongitude + (index + 1) * 45 + Math.sin(T) * 30) % 360
    positions[planet] = {
      degree: degree < 0 ? degree + 360 : degree,
      sign: ZODIAC_SIGNS[Math.floor(degree / 30)],
      retrograde: Math.random() > 0.8,
    }
  })

  // Rahu and Ketu (always opposite)
  const rahuDegree = (125.04 - 1934.136 * T) % 360
  positions.rahu = {
    degree: rahuDegree < 0 ? rahuDegree + 360 : rahuDegree,
    sign: ZODIAC_SIGNS[Math.floor(rahuDegree / 30)],
    retrograde: true,
  }
  positions.ketu = {
    degree: (rahuDegree + 180) % 360,
    sign: ZODIAC_SIGNS[Math.floor(((rahuDegree + 180) % 360) / 30)],
    retrograde: true,
  }

  return positions
}

function calculateAscendant(jd: number, latitude: number, longitude: number): any {
  // Simplified ascendant calculation
  const T = (jd - 2451545.0) / 36525.0
  const siderealTime = calculateSiderealTime(jd, longitude)
  const ascendantDegree = (siderealTime + latitude * 0.5) % 360

  return {
    degree: ascendantDegree < 0 ? ascendantDegree + 360 : ascendantDegree,
    sign: ZODIAC_SIGNS[Math.floor(ascendantDegree / 30)],
  }
}

function calculateSiderealTime(jd: number, longitude: number): number {
  const T = (jd - 2451545.0) / 36525.0
  const gmst = (280.46061837 + 360.98564724 * (jd - 2451545.0) + 0.000387933 * T * T - (T * T * T) / 38710000) % 360
  return (gmst + longitude) % 360
}

function calculateHouses(ascendant: any, jd: number): number[] {
  // Simplified house calculation (Placidus system approximation)
  const houses = []
  for (let i = 0; i < 12; i++) {
    houses.push((ascendant.degree + i * 30) % 360)
  }
  return houses
}

function assignPlanetsToHouses(planets: Record<string, any>, houses: number[]): Record<string, any> {
  const result: Record<string, any> = {}

  Object.entries(planets).forEach(([planet, position]) => {
    let house = 1
    for (let i = 0; i < 12; i++) {
      const nextHouse = (i + 1) % 12
      const currentHouseDegree = houses[i]
      const nextHouseDegree = houses[nextHouse]

      if (currentHouseDegree < nextHouseDegree) {
        if (position.degree >= currentHouseDegree && position.degree < nextHouseDegree) {
          house = i + 1
          break
        }
      } else {
        if (position.degree >= currentHouseDegree || position.degree < nextHouseDegree) {
          house = i + 1
          break
        }
      }
    }

    result[planet] = {
      ...position,
      house,
    }
  })

  return result
}

function calculateDoshas(planets: Record<string, any>, ascendant: any): any {
  // Simplified Dosha calculation
  const mangalDegree = planets.mars.degree
  const ascendantDegree = ascendant.degree

  // Mangal Dosha: Mars in 1, 4, 7, 8, 12 houses
  const mangalHouse = planets.mars.house
  const hasMangalDosha = [1, 4, 7, 8, 12].includes(mangalHouse)

  // Simplified Pitra Dosha and Nadi Dosha
  const hasPitraDosha = planets.sun.house === 8 || planets.sun.house === 12
  const hasNadiDosha = Math.random() > 0.7 // Simplified

  return {
    mangal: hasMangalDosha,
    pitra: hasPitraDosha,
    nadi: hasNadiDosha,
  }
}

function calculateYogas(planets: Record<string, any>): string[] {
  const yogas: string[] = []

  // Simplified Yoga calculations
  if (planets.jupiter.house === 1 || planets.jupiter.house === 5 || planets.jupiter.house === 9) {
    yogas.push("Dharma Yoga")
  }

  if (planets.venus.house === 7 || planets.venus.house === 11) {
    yogas.push("Lakshmi Yoga")
  }

  if (planets.saturn.house === 10 || planets.saturn.house === 11) {
    yogas.push("Rajya Yoga")
  }

  if (planets.mercury.house === 1 || planets.mercury.house === 5) {
    yogas.push("Budha Yoga")
  }

  return yogas.length > 0 ? yogas : ["Neutral Yoga"]
}

function calculateDashaSystem(birthDate: string, moonDegree: number): any {
  // Simplified Vimshottari Dasha calculation
  const dashas = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"]
  const dashaYears = [7, 20, 6, 10, 7, 18, 16, 19, 17]

  // Calculate which Dasha the person is in
  const birthYear = Number.parseInt(birthDate.split("-")[0])
  const currentYear = new Date().getFullYear()
  const age = currentYear - birthYear

  let totalYears = 0
  let currentDashaIndex = 0

  for (let i = 0; i < dashas.length; i++) {
    totalYears += dashaYears[i]
    if (age < totalYears) {
      currentDashaIndex = i
      break
    }
  }

  const currentDasha = dashas[currentDashaIndex]
  const nextDashaIndex = (currentDashaIndex + 1) % dashas.length
  const nextDasha = dashas[nextDashaIndex]

  // Calculate end date (simplified)
  const endDate = new Date()
  endDate.setFullYear(endDate.getFullYear() + dashaYears[nextDashaIndex])

  return {
    currentDasha,
    currentBhukti: nextDasha,
    endDate: endDate.toISOString().split("T")[0],
  }
}
