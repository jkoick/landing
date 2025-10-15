import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'
import Image from 'next/image'

export default function IntegrationsSection() {
  return (
    <section className="relative">
      {/* Radial gradient */}
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-sky-200 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-sky-300 rounded-full blur-[80px] opacity-30"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div
        className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration || '/placeholder.svg?height=427&width=1440'}
          className="max-w-none"
          width={1440}
          height={427}
          alt="Page Illustration"
        />
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400 pb-3">
              Verbosus prináší řešení
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4">
              Proč integrovat Verbosus?
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-600">
                Verbosus je navržený jako otevřená platforma pro finanční a
                investiční společnosti, která umožňuje snadné propojení s vašimi
                stávajícími systémy a nástroji. Díky robustnímu API a modulární
                architektuře můžete rozšířit funkce platformy přesně podle
                potřeb vašeho podnikání.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
