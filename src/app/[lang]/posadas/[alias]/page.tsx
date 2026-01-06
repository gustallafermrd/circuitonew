import { getPosadaByAlias } from "@/lib/joomla";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageGallery from "@/app/components/image-gallery";
import GoogleMap from "@/app/components/google-map";

export default async function PosadaDetailPage({
  params,
}: {
  params: Promise<{ lang: string; alias: string }>;
}) {
  const { lang, alias } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'es');
  const posada = await getPosadaByAlias(alias, lang);

  if (!posada) {
    notFound();
  }

  const attr = posada.attributes;
  const SITE_URL = "https://beta.circuitodelaexcelencia.com/";
  
  // Handle image parsing safely
  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return '/img/placeholder.jpg';
    const cleanPath = imagePath.split('#')[0];
    return cleanPath.startsWith('http') ? cleanPath : `${SITE_URL}${cleanPath}`;
  };

  let mainImage = '/img/placeholder.jpg';
  const galleryImages: string[] = [];

  if (attr.portada) {
    try {
      const portadaObj = typeof attr.portada === 'string' ? JSON.parse(attr.portada) : attr.portada;
      if (portadaObj.imagefile) {
        mainImage = getImageUrl(portadaObj.imagefile);
      }
    } catch {
      mainImage = getImageUrl(attr.portada);
    }
  }

  // Gallery
  const rawGallery = attr['galeria-de-imagenes'] || attr.galeria_de_imagenes || [];
  if (Array.isArray(rawGallery)) {
    rawGallery.forEach((img: string) => {
      galleryImages.push(getImageUrl(`images/posadas/${img}`));
    });
  }

  // Fallback images to fill the grid (needs 5 total)
  const displayImages = [mainImage, ...galleryImages];
  while (displayImages.length < 5) {
    displayImages.push(mainImage);
  }

  const hasWhatsApp = !!attr.telefono;
  const whatsappNumber = attr.telefono?.replace(/\D/g, '');

  let logoImage = '';
  if (attr.logo) {
    try {
      const logoObj = typeof attr.logo === 'string' ? JSON.parse(attr.logo) : attr.logo;
      if (logoObj.imagefile) {
        logoImage = getImageUrl(logoObj.imagefile);
      }
    } catch {
      if (typeof attr.logo === 'string' && attr.logo.length > 0) {
        logoImage = getImageUrl(attr.logo);
    }
  }

  const googleMapUrl = attr['google-map'];

  return (
    <main className="layout-container flex h-full grow flex-col pb-20 bg-white dark:bg-gray-900">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="flex flex-wrap justify-between items-end gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Link 
                href={`/${lang}/posadas`}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-secondary transition-colors mb-2"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                {dictionary.posadas.backToList}
              </Link>
              <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-text-main dark:text-white">
                {attr.title}
              </h1>
              <h2 className="text-lg md:text-2xl font-semibold italic text-secondary dark:text-secondary">"{attr.slogan}"</h2>
            </div>
          </div>

          {/* Image Gallery Component */}
          <ImageGallery images={displayImages} title={attr.title} />

          <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 relative">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between items-center border-b border-[#f0f4f2] dark:border-white/10 pb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 dark:text-white">Ubicación</h3>
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined [font-variation-settings:'FILL'_1]">location_on</span>
                    <p className="font-semibold">{attr.estado}, Venezuela</p>
                  </div>
                </div>
                {/* Logo or placeholder */}
                <div className="size-20 rounded-full bg-white dark:bg-white overflow-hidden border border-gray-100 p-1 hidden sm:block shadow-sm">
                   <div className="w-full h-full rounded-full bg-contain bg-center bg-no-repeat flex items-center justify-center"
                        style={logoImage ? { backgroundImage: `url('${logoImage}')` } : {}}>
                      {!logoImage && <span className="text-primary font-bold text-xl">{attr.title.charAt(0)}</span>}
                   </div>
                </div>
              </div>

              {/* Special features */}
              <div className="flex flex-col gap-6 border-b border-[#f0f4f2] dark:border-white/10 pb-8">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-2xl mt-1 text-secondary">verified_user</span>
                  <div>
                    <h4 className="font-bold text-base md:text-lg dark:text-white">Calidad Certificada</h4>
                    <p className="text-gray-500 dark:text-gray-400">Esta posada cumple con los estándares del Circuito de la Excelencia.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-2xl mt-1 text-secondary">location_on</span>
                  <div>
                    <h4 className="font-bold text-base md:text-lg dark:text-white">Excelente ubicación</h4>
                    <p className="text-gray-500 dark:text-gray-400">Ubicada en {attr.estado}, una de las zonas más privilegiadas del país.</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-b border-[#f0f4f2] dark:border-white/10 pb-8">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none text-text-main dark:text-gray-200 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: attr.text || attr.introtext || "" }}
                />
              </div>

              {/* Offerings */}
              <div className="border-b border-[#f0f4f2] dark:border-white/10 pb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 dark:text-white">Lo que ofrece este lugar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 text-text-main dark:text-gray-200">
                    <span className="material-symbols-outlined">wifi</span>
                    <span>Wifi</span>
                  </div>
                  <div className="flex items-center gap-4 text-text-main dark:text-gray-200">
                    <span className="material-symbols-outlined">restaurant</span>
                    <span>Gastronomía local</span>
                  </div>
                  <div className="flex items-center gap-4 text-text-main dark:text-gray-200">
                    <span className="material-symbols-outlined">ac_unit</span>
                    <span>Ambiente confortable</span>
                  </div>
                  <div className="flex items-center gap-4 text-text-main dark:text-gray-200">
                    <span className="material-symbols-outlined">nature_people</span>
                    <span>Entorno natural</span>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              {googleMapUrl && (
                <div className="pb-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white">{dictionary.posadas?.whereWillYouBe || "Ubicación"}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">{attr.estado}, Venezuela</p>
                  <GoogleMap src={googleMapUrl} />
                </div>
              )}
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
                  <div className="space-y-6">
                    {attr.direccion && (
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/5 p-2 rounded-lg text-primary dark:text-secondary">
                          <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">Dirección</p>
                          <p className="text-sm font-medium text-text-main dark:text-white whitespace-pre-wrap">
                            {attr.direccion}
                          </p>
                        </div>
                      </div>
                    )}
                    {attr.telefono && (
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/5 p-2 rounded-lg text-primary dark:text-secondary">
                          <span className="material-symbols-outlined">call</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">Teléfonos</p>
                          <p className="text-sm font-medium text-text-main dark:text-white">
                            {attr.telefono}
                          </p>
                        </div>
                      </div>
                    )}
                    {attr['e-mail'] && (
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/5 p-2 rounded-lg text-primary dark:text-secondary">
                          <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">Correo Electrónico</p>
                          <p className="text-sm font-medium text-text-main dark:text-white break-all">
                            {attr['e-mail']}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-8 space-y-3">
                    {hasWhatsApp && (
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-lg text-base shadow-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        WhatsApp
                      </a>
                    )}
                    {attr.web && (
                      <a
                        href={attr.web.startsWith('http') ? attr.web : `https://${attr.web}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary hover:bg-[#25254d] text-white font-bold py-3.5 rounded-lg text-base shadow-sm transition-all flex items-center justify-center text-center"
                      >
                        Visitar sitio web
                      </a>
                    )}
                  </div>
                  {attr['horario-de-atencion'] && (
                    <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
                      <span className="material-symbols-outlined text-[18px]">info</span>
                      <span className="text-xs text-center">Horario: {attr['horario-de-atencion']}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
}
