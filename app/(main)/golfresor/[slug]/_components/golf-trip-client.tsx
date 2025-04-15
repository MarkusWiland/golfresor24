'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { CalendarDays, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import SimilarTrips from '@/components/home/similar-trips'

type GolfTrip = {
  slug: string
  title: string
  city: string
  course: string
  date: string
  price: number
  image: string
  description?: string
}

export default function GolfTripPageClient({ trip }: { trip: GolfTrip }) {
  const { slug } = useParams()

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

  return (
    <section className="py-16 container">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 aspect-video bg-muted rounded-lg overflow-hidden">
          {/* Byt till next/image när du vill */}
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

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

          <button className="mt-6 px-6 py-3 rounded-md bg-[hsl(var(--primary))] text-white font-medium hover:bg-[hsl(var(--primary)/1.1)] transition">
            Boka resa
          </button>
        </div>
        <SimilarTrips
          currentSlug={trip.slug}
          currentContinent={trip.continent}
        />
      </div>
    </section>
  )
}
