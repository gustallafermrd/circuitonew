import { getImageUrl, formatDate, stripHtml, truncateWords } from "@/lib/blog";
import Link from "next/link";

export default async function Articles({ articles }: { articles: any[] }) {

  return (
    <div className="flex lg:flex-row">
      <div className="w-full max-w-[1440px] px-4 md:px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article: any) => (
            <article
              key={article.id}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800 group">
              <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800" style={{ height: '300px' }}>
                <img
                  src={getImageUrl(article.attributes.images)}
                  alt={article.attributes.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  <span>{formatDate(article.attributes.created)}</span>
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {article.attributes.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {truncateWords(stripHtml(article.attributes.text), 40)}
                </div>
                <Link className="inline-flex items-center text-secondary font-semibold text-sm" 
                  href={`/es/blog/${article.attributes.alias}`}>
                  Leer Mas <span className="material-symbols-outlined text-base ml-1">arrow_right_alt</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
