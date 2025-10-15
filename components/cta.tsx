import Highlighter, { HighlighterItem } from './highlighter'

export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Highlighter>
          <HighlighterItem>
            <div className="relative px-8 py-12 md:py-20 overflow-hidden bg-white border rounded-3xl">
              {/* Radial gradient */}
              <div
                className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-sky-500 rounded-full blur-[120px] opacity-30" />
                <div className="absolute w-1/4 h-1/4 translate-z-0 bg-sky-400 rounded-full blur-[40px]" />
              </div>
              {/* Blurred shape */}
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
                      id="bs5-a"
                      x1="19.609%"
                      x2="50%"
                      y1="14.544%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#bs5-a)"
                    fillRule="evenodd"
                    d="m0 0 461 369-284 58z"
                    transform="matrix(1 0 0 -1 0 427)"
                  />
                </svg>
              </div>
              {/* Content */}
              <div className="max-w-3xl mx-auto text-center relative">
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-3">
                    Verbosus
                  </div>
                </div>
                <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4">
                  Mějte své podnikání pod kontrolou
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Chcete zjistit, jak může Verbosus transformovat i vaše
                  investiční služby klientům? Vyžádejte si ukázku nebo
                  kontaktujte náš tým pro individuální konzultaci.
                </p>
              </div>
            </div>

            <div className="z-50 absolute inset-0 top-0 translate-x-1/2 md:translate-y-6/8 sm:translate-y-5/6 translate-y-5/6 mr-36 overflow-hidden">
              <a
                className="btn text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-600 transition duration-150 ease-in-out group shadow-sm"
                href="/contact"
              >
                Vyžádat demo{' '}
                <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </a>
            </div>
          </HighlighterItem>
        </Highlighter>
      </div>
    </section>
  )
}
