import { getBlogArticles } from "@/lib/joomla";
import FeaturedArticle from "@/app/components/blog/featured-article";
import Articles from "@/app/components/blog/articles";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const articles = await getBlogArticles();

  // Find the latest featured article (Joomla API usually returns '1' or 1 for featured)
  const featuredIndex = articles.findIndex((a: any) => 
    a.attributes.featured === 1 || a.attributes.featured === "1" || a.attributes.featured === true
  );

  const featured = featuredIndex !== -1 ? articles[featuredIndex] : articles[0];
  const gridArticles = articles.filter((a: any) => a.id !== featured.id);
  
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 flex justify-center min-h-screen">
      <div className="max-w-360 w-full px-4 md:px-6 flex flex-col gap-10">
        <FeaturedArticle featured={featured} />
        <Articles articles={gridArticles} />
      </div>
    </div>
  );
}
