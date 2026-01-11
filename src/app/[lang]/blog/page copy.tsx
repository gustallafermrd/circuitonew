import { getBlogArticles } from "@/lib/joomla";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary('es'); // Force Spanish dictionary for the blog
  const articles = await getBlogArticles(); // Fetch always Spanish articles

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

    const intro = imagesObj.image_intro;
    if (!intro) return '';
    
    const cleanPath = intro.split('#')[0];
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

  const featured = articles[0];
  const gridArticles = articles.slice(1);
  
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 flex justify-center min-h-screen">
			<div className="max-w-7xl w-full px-4 md:px-6 flex flex-col gap-10">
        <main className="flex-grow">
          {/* Page Heading & Intro */}
          <section className="bg-primary pt-16 pb-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/img/cubes.png')]">
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Blog del Circuito Excelencia
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Encontrarás aquí las últimas noticias, articulos y contenido relacionado con el Circuito Excelencia.
              </p>
            </div>
          </section>

          {/* Featured Article Section (Overlapping) */}
          {featured && (
            <section className="relative z-10 -mt-16 pb-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                  className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden grid lg:grid-cols-2 group border border-gray-100 dark:border-gray-800">
                  <div className="relative h-64 md:h-80 lg:h-full overflow-hidden" style={{ minHeight: '300px' }}>
                    <div
                      className="absolute top-4 left-4 z-10 bg-secondary text-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
                      DESTACADO
                    </div>
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${getImageUrl(featured.attributes.images)}')` }}>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">calendar_today</span>
                      <span>{formatDate(featured.attributes.created)}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-primary dark:text-white mb-4 leading-tight">
                      {featured.attributes.title}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed line-clamp-3" 
                        dangerouslySetInnerHTML={{ __html: featured.attributes.text.substring(0, 300) + "..." }} />
                    <div>
                      <Link className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/30"
                        href={`/${lang}/blog/${featured.attributes.alias}`}>
                        Leer Mas
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Main Layout: Sidebar & Content */}
          <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Column: Article Grid */}
                <div className="flexflex-1 w-full">
                  
                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {gridArticles.map((article: any) => (
                      <article
                        key={article.id}
                        className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800" style={{ height: '300px' }}>
                          <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url('${getImageUrl(article.attributes.images)}')` }}>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="mb-3 text-xs font-medium text-secondary uppercase tracking-wide">
                            {formatDate(article.attributes.created)}
                          </div>
                          <h3
                            className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                            {article.attributes.title}
                          </h3>
                          <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow"
                              dangerouslySetInnerHTML={{ __html: article.attributes.text }} />
                          <Link className="inline-flex items-center text-secondary font-semibold text-sm hover:underline" 
                                href={`/${lang}/blog/${article.attributes.alias}`}>
                            Leer Mas <span className="material-symbols-outlined text-base ml-1">arrow_right_alt</span>
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                  
                  {/* Pagination (Simplified for now) */}
                  <div className="mt-12 flex justify-center items-center gap-4">
                    <button
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-500 hover:bg-white hover:text-primary transition-colors disabled:opacity-50"
                      disabled>
                      <span className="material-symbols-outlined text-lg">arrow_back</span>
                      Anterior
                    </button>
                    <div className="flex gap-2">
                      <button
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">1</button>
                    </div>
                    <button
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-500 hover:bg-white hover:text-primary transition-colors disabled:opacity-50"
                      disabled>
                      Siguiente
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
                  {/* Search Widget */}
                  <div
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-4">Buscar</h3>
                    <div
                      className="flex items-center w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 overflow-hidden focus-within:ring-2 focus-within:ring-secondary">
                      <input
                        className="w-full border-none bg-transparent px-4 py-2 text-sm focus:ring-0 dark:text-white placeholder:text-gray-500"
                        placeholder="Buscar" type="text" />
                      <button className="p-2 text-primary dark:text-secondary hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span className="material-symbols-outlined">search</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Newsletter Widget */}
                  <div className="bg-primary p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
                    <h3 className="text-xl font-bold mb-2 relative z-10">Newsletter</h3>
                    <p className="text-sm text-gray-300 mb-4 relative z-10">Suscríbete a nuestro newsletter para recibir las últimas noticias.</p>
                    <form className="flex flex-col gap-3 relative z-10">
                      <input
                        className="rounded-lg border-none bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:ring-2 focus:ring-secondary"
                        placeholder="Suscríbete a nuestro newsletter para recibir las últimas noticias." type="email" />
                      <button
                        className="rounded-lg bg-secondary py-2.5 text-sm font-bold text-primary hover:bg-white transition-colors shadow-md"
                        type="submit">
                        Suscríbete
                      </button>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
