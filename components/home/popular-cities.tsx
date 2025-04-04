'use client'

import Link from 'next/link'

// Du kan byta ut eller hämta detta dynamiskt senare
const cities = [
  { name: 'Barcelona', flag: '🇪🇸', slug: 'barcelona' },
  { name: 'Monte Carlo', flag: '🇲🇨', slug: 'monte-carlo' },
  { name: 'Miami', flag: '🇺🇸', slug: 'miami' },
  { name: 'Imola', flag: '🇮🇹', slug: 'imola' },
  { name: 'Jeddah', flag: '🇸🇦', slug: 'jeddah' },
  { name: 'Bahrain', flag: '🇧🇭', slug: 'bahrain' },
]

export default function PopularCities() {
  return (
    <section className="py-12 container">
      <h2 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Populära städer
      </h2>

      <div className="flex flex-wrap gap-3">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/lopp/${city.slug}`}
            className="inline-flex items-center gap-2 px-4 text-white py-2 text-sm font-medium bg-card border border-[hsl(var(--border))] rounded-full hover:bg-muted transition"
          >
            <span>{city.flag}</span>
            <span>{city.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
