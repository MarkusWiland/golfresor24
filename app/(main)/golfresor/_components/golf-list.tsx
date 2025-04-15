// components/GolfList.tsx

'use client'

import Link from 'next/link'
import GolfCard from './golf-card'

export default function GolfList({ trips }: { trips: any[] }) {
  return (
    <section className="space-y-6">
      {trips.map((trip) => (
        <Link key={trip.slug} href={`/resor/${trip.slug}`} className="block">
          <GolfCard {...trip} />
        </Link>
      ))}
    </section>
  )
}
