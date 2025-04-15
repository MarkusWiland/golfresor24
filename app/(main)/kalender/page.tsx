import { Metadata } from 'next'
import KalenderPageClient from './_components/kalender-page-client'
import MiniHero from '@/components/common/mini-hero'

export const metadata: Metadata = {
  title: 'Golfkalender 2025 – Kommande golfresor | Golfresor24',
  description:
    'Utforska vår golfkalender 2025 med alla kommande golfresor. Se datum, destinationer och jämför priser på greenfee, hotell och paket från svenska arrangörer.',
  keywords: [
    'Golfkalender 2025',
    'Golfresor 2025',
    'Kommande golfresor',
    'Golfturneringar',
    'Golfresor Spanien',
    'Golfresor Portugal',
    'Golfresor Turkiet',
    'Greenfee',
    'Golfpaket',
    'Golfresor24',
  ],
}

export default function KalenderPage() {
  return (
    <>
      <MiniHero
        title="Golfkalender 2025"
        subtitle="Se alla kommande golfresor med datum, destination och priser. Perfekt för dig som planerar nästa golfsemester."
        imageUrl="/images/kalendar.jpg"
      />
      <KalenderPageClient />
    </>
  )
}
