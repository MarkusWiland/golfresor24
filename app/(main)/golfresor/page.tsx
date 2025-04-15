import { Metadata } from 'next'
import GolfPageClient from './_components/golf-page-client'
import MiniHero from '@/components/common/mini-hero'

export const metadata: Metadata = {
  title: 'Golfresor 2025 – Jämför paketresor, greenfee & hotell | Golfresor24',
  description:
    'Upptäck golfresor 2025 till Spanien, Portugal, Turkiet och andra populära destinationer. Jämför priser på greenfee, hotell och flyg i färdiga paket från svenska arrangörer.',
  keywords: [
    'Golfresor 2025',
    'Golfpaket 2025',
    'Golfsemester',
    'Golfresor Spanien',
    'Golfresor Portugal',
    'Greenfee',
    'Golfhotell',
    'Golfresor Europa',
    'Golfresor världen',
    'Golfresor24',
  ],
}

export default function GolfresorPage() {
  return (
    <>
      <MiniHero
        title="Alla golfresor 2025"
        subtitle="Hitta rätt golfresa till Spanien, Portugal, Turkiet och fler destinationer – jämför priser på greenfee, hotell och flyg i färdiga paket."
        imageUrl="/images/golfbg.jpg"
      >
        {/* Här kan du lägga extra CTA om du vill */}
      </MiniHero>

      <GolfPageClient />
    </>
  )
}
