import Highlighter, { HighlighterItem } from './highlighter';

export default function AIAgentLearning() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 md:space-y-0">
            <div
              className="md:w-5/12 lg:w-1/2 order-2 md:order-none"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative py-12">
                <Highlighter className="group">
                  <HighlighterItem>
                    <div className="relative h-full bg-slate-50 rounded-[inherit] z-20 overflow-hidden p-8 border border-slate-200">
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-sky-500 rounded-full blur-[80px] opacity-30" />
                      </div>

                      <div className="relative">
                        <div className="text-sky-600 text-sm font-medium mb-4">
                          Úspěšnost kampaní
                        </div>
                        <div className="relative h-48 flex items-end justify-between space-x-2">
                          <div
                            className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t origin-bottom"
                            style={{ height: '40%' }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-easing="ease-out-back"
                            data-aos-duration="800"
                          />
                          <div
                            className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t origin-bottom"
                            style={{ height: '55%' }}
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-easing="ease-out-back"
                            data-aos-duration="900"
                          />
                          <div
                            className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t origin-bottom"
                            style={{ height: '70%' }}
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-easing="ease-out-back"
                            data-aos-duration="1000"
                          />
                          <div
                            className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t origin-bottom"
                            style={{ height: '82%' }}
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-easing="ease-out-back"
                            data-aos-duration="1100"
                          />
                          <div
                            className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t origin-bottom"
                            style={{ height: '95%' }}
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-easing="ease-out-back"
                            data-aos-duration="1200"
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-slate-600">
                          <span>T1</span>
                          <span>T2</span>
                          <span>T3</span>
                          <span>T4</span>
                          <span>T5</span>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                </Highlighter>
              </div>
            </div>

            <div
              className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
              data-aos="fade-down"
            >
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-3">
                AI Powered
              </div>
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4">
                Neustále se učí a zlepšuje
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Každá interakce dělá agenta lepším – v odpovědích i segmentaci.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start max-md:justify-center">
                  <div className="shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-sky-400">
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-4.01-.99-7-5.27-7-9.5V8.3l7-3.11v15.31z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Adaptivní učení
                    </h3>
                    <p className="text-sm text-slate-600">
                      Agent se přizpůsobuje vašemu segmentu a optimalizuje
                      strategie na základě reálných výsledků
                    </p>
                  </div>
                </div>

                <div className="flex items-start max-md:justify-center">
                  <div className="shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-sky-400">
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Stále lepší výsledky
                    </h3>
                    <p className="text-sm text-slate-600">
                      S každou kampaní roste úspěšnost – agent se učí, co
                      funguje pro váš byznys
                    </p>
                  </div>
                </div>

                <div className="flex items-start max-md:justify-center">
                  <div className="shrink-0 mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-sky-400">
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Feedback loop
                    </h3>
                    <p className="text-sm text-slate-600">
                      Automatická analýza úspěšnosti a okamžitá optimalizace
                      další kampaně
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-slate-700 italic max-md:mx-auto max-w-md">
                "Váš agent se s každou kampaní učí pro váš segment"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
