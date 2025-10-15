import Highlighter, { HighlighterItem } from './highlighter';

export default function AIAgentControl() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-none flex flex-col lg:flex-row lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse lg:space-y-0">
            <div
              className="w-full lg:w-1/2 order-1 lg:order-none max-md:text-center"
              data-aos="fade-down"
            >
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-3 text-sm">
                Plná kontrola
              </div>
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4 text-3xl md:text-4xl">
                Ovládáte ho vy, nemusíte být IT expert
              </h2>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Agent je plně pod vaší kontrolou: definujte segmenty, šablony,
                prioritu zpráv i tón komunikace. Vše nastavíte přes intuitivní
                rozhraní s přehledem výsledků.
              </p>

              <div className="space-y-5 md:space-y-4 mb-8">
                <div className="flex items-start max-md:flex-col max-md:items-center max-md:text-center">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/10 mb-3 md:mb-0 md:mr-4">
                    <svg
                      className="shrink-0 fill-sky-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                    >
                      <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 0 0-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 0 0 2.5 5.5a2.5 2.5 0 0 0 0 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 1 0 5 0 2.473 2.473 0 0 0-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 1 0 0-5ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-base">
                      Definice segmentů
                    </h3>
                    <p className="text-sm text-slate-600">
                      Přesně určete, koho chcete oslovit a jak
                    </p>
                  </div>
                </div>

                <div className="flex items-start max-md:flex-col max-md:items-center max-md:text-center">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/10 mb-3 md:mb-0 md:mr-4">
                    <svg
                      className="shrink-0 fill-sky-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                    >
                      <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1ZM3 2h10v8H9v4H3V2Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-base">
                      Vlastní šablony
                    </h3>
                    <p className="text-sm text-slate-600">
                      Vytvořte si komunikační vzory podle vaší značky
                    </p>
                  </div>
                </div>

                <div className="flex items-start max-md:flex-col max-md:items-center max-md:text-center">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/10 mb-3 md:mb-0 md:mr-4">
                    <svg
                      className="shrink-0 fill-sky-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                    >
                      <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-base">
                      Přehled výsledků
                    </h3>
                    <p className="text-sm text-slate-600">
                      Real-time analytics všech kampaní na jednom místě
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-xs max-md:mx-auto">
                <a
                  className="btn text-white bg-gradient-to-r from-sky-600/90 via-sky-500 to-sky-600/90 hover:bg-sky-700 w-full transition duration-150 ease-in-out group shadow-lg"
                  href="/contact"
                >
                  Naplánujte si ukázku{' '}
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>

            <div
              className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative md:my-auto">
                <Highlighter className="group">
                  <HighlighterItem>
                    <div className="relative h-full bg-slate-800 rounded-[inherit] z-20 overflow-hidden p-4 sm:p-6 md:p-8">
                      <div
                        className="absolute top-0 -translate-y-1/2 right-0 translate-x-1/4 pointer-events-none -z-10 w-3/4 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-sky-500 rounded-full blur-[100px] opacity-40" />
                      </div>

                      <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full md:min-w-[420px] lg:min-w-[460px]">
                        <div className="space-y-2">
                          <div className="h-3 sm:h-4 bg-sky-400/30 rounded w-3/5" />
                        </div>

                        <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-sky-500/10 to-transparent rounded-lg sm:rounded-xl border border-sky-400/30 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <div className="h-3 sm:h-4 bg-sky-400/50 rounded w-2/5" />
                            <div className="flex items-center gap-1.5 sm:gap-2">
                              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse" />
                              <div className="h-2.5 sm:h-3 bg-green-400/70 rounded w-12 sm:w-16" />
                            </div>
                          </div>
                          <div className="space-y-2 sm:space-y-3">
                            <div className="h-2.5 sm:h-3 bg-sky-400/30 rounded w-full" />
                            <div className="h-2.5 sm:h-3 bg-sky-400/25 rounded w-5/6" />
                            <div className="h-2.5 sm:h-3 bg-sky-400/20 rounded w-4/6" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                          <div className="h-16 sm:h-18 md:h-20 bg-gradient-to-b from-sky-500/20 to-sky-500/5 rounded-lg sm:rounded-xl border border-sky-400/20 flex flex-col items-center justify-center p-2 sm:p-3">
                            <div className="h-2.5 sm:h-3 bg-sky-400/50 rounded w-8 sm:w-10 md:w-12 mb-1.5 sm:mb-2" />
                            <div className="h-1.5 sm:h-2 bg-sky-400/30 rounded w-full" />
                          </div>
                          <div className="h-16 sm:h-18 md:h-20 bg-gradient-to-b from-sky-500/20 to-sky-500/5 rounded-lg sm:rounded-xl border border-sky-400/20 flex flex-col items-center justify-center p-2 sm:p-3">
                            <div className="h-2.5 sm:h-3 bg-sky-400/50 rounded w-8 sm:w-10 md:w-12 mb-1.5 sm:mb-2" />
                            <div className="h-1.5 sm:h-2 bg-sky-400/30 rounded w-full" />
                          </div>
                          <div className="h-16 sm:h-18 md:h-20 bg-gradient-to-b from-sky-500/20 to-sky-500/5 rounded-lg sm:rounded-xl border border-sky-400/20 flex flex-col items-center justify-center p-2 sm:p-3">
                            <div className="h-2.5 sm:h-3 bg-sky-400/50 rounded w-8 sm:w-10 md:w-12 mb-1.5 sm:mb-2" />
                            <div className="h-1.5 sm:h-2 bg-sky-400/30 rounded w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                </Highlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
