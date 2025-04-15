import { NextResponse } from 'next/server'
import { getGolfTripBySlug } from '@/lib/data'

export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const trip = await getGolfTripBySlug(params.slug)
  if (!trip) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json(trip)
}
