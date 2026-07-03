import Link from 'next/link';

export default function DistintivoVerde({ lang }: { lang: string }) {
  if (lang !== 'es') return null;

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 flex justify-center border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] w-full px-4 md:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#1b4332] shadow-2xl isolate min-h-[500px] flex items-center">
          {/* Background Ambient Glow */}
          <div className="blur-blob bg-secondary opacity-[.1] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center p-8 md:p-14 lg:p-20">
            {/* Left Content */}
            <div className="flex flex-col gap-8 text-left order-2 md:order-1">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 w-fit">
                <span className="material-symbols-outlined text-secondary">eco</span>
                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">Sostenibilidad</span>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  Distintivo <span className="text-secondary">Verde</span>
                </h2>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed max-w-lg font-light opacity-90">
                Una herramienta técnica que categoriza y reconoce a las posadas que integran
                prácticas de sostenibilidad ambiental en su operación diaria, elevando su
                competitividad en el turismo responsable.
              </p>

              <div className="grid grid-cols-2 gap-6 max-w-md">
                <div className="flex flex-col gap-1">
                  <span className="text-secondary text-3xl font-black">74</span>
                  <span className="text-gray-300 text-sm">Criterios técnicos en 8 dimensiones</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary text-3xl font-black">3</span>
                  <span className="text-gray-300 text-sm">Niveles de reconocimiento</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/${lang}/distintivo-verde`}
                  className="inline-flex items-center gap-3 bg-secondary hover:bg-[#e0b852] text-[#181834] font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-secondary/20 group w-fit"
                >
                  <span>Ver Más</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content - Logo */}
            <div className="relative flex items-center justify-center order-1 md:order-2">
              <img
                src="/img/logo.png"
                alt="Distintivo Verde"
                className="w-full max-w-[280px] md:max-w-[340px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
