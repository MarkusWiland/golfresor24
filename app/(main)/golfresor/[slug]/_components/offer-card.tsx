'use client'

import { ArrowRight } from 'lucide-react'

type OfferCardProps = {
  provider: string
  price: number
  url: string
  description?: string
}

export default function OfferCard({
  provider,
  price,
  url,
  description,
}: OfferCardProps) {
  return (
    <div className="relative flex rounded-2xl overflow-hidden bg-gradient-to-r from-[hsl(var(--hero-background))] via-[hsl(var(--primary))] to-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <div className="flex-1 px-6 py-4 flex flex-col justify-center gap-2">
        <h3 className="text-lg font-bold text-white/90">{provider}</h3>
        {description && <p className="text-sm text-white/70">{description}</p>}
      </div>

      <div className="pl-4 pr-6 py-4 flex flex-col justify-center items-end shrink-0 min-w-[150px]">
        <p className="text-sm text-white/70 mb-1">Pris från</p>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-[hsl(var(--primary))]">
            {price.toLocaleString('sv-SE')} kr
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <ArrowRight className="w-5 h-5 text-[hsl(var(--primary))]" />
          </a>
        </div>
      </div>
    </div>
  )
}
