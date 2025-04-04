// app/api/leagues/route.ts

import { NextResponse } from 'next/server'

const leagues = [
  {
    name: 'SHL',
    liga: 'shl',
    flags: ['SE'],
  },
  {
    name: 'Hockeyallsvenskan',
    liga: 'hockeyallsvenskan',
    flags: ['SE'],
  },
  {
    name: 'NHL',
    liga: 'nhl',
    flags: ['US', 'CA'],
  },
  {
    name: 'CHL (Champions Hockey League)',
    liga: 'chl',
    flags: ['EU'],
  },
  {
    name: 'Hockey-VM',
    liga: 'hockey-vm',
    flags: ['SE'],
  },
  {
    name: 'Tre Kronor (landslag)',
    liga: 'tre-kronor',
    flags: ['SE'],
  },
]

export async function GET() {
  return NextResponse.json(leagues)
}
