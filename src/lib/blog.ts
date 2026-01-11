const SITE_URL = "https://beta.circuitodelaexcelencia.com/";

/**
 * Parses Joomla image data and returns a full URL.
 */
export const getImageUrl = (images: any) => {
  if (!images) return '/img/placeholder.jpg';
  
  let imagesObj = images;
  if (typeof images === 'string') {
    try {
      imagesObj = JSON.parse(images);
    } catch (e) {
      return '/img/placeholder.jpg';
    }
  }

  const intro = imagesObj.image_intro;
  if (!intro) return '/img/placeholder.jpg';
  
  const cleanPath = intro.split('#')[0];
  return cleanPath.startsWith('http') ? cleanPath : `${SITE_URL}${cleanPath}`;
};

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
