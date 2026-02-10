
import { getDictionary } from "@/lib/get-dictionary";
import ContactForm from "@/app/components/contact-form";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "es");

  return (
    <>
      <main className="flex-grow">
        <section className="relative w-full bg-primary py-16 lg:py-24">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            data-alt="scenic venezuelan landscape with mountains and mist"
            style={{ backgroundImage: "url('/img/contacto-1.png')" }}
          ></div>
          <div className="layout-container relative z-10 flex flex-col items-center justify-center text-center px-4">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              {dictionary.contact.badge}
            </span>
            <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] max-w-2xl mb-6">
              {dictionary.contact.title}
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl">
              {dictionary.contact.description}
            </p>
          </div>
        </section>
        <section className="px-4 py-12 lg:px-40 lg:py-20">
          <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="flex-1">
              <div className="mb-8">
                <h2 className="text-brand-blue dark:text-white text-3xl font-bold mb-2">
                  {dictionary.contact.form.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {dictionary.contact.form.subtitle}
                </p>
              </div>
              
              <ContactForm dictionary={dictionary.contact.form} />

            </div>
            <div className="lg:w-[400px] flex flex-col gap-8">
              <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    contacts
                  </span>
                  {dictionary.contact.info.title}
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">
                        {dictionary.contact.info.addressLabel}
                      </p>
                      <p className="font-medium">
                        {dictionary.contact.info.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary">
                        phone_in_talk
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">
                        {dictionary.contact.info.phoneLabel}
                      </p>
                      <p className="font-medium">
                        {dictionary.contact.info.phone}
                      </p>
                      <p className="font-medium text-gray-400 text-sm mt-1">
                         {dictionary.contact.info.phoneSecondary}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary">
                        mail
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">
                        {dictionary.contact.info.emailLabel}
                      </p>
                      <p className="font-medium">
                        {dictionary.contact.info.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-300 mb-4">
                    {dictionary.contact.info.followUs}
                  </p>
                  <div className="flex gap-4">
                    <a
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                      href="#"
                    >
                      <span className="material-symbols-outlined">public</span>
                    </a>
                    <a
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                      href="#"
                    >
                      <span className="material-symbols-outlined">
                        photo_camera
                      </span>
                    </a>
                    <a
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                      href="#"
                    >
                      <span className="material-symbols-outlined">
                        smart_display
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-[#181834] py-16 border-t border-[#f0f4f2] dark:border-[#2a3c30]">
          <div className="layout-container flex flex-col items-center px-4 lg:px-40">
            <h2 className="text-brand-blue dark:text-white text-2xl lg:text-3xl font-bold mb-8 text-center">
              {dictionary.contact.faq.title}
            </h2>
            <div className="w-full max-w-[800px] grid gap-4">
              {dictionary.contact.faq.items.map((item, index) => (
                <details
                  key={index}
                  className="group bg-background-light dark:bg-[#1c2e24] p-4 rounded-xl cursor-pointer"
                >
                  <summary className="flex justify-between items-center font-bold text-brand-blue dark:text-white list-none">
                    <span>{item.question}</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
