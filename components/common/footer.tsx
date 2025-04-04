'use client'

import Link from 'next/link'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--hero-background))] text-[hsl(var(--foreground))] mt-16 border-t border-[hsl(var(--border))]">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Om oss */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Om Golfresor24
          </h4>
          <p className="text-sm text-white leading-relaxed">
            Golfresor24 hjälper dig att jämföra greenfee, hotellpaket och
            paketresor till de bästa golfbanorna i världen. Vi samarbetar med
            pålitliga arrangörer för att du enkelt ska hitta din nästa
            golfupplevelse – oavsett nivå och budget.
          </p>
        </div>

        {/* Snabblänkar */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Snabblänkar</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/', label: 'Hem' },
              { href: '/resor', label: 'Resor' },
              { href: '/kalender', label: 'Kalender' },
              { href: '/destinationer', label: 'Destinationer' },
              { href: '/om', label: 'Om sajten' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-[hsl(var(--accent))] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontaktformulär */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Kontakta oss
          </h4>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Din e-post"
              className="bg-white/15 text-white placeholder:text-white/60 focus:ring-[hsl(var(--primary))]"
            />
            <Textarea
              rows={4}
              placeholder="Meddelande"
              className="bg-white/15 text-white placeholder:text-white/60 focus:ring-[hsl(var(--primary))]"
            />
            <Button
              type="submit"
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(120,70%,40%)] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Skicka
            </Button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-[hsl(var(--border))] text-center text-xs py-4 text-[hsl(var(--muted-foreground))]">
        © {new Date().getFullYear()} Golfresor24.se – Alla rättigheter
        förbehållna.
      </div>
    </footer>
  )
}
