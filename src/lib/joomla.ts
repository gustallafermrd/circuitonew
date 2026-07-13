const BASE_API_URL = "https://beta.circuitodelaexcelencia.com/api/index.php/v1";
const JOOMLA_API_URL = `${BASE_API_URL}/content/articles`;

async function joomlaFetch(url: string) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.JOOMLA_API_TOKEN}`,
      Accept: "application/vnd.api+json",
    },
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

export async function getArticles() {
  try {
    return await joomlaFetch(JOOMLA_API_URL);
  } catch {
    return { data: [] };
  }
}

export async function getFoundingPosadas(lang: string = "es") {
  try {
    const catId = CATEGORY_MAP[lang] || CATEGORY_MAP.es;
    const data = await joomlaFetch(`${JOOMLA_API_URL}?page[limit]=100`);

    if (!data.data) return [];

    return data.data.filter((item: any) => {
      const categoryId = item.relationships?.category?.data?.id;
      if (categoryId !== catId) return false;
      if (item.attributes.state !== 1) return false;

      const fundadores = item.attributes.fundadores || item.attributes.fundador;

      if (typeof fundadores === "string" && fundadores.toLowerCase() === "si") return true;

      if (typeof fundadores === "object" && fundadores !== null) {
        const values = Object.values(fundadores);
        return values.some((v: any) => typeof v === "string" && v.toLowerCase() === "si");
      }

      return false;
    });
  } catch {
    return [];
  }
}

export async function getAllPosadas(lang: string = "es") {
  try {
    const catId = CATEGORY_MAP[lang] || CATEGORY_MAP.es;
    const data = await joomlaFetch(`${JOOMLA_API_URL}?page[limit]=100`);
    if (!data.data) return [];
    return data.data.filter(
      (item: any) =>
        item.relationships?.category?.data?.id === catId && item.attributes.state === 1
    );
  } catch {
    return [];
  }
}

export async function getPosadaByAlias(alias: string, lang: string = "es") {
  try {
    const catId = CATEGORY_MAP[lang] || CATEGORY_MAP.es;
    const data = await joomlaFetch(`${JOOMLA_API_URL}?page[limit]=100`);
    if (!data.data) return null;
    return (
      data.data.find((item: any) => {
        const isMatchingAlias = item.attributes.alias === alias;
        const isMatchingCategory = item.relationships?.category?.data?.id === catId;
        const isPublished = item.attributes.state === 1;
        return isMatchingAlias && isMatchingCategory && isPublished;
      }) || null
    );
  } catch {
    return null;
  }
}

export async function getBlogArticles() {
  try {
    const data = await joomlaFetch(`${JOOMLA_API_URL}?page[limit]=100&sort=-created`);
    if (!data.data) return [];
    return data.data.filter(
      (item: any) => item.relationships?.category?.data?.id === BLOG_CATEGORY_ID
    );
  } catch {
    return [];
  }
}

export async function getBlogArticleByAlias(alias: string) {
  try {
    const data = await joomlaFetch(`${JOOMLA_API_URL}?page[limit]=100`);
    if (!data.data) return null;
    return (
      data.data.find((item: any) => {
        const isMatchingAlias = item.attributes.alias === alias;
        const isMatchingCategory = item.relationships?.category?.data?.id === BLOG_CATEGORY_ID;
        return isMatchingAlias && isMatchingCategory;
      }) || null
    );
  } catch {
    return null;
  }
}

export interface MenuItem {
  id: number;
  title: string;
  link: string;
  children?: MenuItem[];
  level: number;
}

export async function getMenuItems(menuId: number = 1): Promise<MenuItem[]> {
  try {
    const response = await fetch(`${BASE_API_URL}/menus/site/items`, {
      headers: {
        Authorization: `Bearer ${process.env.JOOMLA_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: {
        tags: ["menu"],
      },
    });

    if (!response.ok) {
      console.error("Error fetching menu:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data.data.map((item: any) => item.attributes) || [];
  } catch (error) {
    console.error("Failed to fetch menu:", error);
    return [];
  }
}
