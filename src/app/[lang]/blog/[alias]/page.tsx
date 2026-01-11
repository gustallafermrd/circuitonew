import { getBlogArticleByAlias } from "@/lib/joomla";
import { getDictionary } from "@/lib/get-dictionary";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ lang: string; alias: string }>;
}) {
  const { lang, alias } = await params;
  const dictionary = await getDictionary('es') as any; // Force Spanish dictionary
  const article = await getBlogArticleByAlias(alias); // Fetch always Spanish article

  if (!article) {
    notFound();
  }

  const attributes = article.attributes;
  const SITE_URL = "https://beta.circuitodelaexcelencia.com/";

  const getImageUrl = (images: any) => {
    if (!images) return '';
    
    let imagesObj = images;
    if (typeof images === 'string') {
      try {
        imagesObj = JSON.parse(images);
      } catch (e) {
        return '';
      }
    }

    const path = imagesObj.image_fulltext || imagesObj.image_intro;
    if (!path) return '';
    
    const cleanPath = path.split('#')[0];
    return cleanPath.startsWith('http') ? cleanPath : `${SITE_URL}${cleanPath}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <main className="flex-grow bg-white dark:bg-gray-900 pb-20">
      {/* Article Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{ backgroundImage: `url('${getImageUrl(attributes.images)}')` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <Link 
            href={`/${lang}/blog`}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors w-fit"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            {dictionary.posadas.backToList}
          </Link>
          <div className="flex items-center gap-3 mb-4">
             <span className="px-3 py-1 bg-secondary text-primary rounded-md text-xs font-bold uppercase tracking-wider">
               {dictionary.blog.discover}
             </span>
             <span className="text-white/80 text-sm font-medium">
               {formatDate(attributes.created)}
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">
            {attributes.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Main Content */}
          <article className="w-full">
            <div 
              className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:text-primary dark:prose-headings:text-secondary prose-a:text-secondary hover:prose-a:text-primary transition-colors"
              dangerouslySetInnerHTML={{ __html: attributes.text }}
            />
            
            {/* Share or footer of the article if needed */}
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Compartir:</span>
                  <div className="flex gap-2">
                     {/* Social share placeholders */}
                     <button className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined text-xl">share</span>
                     </button>
                  </div>
               </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Newsletter Widget */}
            <div className="bg-primary p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
              <h3 className="text-xl font-bold mb-2 relative z-10">{dictionary.blog.newsletterTitle}</h3>
              <p className="text-sm text-gray-300 mb-4 relative z-10">{dictionary.blog.newsletterSubtitle}</p>
              <form className="flex flex-col gap-3 relative z-10">
                <input
                  className="rounded-lg border-none bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:ring-2 focus:ring-secondary"
                  placeholder={dictionary.blog.newsletterPlaceholder} type="email" />
                <button
                  className="rounded-lg bg-secondary py-2.5 text-sm font-bold text-primary hover:bg-white transition-colors shadow-md"
                  type="submit">
                  {dictionary.blog.newsletterButton}
                </button>
              </form>
            </div>

            {/* Instagram Widget */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-lg font-bold text-primary dark:text-white mb-4">{dictionary.blog.instagramTitle}</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-md bg-gray-200 bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBd8bH6qEwR-JpOZENopgJr1hO-dV0gHC_SDFfmE4cFPO1DuU9cy9Qk4fQBMeRlQeiMR-6mI0FOJIDA8i2joiqwcOQnwJRcl-2WjDxu59gcTtc8GRiOExHNR5tXqLNLGVwxDFgpVTkt6RYsUwXXqoBVzupeVKhrOECBoMcVRqmXVkfhgdE0XPcJAuy3pnbayYUmNEBh64uNDi1-TerLztJQcLtvkU3gux-jY76nqX9T2tqcKt-wE3xCi8guIMdsnkzLaO0_jch3cM')` }}>
                </div>
                <div className="aspect-square rounded-md bg-gray-200 bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuASB_crTTqJ8TFIm_bGm3cJO12vpetoJ4sNSEI8oJEcTH_xd3kbXCz8Ih9tNZcf6KNei655-plSX1wwSdzpRw55oPXNpsCqNrpghBXJ7iIjaCIs6EAc-wRsHRaV7aQt7x5DDF-3-Qw70r6Y5uGJeHw2eNYSFHrpMJY5Nhs_Einx4baIf-d0azkNEnT0ltgXPMjjBrHzy9K-WYpT3UW2vLrZAJVARUCEbVjvmJ70VDKErAH4hv8uzxMQsD5IPalzeK5DFarYj5Ux8dA')` }}>
                </div>
                <div className="aspect-square rounded-md bg-gray-200 bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHlMtnYdQVTAU0fAiNtbuf2jR2-7SWBUfR1jQ6Z64BXWfGGrw8Yefhp1bzPj0jf78cmbeHyOL3jMZSVm0s-luRCyS7Qf2kFQ6d247lpTgJppou1lKV8fWVyXOe-fwz0lwhd6jhhlk624KawPT3HvXFt0ooHfDb92sn12WSjp9Bk83GEX0BQF7ClGx6ioMxBnHfQTp_spSFm0ICMPlltQQxfJXyzGugJiLqC-ERSJU5HqDM2reVJKHrTW5EzgmXsuyH5FuJgbDPCW0')` }}>
                </div>
              </div>
              <a className="mt-4 block text-center text-sm font-medium text-secondary hover:text-primary transition-colors"
                href="https://instagram.com/circuitoexcelencia" target="_blank" rel="noopener noreferrer">@circuitoexcelencia</a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
