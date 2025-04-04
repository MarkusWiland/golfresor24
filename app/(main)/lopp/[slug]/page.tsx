import ClientRaceDetailPage from '@/components/client-race-detail'
import { mockRaces } from '@/lib/mockRace'
import { notFound } from 'next/navigation'

type tParams = Promise<{ slug: string }>
export default async function RaceSlugPage({ params }: { params: tParams }) {
  const { slug } = await params
  const race = mockRaces.find((r) => r.slug === slug)

  if (!race) return notFound()

  return <ClientRaceDetailPage race={race} />
}
