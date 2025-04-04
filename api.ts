export async function getLeagues() {
  return [
    {
      name: 'SHL',
      slug: 'shl',
      flags: ['SE'],
    },
    {
      name: 'Hockeyallsvenskan',
      slug: 'hockeyallsvenskan',
      flags: ['SE'],
    },
    {
      name: 'NHL',
      slug: 'nhl',
      flags: ['US', 'CA'],
    },
    {
      name: 'CHL (Champions Hockey League)',
      slug: 'chl',
      flags: ['EU'],
    },
    {
      name: 'Hockey-VM',
      slug: 'hockey-vm',
      flags: ['SE'],
    },
    {
      name: 'Tre Kronor (landslag)',
      slug: 'tre-kronor',
      flags: ['SE'],
    },
  ]
}
