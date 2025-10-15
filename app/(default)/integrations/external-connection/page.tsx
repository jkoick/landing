import type { Metadata } from 'next';

export const metadata = {
  title: 'Propojení Verbosus s externími datovými zdroji',
  description:
    'Zjistěte, jak Verbosus pracuje s real-time tržními daty, obchodními API a datovými službami pro lepší rozhodování.',
  alternates: {
    canonical: '/integrations/external-connection/',
  },
} satisfies Metadata;

import Link from 'next/link';
import Image from 'next/image';
import Illustration from '@/public/images/page-illustration.svg';
import Particles from '@/components/particles';

export default function IntegrationsSingle() {
  return (
    <section className="relative">
      {/* Radial gradient */}
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-sky-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-sky-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div
        className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={1440}
          height={427}
          alt="Page Illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          <div>
            {/* Page content */}
            <div className="md:grow pb-12 md:pb-20 justify-center">
              <div className="max-w-[720px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:space-y-0 lg:space-x-16">
                  {/* Back button */}
                  <div className="shrink-0">
                    <div className="sticky top-6">
                      <Link
                        className="flex items-center justify-center w-9 h-9 group border border-transparent rounded-full [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                        href="/integrations"
                      >
                        <span className="sr-only">Go back</span>
                        <svg
                          className="w-4 h-4 fill-sky-500"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <article className="pb-12 mb-12">
                      {/* Post content */}
                      <div className="prose max-w-none text-slate-700 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-sky-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
                        <h2 className="!text-slate-900">
                          Připojení k externím datovým zdrojům a burzám
                        </h2>
                        <p>
                          Napojení na poskytovatele tržních dat umožňuje přístup
                          k real-time cenám, objemům obchodování a dalším
                          klíčovým tržním informacím potřebným pro efektivní
                          správu portfolií. Verbosus podporuje integraci s
                          hlavními datovými poskytovateli jako Bloomberg,
                          Reuters a dalšími specializovanými zdroji finančních
                          dat. Cenové feedy jsou automaticky synchronizovány a
                          validovány, což zajišťuje přesnost oceňování portfolií
                          a kalkulací výkonnosti.
                        </p>
                        <p>
                          Obchodní API umožňují přímé propojení s elektronickými
                          obchodními platformami pro automatizovanou exekuci
                          strategií. Systém podporuje multiple asset classes
                          včetně akcií, dluhopisů, derivátů a alternativních
                          investic. Real-time market data streaming zajišťuje,
                          že všechna rozhodnutí jsou založena na
                          nejaktuálnějších tržních informacích. Automatizované
                          risk management kontroly monitorují tržní podmínky a
                          upravují obchodní strategie podle volatility a
                          likvidity trhu. Integrace s clearingovými systémy a
                          depozitáři zajišťuje bezpečné vypořádání všech
                          obchodních transakcí.
                        </p>
                        <p>
                          Pokročilé algoritmy pro order management optimalizují
                          timing a způsob exekuce obchodů pro dosažení
                          nejlepších cen. Systém podporuje multi-currency
                          operace s automatickým hedgingem měnových rizik.
                          Historical data analytics poskytují backtesting
                          možnosti pro validaci obchodních strategií před jejich
                          implementací. Monitoring tržních podmínek v reálném
                          čase umožňuje rychlé reakce na změny sentiment a
                          volatility.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
