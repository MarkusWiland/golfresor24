'use client'

import Link from 'next/link'

const destinations = [
  { name: 'Belek', flag: '🇹🇷', slug: 'belek' },
  { name: 'Vilamoura', flag: '🇵🇹', slug: 'vilamoura' },
  { name: 'Marbella', flag: '🇪🇸', slug: 'marbella' },
  { name: 'Dubai', flag: '🇦🇪', slug: 'dubai' },
  { name: 'St Andrews', flag: '🏴', slug: 'st-andrews' },
  { name: 'Phuket', flag: '🇹🇭', slug: 'phuket' },
]

export default function PopularDestinations() {
  return (
    <section className="py-12 container">
      <h2 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Utforska destinationer
      </h2>
      <div className="flex flex-wrap gap-3">
        {destinations.map((dest) => (
          <Link
            key={dest.slug}
            href={`/golfresor/${dest.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-card border border-border rounded-full hover:bg-muted transition"
          >
            <span>{dest.flag}</span>
            <span>{dest.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
