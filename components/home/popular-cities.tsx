'use client'

import Link from 'next/link'

const cities = [
  { name: 'Belek', flag: '🇹🇷', slug: 'belek' },
  { name: 'Vilamoura', flag: '🇵🇹', slug: 'vilamoura' },
  { name: 'Marbella', flag: '🇪🇸', slug: 'marbella' },
  { name: 'Dubai', flag: '🇦🇪', slug: 'dubai' },
  { name: 'St Andrews', flag: '🏴', slug: 'st-andrews' },
  { name: 'Phuket', flag: '🇹🇭', slug: 'phuket' },
]

export default function PopularCities() {
  return (
    <section className="py-20 bg-[hsl(var(--secondary))]/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] text-center mb-10">
          Populära golfdestinationer
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/stad/${city.slug}`} // ändra om du filtrerar istället
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition text-sm font-medium text-[hsl(var(--foreground))]"
            >
              <span className="text-lg">{city.flag}</span>
              <span>{city.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
