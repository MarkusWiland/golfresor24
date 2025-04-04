'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import { mockGolfTrips } from '@/lib/mockRace'

export default function HeroSection() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const filteredTrips =
    search.length > 0
      ? mockGolfTrips.filter(
          (trip) =>
            trip.title.toLowerCase().includes(search.toLowerCase()) ||
            trip.city.toLowerCase().includes(search.toLowerCase()) ||
            trip.course.toLowerCase().includes(search.toLowerCase()),
        )
      : []

  return (
    <section className="relative bg-gradient-to-br from-[hsl(120,20%,25%)] via-[hsl(120,30%,15%)] to-[hsl(var(--background))] py-20 sm:py-28">
      {/* Blur-overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" />

      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-700 via-yellow-400 to-green-800 bg-clip-text text-transparent drop-shadow-md mb-4">
          Upptäck golfresor världen över
        </h1>

        <p className="text-lg sm:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto mb-8">
          Golfresor24.se jämför priser på greenfee, golfpaket och golfresor –
          för dig som vill uppleva de bästa banorna utan att stressa.
        </p>

        {/* Search input */}
        <div className="relative max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 z-10 w-5 h-5" />
            <Input
              type="text"
              placeholder="Sök efter stad, bana eller land..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 pr-4 py-4 rounded-xl bg-white/90 border border-input text-foreground placeholder-muted-foreground shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-[hsl(var(--primary))] transition w-full"
            />
          </div>

          {filteredTrips.length > 0 && (
            <div className="absolute z-30 mt-2 w-full rounded-xl border border-border max-h-64 bg-card shadow-xl overflow-y-auto animate-in fade-in slide-in-from-top-2">
              {filteredTrips.map((trip) => (
                <Button
                  key={trip.city}
                  onClick={() => {
                    router.push(`/resor/${trip.slug}`)
                    setSearch('')
                  }}
                  className="w-full text-left px-5 py-3 text-foreground hover:bg-muted transition-colors"
                >
                  {trip.title}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SVG clip path i botten */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="hsl(var(--background))"
          d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  )
}
