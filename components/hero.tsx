import Particles from './particles';

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden bg-gradient-to-t from-sky-600/80 to-sky-50/0"
          aria-hidden="true"
        ></div>
        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-sky-500 before:blur-md">
                <a
                  className="btn-sm py-0.5 text-white hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-sky-600),var(--color-sky-700))_padding-box,linear-gradient(var(--color-sky-600),var(--color-sky-400)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-sky-600/50 before:rounded-full before:pointer-events-none shadow-sm"
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <span className="relative inline-flex items-center">
                    Shlédnout demo{' '}
                    <span className="tracking-normal text-sky-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <h1
              className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4 sm:text-6xl text-4xl"
              data-aos="fade-down"
            >
              Objevte sílu <span className="text-slate-200">A</span>
              utomatizovaného <span className="text-slate-200">I</span>
              nvestování
            </h1>
            <p
              className="text-lg text-slate-700 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Využijte sílu umělé inteligence ve svůj prospěch a dosáhněte
              stabilních výsledků – Vaše investice, Vaše strategie
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <a
                  className="btn text-white bg-gradient-to-r from-sky-600/90 via-sky-500 to-sky-600/90 hover:bg-sky-700 w-full transition duration-150 ease-in-out group"
                  href="/contact"
                >
                  Vyžádat demo{' '}
                  <span className="tracking-normal text-purple-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 w-full transition duration-150 ease-in-out border border-slate-300"
                  href="/project"
                >
                  <svg
                    className="shrink-0 fill-slate-600 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Čti dokumentaci</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
