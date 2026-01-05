
const BASE_API_URL = "https://beta.circuitodelaexcelencia.com/api/index.php/v1";
const JOOMLA_API_URL = `${BASE_API_URL}/content/articles`;
const fs = require('fs');
const path = require('path');
const envPath = path.resolve(process.cwd(), '.env.local');
let token = process.env.JOOMLA_API_TOKEN;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/JOOMLA_API_TOKEN=(.+)/);
  if (match) token = match[1].trim();
}

async function debugPortada() {
  const res = await fetch(`${JOOMLA_API_URL}?filter[category.id]=8&page[limit]=20`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.api+json",
    },
  });

  const data = await res.json();
  
  if (!data.data) {
      console.log("No data found");
      return;
  }

  data.data.forEach((item: any) => {
      const fundadores = item.attributes.fundadores || item.attributes.fundador;
      let isFounder = false;
      if (typeof fundadores === 'string' && fundadores.toLowerCase() === 'si') isFounder = true;
      if (typeof fundadores === 'object' && fundadores !== null) {
           const values = Object.values(fundadores);
           isFounder = values.some((v: any) => typeof v === 'string' && v.toLowerCase() === 'si');
      }

      if (isFounder) {
          console.log(`\n--- Article: ${item.attributes.title} (ID: ${item.id}) ---`);
          console.log("portada:", item.attributes.portada);
      }
  });
}

debugPortada();

export {};
