
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

async function debugPosadas() {
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

  console.log(`Found ${data.data.length} articles in Posadas category.`);
  
  data.data.forEach((item: any) => {
      console.log(`\n--- Article: ${item.attributes.title} (ID: ${item.id}) ---`);
      
      // Log potential Founder fields
      const attr = item.attributes;
      console.log("fundador:", attr.fundador);
      console.log("fundadores:", attr.fundadores);
      console.log("Fundador:", attr.Fundador);
      console.log("Fundadores:", attr.Fundadores);
      
      // Log all keys to see if we missed the name
      console.log("Keys in attributes:", Object.keys(attr).join(', '));

      // Log custom_fields if they exist
      if (attr.custom_fields) {
          console.log("Custom Fields:", JSON.stringify(attr.custom_fields, null, 2));
      }
  });
}

debugPosadas();

export {};
