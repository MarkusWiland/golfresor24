import { Metadata } from 'next'
import LoppPageClient from './_components/lopp-page-client'

export const metadata: Metadata = {
  title: 'Alla Formel 1-lopp 2025 – Biljetter & resor | Formel1resor24',
  description:
    'Jämför biljetter, hotellpaket och flygresor till alla F1-lopp 2025. Vi listar prisvärda alternativ från flera seriösa arrangörer.',
}

export default function LoppPage() {
  return <LoppPageClient />
}
