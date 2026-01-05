import Link from "next/link";
import { getFoundingPosadas } from "@/lib/joomla";
import FundadoresCard from "./fundadores-card";

export default async function Fundadores({ dictionary, lang }: { dictionary: any, lang: string }) {
  const posadas = await getFoundingPosadas(lang);
  
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 w-full flex justify-center border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1200px] w-full px-4 md:px-6 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold mt-2">{dictionary.title}</h2>
          </div>
          <Link className="text-text-main dark:text-gray-300 font-semibold flex items-center gap-1 hover:text-secondary transition-colors" href={`/${lang}/posadas`}>
            {dictionary.viewAll} <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posadas.map((posada: any) => (
            <FundadoresCard key={posada.id} posada={posada} lang={lang} dictionary={dictionary} />
          ))}
          
          {posadas.length === 0 && (
             <p className="col-span-full text-center text-gray-500">{dictionary.notFound}</p>
          )}
        </div>
      </div>
    </div>
  );
}