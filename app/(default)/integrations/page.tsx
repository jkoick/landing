import type { Metadata } from 'next'

export const metadata = {
  title: 'Integrace AI agenta Verbosus',
  description:
    'Zjistěte, jak Verbosus propojuje AI kampaně s vaším CRM, ERP a dalšími nástroji a tvoří jeden souvislý pracovní postup.',
  alternates: {
    canonical: '/integrations/',
  },
} satisfies Metadata

import IntegrationsSection from './integrations-section'
import IntegrationsList from './integrations-list'

export default function Integrations() {
  return (
    <>
      <IntegrationsSection />
      <IntegrationsList />
    </>
  )
}
