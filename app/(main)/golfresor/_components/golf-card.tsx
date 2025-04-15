'use client'

import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import { MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'

type GolfCardProps = {
  city: string
  title: string
  course: string
  date: string
  priceGreenFeeOnly: number
  image: string
}

export default function GolfCard({
  city,
  title,
  course,
  date,
  priceGreenFeeOnly,
  image,
}: GolfCardProps) {
  const dateObj = new Date(date)
  const day = format(dateObj, 'dd', { locale: sv })
  const month = format(dateObj, 'MMM', { locale: sv })
  const year = format(dateObj, 'yyyy', { locale: sv })

  return (
    <div className="relative flex rounded-2xl overflow-hidden bg-gradient-to-r from-[hsl(var(--hero-background))] via-[hsl(var(--primary))] to-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-xl hover:shadow-2xl transition-all duration-300 group">
      {/* Sidorna */}
      <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--border))] z-10" />
      <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--border))] z-10" />

      {/* Datumruta */}
      <div className="bg-[hsl(var(--hero-background))] px-4 py-6 flex flex-col items-center justify-center w-28 shrink-0 text-[hsl(var(--card))] text-center">
        <span className="text-xs capitalize text-white/70">{month}</span>
        <span className="text-xl font-bold">{day}</span>
        <span className="text-xs text-white/60">{year}</span>
      </div>

      {/* Innehåll */}
      <div className="flex-1 px-6 py-4 flex items-center justify-between gap-4 sm:gap-6">
        <div className="flex flex-col justify-center w-full">
          <h3 className="text-lg sm:text-xl font-bold mb-1 leading-snug text-white/90 group-hover:underline">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <MapPin className="w-4 h-4 opacity-80" />
            <span>{course}</span>
          </div>
          <span className="mt-2 text-xs uppercase tracking-wider text-white/60">
            Golfresa · {city}
          </span>
        </div>

        {/* Prick-dekoration */}
        <div className="relative w-8 flex flex-col items-center justify-center shrink-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--card-foreground))]/20 my-0.5"
            />
          ))}
          <div className="absolute top-[-36px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] w-6 h-6 rounded-full z-10" />
          <div className="absolute bottom-[-36px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] w-6 h-6 rounded-full z-10" />
        </div>

        {/* Prisinfo */}
        <div className="pl-4 pr-6 py-4 flex flex-col justify-center items-start shrink-0 min-w-[150px]">
          <p className="text-sm text-[hsl(var(--card-foreground))]/70 mb-1">
            Pris från
          </p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-[hsl(var(--primary))]">
              {priceGreenFeeOnly.toLocaleString('se-SV')} kr
            </p>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--primary))]" />
          </div>
        </div>
      </div>
    </div>
  )
}
