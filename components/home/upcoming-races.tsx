'use client'

import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import { mockGolfTrips } from '@/lib/mockRace'

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
    <section className="py-20 bg-[hsl(var(--background))]">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-[hsl(var(--foreground))] text-center">
          Kommande golfresor
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {upcoming.map((trip) => {
            const date = new Date(trip.date)
            const day = format(date, 'dd MMMM yyyy', { locale: sv })
            const flag = flagMap[trip.city] || '⛳️'

            return (
              <Link
                key={trip.slug}
                href={`/resor/${trip.slug}`}
                className="group bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{day}</span>
                </div>

                <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-1">
                  {flag} {trip.title}
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  {trip.course}, {trip.city}
                </p>

                <p className="text-[hsl(var(--primary))] font-bold text-lg mt-auto">
                  Från {trip.priceGreenFeeOnly.toLocaleString('sv-SE')} kr
                </p>

                <span className="inline-flex items-center gap-1 text-sm text-[hsl(var(--primary))] font-medium mt-2 group-hover:underline">
                  Läs mer <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/kalender"
            className="inline-block px-6 py-3 text-white font-semibold rounded-md bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/1.1)] transition"
          >
            Visa hela golfkalendern →
          </Link>
        </div>
      </div>
    </section>
  )
}
