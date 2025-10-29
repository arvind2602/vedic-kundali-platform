"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Heart, Briefcase, Activity } from "lucide-react"

type PersonalizedReportsProps = {
  data: any
}

export function PersonalizedReports({ data }: PersonalizedReportsProps) {
  const generatePersonalityReport = () => {
    const traits = []

    if (data.sunSign === "Aries") traits.push("Courageous, energetic, and pioneering")
    if (data.sunSign === "Taurus") traits.push("Reliable, practical, and grounded")
    if (data.sunSign === "Gemini") traits.push("Communicative, intellectual, and adaptable")
    if (data.sunSign === "Cancer") traits.push("Emotional, nurturing, and intuitive")
    if (data.sunSign === "Leo") traits.push("Confident, creative, and generous")
    if (data.sunSign === "Virgo") traits.push("Analytical, practical, and detail-oriented")
    if (data.sunSign === "Libra") traits.push("Diplomatic, balanced, and social")
    if (data.sunSign === "Scorpio") traits.push("Intense, passionate, and transformative")
    if (data.sunSign === "Sagittarius") traits.push("Optimistic, adventurous, and philosophical")
    if (data.sunSign === "Capricorn") traits.push("Ambitious, disciplined, and responsible")
    if (data.sunSign === "Aquarius") traits.push("Innovative, humanitarian, and independent")
    if (data.sunSign === "Pisces") traits.push("Compassionate, artistic, and spiritual")

    return traits.join(", ")
  }

  const generateCareerReport = () => {
    const careers: Record<string, string[]> = {
      Aries: ["Military", "Sports", "Entrepreneurship", "Engineering"],
      Taurus: ["Banking", "Agriculture", "Real Estate", "Cooking"],
      Gemini: ["Writing", "Teaching", "Journalism", "Sales"],
      Cancer: ["Healthcare", "Hospitality", "Psychology", "Nursing"],
      Leo: ["Management", "Entertainment", "Politics", "Leadership"],
      Virgo: ["Accounting", "Analysis", "Healthcare", "Research"],
      Libra: ["Law", "Diplomacy", "Design", "HR"],
      Scorpio: ["Research", "Psychology", "Investigation", "Finance"],
      Sagittarius: ["Education", "Travel", "Philosophy", "Publishing"],
      Capricorn: ["Administration", "Engineering", "Government", "Finance"],
      Aquarius: ["Technology", "Science", "Humanitarian Work", "Innovation"],
      Pisces: ["Arts", "Music", "Spirituality", "Counseling"],
    }

    return careers[data.sunSign]?.join(", ") || "Various fields"
  }

  const generateHealthReport = () => {
    const healthAreas: Record<string, string[]> = {
      Aries: ["Headaches", "Fever", "Accidents", "Maintain regular exercise"],
      Taurus: ["Throat issues", "Thyroid", "Neck pain", "Avoid heavy foods"],
      Gemini: ["Respiratory issues", "Anxiety", "Nervous tension", "Practice meditation"],
      Cancer: ["Digestive issues", "Emotional stress", "Chest problems", "Manage emotions"],
      Leo: ["Heart issues", "Back pain", "Eye strain", "Regular checkups"],
      Virgo: ["Digestive problems", "Anxiety", "Nervous disorders", "Balanced diet"],
      Libra: ["Kidney issues", "Skin problems", "Lower back pain", "Stay hydrated"],
      Scorpio: ["Reproductive issues", "Infections", "Emotional stress", "Detoxification"],
      Sagittarius: ["Hip problems", "Liver issues", "Sciatica", "Regular exercise"],
      Capricorn: ["Bone issues", "Skin problems", "Joint pain", "Calcium intake"],
      Aquarius: ["Circulation issues", "Nervous disorders", "Ankle problems", "Yoga practice"],
      Pisces: ["Immune issues", "Addiction tendencies", "Fatigue", "Spiritual practices"],
    }

    return healthAreas[data.sunSign]?.join(", ") || "Maintain overall wellness"
  }

  const generateRelationshipReport = () => {
    const compatibility: Record<string, string[]> = {
      Aries: ["Leo", "Sagittarius", "Gemini"],
      Taurus: ["Virgo", "Capricorn", "Cancer"],
      Gemini: ["Aquarius", "Libra", "Aries"],
      Cancer: ["Scorpio", "Pisces", "Taurus"],
      Leo: ["Sagittarius", "Aries", "Libra"],
      Virgo: ["Capricorn", "Taurus", "Scorpio"],
      Libra: ["Aquarius", "Gemini", "Leo"],
      Scorpio: ["Pisces", "Cancer", "Virgo"],
      Sagittarius: ["Aries", "Leo", "Aquarius"],
      Capricorn: ["Taurus", "Virgo", "Pisces"],
      Aquarius: ["Gemini", "Libra", "Sagittarius"],
      Pisces: ["Cancer", "Scorpio", "Capricorn"],
    }

    return compatibility[data.sunSign]?.join(", ") || "Check compatibility individually"
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="personality" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-cream border-2 border-saffron">
          <TabsTrigger
            value="personality"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Personality
          </TabsTrigger>
          <TabsTrigger
            value="career"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Career
          </TabsTrigger>
          <TabsTrigger
            value="health"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Health
          </TabsTrigger>
          <TabsTrigger
            value="relationship"
            className="text-dark-gray data-[state=active]:bg-saffron data-[state=active]:text-white"
          >
            Relationships
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personality">
          <Card className="vedic-card p-8 bg-white">
            <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Personality Profile</h3>
            <div className="space-y-6">
              <div className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                <p className="text-dark-gray text-sm font-semibold mb-2">Sun Sign: {data.sunSign}</p>
                <p className="text-dark-gray">{generatePersonalityReport()}</p>
              </div>
              <div className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                <p className="text-dark-gray text-sm font-semibold mb-2">Moon Sign: {data.moonSign}</p>
                <p className="text-dark-gray">Emotional nature and inner self</p>
              </div>
              <div className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                <p className="text-dark-gray text-sm font-semibold mb-2">Ascendant: {data.ascendant}</p>
                <p className="text-dark-gray">How you appear to the world</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="career">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-start gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-saffron flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-serif font-bold text-saffron">Career Guidance</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                <p className="text-dark-gray text-sm font-semibold mb-2">Suitable Careers:</p>
                <p className="text-dark-gray">{generateCareerReport()}</p>
              </div>
              <div className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                <p className="text-dark-gray text-sm font-semibold mb-2">
                  Current Dasha: {data.dashaSystem.currentDasha}
                </p>
                <p className="text-dark-gray text-sm">This period influences your career opportunities and growth</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="health">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-start gap-3 mb-6">
              <Activity className="w-8 h-8 text-saffron flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-serif font-bold text-saffron">Health Insights</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                <p className="text-dark-gray text-sm font-semibold mb-2">Areas to Monitor:</p>
                <p className="text-dark-gray">{generateHealthReport()}</p>
              </div>
              <div className="bg-saffron/10 border-2 border-saffron p-4 rounded-lg">
                <p className="text-saffron text-sm font-semibold">
                  Recommendation: Maintain a balanced lifestyle and regular health checkups
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="relationship">
          <Card className="vedic-card p-8 bg-white">
            <div className="flex items-start gap-3 mb-6">
              <Heart className="w-8 h-8 text-saffron flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-serif font-bold text-saffron">Relationship Compatibility</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-cream p-6 rounded-lg border-l-4 border-gold">
                <p className="text-dark-gray text-sm font-semibold mb-2">Most Compatible Signs:</p>
                <p className="text-dark-gray">{generateRelationshipReport()}</p>
              </div>
              <div className="bg-saffron/10 border-2 border-saffron p-4 rounded-lg flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                <p className="text-saffron text-sm">
                  Note: Compatibility depends on complete birth chart analysis, not just sun signs
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Doshas Section */}
      <Card className="vedic-card p-8 bg-white">
        <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Doshas Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`p-6 rounded-lg border-2 ${data.doshas.mangal ? "bg-red-50 border-maroon" : "bg-green-50 border-green-500"}`}
          >
            <p className="font-serif font-bold text-dark-gray">Mangal Dosha</p>
            <p className={`mt-2 font-semibold ${data.doshas.mangal ? "text-maroon" : "text-green-700"}`}>
              {data.doshas.mangal ? "Present" : "Not Present"}
            </p>
          </div>
          <div
            className={`p-6 rounded-lg border-2 ${data.doshas.pitra ? "bg-red-50 border-maroon" : "bg-green-50 border-green-500"}`}
          >
            <p className="font-serif font-bold text-dark-gray">Pitra Dosha</p>
            <p className={`mt-2 font-semibold ${data.doshas.pitra ? "text-maroon" : "text-green-700"}`}>
              {data.doshas.pitra ? "Present" : "Not Present"}
            </p>
          </div>
          <div
            className={`p-6 rounded-lg border-2 ${data.doshas.nadi ? "bg-red-50 border-maroon" : "bg-green-50 border-green-500"}`}
          >
            <p className="font-serif font-bold text-dark-gray">Nadi Dosha</p>
            <p className={`mt-2 font-semibold ${data.doshas.nadi ? "text-maroon" : "text-green-700"}`}>
              {data.doshas.nadi ? "Present" : "Not Present"}
            </p>
          </div>
        </div>
      </Card>

      {/* Yogas Section */}
      <Card className="vedic-card p-8 bg-white">
        <h3 className="text-2xl font-serif font-bold text-saffron mb-6">Auspicious Yogas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.yogas.map((yoga: string, index: number) => (
            <div key={index} className="bg-cream p-4 rounded-lg border-2 border-gold">
              <p className="text-saffron font-serif font-bold">{yoga}</p>
              <p className="text-dark-gray text-sm mt-2">Brings positive influences to your life</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
