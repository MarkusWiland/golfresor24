import BenefitsSection from '@/components/home/benefits-section'
import CalendarPreview from '@/components/home/calendar-preview-section'
import CTASection from '@/components/home/cta-section'
import HeroSection from '@/components/home/hero-section'
import NewsletterSection from '@/components/home/newsletter-section'
import PopularCities from '@/components/home/popular-cities'
import UpcomingTournaments from '@/components/home/upcoming-races'

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="flex flex-col">
        <HeroSection />
        <PopularCities />
        <UpcomingTournaments />
        <BenefitsSection />
        <CalendarPreview />
        <CTASection />
        <NewsletterSection />
      </div>
    </div>
  )
}
