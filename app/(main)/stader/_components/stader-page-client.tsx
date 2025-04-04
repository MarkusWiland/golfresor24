'use client'

import Link from 'next/link'
import { mockRaces } from '@/lib/mockRace'

export default function StaderPageClient() {
  // Hämta unika städer + tillhörande lopp
  const uniqueCities = Array.from(
    new Map(mockRaces.map((race) => [race.city, race])).values(),
  )

  // Sortera alfabetiskt
  const sortedCities = uniqueCities.sort((a, b) =>
    a.city.localeCompare(b.city, 'sv'),
  )

  return (
    <section className="py-10 container">
      <h1 className="text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Utforska alla F1-städer
      </h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sortedCities.map((race) => (
          <li key={race.city}>
            <Link
              href={`/lopp/${race.slug}`}
              className="block rounded-xl border border-[hsl(var(--border))] bg-card p-4 text-center hover:bg-muted transition text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))]"
            >
              {race.city}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
