import { Metadata } from 'next'
import StaderPageClient from './_components/stader-page-client'

export const metadata: Metadata = {
  title: 'Formel 1-städer 2025 – Resor & biljetter per stad | Formel1resor24',
  description:
    'Utforska alla städer där Formel 1 körs 2025. Se vilka återförsäljare som erbjuder resor, paket och biljetter till varje F1-destination.',
}

export default function StaderPage() {
  return <StaderPageClient />
}
