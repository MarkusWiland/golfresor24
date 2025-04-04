'use client'

import Image from 'next/image'
import { ArrowRight, Info, Ticket, Hotel, Plane } from 'lucide-react'
import { Button } from './ui/button'
import { LoppButton } from '@/app/(main)/lopp/_components/lopp-button'

// Props utan filter, det kommer från föräldern
export type LoppResellerCardProps = {
  name: string
  logo: string
  price: number
  description?: string
  included: string[]
  type: string
  filter: 'all' | 'ticket' | 'hotel' | 'full'
}

export default function LoppResellerCard({
  name,
  logo,
  price,
  description,
  included,
  type,
  filter,
}: LoppResellerCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded-xl px-6 py-4 shadow-sm border border-[hsl(var(--border))]">
      {/* Vänster: Logotyp & innehåll */}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <Image
          src={logo}
          alt={name}
          width={120}
          height={40}
          className="object-contain max-h-10"
        />

        <div className="flex flex-col gap-1 text-sm">
          {included.map((item, i) => (
            <p key={i} className="inline-flex items-center gap-2">
              <Ticket className="w-4 h-4 text-[hsl(var(--primary))]" /> {item}
            </p>
          ))}
          {description && (
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1 inline-flex items-center gap-1">
              <Info className="w-4 h-4" /> {description}
            </p>
          )}
        </div>
      </div>

      {/* Höger: Priser beroende på filter */}
      <div className="flex flex-col sm:items-end items-start mt-4 sm:mt-0 gap-2 w-full sm:w-auto">
        <div className="grid grid-cols-1 md:grid-cols- gap-2 w-full">
          {(filter === 'all' || filter === 'ticket') && (
            <LoppButton price={price} showHotel={false} showPlane={false} />
          )}

          {(filter === 'all' || filter === 'hotel') && (
            <LoppButton price={price} showHotel={true} showPlane={false} />
          )}

          {(filter === 'all' || filter === 'full') && (
            <LoppButton price={price} showHotel={true} showPlane={true} />
          )}
        </div>
      </div>
    </div>
  )
}
