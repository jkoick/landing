import Particles from './particles';

export default function AIAgentIntelligence() {
  return (
    <section className="relative">
      <div
        className="absolute top-0 -translate-y-1/4 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="ai-intelligence-gradient"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#ai-intelligence-gradient)"
            fillRule="evenodd"
            d="m410 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 -410 427)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-3">
              Skutečná inteligence
            </div>
            <h2
              className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4"
              data-aos="fade-down"
            >
              Skutečná inteligence ≠ jen šablony
            </h2>
            <p
              className="text-lg text-slate-600 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Personalizuje, analyzuje, doporučuje a upravuje za běhu.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Particles
              className="absolute inset-0 -z-10"
              quantity={8}
              staticity={30}
            />

            <div
              className="grid md:grid-cols-3 gap-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mb-4 border border-transparent rounded-xl [background:linear-gradient(var(--color-sky-600),var(--color-sky-700))_padding-box,conic-gradient(var(--color-sky-400),var(--color-sky-600)_25%,var(--color-sky-600)_75%,var(--color-sky-400)_100%)_border-box] before:absolute before:inset-0 before:bg-sky-600/30 before:rounded-xl">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Automatická personalizace
                </h3>
                <p className="text-sm text-slate-600">
                  Agent automaticky upravuje text podle segmentu a potřeb
                  zákazníka
                </p>
              </div>

              <div className="relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mb-4 border border-transparent rounded-xl [background:linear-gradient(var(--color-sky-600),var(--color-sky-700))_padding-box,conic-gradient(var(--color-sky-400),var(--color-sky-600)_25%,var(--color-sky-600)_75%,var(--color-sky-400)_100%)_border-box] before:absolute before:inset-0 before:bg-sky-600/30 before:rounded-xl">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Odhalení leadů
                </h3>
                <p className="text-sm text-slate-600">
                  Vyhodnocuje zájem podle reakcí a identifikuje nejslibnější
                  příležitosti
                </p>
              </div>

              <div className="relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mb-4 border border-transparent rounded-xl [background:linear-gradient(var(--color-sky-600),var(--color-sky-700))_padding-box,conic-gradient(var(--color-sky-400),var(--color-sky-600)_25%,var(--color-sky-600)_75%,var(--color-sky-400)_100%)_border-box] before:absolute before:inset-0 before:bg-sky-600/30 before:rounded-xl">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Real-time úprava stratégií
                </h3>
                <p className="text-sm text-slate-600">
                  Navrhuje další nejlepší krok a přizpůsobuje přístup podle
                  výsledků
                </p>
              </div>
            </div>

            <div
              className="mt-12 text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p className="text-slate-700 max-w-3xl mx-auto">
                Náš agent automaticky upravuje text podle segmentu, vyhodnocuje
                zájem podle reakcí a navrhuje další nejlepší krok – od
                follow-upu přes správný čas odeslání až po vyloučení
                nerelevantních kontaktů.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
