'use client'

import { ShieldCheck, PiggyBank, Globe2 } from 'lucide-react'

const benefits = [
  {
    title: 'Trygg bokning',
    description:
      'Vi listar endast seriösa svenska återförsäljare – med tydliga villkor och hög kundnöjdhet.',
    icon: <ShieldCheck className="w-6 h-6 text-[hsl(var(--primary))]" />,
  },
  {
    title: 'Bäst pris jämfört',
    description:
      'Spara upp till flera tusen kronor genom att jämföra greenfee, hotell och paketpriser.',
    icon: <PiggyBank className="w-6 h-6 text-[hsl(var(--primary))]" />,
  },
  {
    title: 'Golfresor över hela världen',
    description:
      'Belek, Dubai, Spanien, Portugal och fler – vi visar resor från flera kontinenters bästa banor.',
    icon: <Globe2 className="w-6 h-6 text-[hsl(var(--primary))]" />,
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-[hsl(var(--secondary))]/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] text-center mb-12">
          Därför väljer golfare Golfresor24
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
