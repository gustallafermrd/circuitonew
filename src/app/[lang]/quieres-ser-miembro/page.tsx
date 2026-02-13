
import { getDictionary } from "@/lib/get-dictionary";

export default async function QuieresSerMiembroPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'es');
  const t = dictionary.quieresSerMiembro;

  return (
    <>
      <section className="relative h-[600px] flex items-center overflow-hidden">
      <img alt="Luxury Inn" className="absolute inset-0 w-full h-full object-cover"
        src="/img/miembro-1.webp" />
      <div className="absolute inset-0 bg-primary/60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="text-secondary font-bold tracking-widest uppercase mb-4 block">{t.hero.badge}</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">{t.hero.title}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">{t.hero.description}</p>
          <div className="flex gap-4">
            <a className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
              href="#proceso">{t.hero.startApplication}</a>
            <a className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              href="#beneficios">{t.hero.viewBenefits}</a>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-white" id="beneficios">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.benefits.title}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-primary/70">{t.benefits.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="p-8 rounded-xl bg-background-light border-t-4 border-secondary hover:shadow-2xl transition-shadow group">
            <div
              className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">verified</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t.benefits.qualitySeal.title}</h3>
            <p className="text-primary/70 leading-relaxed">{t.benefits.qualitySeal.description}</p>
          </div>
          <div
            className="p-8 rounded-xl bg-background-light border-t-4 border-secondary hover:shadow-2xl transition-shadow group">
            <div
              className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">public</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t.benefits.globalMarketing.title}</h3>
            <p className="text-primary/70 leading-relaxed">{t.benefits.globalMarketing.description}</p>
          </div>
          <div
            className="p-8 rounded-xl bg-background-light border-t-4 border-secondary hover:shadow-2xl transition-shadow group">
            <div
              className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t.benefits.networking.title}</h3>
            <p className="text-primary/70 leading-relaxed">{t.benefits.networking.description}</p>
          </div>
          <div
            className="p-8 rounded-xl bg-background-light border-t-4 border-secondary hover:shadow-2xl transition-shadow group">
            <div
              className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">school</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t.benefits.training.title}</h3>
            <p className="text-primary/70 leading-relaxed">{t.benefits.training.description}</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md p-8 flex items-center justify-center">
              <img alt="Circuito de la Excelencia Logo" className="max-w-full h-auto drop-shadow-2xl"
                src="/img/logo-circuito.webp" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">{t.requirements.title}</h2>
            <p className="text-white/80 mb-10 text-lg">{t.requirements.subtitle}</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary p-1 rounded-full">check</span>
                <div>
                  <h4 className="font-bold text-lg">{t.requirements.infrastructure.title}</h4>
                  <p className="text-white/60">{t.requirements.infrastructure.description}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary p-1 rounded-full">check</span>
                <div>
                  <h4 className="font-bold text-lg">{t.requirements.service.title}</h4>
                  <p className="text-white/60">{t.requirements.service.description}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary p-1 rounded-full">check</span>
                <div>
                  <h4 className="font-bold text-lg">{t.requirements.environmental.title}</h4>
                  <p className="text-white/60">{t.requirements.environmental.description}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary p-1 rounded-full">check</span>
                <div>
                  <h4 className="font-bold text-lg">{t.requirements.gastronomy.title}</h4>
                  <p className="text-white/60">{t.requirements.gastronomy.description}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-background-light" id="proceso">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-4">{t.process.title}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-secondary/20 -translate-y-1/2 z-0"></div>
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border border-secondary/10 text-center flex flex-col items-center">
              <div
                className="w-20 h-20 bg-secondary text-white text-3xl font-bold rounded-full flex items-center justify-center mb-8 shadow-lg ring-8 ring-background-light">
                1</div>
              <h3 className="text-2xl font-bold mb-4">{t.process.step1.title}</h3>
              <p className="text-primary/70">{t.process.step1.description}</p>
            </div>
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border border-secondary/10 text-center flex flex-col items-center">
              <div
                className="w-20 h-20 bg-secondary text-white text-3xl font-bold rounded-full flex items-center justify-center mb-8 shadow-lg ring-8 ring-background-light">
                2</div>
              <h3 className="text-2xl font-bold mb-4">{t.process.step2.title}</h3>
              <p className="text-primary/70">{t.process.step2.description}</p>
            </div>
            <div
              className="bg-white p-10 rounded-2xl shadow-lg border border-secondary/10 text-center flex flex-col items-center">
              <div
                className="w-20 h-20 bg-secondary text-white text-3xl font-bold rounded-full flex items-center justify-center mb-8 shadow-lg ring-8 ring-background-light">
                3</div>
              <h3 className="text-2xl font-bold mb-4">{t.process.step3.title}</h3>
              <p className="text-primary/70">{t.process.step3.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 flex flex-col justify-center border-r border-primary/20 bg-primary">
            <h2 className="text-3xl font-bold mb-6 text-white">{t.contactForm.title}</h2>
            <p className="text-white/80 mb-8 text-lg">{t.contactForm.subtitle}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">email</span>
                <span className="text-white font-medium">direccionejecutiva@circuitodelaexcelencia.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">phone</span>
                <span className="text-white font-medium">+58 (0424) 713-7673</span>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 p-12 bg-white">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">{t.contactForm.fullName}</label>
                  <input className="w-full border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] rounded-lg p-3 focus:ring-gray focus:border-gray"
                    placeholder={t.contactForm.fullNamePlaceholder} type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">{t.contactForm.posadaName}</label>
                  <input className="w-full border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] rounded-lg p-3 focus:ring-secondary focus:border-secondary"
                    placeholder={t.contactForm.posadaNamePlaceholder} type="text" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">{t.contactForm.email}</label>
                  <input className="w-full border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] rounded-lg p-3"
                    placeholder={t.contactForm.emailPlaceholder} type="email" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">{t.contactForm.location}</label>
                  <select
                    className="w-full border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] rounded-lg p-3 focus:ring-primary focus:border-primary text-primary/60">
                    <option>{t.contactForm.states.select}</option>
                    <option>{t.contactForm.states.merida}</option>
                    <option>{t.contactForm.states.falcon}</option>
                    <option>{t.contactForm.states.miranda}</option>
                    <option>{t.contactForm.states.aragua}</option>
                    <option>{t.contactForm.states.other}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">{t.contactForm.description}</label>
                <textarea className="w-full border border-[#dbe6df] dark:border-[#2a3c30] bg-white dark:bg-[#1c2e24] rounded-lg p-3 focus:ring-primary focus:border-primary"
                  placeholder={t.contactForm.descriptionPlaceholder} rows={4}></textarea>
              </div>
              <button
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-lg shadow-lg transition-all text-lg"
                type="submit">{t.contactForm.submit}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
