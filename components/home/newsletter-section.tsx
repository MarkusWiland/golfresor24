'use client'

import { Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-[hsl(var(--primary))]/5">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
          Missa inte nästa golfdeal!
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Få nyheter om kampanjer, populära resmål och nya golfpaket direkt till
          din inkorg.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
        >
          <Input
            type="email"
            placeholder="Din e-postadress"
            className="w-full sm:flex-1 bg-white/80 backdrop-blur border border-input"
          />
          <Button type="submit" className="gap-2">
            Prenumerera <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}
