'use client'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export default function Navbar({ lang }: { lang: string }) {
  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    <div className="flex items-center justify-between px-6 py-4 lg:px-20 max-w-[1920px] mx-auto">
      <div className="flex items-center gap-4">
        <div className="size-16">
          <img src="/img/logo-circuito.webp" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]"><Link href={`/${lang}`}>Circuito de la Excelencia</Link></h2>
      </div>
      <nav className="hidden md:flex items-center gap-9">
             <Link
                href={`/${lang}`}
                className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-sm font-medium"
              >
                {lang === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <Link
                href={`/${lang}/posadas`}
                className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-sm font-medium"
              >
                {lang === 'es' ? 'Posadas' : 'Posadas'}
              </Link>
              <Link
                href={`/${lang}/contacto`}
                className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-sm font-medium"
              >
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </Link>
      </nav>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <Link
            href={redirectedPathname('es')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${lang === 'es' ? 'bg-secondary text-[#181834]' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            ES
          </Link>
          <Link
            href={redirectedPathname('en')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${lang === 'en' ? 'bg-secondary text-[#181834]' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            EN
          </Link>
        </div>
        <ThemeToggle />
        <button className="md:hidden text-text-main dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  </header>
  );
}
