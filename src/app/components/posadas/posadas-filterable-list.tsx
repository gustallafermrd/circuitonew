'use client';

import { useState, useMemo } from 'react';
import PosadaCard from './posada-card';

interface PosadasFilterableListProps {
  initialPosadas: any[];
  dictionary: any;
  lang: string;
}

// Map dictionary keys to destination names for internal logic
const REGION_KEYS: Record<string, string> = {
  'all': 'all',
  'montana': 'Montaña',
  'ciudad': 'Ciudad',
  'playa': 'Playa',
  'selva': 'Selva',
  'llano': 'Llano',
};

export default function PosadasFilterableList({ initialPosadas, dictionary, lang }: PosadasFilterableListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredPosadas = useMemo(() => {
    return initialPosadas.filter((posada: any) => {
      const attr = posada.attributes;
      const estado = attr.estado || '';
      let destino = attr.destino || '';
      
      // Joomla custom fields can be objects. Extract string value if so.
      if (typeof destino === 'object' && destino !== null) {
        destino = Object.values(destino)[0] as string || '';
      }
      
      const title = attr.title || '';
      const text = (attr.text || attr.introtext || '').replace(/<[^>]+>/g, '');

      // Search Filter
      const matchesSearch = 
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof destino === 'string' && destino.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      // Region Filter (using Destino)
      if (selectedRegion === 'all') return true;
      
      const targetRegionName = REGION_KEYS[selectedRegion];
      
      // Match the destination exactly (ignoring case)
      return typeof destino === 'string' && destino.toLowerCase() === targetRegionName.toLowerCase();
    }).sort((a: any, b: any) => {
      const titleA = a.attributes?.title || '';
      const titleB = b.attributes?.title || '';
      return titleA.localeCompare(titleB, lang);
    });
  }, [initialPosadas, searchTerm, selectedRegion, lang]);

  return (
    <>
      <section className="@container">
        <div className="@[480px]:p-0">
          <div
            className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden"
            data-alt="Beautiful Venezuelan landscape with mountains and greenery"
            style={{ backgroundImage: `linear-gradient(rgba(24, 24, 52, 0.4) 0%, rgba(24, 24, 52, 0.7) 100%), url("/img/posadas.png")` }}>
            <div className="flex flex-col gap-4 text-center z-10 max-w-2xl">
              <h1
                className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
                {dictionary.posadas.title}
              </h1>
              <h2 className="text-white/90 text-base md:text-lg font-medium leading-normal drop-shadow-sm">
                {dictionary.posadas.subtitle}
              </h2>
            </div>
            <div className="w-full max-w-[600px] z-10 mt-4">
              <label className="flex flex-col h-14 w-full md:h-16 shadow-lg">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden">
                  <div className="flex items-center justify-center pl-4 bg-white dark:bg-card-dark border-r-0">
                    <span
                      className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">search</span>
                  </div>
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none border-0 bg-white dark:bg-card-dark text-text-main-light dark:text-text-main focus:outline-0 focus:ring-0 h-full placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-3 text-sm md:text-base font-normal"
                    placeholder={dictionary.posadas.searchPlaceholder} 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="flex items-center justify-center bg-white dark:bg-card-dark pr-2">
                    <button
                      className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-6 md:h-12 bg-secondary hover:bg-[#b08e3b] text-white text-sm md:text-base font-bold transition-colors">
                      {dictionary.posadas.searchButton}
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2
            className="text-text-main dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
            {dictionary.posadas.listTitle}</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {['all', 'montana', 'ciudad', 'playa', 'selva', 'llano'].map((regionKey) => (
              <button
                key={regionKey}
                onClick={() => setSelectedRegion(regionKey)}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 font-bold transition-all active:scale-95 shadow-sm border ${
                  selectedRegion === regionKey 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white dark:bg-secondary text-text-main dark:text-white border-[#e5e7eb] dark:border-[#2a3e50] hover:bg-gray-100 dark:hover:bg-white dark:hover:text-text-main'
                }`}
              >
                <span className="text-sm leading-normal">{dictionary.posadas.regions[regionKey]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredPosadas.map((posada: any) => (
          <PosadaCard 
            key={posada.id} 
            posada={posada} 
            lang={lang} 
            dictionary={dictionary.fundadores} 
          />
        ))}
        
        {filteredPosadas.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-500 text-xl">{dictionary.posadas.notFound}</p>
          </div>
        )}
      </div>
    </>
  );
}
