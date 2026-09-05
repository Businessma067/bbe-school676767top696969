import { writeFileSync, mkdirSync } from "node:fs";
import { renderSitemapXml } from "../src/lib/sitemap";

mkdirSync("public", { recursive: true });
const xml = renderSitemapXml();
writeFileSync("public/sitemap.xml", xml);
writeFileSync("public/pages-sitemap.xml", xml);
console.log(`wrote public/sitemap.xml and public/pages-sitemap.xml (${Buffer.byteLength(xml)} bytes, ${(xml.match(/<loc>/g) ?? []).length} urls)`);
