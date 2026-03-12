export default function Passport({ dictionary }: { dictionary: any }) {
  return (
    <div className="w-full bg-[#e7e0d5] dark:bg-gray-900/20 py-24 flex justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full px-4 md:px-6">
        <div className="relative flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            <div className="absolute inset-0 z-0">
              <img
                alt={dictionary.tableAlt}
                className="w-full h-full object-cover rounded-3xl opacity-20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL-faKAiCShgTrSYO8TgypSfNHYVrwtmz37RIaM3kSuy28iWeHSKZsHGkEWptsLxMeFqpohhzWurXDoGUhmv1ikcdp2UjkyKwoQQzMvEYyjAqjncO-f1fQGlmq-zoIbVQ2CJyaUm6qK7BlCnWF49J7Gxo1Be0Hdy9reyrTiWeJzgdcKXtAlUwP1aTAs774_1fPpPKKbhlLpBGg200yD8nGb-kL5hIYikycGPIyR2gepe6nkBqS44OiMsLum9HuO9ufvg39jWdPJL8"
              />
            </div>
            <div className="relative z-10 p-10 flex items-center justify-center">
              <img
                src="/img/pasaporte.jpeg"
                alt={dictionary.passportAlt}
                className="w-full max-w-[320px] md:max-w-[380px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-700 hover:scale-105 active:scale-95 cursor-pointer"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">explore</span>
                <span className="text-primary font-bold text-sm">{dictionary.floatingTraveler}</span>
              </div>
              <div className="absolute -top-10 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-3 rotate-6">
                <span className="material-symbols-outlined text-secondary">ink_highlighter</span>
                <span className="text-primary font-bold text-sm">{dictionary.floatingStamps}</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-sm">loyalty</span>
                <span className="text-secondary font-bold uppercase tracking-wider text-[10px]">
                  {dictionary.badge}
                </span>
              </div>
              <h2 className="text-primary dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                {dictionary.titlePart1} <span className="text-secondary">{dictionary.titlePart2}</span>
              </h2>
              <p className="text-primary/70 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                {dictionary.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary border border-gray-100">
                  <span className="material-symbols-outlined">hotel_class</span>
                </div>
                <h4 className="text-primary font-bold text-base">{dictionary.benefitsVIP}</h4>
                <p className="text-gray-500 text-sm">{dictionary.benefitsVIPDesc}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary border border-gray-100">
                  <span className="material-symbols-outlined">sell</span>
                </div>
                <h4 className="text-primary font-bold text-base">{dictionary.exclusiveRates}</h4>
                <p className="text-gray-500 text-sm">{dictionary.exclusiveRatesDesc}</p>
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-primary hover:bg-[#252548] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center gap-3 group">
                <span>{dictionary.cta}</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}