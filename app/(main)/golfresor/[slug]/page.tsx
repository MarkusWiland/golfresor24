import { getGolfTripBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import GolfTripPageClient from './_components/golf-trip-client'

type PageProps = {
  params: { slug: string }
}

export default async function GolfTripPage({ params }: PageProps) {
  const golfTrip = await getGolfTripBySlug(params.slug)

  if (!golfTrip) {
    notFound()
  }

  return <GolfTripPageClient trip={golfTrip} />
}
