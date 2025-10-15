import type { Metadata } from 'next'

export const metadata = {
  title: 'Příběhy zákazníků Verbosus',
  description:
    'Podívejte se, jak firmy využívají AI marketingového agenta Verbosus k automatizaci akvizice, reportingu a rychlejšímu růstu.',
  alternates: {
    canonical: '/customers/',
  },
} satisfies Metadata

import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import Particles from '@/components/particles'
import Clients from '@/components/clients'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Cta from '@/components/cta'

export default function Customers() {
  return (
    <>
      <section className="relative">
        {/* Radial gradient */}
        <div
          className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
          aria-hidden="true"
        >
          <div className="absolute inset-0 translate-z-0 bg-sky-200 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute w-64 h-64 translate-z-0 bg-sky-300 rounded-full blur-[80px] opacity-30"></div>
        </div>

        {/* Particles animation */}
        <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

        {/* Illustration */}
        <div
          className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-40 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <Image
            src={Illustration || '/placeholder.svg?height=427&width=1440'}
            className="max-w-none"
            width={1440}
            height={427}
            alt="Page Illustration"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-20">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-3">
                Lídři milují Verbosus
              </div>
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4">
                Příběhy našich klientů.
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-slate-600">
                  Verbosus pomáhá finančním a investičním společnostem měnit
                  způsob, jakým spravují peníze klientu podle investiční
                  strategie. Naše platforma umožňuje firmám růst a jejím
                  klientům vydělávat.
                </p>
              </div>
            </div>
          </div>

          <Clients />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-12">
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-sky-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
                </svg>
                <h4 className="font-medium text-slate-900">
                  Kompletní digitalizace obchodovacích procesů
                </h4>
              </div>
              <p className="text-sm text-slate-600">
                Všechny kroky – od správy klientských portfolií až po reporting
                a compliance – na jednom místě.
              </p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-sky-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                </svg>
                <h4 className="font-medium text-slate-900">
                  Personalizace na míru firemním potřebám
                </h4>
              </div>
              <p className="text-sm text-slate-600">
                Nastavte si platformu podle vašich interních procesů, obchodních
                strategií a požadavků na reporting.
              </p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-sky-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629l3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z" />
                </svg>
                <h4 className="font-medium text-slate-900">
                  Pokročilá analytika a reporting
                </h4>
              </div>
              <p className="text-sm text-slate-600">
                Získejte přehledné statistiky, prediktivní analýzy a možnost
                exportu dat pro manažerské rozhodování.
              </p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-sky-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                </svg>
                <h4 className="font-medium text-slate-900">
                  Bezproblémová integrace
                </h4>
              </div>
              <p className="text-sm text-slate-600">
                Propojte Verbosus s vaším CRM, ERP, compliance nástroji nebo
                datovými zdroji bez nutnosti složité implementace.
              </p>
            </div>
          </div>
          <TestimonialsCarousel />
          <Cta />
        </div>
      </section>
    </>
  )
}
