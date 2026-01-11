import { getBlogArticles } from "@/lib/joomla";
import FeaturedArticle from "@/app/components/blog/featured-article";
import Articles from "@/app/components/blog/articles";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const articles = await getBlogArticles(); // Fetch always Spanish articles
  
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 flex justify-center min-h-screen">
			<div className="max-w-360 w-full px-4 md:px-6 flex flex-col gap-10">
        <FeaturedArticle />
        <Articles />
      </div>
    </div>
  );
}
