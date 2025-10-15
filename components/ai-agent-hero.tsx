import Particles from './particles';

export default function AIAgentHero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <Particles className="absolute inset-0 -z-10" />

        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden bg-gradient-to-t from-sky-600/80 to-sky-50/0"
          aria-hidden="true"
        ></div>
        <div className="pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="h1 text-slate-900 pb-6 sm:text-6xl text-4xl font-bold leading-tight"
              data-aos="fade-down"
            >
              AI marketingový agent – Váš nový digitální kolega
            </h1>
            <p
              className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Automatizovaný a personalizovaný kontakt se zákazníky – 24/7, na
              míru, v segmentu, který potřebujete.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <a
                className="btn text-white bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 hover:from-sky-500 hover:via-sky-600 hover:to-sky-500 w-full sm:w-auto transition duration-150 ease-in-out group shadow-lg hover:shadow-xl"
                href="/contact"
              >
                Vyzkoušet demo{' '}
                <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
