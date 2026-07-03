import Link from 'next/link';

export default function Hero({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <div className="w-full @container">
      <div className="relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[600px] md:min-h-[800px] bg-cover bg-center gap-8" data-alt="Impresionante vista aérea de los tepuyes venezolanos al amanecer" style={{ backgroundImage: 'linear-gradient(rgba(24, 24, 52, 0.3) 0%, rgba(24, 24, 52, 0.7) 100%), url("/img/salto-angel.webp")' }}>
        <div className="max-w-3xl flex flex-col gap-4 animate-fade-in-up">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl drop-shadow-lg">
            {dictionary.title}
          </h1>
          <h2 className="text-white/90 text-lg font-medium leading-relaxed md:text-xl max-w-2xl mx-auto drop-shadow-md">
            {dictionary.subtitle}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href={`/${lang}/posadas`}
            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-secondary hover:bg-[#e0b852] transition-all text-[#181834] text-base font-bold shadow-lg shadow-black/20">
            {dictionary.explore}
          </Link>
          <button
            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all text-white text-base font-bold">
            {dictionary.viewMap}
          </button>
        </div>
      </div>
    </div>
  );
}


