import Image from 'next/image';
import Particles from '@/components/particles';
import Illustration from '@/public/images/page-illustration.svg';
import Pricing from '@/components/pricing';
import Link from 'next/link';

export default function PricingSection() {
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
          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-3">
              Verbosus přináší řešení
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-900/60 via-slate-900 to-slate-900/60 pb-4">
              Zavádění pokročilých digitálních technologií ve společnosti
              Verbosus.
            </h1>
            {/* <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">
                Cut down overhead costs and ditch clunky software. Get a
                flexible, purpose-built tool to simplify your security with
                authentication services.
              </p>
            </div> */}
          </div>

          <div className="max-w-6xl mx-auto pb-8">
            <div className="p-8 border bg-slate-50 rounded-3xl">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium text-slate-500">Subjekt</h3>
                  <div className="flex flex-col">
                    <p className="text-slate-800">
                      Verbosus s.r.o., Olomoucka 3419/9
                    </p>
                    <p className="text-slate-800">Brno – Židenice, 61800</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-slate-500">Kód projektu</h3>
                  <p className="text-slate-800">
                    CZ.01.01.02/01/23_023/0001915
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-slate-500">Datum ukončení</h3>
                  <p className="text-slate-800">31.07.2025</p>
                </div>

                <div className="md:col-start-2 md:row-start-2 mx-auto">
                  <a
                    className="btn text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-600 transition duration-150 ease-in-out group shadow-sm"
                    href="/docs/Publicita Verbosus bez ořezu.pdf"
                    target="_blank"
                  >
                    Zobrazit dokument{' '}
                    <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
