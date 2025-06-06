'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { CalendarDays, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import { useState } from 'react'
import SimilarTrips from '@/components/home/similar-trips'
import OfferCard from './offer-card'
import { Button } from '@/components/ui/button'

type GolfTrip = {
  slug: string
  title: string
  city: string
  course: string
  date: string
  price: number
  image: string
  continent: string
  description?: string
  offers: {
    id: string
    provider: string
    price: number
    url: string
    description?: string
  }[]
}

export default function GolfTripPageClient({ trip }: { trip: GolfTrip }) {
  const { slug } = useParams()
  const [filter, setFilter] = useState<'all' | 'ticket' | 'hotel' | 'full'>(
    'all',
  )

  const { data, isLoading } = useQuery<GolfTrip>({
    queryKey: ['golfTrip', slug],
    queryFn: async () => {
      const res = await fetch(`/api/golfresor/${slug}`)
      if (!res.ok) throw new Error('Kunde inte hämta golfresan')
      return res.json()
    },
    initialData: trip,
  })

  if (isLoading) return <p className="p-4">Laddar...</p>

  const date = format(new Date(data.date), 'd MMMM yyyy', { locale: sv })

  // Filtrera offers baserat på typ av paket
  const filteredOffers = data.offers.filter((offer) => {
    if (filter === 'all') return true

    const desc = (offer.description || '').toLowerCase()
    if (filter === 'ticket')
      return (
        desc.includes('endast') ||
        desc.includes('biljett') ||
        (!desc.includes('hotell') && !desc.includes('flyg'))
      )
    if (filter === 'hotel')
      return desc.includes('hotell') && !desc.includes('flyg')
    if (filter === 'full')
      return (
        desc.includes('flyg') ||
        (desc.includes('hotell') && desc.includes('flyg'))
      )
    return true
  })

  return (
    <section className="py-16 container">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Bild */}
        <div className="md:w-1/2 aspect-video bg-muted rounded-xl overflow-hidden shadow">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {data.course}, {data.city}
          </div>
          <p className="text-xl font-bold text-[hsl(var(--primary))]">
            från {data.price.toLocaleString('sv-SE')} kr
          </p>
          <p className="text-sm text-[hsl(var(--foreground))] leading-relaxed">
            {data.description ||
              'Denna golfresa erbjuder spel på en av regionens mest eftertraktade banor. Perfekt för en avkopplande semester med golf i världsklass.'}
          </p>
        </div>
      </div>

      {/* Filterknappar */}
      <div className="flex gap-2 flex-wrap mb-6">
        {[
          { label: 'Visa alla', value: 'all' },
          { label: 'Endast greenfee', value: 'ticket' },
          { label: 'Paket med hotell', value: 'hotel' },
          { label: 'Paket med hotell & flyg', value: 'full' },
        ].map((btn) => (
          <Button
            key={btn.value}
            onClick={() => setFilter(btn.value as any)}
            className={`px-4 py-1 rounded-full text-sm font-medium shadow-sm border transition ${
              filter === btn.value
                ? 'bg-primary text-white'
                : 'bg-secondary text-[hsl(var(--foreground))] border-[hsl(var(--border))]'
            }`}
          >
            {btn.label}
          </Button>
        ))}
      </div>

      {/* Arrangör-alternativ */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-[hsl(var(--foreground))]">
          Tillgängliga paket från olika arrangörer
        </h2>
        <div className="space-y-4">
          {filteredOffers.length > 0 ? (
            filteredOffers
              .sort((a, b) => a.price - b.price)
              .map((offer) => <OfferCard key={offer.id} {...offer} />)
          ) : (
            <p className="text-muted-foreground text-sm">
              Inga erbjudanden matchar det valda filtret.
            </p>
          )}
        </div>
      </div>

      {/* Liknande resor */}
      <SimilarTrips currentSlug={trip.slug} currentContinent={trip.continent} />
    </section>
  )
}
