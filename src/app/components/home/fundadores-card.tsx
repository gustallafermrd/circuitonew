import Link from "next/link";

interface PosadaCardProps {
  posada: any;
  lang: string;
  dictionary: {
    from: string;
    perNight: string;
  };
}

export default function PosadaCard({ posada, lang, dictionary }: PosadaCardProps) {
  const attr = posada.attributes;
  const SITE_URL = "https://beta.circuitodelaexcelencia.com";
  
  // Handle image parsing safely — strip leading slashes to prevent double-slash URLs
  const buildImageUrl = (path: string) => {
    const cleanPath = path.split('#')[0].replace(/^\/+/, '');
    return cleanPath.startsWith('http') ? cleanPath : `${SITE_URL}/${cleanPath}`;
  };

  let image = '/img/placeholder.jpg';
  
  if (attr.portada) {
    try {
      const portadaObj = typeof attr.portada === 'string' ? JSON.parse(attr.portada) : attr.portada;
      if (portadaObj.imagefile) {
        image = buildImageUrl(portadaObj.imagefile);
      }
    } catch (e) {
      if (typeof attr.portada === 'string' && attr.portada.length > 0) {
        image = buildImageUrl(attr.portada);
      }
    }
  }

  const description = (attr.text || attr.introtext || "").replace(/<[^>]+>/g, '').trim().slice(0, 150) + "...";

  return (
    <Link href={`/${lang}/posadas/${attr.alias}`} className="group flex flex-col gap-4 cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          data-alt={attr.title}
          style={{ backgroundImage: `url("${image}")` }}>
        </div>
          <div
          className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide text-text-main dark:text-white">
          {attr.estado}
          </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3
            className="text-text-main dark:text-white text-xl font-bold group-hover:text-secondary transition-colors">
            {attr.title}</h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{description}</p>
        <div className="mt-4">
          <span className="inline-flex items-center justify-center px-6 py-2 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-lg transition-all duration-300 transform group-hover:translate-x-1">
            {(dictionary as any).seeMore || "Ver más"}
            <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
