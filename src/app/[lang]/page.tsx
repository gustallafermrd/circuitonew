import { getArticles } from "@/lib/joomla";
import Hero from "@/app/components/hero";
import Intro from "@/app/components/intro";
import Fundadores from "@/app/components/fundadores";
import Mapa from "@/app/components/mapa";
import Comentarios from "@/app/components/comentarios";
import { getDictionary } from "@/lib/get-dictionary";

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'es');
  
  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <Hero dictionary={dictionary.hero} />
      <Intro dictionary={dictionary.intro} />
      <Fundadores dictionary={dictionary.fundadores} lang={lang} />
      <Mapa />
      <Comentarios />
    </main>
  );
}
