import { NextResponse } from 'next/server'
import { getGolfTripBySlug } from '@/lib/data'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const trip = await getGolfTripBySlug(slug)
  if (!trip) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json(trip)
}
