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

  // Robust check for "Si" in custom fields
  const isSi = (field: any) => {
    if (typeof field === 'string') return field.toLowerCase() === 'si';
    if (typeof field === 'object' && field !== null) {
      return Object.values(field).some((v: any) => typeof v === 'string' && v.toLowerCase() === 'si');
    }
    return false;
  };

  const showJuniorBadge = isSi(attr.asociado_junior) || isSi(attr['asociado-junior']);
  const showFounderBadge = isSi(attr.fundadores) || isSi(attr.fundador);

  return (
    <Link href={`/${lang}/posadas/${attr.alias}`} className="group flex flex-col gap-4 cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          data-alt={attr.title}
          style={{ backgroundImage: `url("${image}")` }}>
        </div>
        <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
          {showFounderBadge && (
            <div
              className="bg-white/90 backdrop-blur text-[10px] md:text-xs font-bold px-3 py-1 rounded-full tracking-wide text-text-main shadow-sm">
              Fundador
            </div>
          )}
          {showJuniorBadge && (
            <div
              className="bg-green-600/90 backdrop-blur text-[10px] md:text-xs font-bold px-3 py-1 rounded-full tracking-wide text-white shadow-sm">
              Asociado Junior
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <h3
            className="text-text-main dark:text-white text-xl font-bold group-hover:text-secondary transition-colors leading-tight">
            {attr.title}</h3>
          <div className="flex items-center mb-1">
            <span className="material-symbols-outlined text-secondary text-lg [font-variation-settings:'FILL'_1] -ml-0.5">location_on</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{attr.estado}</span>
          </div>
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
