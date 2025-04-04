'use client'

import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { mockGolfTrips } from '@/lib/mockRace'

// Enkel mapping stad ➝ emoji-flagga
const flagMap: Record<string, string> = {
  Belek: '🇹🇷',
  Vilamoura: '🇵🇹',
  Dubai: '🇦🇪',
  Marbella: '🇪🇸',
  'St Andrews': '🏴',
  Phuket: '🇹🇭',
}

export default function UpcomingTournaments() {
  const today = new Date()

  const upcoming = mockGolfTrips
    .filter((trip) => new Date(trip.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3)

  return (
    <section className="py-12 container">
      <h2 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Kommande golftävlingar
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {upcoming.map((trip) => {
          const date = new Date(trip.date)
          const flag = flagMap[trip.city] || '🏌️‍♂️'
          const day = format(date, 'dd MMMM yyyy', { locale: sv })

          return (
            <Link
              key={trip.slug}
              href={`/resor/${trip.slug}`}
              className="group bg-card border border-[hsl(var(--border))] rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4" />
                <span>{day}</span>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-1">
                {flag} {trip.title}
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                {trip.course}
              </p>
              <p className="text-sm mt-3 font-medium text-[hsl(var(--primary))]">
                Pris från {trip.priceGreenFeeOnly.toLocaleString()} kr
              </p>
              <div className="mt-2 inline-flex items-center text-sm font-medium text-[hsl(var(--primary))] group-hover:underline">
                Läs mer <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
