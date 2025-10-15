export default function Faqs() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-16 border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-sky-300 pb-3">
                Co představuje Verbosus
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-900/60 via-slate-900 to-slate-900/60 pb-4">
              Přínos projektu
            </h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <p className="text-slate-500">
                  Projekt Verbosus přináší na trh revoluční digitalizaci
                  finančního sektoru prostřednictvím komplexní automatizace
                  obchodních procesů a správy investičních portfolií. Hlavním
                  přínosem je dramatické zvýšení efektivnosti finančních a
                  investičních společností eliminováním manuálních úkolů a
                  zavedením automatizovaných workflow systémů.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <p className="text-slate-500">
                  Digitalizace prostřednictvím Verbosus snižuje provozní náklady
                  eliminováním zbytečných výdajů spojených s manuálními procesy
                  a minimalizuje riziko lidských chyb. Automatizované systémy
                  poskytují real-time insights do obchodních procesů, což
                  výrazně zrychluje rozhodování na základě aktuálních dat
                  namísto zastaralých reportů. Projekt umožňuje finančním
                  společnostem škálovat své operace bez proporcionálního nárůstu
                  lidských zdrojů.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <p className="text-slate-500">
                  Verbosus osvobozuje zaměstnance od monotónních úkolů a
                  umožňuje jim soustředit se na strategické iniciativy
                  vyžadující lidskou kreativitu a kritické myšlení. Automatizace
                  zajišťuje vyšší přesnost a konzistentnost procesů, což je
                  klíčové ve finančním sektoru. Platforma poskytuje
                  škálovatelnost a flexibilitu potřebnou pro rychlou adaptaci na
                  měnící se tržní podmínky. Celkově projekt Verbosus představuje
                  katalyzátor inovací, agility a udržitelného růstu pro finanční
                  sektor v éře digitální transformace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
