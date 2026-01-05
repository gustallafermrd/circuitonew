
const BASE_API_URL = "https://beta.circuitodelaexcelencia.com/api/index.php/v1";
const fs = require('fs');
const path = require('path');
const envPath = path.resolve(process.cwd(), '.env.local');
let token = process.env.JOOMLA_API_TOKEN;
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/JOOMLA_API_TOKEN=(.+)/);
  if (match) token = match[1].trim();
}

const HEADERS = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.api+json",
};

async function testApi() {
  if (!token) return;
  try {
     console.log(`\n--- Fetching Detail for Article 3 (Finca La Huérfana) ---`);
     const detailRes = await fetch(`${BASE_API_URL}/content/articles/3`, { headers: HEADERS });
     const detailData = await detailRes.json();
     console.log(JSON.stringify(detailData.data.attributes, null, 2));
  } catch (e) {
      console.error(e);
  }
}

testApi();

export {};
