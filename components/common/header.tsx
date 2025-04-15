'use client'

import Link from 'next/link'

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Hem' },
    { href: '/golfresor', label: 'Golfresor' }, // Alla resor, med filter
    { href: '/kalender', label: 'Kalender' }, // Visar per månad/datum
    { href: '/destinationer', label: 'Destinationer' }, // Städer & länder
  ]

  return (
    <header className="w-full bg-[hsl(var(--hero-background))] border-b border-[hsl(var(--border))]">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logotyp */}
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-[hsl(var(--accent))] transition-colors"
        >
          Golfresor24.se
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white hover:text-[hsl(var(--accent))] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
