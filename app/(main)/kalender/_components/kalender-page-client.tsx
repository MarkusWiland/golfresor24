'use client'

import { mockRaces } from '@/lib/mockRace'

import { Metadata } from 'next'
import LoppCard from '../../lopp/_components/lopp-card'
export const metadata: Metadata = {
  title: 'F1-kalender 2025 – Alla kommande Formel 1-lopp | Formel1resor24',
  description:
    'Se hela Formel 1-kalendern 2025 med datum, städer och banor. Jämför biljetter och paketresor till varje Grand Prix hos svenska återförsäljare.',
}

export default function KalenderPageClient() {
  const upcoming = mockRaces
    .filter((race) => new Date(race.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <section className="py-10 container">
      <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
        Formel 1 – Kommande lopp
      </h1>

      <div className="space-y-4">
        {upcoming.map((race) => (
          <LoppCard key={race.slug} {...race} />
        ))}
      </div>
    </section>
  )
}
