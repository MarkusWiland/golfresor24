import { mockGolfTrips } from './mockRace'

export async function getGolfTripBySlug(slug: string) {
  const trip = mockGolfTrips.find((t) => t.slug === slug)

  if (!trip) return null

  return {
    ...trip,
    price: trip.priceGreenFeeOnly, // mappa om
    image: `/images/golf/${trip.slug}.jpg`, // lägg till egen image-logik
  }
}
