import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  lang?: string;
  dictionary: any;
}

export default function Footer({ lang = 'es', dictionary }: FooterProps) {
  const date = new Date().getFullYear();
  const t = dictionary.footer;
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full">
                <img src="/img/logo-circuito.webp" alt="Logo" />
              </div>
              <span className="text-xl font-bold">Circuito de la Excelencia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.tagline}
            </p>
            <div className="flex gap-4 mt-2 ">
              <a className="text-secondary hover:opacity-70 transition-opacity" href="https://www.facebook.com/circuitodelaexcelencia.ve/" target="_blank" aria-label="Facebook">
                <Image src="/img/fb.svg" alt="Facebook" width={32} height={32} />
              </a>
              <a className="hover:opacity-70 transition-opacity" href="https://www.instagram.com/circuitodelaexcelencia/" target="_blank" aria-label="Instagram">
                <Image src="/img/ig.svg" alt="Instagram" width={32} height={32} />
              </a>
              <a className="hover:opacity-70 transition-opacity" href="https://twitter.com/dexcelencia" target="_blank" aria-label="Twitter">
                <Image src="/img/tw.svg" alt="Twitter" width={32} height={32} />
              </a>
            </div>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/posadas`}>{t.navigation.posadas}</Link></li>
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/quienes-somos`}>{t.navigation.aboutUs}</Link></li>
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/sello-de-calidad`}>{t.navigation.qualitySeal}</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/blog`}>{t.navigation.blog}</Link></li>
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/quieres-ser-miembro`}>{t.navigation.becomeMember}</Link></li>
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/contacto`}>{t.navigation.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">{t.contactSection.title}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">location_on</span>
                <span>{t.contactSection.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">call</span>
                <span>{t.contactSection.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">mail</span>
                <span>{t.contactSection.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2021 - {date} {t.copyright}</p>
          <p className="flex items-center gap-1">{t.designedBy} 
              <Link className="hover:text-secondary transition-colors" href="https://gatwebs.com" target="_blank" rel="noopener noreferrer">Gatwebs</Link></p>
        </div>
      </div>
    </footer>  
  );
}