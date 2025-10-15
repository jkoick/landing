import type { Metadata } from 'next'

export const metadata = {
  title: 'AI marketingový agent pro moderní B2B marketing',
  description:
    'Verbosus pomáhá obchodním a marketingovým týmům automatizovat získávání leadů, segmentaci a personalizovanou komunikaci v rámci jedné platformy.',
  alternates: {
    canonical: '/',
  },
} satisfies Metadata

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      <Cta />
    </>
  )
}
