import Image from 'next/image';
import Icon01 from '@/public/images/pricing-icon-01.svg';
import Icon02 from '@/public/images/pricing-icon-02.svg';
import Icon03 from '@/public/images/pricing-icon-03.svg';
import Icon04 from '@/public/images/pricing-icon-04-2.svg';
import Icon05 from '@/public/images/pricing-icon-05.svg';
import Icon06 from '@/public/images/pricing-icon-06.svg';
import Icon07 from '@/public/images/pricing-icon-07.svg';
import Particles from '@/components/particles';

export default function Features05() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Rings illustration */}

          {/* Features list */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 min-h-32">
            {/* Card #1 */}
            <div className="bg-linear-to-tr from-slate-100/50 to-slate-100/10 rounded-3xl border border-slate-200 row-span-3">
              <div className="p-4 h-full">
                <div className="flex items-center space-x-4 pb-2 px-4">
                  <svg
                    className="shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      className="fill-sky-500"
                      fillOpacity=".24"
                      d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z"
                    />
                    <path
                      className="fill-sky-400"
                      fillRule="nonzero"
                      d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z"
                    />
                  </svg>
                  <p className="!text-slate-900 font-medium">Cíl projektu</p>
                </div>
                <p className="text-sm text-slate-700 pl-4">
                  Cílem projektu Zavádění pokročilých digitálních technologií ve
                  společnosti Verbosus je vytvoření platformy digitalizující
                  společnost Verbosus s.r.o. Ta poskytne jejím klientům větší
                  kontrolu nad investicemi, lepší přehled o výkonnosti jejich
                  portfolia a možnost bezproblémového přesunu investic.
                </p>
              </div>
            </div>
            <div className="bg-linear-to-tr from-slate-100/50 to-slate-100/10 rounded-3xl border border-slate-200 row-span-3">
              <div className="p-4 h-full">
                <div className="flex items-center space-x-4 pb-2 px-4">
                  <svg
                    className="shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      className="fill-sky-500"
                      fillOpacity=".24"
                      d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z"
                    />
                    <path
                      className="fill-sky-400"
                      fillRule="nonzero"
                      d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z"
                    />
                  </svg>
                  <p className="!text-slate-900 font-medium">Popis projektu</p>
                </div>
                <p className="text-sm text-slate-700 pl-4">
                  Tento software umožní investičním společnostem připojit na
                  svoje systémy pokročilé obchodovací strategie založené na bázi
                  AI a taktéž popřední obchodovací platformy, kde mužů
                  investování realizovat. Projekt se zaměřuje na digitalizaci a
                  informatizaci správy dat a rozhodovacích procesů.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center -mb-16">
            <div className="inline-flex items-center justify-center relative">
              {/* Particles animation */}
              <Particles className="absolute inset-0 -z-10" quantity={10} />
              <div className="inline-flex size-[334px]"></div>
              <div className="absolute w-[200%] flex items-center justify-center space-x-5">
                <div className="-rotate-[4deg]">
                  <Image
                    className="w-11 h-11 drop-shadow-lg animate-[float_2.6s_ease-in-out_infinite] opacity-10"
                    src={Icon01}
                    width={80}
                    height={80}
                    alt="Pricing icon 01"
                  />
                </div>
                <div className="rotate-[4deg]">
                  <Image
                    className="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25"
                    src={Icon02}
                    width={80}
                    height={80}
                    alt="Pricing icon 02"
                  />
                </div>
                <div className="-rotate-[4deg]">
                  <Image
                    className="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60"
                    src={Icon03}
                    width={80}
                    height={80}
                    alt="Pricing icon 03"
                  />
                </div>
                <Image
                  className="drop-shadow-lg animate-float"
                  src={Icon04}
                  width={80}
                  height={80}
                  alt="Pricing icon 04"
                />
                <div className="rotate-[4deg]">
                  <Image
                    className="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60"
                    src={Icon05}
                    width={80}
                    height={80}
                    alt="Pricing icon 05"
                  />
                </div>
                <div className="-rotate-[4deg]">
                  <Image
                    className="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25"
                    src={Icon06}
                    width={80}
                    height={80}
                    alt="Pricing icon 06"
                  />
                </div>
                <div className="rotate-[4deg]">
                  <Image
                    className="w-11 h-11 drop-shadow-lg animate-[float_2.6ås_ease-in-out_infinite] opacity-10"
                    src={Icon07}
                    width={80}
                    height={80}
                    alt="Pricing icon 07"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
