'use client'

import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
} from 'date-fns'
import { sv } from 'date-fns/locale'
import { mockGolfTrips } from '@/lib/mockRace'
import GolfCard from './golf-card'
import { useState } from 'react'

export default function MonthCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)

  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })
  const startWeekday = getDay(monthStart) // söndag = 0, måndag = 1 osv

  const golfByDate = mockGolfTrips.reduce((acc, trip) => {
    const date = format(new Date(trip.date), 'yyyy-MM-dd')
    if (!acc[date]) acc[date] = []
    acc[date].push(trip)
    return acc
  }, {} as Record<string, typeof mockGolfTrips>)

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">
        Golfresor – {format(currentDate, 'MMMM yyyy', { locale: sv })}
      </h1>

      <div className="grid grid-cols-7 gap-2 text-sm text-center mb-2 text-muted-foreground">
        {['Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör', 'Sön'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-4">
        {/* Tomma rutor före första dagen */}
        {Array.from({ length: (startWeekday + 6) % 7 }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Riktiga dagar */}
        {days.map((day) => {
          const dateKey = format(day, 'yyyy-MM-dd')
          const trips = golfByDate[dateKey] || []
          return (
            <div
              key={dateKey}
              className="border rounded-lg p-2 min-h-[120px] flex flex-col items-start justify-start bg-[hsl(var(--card))]"
            >
              <div className="text-xs font-medium mb-1 text-[hsl(var(--foreground))]">
                {format(day, 'd')}
              </div>
              {trips.map((trip) => (
                <div
                  key={trip.slug}
                  className="text-xs text-[hsl(var(--primary))] font-semibold hover:underline cursor-pointer"
                >
                  {trip.title}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
