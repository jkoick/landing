import type { Metadata } from 'next'

export const metadata = {
  title: 'Projekt Verbosus a cenové balíčky',
  description:
    'Prozkoumejte funkcionality projektu Verbosus, dostupné balíčky a časté otázky k AI marketingovému agentovi pro B2B firmy.',
  alternates: {
    canonical: '/project/',
  },
} satisfies Metadata

import PricingSection from './pricing-section'
import Features from '@/components/features-05'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Pricing() {
  return (
    <>
      <PricingSection />
      <Features />
      <Faqs />
      <Cta />
    </>
  )
}
