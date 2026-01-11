import { getBlogArticles } from "@/lib/joomla";
import { getImageUrl, formatDate, stripHtml } from "@/lib/blog";
import Link from "next/link";

export default async function FeaturedArticle() {
  const articles = await getBlogArticles();
  const featured = articles[0];

  return (
    <div className="w-full max-w-[1440px] px-4 md:px-6 mb-12">
      <div className="bg-white dark:bg-[#181834] rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-800">
        {/* Left Section: Image (50%) */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[450px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url('${getImageUrl(featured.attributes.images)}')` }}
          />
        </div>

        {/* Right Section: Content (50%) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>{formatDate(featured.attributes.created)}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[#181834] dark:text-[#181834] text-3xl md:text-4xl font-black leading-tight mb-6">
            {featured.attributes.title}
          </h1>

          {/* Intro Text */}
          <p className="text-gray-600 dark:text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3 pb-2">
            {stripHtml(featured.attributes.text).substring(0, 250)}...
          </p>

          {/* Button */}
          <div>
            <Link 
              href={`/blog/${featured.attributes.alias}`}
              className="inline-flex items-center gap-2 bg-primary dark:bg-secondary text-white dark:text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg group"
            >
              Leer Mas
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

    