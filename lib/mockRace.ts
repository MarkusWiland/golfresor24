export const mockGolfTrips = [
  {
    city: 'Belek',
    slug: 'belek',
    title: 'Turkiet Golfresa – Belek',
    date: '2025-04-13',
    month: 'April',
    continent: 'Asien',
    course: 'Carya Golf Club',
    priceGreenFeeOnly: 1295,
    priceGreenFeeHotel: 4495,
    priceFullPackage: 8295,
  },
  {
    city: 'Vilamoura',
    slug: 'vilamoura',
    title: 'Portugal Golfresa – Vilamoura',
    date: '2025-04-20',
    month: 'April',
    continent: 'Europa',
    course: 'Dom Pedro Victoria Golf Course',
    priceGreenFeeOnly: 995,
    priceGreenFeeHotel: 3890,
    priceFullPackage: 7090,
  },
  {
    city: 'Dubai',
    slug: 'dubai',
    title: 'Förenade Arabemiraten Golfresa – Dubai',
    date: '2025-05-05',
    month: 'Maj',
    continent: 'Asien',
    course: 'Emirates Golf Club – Majlis Course',
    priceGreenFeeOnly: 1495,
    priceGreenFeeHotel: 5290,
    priceFullPackage: 9995,
  },
  {
    city: 'Marbella',
    slug: 'marbella',
    title: 'Spanien Golfresa – Marbella',
    date: '2025-05-15',
    month: 'Maj',
    continent: 'Europa',
    course: 'Los Naranjos Golf Club',
    priceGreenFeeOnly: 895,
    priceGreenFeeHotel: 2995,
    priceFullPackage: 6395,
  },
  {
    city: 'St Andrews',
    slug: 'st-andrews',
    title: 'Skottland Golfresa – St Andrews',
    date: '2025-05-29',
    month: 'Maj',
    continent: 'Europa',
    course: 'Old Course at St Andrews',
    priceGreenFeeOnly: 1695,
    priceGreenFeeHotel: 4895,
    priceFullPackage: 9495,
  },
  {
    city: 'Phuket',
    slug: 'phuket',
    title: 'Thailand Golfresa – Phuket',
    date: '2025-06-07',
    month: 'Juni',
    continent: 'Asien',
    course: 'Red Mountain Golf Club',
    priceGreenFeeOnly: 1095,
    priceGreenFeeHotel: 3695,
    priceFullPackage: 8195,
  },
].map((trip) => ({
  ...trip,
  offers: generateMockOffers(trip),
}))
function generateMockOffers(trip: {
  slug: string
  priceFullPackage: number
  priceGreenFeeHotel: number
  priceGreenFeeOnly: number
}) {
  return [
    {
      id: `${trip.slug}-full`,
      provider: 'TravelBird',
      price: trip.priceFullPackage,
      url: `https://example.com/${trip.slug}/travelbird`,
      description: 'Fullt paket inkl. hotell, flyg & greenfee',
    },
    {
      id: `${trip.slug}-hotel`,
      provider: 'GolfStore',
      price: trip.priceGreenFeeHotel,
      url: `https://example.com/${trip.slug}/golfstore`,
      description: 'Hotell + greenfee',
    },
    {
      id: `${trip.slug}-greenfee`,
      provider: 'GreenTime',
      price: trip.priceGreenFeeOnly,
      url: `https://example.com/${trip.slug}/greentime`,
      description: 'Endast greenfee',
    },
  ]
}
