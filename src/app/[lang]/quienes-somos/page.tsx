
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import styles from "./timeline.module.css";

export default async function QuienesSomosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'es');
  const t = dictionary.quienesSomos;

  return (
    <>
    <div
      className="relative flex flex-col justify-center items-center min-h-[450px] w-full bg-cover bg-center bg-no-repeat p-8"
      style={{ backgroundImage: 'linear-gradient(rgba(24, 24, 52, 0.75) 0%, rgba(24, 24, 52, 0.6) 100%), url("/img/sobre-nosotros.png")' }}>
        
      <div className="flex flex-col gap-6 text-center max-w-[850px]">
        <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          {t.hero.title}
        </h1>
        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        <p className="text-white/90 text-lg font-medium leading-relaxed md:text-2xl max-w-[750px] mx-auto italic">
          {t.hero.quote1}
        </p>
        <p className="text-white/90 text-lg font-medium leading-relaxed md:text-2xl max-w-[750px] mx-auto italic">{t.hero.quote2}</p>
      </div>
    </div>
    <section className="flex flex-col items-center px-6 py-20 lg:px-40 bg-white">
      <div className="max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-secondary font-bold uppercase text-sm">{t.history.badge}</span>
          <h2 className="text-primary text-3xl font-bold md:text-4xl">
            {t.history.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed text-justify">
            {t.history.paragraph1}
          </p>
          <p className="text-slate-600 text-lg leading-relaxed text-justify">
            {t.history.paragraph2}
          </p>
        </div>
        <div className="relative">
          <img alt="Fachada tradicional" className="rounded-2xl shadow-2xl z-10 relative object-cover h-[400px] w-full"
            src="/img/quienes-somos.webp" />
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary rounded-2xl -z-0"></div>
        </div>
      </div>
    </section>
    <section className="flex flex-col px-6 py-20 lg:px-40 bg-slate-50">
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="flex flex-col gap-6 rounded-2xl bg-white p-10 shadow-md border-t-4 border-secondary">
            <div className="size-16 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-4xl">flag</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-primary text-2xl font-bold">{t.mission.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed italic">
                {t.mission.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl bg-white p-10 shadow-md border-t-4 border-secondary">
            <div className="size-16 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-4xl">auto_awesome</span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-primary text-2xl font-bold">{t.vision.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed italic">
                {t.vision.description}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-brand-navy text-3xl font-bold">{t.values.title}</h2>
          <div className="h-1 w-16 bg-secondary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:translate-y-[-5px] transition-transform">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">verified</span>
            <h4 className="font-bold text-primary mb-2">{t.values.quality.title}</h4>
            <p className="text-slate-500 text-sm">{t.values.quality.description}</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:translate-y-[-5px] transition-transform">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">groups</span>
            <h4 className="font-bold text-primary mb-2">{t.values.unity.title}</h4>
            <p className="text-slate-500 text-sm">{t.values.unity.description}</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:translate-y-[-5px] transition-transform">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">temple_buddhist</span>
            <h4 className="font-bold text-primary mb-2">{t.values.identity.title}</h4>
            <p className="text-slate-500 text-sm">{t.values.identity.description}</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:translate-y-[-5px] transition-transform">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">eco</span>
            <h4 className="font-bold text-primary mb-2">{t.values.sustainability.title}</h4>
            <p className="text-slate-500 text-sm">{t.values.sustainability.description}</p>
          </div>
        </div>
      </div>
    </section>
    <section className="flex flex-col px-6 py-24 lg:px-40 bg-white">
      <div className="max-w-[1000px] mx-auto w-full">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">{t.timeline.badge}</span>
          <h2 className="text-primary text-4xl font-bold mt-2">{t.timeline.title}</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">{t.timeline.subtitle}</p>
        </div>
        <div className={`relative ${styles.timelineLine} space-y-24`}>
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            <div className="md:w-[42%] mb-8 md:mb-0">
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-secondary shadow-sm text-right">
                <span className="text-secondary font-extrabold text-3xl block mb-2">{t.timeline.founding.year}</span>
                <h3 className="text-primary text-xl font-bold mb-3">{t.timeline.founding.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.timeline.founding.description}
                </p>
              </div>
            </div>
            <div
              className="absolute left-[-20px] md:left-1/2 md:ml-[-24px] z-10 size-12 rounded-full bg-secondary border-4 border-white shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white">handshake</span>
            </div>
            <div className="md:w-[42%]"></div>
          </div>
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full">
            <div className="md:w-[42%] mb-8 md:mb-0">
              <div className="bg-primary p-8 rounded-2xl border-r-4 border-secondary shadow-sm text-left">
                <span className="text-secondary font-extrabold text-3xl block mb-2">{t.timeline.evolution.year}</span>
                <h3 className="text-white text-xl font-bold mb-3">{t.timeline.evolution.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {t.timeline.evolution.description}
                </p>
              </div>
            </div>
            <div
              className="absolute left-[-20px] md:left-1/2 md:ml-[-24px] z-10 size-12 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">analytics</span>
            </div>
            <div className="md:w-[42%]"></div>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            <div className="md:w-[42%] mb-8 md:mb-0">
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-secondary shadow-sm text-right">
                <span className="text-secondary font-extrabold text-3xl block mb-2">{t.timeline.present.year}</span>
                <h3 className="text-primary text-xl font-bold mb-3">{t.timeline.present.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.timeline.present.description}
                </p>
              </div>
            </div>
            <div
              className="absolute left-[-20px] md:left-1/2 md:ml-[-24px] z-10 size-12 rounded-full bg-secondary border-4 border-white shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">star_rate</span>
            </div>
            <div className="md:w-[42%]"></div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-primary py-16 px-6 lg:px-40 overflow-hidden relative">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="md:w-1/3 flex justify-center">
          <div
            className="size-48 rounded-full border-4 border-dashed border-secondary flex flex-col items-center justify-center text-center p-4">
            <span className="material-symbols-outlined text-secondary text-6xl mb-2">verified_user</span>
            <span className="text-white font-bold text-sm">{t.juniorAssociate.badge}</span>
          </div>
        </div>
        <div className="md:w-2/3 text-white">
          <h2 className="text-3xl font-bold mb-6">{t.juniorAssociate.title}</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {t.juniorAssociate.description}
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <span className="material-symbols-outlined !text-[150px] text-white">hotel_class</span>
      </div>
    </section>
    <div className="w-full bg-white text-brand-navy px-6 py-20 lg:px-40">
      <div className="max-w-[960px] mx-auto flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t.cta.title}</h2>
        <p className="text-slate-600 max-w-2xl text-lg md:text-xl">
          {t.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href={`/${lang}/posadas`}
            className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-[#25254a] text-white text-lg font-bold transition-all shadow-xl">
            {t.cta.explorePosadas}
          </Link>
          <Link
            href={`/${lang}/contacto`}
            className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white text-lg font-bold transition-all">
            {t.cta.contact}
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}
