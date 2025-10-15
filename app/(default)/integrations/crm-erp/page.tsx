import type { Metadata } from 'next';

export const metadata = {
  title: 'Propojení Verbosus s CRM a ERP systémy',
  description:
    'Přečtěte si, jak Verbosus synchronizuje zákaznická data s interním CRM a ERP, aby měly obchodní týmy vždy aktuální informace.',
  alternates: {
    canonical: '/integrations/crm-erp/',
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
                          Napojení na interní CRM a ERP systémy
                        </h2>
                        <p>
                          Verbosus umožňuje bezproblémovou integraci s vašimi
                          stávajícími CRM a ERP systémy, čímž vytváří jednotný
                          ekosystém pro správu klientských dat a obchodních
                          procesů. Automatizované přebírání klientských
                          informací eliminuje nutnost manuálního zadávání a
                          snižuje riziko chyb při správě portfolií.
                          Synchronizace obchodních aktivit probíhá v reálném
                          čase, což zajišťuje, že všechny týmy mají přístup k
                          aktuálním informacím o klientech a jejich investičních
                          pozicích.
                        </p>
                        <p>
                          Centralizovaná správa portfolií umožňuje efektivní
                          sledování výkonnosti napříč různými investičními
                          strategiemi a produkty. Integrace podporuje obousměrný
                          tok dat, což znamená, že změny provedené v jednom
                          systému se automaticky promítnou do všech propojených
                          aplikací. Díky API-based integraci lze snadno rozšířit
                          funkcionalitu o další moduly podle potřeb firmy.
                        </p>
                        <p>
                          Systém zachovává konzistenci dat napříč všemi
                          platformami a zajišťuje, že informace o klientech,
                          obchodech a portfoliích jsou vždy synchronizované.
                          Automatizace workflow procesů mezi systémy výrazně
                          zrychluje zpracování obchodních požadavků a snižuje
                          administrativní zátěž týmů. Robustní architektura
                          integrace umožňuje škálování podle růstu firmy bez
                          nutnosti zásadních změn v infrastruktuře. Bezpečnostní
                          protokoly zajišťují, že všechny přenosy dat mezi
                          systémy jsou šifrované a auditovatelné. Implementace
                          je navržena tak, aby minimalizovala výpadky a umožnila
                          postupnou migraci dat z legacy systémů.
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
