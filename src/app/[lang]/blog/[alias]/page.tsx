import { getBlogArticleByAlias } from "@/lib/joomla";
import { getImageUrl, formatDate, stripHtml, truncateWords } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ lang: string; alias: string }>;
}) {
  const { alias } = await params;
  const article = await getBlogArticleByAlias(alias);

  if (!article) {
    notFound();
  }

  return (
    <main className="layout-container flex h-full grow flex-col pb-20 bg-white dark:bg-gray-900">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="flex flex-wrap justify-between items-end gap-4 py-4">
            <div className="flex flex-1 justify-between items-end gap-4">
              <div className="flex flex-col gap-2">
                <Link 
                  href={`/es/blog`}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-secondary transition-colors mb-2"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Volver al Blog
                </Link>
                <h2 className="text-2xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-text-main dark:text-white">
                  {article.attributes.title}
                </h2>
              </div>

            </div>
          </div>
          <div className="flex justify-center h-[300px] md:h-[500px] pb-4">
            <img className="w-full h-full object-cover rounded-xl" src={getImageUrl(article.attributes.images)} alt={article.attributes.title} />
          </div> 

          <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 relative">
            <div className="flex flex-col gap-10">
            
            <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-md">
              
              <span className="material-symbols-outlined">calendar_today</span>
              <span>{formatDate(article.attributes.created)}</span> |
              <span className="material-symbols-outlined">note</span>
              <span>{article.attributes.note}</span>
            </div>
              {/* Description */}
              <div className="ßdark:border-white/10 pb-8">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none text-text-main dark:text-gray-200 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: article.attributes.text || article.attributes.introtext || "" }}
                />
              </div>
            </div>

            {/* Sidebar Sticky */}
            <div className="relative">
              <div className="sticky top-28 w-full">
                <div className="rounded-xl border border-primary/10 dark:border-white/10 shadow-xl p-6 bg-white dark:bg-[#1e2a22]">
                  <div className="mb-6 border-b border-primary/10 pb-4">
                    <h3 className="text-2xl font-bold text-primary dark:text-white">Contáctanos</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Reserva directamente con la posada para obtener la mejor atención.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
