'use client'
import HeroSection from '@/components/home/hero-section'
import PopularCities from '@/components/home/popular-cities'
import UpcomingRaces from '@/components/home/upcoming-races'

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="flex flex-col">
        <HeroSection />
        <UpcomingRaces />
      </div>
    </div>
  )
}
