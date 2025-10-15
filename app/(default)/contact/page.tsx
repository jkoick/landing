import type { Metadata } from 'next';

export const metadata = {
  title: 'Kontaktujte tým Verbosus',
  description:
    'Spojte se s námi a naplánujte si ukázku AI marketingového agenta Verbosus. Pomůžeme vám s nastavením kampaní i integrací.',
  alternates: {
    canonical: '/contact/',
  },
} satisfies Metadata;

import ContactForm from './ContactForm';

export default function Page() {
  return (
    <>
      <ContactForm />
    </>
  );
}
