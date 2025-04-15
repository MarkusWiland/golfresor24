import { MapPin } from 'lucide-react'
import Link from 'next/link'

type MiniTripCardProps = {
  slug: string
  title: string
  city: string
  course: string
  price: number
}

export default function MiniTripCard({
  slug,
  title,
  city,
  course,
  price,
}: MiniTripCardProps) {
  return (
    <Link
      href={`/resor/${slug}`}
      className="block bg-[hsl(var(--card))] border border-border rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition text-left group"
    >
      <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] group-hover:underline leading-snug">
        {title}
      </h3>

      <div className="flex items-center gap-1 mt-1 text-xs text-[hsl(var(--muted-foreground))]">
        <MapPin className="w-3.5 h-3.5" />
        <span>
          {course}, {city}
        </span>
      </div>

      <p className="text-xs text-[hsl(var(--primary))] font-semibold mt-1">
        {price ? (
          `från ${price.toLocaleString('sv-SE')} kr`
        ) : (
          <span className="text-red-600">⚠️ Pris saknas</span>
        )}
      </p>
    </Link>
  )
}
