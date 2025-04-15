'use client'

type GolfFilterProps = {
  selectedMonth: string
  setSelectedMonth: (value: string) => void
  selectedContinent: string
  setSelectedContinent: (value: string) => void
}

const months = [
  'Alla',
  'Mars',
  'April',
  'Maj',
  'Juni',
  'Juli',
  'Augusti',
  'September',
  'Oktober',
  'November',
]

const continents = [
  'Alla',
  'Europa',
  'Asien',
  'Nordamerika',
  'Sydamerika',
  'Oceanien',
  'Afrika',
]

export function GolfFilter({
  selectedMonth,
  setSelectedMonth,
  selectedContinent,
  setSelectedContinent,
}: GolfFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* Månad */}
      <div className="flex flex-col gap-1 w-full sm:w-auto">
        <label
          htmlFor="month"
          className="text-sm text-[hsl(var(--muted-foreground))] font-medium"
        >
          Resmånad
        </label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border border-[hsl(var(--border))] bg-card text-[hsl(var(--foreground))] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Kontinent */}
      <div className="flex flex-col gap-1 w-full sm:w-auto">
        <label
          htmlFor="continent"
          className="text-sm text-[hsl(var(--muted-foreground))] font-medium"
        >
          Världsdel
        </label>
        <select
          id="continent"
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className="border border-[hsl(var(--border))] bg-card text-[hsl(var(--foreground))] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition"
        >
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
