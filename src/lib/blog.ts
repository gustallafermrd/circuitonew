const SITE_URL = "https://beta.circuitodelaexcelencia.com";

function resolveImagePath(imagePath: string | undefined): string | null {
  if (!imagePath) return null;
  const cleanPath = imagePath.split('#')[0].replace(/^\/+/, '');
  return cleanPath.startsWith('http') ? cleanPath : `${SITE_URL}/${cleanPath}`;
}

function parseImages(images: any): any | null {
  if (!images) return null;
  if (typeof images === 'string') {
    try {
      return JSON.parse(images);
    } catch {
      return null;
    }
  }
  return images;
}

/**
 * Imagen de Introducción (Joomla: Imágenes y Enlaces > Imagen de Introducción)
 * Usada en listado /es/blog
 */
export const getIntroImageUrl = (images: any) => {
  const obj = parseImages(images);
  if (!obj) return '/img/placeholder.jpg';
  const intro = obj.image_intro;
  return resolveImagePath(intro) || '/img/placeholder.jpg';
};

/**
 * Imagen de Artículo Completo (Joomla: Imágenes y Enlaces > Imagen del Artículo Completo)
 * Usada en detalle /es/blog/[alias]. Fallback a intro si no hay full.
 */
export const getFullImageUrl = (images: any) => {
  const obj = parseImages(images);
  if (!obj) return '/img/placeholder.jpg';
  const full = obj.image_fulltext || obj.image_intro;
  return resolveImagePath(full) || '/img/placeholder.jpg';
};

/**
 * @deprecated Usa getIntroImageUrl o getFullImageUrl
 * Parses Joomla image data and returns a full URL (compat: usa intro).
 */
export const getImageUrl = (images: any) => getIntroImageUrl(images);

/**
 * Formats a date string to Spanish (ES) locale.
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

/**
 * Strips HTML tags from a string.
 */
export const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>?/gm, '');
};

/**
 * Truncates a string to a specific number of words.
 */
export const truncateWords = (text: string, maxWords: number) => {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
};
