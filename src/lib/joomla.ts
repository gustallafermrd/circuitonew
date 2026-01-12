const BASE_API_URL = "https://beta.circuitodelaexcelencia.com/api/index.php/v1";
const JOOMLA_API_URL = `${BASE_API_URL}/content/articles`;

export async function getArticles() {
  const res = await fetch(JOOMLA_API_URL, {
    headers: {
      Authorization: `Bearer ${process.env.JOOMLA_API_TOKEN}`,
      Accept: "application/vnd.api+json",
    },
    // Disable caching for dev
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Joomla API error: ${res.status}`);
  }

  return res.json();
}

const CATEGORY_MAP: Record<string, string> = {
  es: "8",
  en: "9",
};

const BLOG_CATEGORY_ID = "10";

export async function getFoundingPosadas(lang: string = "es") {
  const catId = CATEGORY_MAP[lang] || CATEGORY_MAP.es;
  const res = await fetch(`${JOOMLA_API_URL}?page[limit]=100`, {
    headers: {
      Authorization: `Bearer ${process.env.JOOMLA_API_TOKEN}`,
      Accept: "application/vnd.api+json",
    },
    next: { revalidate: 0 } 
  });

  const data = await res.json();
  
  if (!data.data) return [];

  // Filter ONLY articles in the correct Category AND where attributes.fundadores is "si"
  return data.data.filter((item: any) => {
      // 1. Category Filter (Manual because API filter is unreliable)
      const categoryId = item.relationships?.category?.data?.id;
      if (categoryId !== catId) return false;

      // 2. Founders Filter
      const fundadores = item.attributes.fundadores || item.attributes.fundador;
      
      // Case 1: It's a string "si"
      if (typeof fundadores === 'string' && fundadores.toLowerCase() === 'si') return true;
      
      // Case 2: It's an object like { si: 'Si' } (Joomla often returns checkboxes/radios this way)
      if (typeof fundadores === 'object' && fundadores !== null) {
          // Check values in the object
           const values = Object.values(fundadores);
           return values.some((v: any) => typeof v === 'string' && v.toLowerCase() === 'si');
      }
      
      return false;
  });
}

export async function getAllPosadas(lang: string = "es") {
  const catId = CATEGORY_MAP[lang] || CATEGORY_MAP.es;
  const res = await fetch(`${JOOMLA_API_URL}?page[limit]=100`, {
    headers: {
      Authorization: `Bearer ${process.env.JOOMLA_API_TOKEN}`,
      Accept: "application/vnd.api+json",
    },
    next: { revalidate: 0 } 
  });

  const data = await res.json();
  if (!data.data) return [];

  // Manual filter by category ID
  return data.data.filter((item: any) => item.relationships?.category?.data?.id === catId);
}

export async function getPosadaByAlias(alias: string, lang: string = "es") {
  const catId = CATEGORY_MAP[lang] || CATEGORY_MAP.es;
  const res = await fetch(`${JOOMLA_API_URL}?page[limit]=100`, {
    headers: {
      Authorization: `Bearer ${process.env.JOOMLA_API_TOKEN}`,
      Accept: "application/vnd.api+json",
    },
    next: { revalidate: 0 }
  });

  const data = await res.json();
  if (!data.data) return null;

  // Manual find to ensure we get the correct article in the correct language/category
  return data.data.find((item: any) => {
    const isMatchingAlias = item.attributes.alias === alias;
    const isMatchingCategory = item.relationships?.category?.data?.id === catId;
    return isMatchingAlias && isMatchingCategory;
  }) || null;
}
// Blog Articles (ES Only)
export async function getBlogArticles() {
  const res = await fetch(`${JOOMLA_API_URL}?page[limit]=100&sort=-created`, {
    headers: {
      Authorization: `Bearer ${process.env.JOOMLA_API_TOKEN}`,
      Accept: "application/vnd.api+json",
    },
    next: { revalidate: 0 } 
  });

  const data = await res.json();
  if (!data.data) return [];

  return data.data.filter((item: any) => item.relationships?.category?.data?.id === BLOG_CATEGORY_ID);
}

export async function getBlogArticleByAlias(alias: string) {
  const res = await fetch(`${JOOMLA_API_URL}?page[limit]=100`, {
    headers: {
      Authorization: `Bearer ${process.env.JOOMLA_API_TOKEN}`,
      Accept: "application/vnd.api+json",
    },
    next: { revalidate: 0 }
  });

  const data = await res.json();
  if (!data.data) return null;

  return data.data.find((item: any) => {
    const isMatchingAlias = item.attributes.alias === alias;
    const isMatchingCategory = item.relationships?.category?.data?.id === BLOG_CATEGORY_ID;
    return isMatchingAlias && isMatchingCategory;
  }) || null;
}

// Menu items

export interface MenuItem {
  id: number;
  title: string;
  link: string;
  children?: MenuItem[];
  level: number;
}

export async function getMenuItems(menuId: number = 1): Promise<MenuItem[]> {
  try {
    const response = await fetch(
      `${BASE_API_URL}/menus/site/items`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.JOOMLA_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        next: { 
          revalidate: 3600, // Revalida cada hora
          tags: ['menu']
        }
      }
    );

    if (!response.ok) {
      console.error('Error fetching menu:', response.statusText);
      return [];
    }

    const data = await response.json();
    return data.data.map((item: any) => item.attributes) || [];
  } catch (error) {
    console.error('Failed to fetch menu:', error);
    return [];
  }
}