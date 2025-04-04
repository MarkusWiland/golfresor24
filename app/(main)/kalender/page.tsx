import { Metadata } from 'next'
import KalenderPageClient from './_components/kalender-page-client'

export const metadata: Metadata = {
  title: 'F1-kalender 2025 – Alla kommande Formel 1-lopp | Formel1resor24',
  description:
    'Se hela Formel 1-kalendern 2025 med datum, städer och banor. Jämför biljetter och paketresor till varje Grand Prix hos svenska återförsäljare.',
}

export default function KalenderPage() {
  return <KalenderPageClient />
}
