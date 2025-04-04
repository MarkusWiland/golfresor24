import { Button } from '@/components/ui/button'
import { ArrowRight, Hotel, Plane, Ticket } from 'lucide-react'

export function LoppButton({
  price,
  showHotel,
  showPlane,
}: {
  price: number
  showHotel: boolean
  showPlane: boolean
}) {
  return (
    <Button className="flex items-center justify-between gap-2 text-sm font-medium px-3 py-2 rounded-full bg-white border border-[hsl(var(--border))] shadow-sm hover:bg-white/90 transition text-[hsl(var(--foreground))] min-w-[150px]  whitespace-nowrap">
      <span className="flex items-center gap-[4px] text-[hsl(var(--primary))] whitespace-nowrap">
        <Ticket className="w-[14px] h-[14px]" />
        {showHotel && <Hotel className="w-[14px] h-[14px]" />}
        {showPlane && <Plane className="w-[14px] h-[14px]" />}
      </span>
      <span className="flex items-center  text-[hsl(var(--primary))] font-semibold whitespace-nowrap">
        {price.toLocaleString()} kr <ArrowRight className="w-4 h-4" />
      </span>
    </Button>
  )
}
