"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type DashboardProps = {
  savedKundalis: any[]
  onLoadKundali: (data: any) => void
}

export function Dashboard({ savedKundalis, onLoadKundali }: DashboardProps) {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-purple-500 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Your Kundali Collection</h2>

        {savedKundalis.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 mb-4">No Kundalis saved yet</p>
            <p className="text-slate-500 text-sm">Generate and save your first Kundali to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedKundalis.map((kundali) => (
              <Card key={kundali.id} className="bg-slate-700 border-purple-400 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{kundali.name}</h3>
                <div className="space-y-2 text-sm text-slate-300 mb-4">
                  <p>Date: {kundali.birthDate}</p>
                  <p>Time: {kundali.birthTime}</p>
                  <p>Location: {kundali.birthLocation}</p>
                  <p>Sun Sign: {kundali.sunSign}</p>
                  <p>Moon Sign: {kundali.moonSign}</p>
                </div>
                <Button onClick={() => onLoadKundali(kundali)} className="w-full bg-purple-600 hover:bg-purple-700">
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        )}
      </Card>

      {/* Statistics */}
      <Card className="bg-slate-800 border-purple-500 p-8">
        <h3 className="text-xl font-bold text-white mb-4">Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-400 text-sm">Total Kundalis</p>
            <p className="text-3xl font-bold text-purple-400">{savedKundalis.length}</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-400 text-sm">Last Generated</p>
            <p className="text-white">
              {savedKundalis.length > 0
                ? new Date(savedKundalis[savedKundalis.length - 1].createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <p className="text-slate-400 text-sm">Most Common Sign</p>
            <p className="text-white">{savedKundalis.length > 0 ? savedKundalis[0].sunSign : "N/A"}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
