'use client'

import { mockGolfTrips } from '@/lib/mockRace'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Props = {
  currentSlug: string
  currentContinent: string
}

export default function SimilarTrips({ currentSlug, currentContinent }: Props) {
  const similar = mockGolfTrips
    .filter(
      (trip) =>
        trip.slug !== currentSlug && trip.continent === currentContinent,
    )
    .slice(0, 3)

  if (similar.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-[hsl(var(--foreground))]">
        Liknande golfresor
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {similar.map((trip) => (
          <Link
            key={trip.slug}
            href={`/resor/${trip.slug}`}
            className="group bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-1">
              {trip.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {trip.course}, {trip.city}
            </p>
            <p className="text-sm text-[hsl(var(--primary))] font-medium">
              Från {trip.priceGreenFeeOnly.toLocaleString('sv-SE')} kr
            </p>
            <span className="inline-flex items-center text-sm text-[hsl(var(--primary))] mt-2 group-hover:underline">
              Läs mer <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
