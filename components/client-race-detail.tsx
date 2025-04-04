'use client'

import { useState } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import LoppResellerCard, { LoppResellerCardProps } from './lopp-reseller-card'
import { Button } from './ui/button'

// Dummy data (ersätt med props eller fetch senare)
const mockResellers: LoppResellerCardProps[] = [
  {
    name: 'Arrangör 1',
    logo: '/gosport.svg',
    price: 2995,
    description:
      'Officiell partner, Putney End &, Uber Voucher Block P1-P4 Home Team Section',
    included: ['Matchbiljett ingår'],
    type: 'full',
    filter: 'all',
  },
  {
    name: 'Arrangör 2',
    logo: '/herewego.svg',
    price: 4640,
    included: ['Matchbiljett ingår'],
    type: 'ticket',
    filter: 'all',
  },
  {
    name: 'Arrangör 3',
    logo: '/herewego.svg',
    price: 6240,
    included: ['Matchbiljett ingår', '2 hotellnätter ingår'],
    description: 'E-tickets',
    type: 'hotel',
    filter: 'all',
  },
  {
    name: 'Arrangör 4',
    logo: '/beresor.svg',
    price: 9915,
    included: ['Matchbiljett ingår'],
    type: 'full',
    filter: 'all',
  },
]

export default function ClientRaceDetailPage({
  race,
}: {
  race: {
    city: string
    title: string
    date: string
    circuit: string
    priceTicketOnly: number
    priceTicketHotel: number
    priceFullPackage: number
  }
}) {
  const [filter, setFilter] = useState<'all' | 'ticket' | 'hotel' | 'full'>(
    'all',
  )
  const dateObj = new Date(race.date)
  const day = format(dateObj, 'dd', { locale: sv })
  const month = format(dateObj, 'MMMM', { locale: sv })
  const year = format(dateObj, 'yyyy', { locale: sv })

  const filteredResellers = mockResellers.filter(
    (reseller) => filter === 'all' || reseller.type === filter,
  )

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold text-white mb-4">{race.title}</h1>

      {/* Datum och plats */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-white/90">
            <CalendarDays className="w-5 h-5" />
            <span>
              {day} {month} {year}
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <MapPin className="w-5 h-5" />
            <span>{race.circuit}</span>
          </div>
        </div>
      </div>

      {/* Filterknappar */}
      <div className="flex gap-2 flex-wrap mb-6">
        {[
          { label: 'Visa alla', value: 'all' },
          { label: 'Endast biljett', value: 'ticket' },
          { label: 'Paket med hotell', value: 'hotel' },
          { label: 'Paket med hotell & flyg', value: 'full' },
        ].map((btn) => (
          <Button
            key={btn.value}
            onClick={() => setFilter(btn.value as any)}
            className={`px-4 py-1 rounded-full text-sm font-medium shadow-sm border transition ${
              filter === btn.value
                ? 'bg-[hsl(var(--primary))] text-white'
                : 'bg-black text-[hsl(var(--foreground))] border-[hsl(var(--border))]'
            }`}
          >
            {btn.label}
          </Button>
        ))}
      </div>

      {/* Kort */}
      <div className="space-y-4">
        {filteredResellers.map((reseller) => (
          <LoppResellerCard
            key={reseller.name + reseller.type}
            {...reseller}
            filter={filter}
          />
        ))}
      </div>
    </section>
  )
}
