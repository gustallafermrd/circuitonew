import { getArticles } from "@/lib/joomla";
import Hero from "@/app/components/home/hero";
import Intro from "@/app/components/home/intro";
import Mapa from "@/app/components/home/mapa";
import Comentarios from "@/app/components/comentarios";
import { getDictionary } from "@/lib/get-dictionary";
import GiftCard from "@/app/components/home/gift-card";
import Passport from "@/app/components/home/passport";
import DistintivoVerde from "@/app/components/home/distintivo-verde";

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'es');
  
  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <Hero dictionary={dictionary.hero} lang={lang} />
      <Intro dictionary={dictionary.intro} />
      <GiftCard dictionary={dictionary.giftCard} />
      <Passport dictionary={dictionary.passport} />
      <DistintivoVerde lang={lang} />
      {/* <Mapa /> */}
      <Comentarios dictionary={dictionary.comentarios} />
    </main>
  );
}
