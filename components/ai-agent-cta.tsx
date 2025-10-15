import Highlighter, { HighlighterItem } from './highlighter';

export default function AIAgentCta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <Highlighter>
            <HighlighterItem>
              <div className="relative px-8 py-12 md:py-20 overflow-hidden bg-white border rounded-3xl">
                <div
                  className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-sky-500 rounded-full blur-[120px] opacity-30" />
                  <div className="absolute w-1/4 h-1/4 translate-z-0 bg-sky-400 rounded-full blur-[40px]" />
                </div>
                <div
                  className="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-30 pointer-events-none -z-10"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="434"
                    height="427"
                  >
                    <defs>
                      <linearGradient
                        id="ai-cta-gradient"
                        x1="19.609%"
                        x2="50%"
                        y1="14.544%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop
                          offset="100%"
                          stopColor="#0ea5e9"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#ai-cta-gradient)"
                      fillRule="evenodd"
                      d="m0 0 461 369-284 58z"
                      transform="matrix(1 0 0 -1 0 427)"
                    />
                  </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative">
                  <div>
                    <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-3">
                      AI Marketing Agent
                    </div>
                  </div>
                  <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4">
                    Získejte více obchodů bez lidského přetížení
                  </h2>
                  <p className="text-lg text-slate-600 mb-8">
                    V desítkách firem již AI marketing agent šetří čas a
                    znásobuje výsledky – vyzkoušejte ho i vy.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
                    <div className="p-4">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 mb-1">
                        24/7
                      </div>
                      <div className="text-sm text-slate-600">
                        Nepřetržitá dostupnost
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 mb-1">
                        10x
                      </div>
                      <div className="text-sm text-slate-600">
                        Více kontaktů denně
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 mb-1">
                        100%
                      </div>
                      <div className="text-sm text-slate-600">
                        Personalizované zprávy
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <a
                      className="btn text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-600 transition duration-150 ease-in-out group shadow-lg hover:shadow-xl"
                      href="/contact"
                    >
                      Zjistit cenu & konzultovat možnosti{' '}
                      <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </Highlighter>
        </div>
      </div>
    </section>
  );
}
