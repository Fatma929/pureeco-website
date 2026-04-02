import { AboutHeroSection } from '@/components/about/AboutHeroSection'
import { MissionSection } from '@/components/about/MissionSection'
import { SustainabilityExpertiseSection } from '@/components/about/SustainabilityExpertiseSection'
import { AboutCTASection } from '@/components/about/AboutCTASection'

export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <MissionSection />
      <SustainabilityExpertiseSection />
      <AboutCTASection />
    </main>
  )
}
