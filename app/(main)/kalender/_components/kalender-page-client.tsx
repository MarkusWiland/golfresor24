'use client'

import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
  addMonths,
  subMonths,
} from 'date-fns'
import { sv } from 'date-fns/locale'
import { useState } from 'react'
import { mockGolfTrips } from '@/lib/mockRace'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import MiniTripCard from './mini-trip-card'
import { Button } from '@/components/ui/button'

export default function KalenderPageClient() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })
  const startWeekday = (getDay(monthStart) + 6) % 7 // Gör måndag till första dag

  const golfByDate = mockGolfTrips.reduce((acc, trip) => {
    const dateKey = format(new Date(trip.date), 'yyyy-MM-dd')
    if (!acc[dateKey]) acc[dateKey] = []
    acc[dateKey].push(trip)
    return acc
  }, {} as Record<string, typeof mockGolfTrips>)

  return (
    <section className="py-10 container">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={() => setCurrentDate((prev) => subMonths(prev, 1))}
          className="p-2 rounded hover:bg-muted transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>

        <h1 className="text-3xl font-bold text-[hsl(var(--foreground))]">
          {format(currentDate, 'MMMM yyyy', { locale: sv })}
        </h1>

        <Button
          onClick={() => setCurrentDate((prev) => addMonths(prev, 1))}
          className="p-2 rounded hover:bg-muted transition"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Veckodagar */}
      <div className="grid grid-cols-7 gap-2 text-sm text-center mb-2 text-muted-foreground">
        {['Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör', 'Sön'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Datumrutnät */}
      <div className="grid grid-cols-7 gap-4">
        {/* Tomma rutor innan första dagen */}
        {Array.from({ length: startWeekday }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Dagar i månaden */}
        {days.map((day) => {
          const dateKey = format(day, 'yyyy-MM-dd')
          const trips = golfByDate[dateKey] || []

          return (
            <div
              key={dateKey}
              className="border border-border rounded-lg p-2 min-h-[120px] bg-card text-sm text-left"
            >
              <div className="font-semibold text-[hsl(var(--foreground))] mb-1">
                {format(day, 'd')}
              </div>

              <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                {trips.map((trip) => (
                  <MiniTripCard
                    key={trip.slug}
                    slug={trip.slug}
                    title={trip.title}
                    city={trip.city}
                    course={trip.course}
                    price={trip.priceGreenFeeOnly}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
