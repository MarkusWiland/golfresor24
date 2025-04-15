import { getGolfTripBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import GolfTripPageClient from './_components/golf-trip-client'

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function GolfTripPage({ params }: PageProps) {
  const { slug } = await params
  const golfTrip = await getGolfTripBySlug(slug)

  if (!golfTrip) {
    notFound()
  }

  return <GolfTripPageClient trip={golfTrip} />
}
