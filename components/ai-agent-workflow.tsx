export default function AIAgentWorkflow() {
  return (
    <section className="relative">
      <div
        className="absolute bottom-0 translate-y-1/4 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="workflow-gradient"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#workflow-gradient)"
            fillRule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2
              className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4"
              data-aos="fade-down"
            >
              Rychlý start v 3 krocích
            </h2>
            <p
              className="text-lg text-slate-600"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Jednoduché nastavení, které zvládne každý
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="relative flex items-center justify-center w-20 h-20">
                    <div className="absolute inset-0 border-4 border-transparent rounded-full [background:linear-gradient(var(--color-slate-100),var(--color-slate-100))_padding-box,linear-gradient(135deg,var(--color-sky-400),var(--color-sky-600))_border-box]" />
                    <div className="relative flex items-center justify-center w-full h-full bg-white rounded-full">
                      <svg
                        className="fill-sky-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 text-white text-sm font-bold shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Vyberte segment trhu
                </h3>
                <p className="text-slate-600">
                  Určete, koho chcete oslovit – podle odvětví, velikosti firmy
                  nebo konkrétních kritérií
                </p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="relative flex items-center justify-center w-20 h-20">
                    <div className="absolute inset-0 border-4 border-transparent rounded-full [background:linear-gradient(var(--color-slate-100),var(--color-slate-100))_padding-box,linear-gradient(135deg,var(--color-sky-400),var(--color-sky-600))_border-box]" />
                    <div className="relative flex items-center justify-center w-full h-full bg-white rounded-full">
                      <svg
                        className="fill-sky-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 text-white text-sm font-bold shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Zadejte cíl kampaně
                </h3>
                <p className="text-slate-600">
                  Definujte, co chcete dosáhnout – získání schůzek, představení
                  produktu nebo jiný cíl
                </p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="relative flex items-center justify-center w-20 h-20">
                    <div className="absolute inset-0 border-4 border-transparent rounded-full [background:linear-gradient(var(--color-slate-100),var(--color-slate-100))_padding-box,linear-gradient(135deg,var(--color-sky-400),var(--color-sky-600))_border-box]" />
                    <div className="relative flex items-center justify-center w-full h-full bg-white rounded-full">
                      <svg
                        className="fill-sky-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 9h2v9h-2v-9zm4-3h2v12h-2V9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 text-white text-sm font-bold shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Sledujte výsledky
                </h3>
                <p className="text-slate-600">
                  Agent vyhledává, píše a oslovuje – vy sledujete metriky a
                  optimalizujete kampaň
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
