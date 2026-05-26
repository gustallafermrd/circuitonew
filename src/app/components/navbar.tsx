'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export default function Navbar({ lang }: { lang: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-6 py-4 lg:px-20 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-4">
            <Link href={`/${lang}`}>
              <div className="size-12 md:size-16">
                <img src="/img/logo-circuito.webp" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            <h2 className="hidden md:block text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              <Link href={`/${lang}`}>Circuito de la Excelencia</Link>
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <Link
              href={`/${lang}`}
              className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-lg"
            >
              {lang === 'es' ? 'Inicio' : 'Home'}
            </Link>
            <Link
              href={`/${lang}/posadas`}
              className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-lg "
            >
              {lang === 'es' ? 'Posadas' : 'Inns'}
            </Link>
            {lang !== 'en' && (
              <Link
                href={`/${lang}/blog`}
                className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-lg "
              >
                Blog
              </Link>
            )}
            <Link
              href={`/${lang}/contacto`}
              className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-lg"
            >
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
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
            <button
              className="md:hidden text-text-main dark:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="md:hidden fixed top-0 right-0 z-[110] h-full w-72 max-w-[80vw] bg-background-light dark:bg-background-dark shadow-xl overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
              <span className="text-text-main dark:text-white font-bold text-lg">
                {lang === 'es' ? 'Menú' : 'Menu'}
              </span>
              <button onClick={closeMenu} className="text-text-main dark:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-5">
              <Link
                href={`/${lang}`}
                onClick={closeMenu}
                className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-lg font-medium"
              >
                {lang === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <Link
                href={`/${lang}/posadas`}
                onClick={closeMenu}
                className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-lg font-medium"
              >
                {lang === 'es' ? 'Posadas' : 'Inns'}
              </Link>
              {lang !== 'en' && (
                <Link
                  href={`/${lang}/blog`}
                  onClick={closeMenu}
                  className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-lg font-medium"
                >
                  Blog
                </Link>
              )}
              <Link
                href={`/${lang}/contacto`}
                onClick={closeMenu}
                className="text-text-main dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors text-lg font-medium"
              >
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </Link>
            </nav>
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1 justify-center">
                <Link
                  href={redirectedPathname('es')}
                  onClick={closeMenu}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${lang === 'es' ? 'bg-secondary text-[#181834]' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                >
                  ES
                </Link>
                <Link
                  href={redirectedPathname('en')}
                  onClick={closeMenu}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${lang === 'en' ? 'bg-secondary text-[#181834]' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
