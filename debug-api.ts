import { getPosadaByAlias } from "./src/lib/joomla";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function debug() {
  const alias = "alto-viento";
  const posada = await getPosadaByAlias(alias, "es");
  if (posada) {
    console.log("Attributes Keys:", Object.keys(posada.attributes));
    console.log("Full Attributes:", JSON.stringify(posada.attributes, null, 2));
  } else {
    console.log("Posada not found");
  }
}

debug();
