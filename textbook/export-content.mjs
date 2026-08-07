/** Export chapter modules → textbook/output/book-content.json */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ch2 from "./content/ch2.mjs";
import ch3 from "./content/ch3.mjs";
import ch4 from "./content/ch4.mjs";
import ch5 from "./content/ch5.mjs";
import ch6 from "./content/ch6.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "output");
fs.mkdirSync(outDir, { recursive: true });
const chapters = [ch2, ch3, ch4, ch5, ch6];
fs.writeFileSync(path.join(outDir, "book-content.json"), JSON.stringify({ chapters }));
console.log(
  "exported",
  chapters.map((c) => `${c.num}:${c.sections.length}`).join(", "),
);
