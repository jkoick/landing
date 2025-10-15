import Image from 'next/image';
import Particles from './particles';
import Highlighter, { HighlighterItem } from './highlighter';

export default function Features02() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-32">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4">
              Chytřejší. Rychlejší. Efektivnější.
            </h2>
            <p className="text-lg text-slate-600">
              Platforma Verbosus umožňuje tvorbu individualizovaných strategií,
              přehledné řízení portfolií a okamžitou exekuci obchodů. Získáte
              nástroje, které šetří čas vašim týmům a zároveň umožní napojit AI
              obchodovací řešení zvyšující výnosnost investic.
            </p>
          </div>

          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            {/* Blurred shape */}
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="oklch(68.5% 0.169 237.323)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-white rounded-[inherit] z-20 overflow-hidden shadow-lg border border-slate-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Blurred shape */}
                      <div
                        className="absolute right-0 top-0 blur-2xl"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393"
                        >
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#6366F1" />
                              <stop
                                offset="100%"
                                stopColor="#6366F1"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="oklch(68.5% 0.169 237.323)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>
                      {/* Radial gradient */}
                      <div
                        className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-sky-500 rounded-full blur-[120px] opacity-30" />
                        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-sky-400 rounded-full blur-[40px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-1">
                              AOS na dosah
                            </h3>
                            <p className="text-slate-600">
                              Připojte Automatizované Obchodní Strategie ke svým
                              systémům a přineste svým klientům nejefektivnější
                              řešení s nejvyššími výkony.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden">
                        <img
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0"
                          src="/images/feature-image-01-1.png"
                          width="504"
                          height="400"
                          alt="Feature 01"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #2 */}
              <div className="md:col-span-7" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-white rounded-[inherit] z-20 overflow-hidden shadow-lg border border-slate-200">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-sky-100 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-1">
                            Růst a škálovatelnost na míru vašemu podnikání
                          </h3>
                          <p className="text-slate-600">
                            Platforma Verbosus roste spolu s vaším podnikáním.
                            Díky modulární architektuře a snadné integraci do
                            stávajících systémů můžete rozšiřovat funkcionality
                            podle aktuálních potřeb vaší firmy. Ať už spravujete
                            desítky nebo tisíce klientů, Verbosus zajistí
                            stabilitu, bezpečnost i výkon.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <img
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src="/images/feature-image-02-1.png"
                          width={536}
                          height={230}
                          alt="Feature 02"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #3 */}
              <div className="md:col-span-5" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-white rounded-[inherit] z-20 overflow-hidden shadow-lg border border-slate-200">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-sky-100 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-1">
                            Chytré nástroje pro rozhodování
                          </h3>
                          <p className="text-slate-600">
                            Využijte pokročilé analytické nástroje a reporting,
                            které vám umožní dělat informovaná rozhodnutí v
                            reálném čase. Verbosus poskytuje detailní
                            statistiky, prediktivní analýzy a možnost
                            personalizovat pohledy na výkon portfolií i
                            jednotlivých strategií. Vaše firma tak získá náskok
                            před konkurencí s využitím analýzy dat.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <img
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src="/images/feature-image-03-1.png"
                          width={230}
                          height={230}
                          alt="Feature 03"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>

          {/* Features list */}
        </div>
      </div>
    </section>
  );
}
