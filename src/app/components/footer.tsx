import Image from "next/image";
import Link from "next/link";

export default function Footer({ lang = 'es' }: { lang?: string }) {
  const date = new Date().getFullYear();
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
              Promovemos el turismo de calidad en Venezuela, conectando a los viajeros con las posadas más exclusivas y
              auténticas del país.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="text-gray-400 hover:text-secondary transition-colors" href="#"><span
                  className="sr-only">Facebook</span>FB</a>
              <a className="text-gray-400 hover:text-secondary transition-colors" href="#"><span
                  className="sr-only">Instagram</span>IG</a>
              <a className="text-gray-400 hover:text-secondary transition-colors" href="#"><span
                  className="sr-only">Twitter</span>TW</a>
            </div>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/posadas`}>Posadas</Link></li>
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/quienes-somos`}>Sobre Nosotros</Link></li>
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/sello-de-calidad`}>Sello de Calidad</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/blog`}>Blog</Link></li>
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/quieres-ser-miembro`}>¿Quieres ser miembro?</Link></li>
              <li><Link className="hover:text-white transition-colors" href={`/${lang}/contacto`}>Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">location_on</span>
                <span>Caracas, Venezuela</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">call</span>
                <span>+58 212 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">mail</span>
                <span>info@circuitoexcelencia.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2021 - {date} Circuito de la Excelencia. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">Diseñado con <span
              className="material-symbols-outlined text-secondary text-sm">favorite</span> por 
              <Link className="hover:text-secondary transition-colors" href="https://gatwebs.com" target="_blank" rel="noopener noreferrer">Gatwebs</Link></p>
        </div>
      </div>
    </footer>  
  );
}