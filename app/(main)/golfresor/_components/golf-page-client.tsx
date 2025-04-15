'use client'

import { useState, useMemo } from 'react'
import { mockGolfTrips } from '@/lib/mockRace'

import GolfList from './golf-list'
import { GolfFilter } from './golf-filter'

export default function GolfPageClient() {
  const [selectedMonth, setSelectedMonth] = useState('Alla')
  const [selectedContinent, setSelectedContinent] = useState('Alla')

  const filteredTrips = useMemo(() => {
    return mockGolfTrips.filter((trip) => {
      const matchesMonth =
        selectedMonth === 'Alla' || trip.month === selectedMonth
      const matchesContinent =
        selectedContinent === 'Alla' || trip.continent === selectedContinent
      return matchesMonth && matchesContinent
    })
  }, [selectedMonth, selectedContinent])

  return (
    <section className="py-10 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Utforska golfresor världen över
      </h1>

      <GolfFilter
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />

      <GolfList trips={filteredTrips} />
    </section>
  )
}
