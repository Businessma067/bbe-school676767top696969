/** Export economics-book chapters → textbook/output/book-content.json */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ch2 from "../economics-book/chapters/ch02.mjs";
import ch3 from "../economics-book/chapters/ch03.mjs";
import ch4 from "../economics-book/chapters/ch04.mjs";
import ch5 from "../economics-book/chapters/ch05.mjs";
import ch6 from "../economics-book/chapters/ch06.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "output");
fs.mkdirSync(outDir, { recursive: true });

const configPath = path.join(__dirname, "..", "economics-book", "book-config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const chapters = [ch2, ch3, ch4, ch5, ch6];

fs.writeFileSync(
  path.join(outDir, "book-content.json"),
  JSON.stringify({ config, chapters }, null, 2),
);
console.log(
  "exported",
  chapters.map((c) => `${c.num}:${c.sections.length}`).join(", "),
);
