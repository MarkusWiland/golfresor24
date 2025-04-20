import { Metadata } from 'next'
import KalenderPageClient from './_components/kalender-page-client'
import MiniHero from '@/components/common/mini-hero'

export const metadata: Metadata = {
  title: 'F1-kalender 2025 – Kommande Grand Prix | Formel1biljetter.se',
  description:
    'Upptäck alla kommande Formel 1-lopp i vår F1-kalender 2025. Se datum, destinationer och jämför priser på biljetter, hotell och paket från svenska arrangörer.',
  keywords: [
    'F1 kalender 2025',
    'Formel 1 resor',
    'Grand Prix 2025',
    'Formel 1 biljetter',
    'Formel1 kalender',
    'F1 resor Spanien',
    'F1 resor Italien',
    'F1 paketresa',
    'F1 hotell',
    'Formel1biljetter.se',
  ],
}

export default function KalenderPage() {
  return (
    <>
      <MiniHero
        title="F1-kalender 2025"
        subtitle="Se alla kommande Formel 1-lopp med datum, destinationer och priser. Planera din Grand Prix-resa redan idag!"
        imageUrl="/images/f1calendar.jpg"
      />
      <KalenderPageClient />
    </>
  )
}
