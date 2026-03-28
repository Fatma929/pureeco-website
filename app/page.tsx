import { HeroSection } from '@/components/home/HeroSection'
import { ProblemSolutionSection } from '@/components/home/ProblemSolutionSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { IntegrationsSection } from '@/components/home/IntegrationsSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { IndustriesSection } from '@/components/home/IndustriesSection'
import { ReportsPreviewSection } from '@/components/home/ReportsPreviewSection'
import { BottomCTASection } from '@/components/home/BottomCTASection'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <IntegrationsSection />
      <HowItWorksSection />
      <IndustriesSection />
      <ReportsPreviewSection />
      <BottomCTASection />
    </>
  )
}
