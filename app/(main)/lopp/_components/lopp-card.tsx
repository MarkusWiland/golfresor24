'use client'

import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import { ArrowRight, MapPin } from 'lucide-react'

type LoppCardProps = {
  city: string
  title: string
  date: string
  circuit: string
  priceTicketOnly: number
}

export default function LoppCard({
  city,
  title,
  date,
  circuit,
  priceTicketOnly,
}: LoppCardProps) {
  const dateObj = new Date(date)
  const day = format(dateObj, 'dd', { locale: sv })
  const month = format(dateObj, 'MMM', { locale: sv })
  const year = format(dateObj, 'yyyy', { locale: sv })

  return (
    <div className="relative card-3d hover:cursor-pointer flex rounded-xl overflow-hidden bg-gradient-to-r from-[hsl(var(--hero-background))] to-[hsl(var(--card))] text-white shadow-md hover:shadow-xl transition-all">
      <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--border))] z-10" />
      <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--border))] z-10" />
      {/* Datumkolumn */}
      <div className="bg-[hsl(var(--hero-background))] px-4 py-6 flex flex-col items-center justify-center w-28 shrink-0 text-white text-center">
        <span className="text-xs capitalize text-white/70">{month}</span>
        <span className="text-xl font-bold">{day}</span>
        <span className="text-xs text-white/60">{year}</span>
      </div>

      {/* Raceinfo */}
      <div className="flex-1 px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex flex-col justify-center w-full">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-white/90">
            <MapPin className="w-4 h-4" />
            <span>{circuit}</span>
          </div>
          <span className="mt-2 text-xs uppercase tracking-wide text-white/50">
            Formel 1 · {city}
          </span>
        </div>
        {/* Prickar */}
        <div className="relative w-8 flex flex-col items-center justify-center shrink-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/30 my-0.5"
            />
          ))}
          <div className="absolute top-[-36px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] w-6 h-6 rounded-full z-10" />
          <div className="absolute bottom-[-36px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] w-6 h-6 rounded-full z-10" />
        </div>
        {/* Prisinfo */}
        <div className="pl-4 pr-6 py-4 flex flex-col justify-center items-start shrink-0 min-w-[180px]">
          <p className="text-sm text-white/70">Pris från</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-[hsl(var(--primary))]">
              {priceTicketOnly.toLocaleString()} kr
            </p>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--primary))]" />
          </div>
        </div>
      </div>
    </div>
  )
}
