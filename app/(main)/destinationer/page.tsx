import { Metadata } from 'next'
import MiniHero from '@/components/common/mini-hero'
import PopularDestinations from './_components/popular-destinations'

export const metadata: Metadata = {
  title: 'Populära golfdestinationer 2025 | Golfresor24',
  description:
    'Upptäck populära golfdestinationer som Spanien, Portugal, Turkiet och fler. Hitta de bästa banorna och jämför golfresor från svenska arrangörer.',
  keywords: [
    'Golfresor destinationer',
    'Populära golfdestinationer',
    'Golfresor Spanien',
    'Golfresor Portugal',
    'Golfresor Turkiet',
    'Golfpaket Europa',
    'Golfbanor världen',
    'Golfsemester',
    'Golfresor24',
  ],
}

export default function DestinationerPage() {
  return (
    <>
      <MiniHero
        title="Populära golfdestinationer"
        subtitle="Utforska våra mest populära destinationer för golfresor 2025. Hitta din nästa golfsemester."
        imageUrl="/images/destinations.jpg"
      />
      <PopularDestinations />
    </>
  )
}
