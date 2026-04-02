import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ROISection } from '@/components/home/ROISection'
import { IndustriesSection } from '@/components/home/IndustriesSection'
import { IntegrationsSection } from '@/components/home/IntegrationsSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { ComplianceStatusBar } from '@/components/home/ComplianceStatusBar'
import { ReportsPreviewSection } from '@/components/home/ReportsPreviewSection'
import { BottomCTASection } from '@/components/home/BottomCTASection'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ROISection />
      <IndustriesSection />
      <IntegrationsSection />
      <HowItWorksSection />
      <ComplianceStatusBar />
      <ReportsPreviewSection />
      <BottomCTASection />
    </>
  )
}
