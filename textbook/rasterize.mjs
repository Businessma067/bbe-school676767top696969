/**
 * Rasterize textbook PDF → public/bbe-theory/pNN.png
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PDF = path.join(__dirname, "output", "bbe-economics-textbook.pdf");
const MANIFEST = path.join(__dirname, "output", "chapter-pages.json");
const OUT_IMG = path.join(__dirname, "..", "public", "bbe-theory");
const PUBLIC_PDF = path.join(__dirname, "..", "public", "bbe-economics-textbook.pdf");
const MAP_OUT = path.join(__dirname, "..", "src", "data", "textbook-pages.generated.json");

fs.mkdirSync(OUT_IMG, { recursive: true });
for (const f of fs.readdirSync(OUT_IMG)) {
  if (/^p\d+\.png$/i.test(f)) fs.unlinkSync(path.join(OUT_IMG, f));
}
fs.copyFileSync(PDF, PUBLIC_PDF);

const py = `
from pathlib import Path
import pymupdf
pdf_path = Path(r"${PDF.replace(/\\/g, "/")}")
out_dir = Path(r"${OUT_IMG.replace(/\\/g, "/")}")
doc = pymupdf.open(pdf_path)
mat = pymupdf.Matrix(2.0, 2.0)
for i in range(len(doc)):
    pix = doc[i].get_pixmap(matrix=mat, alpha=False)
    pix.save(out_dir / f"p{i+1:02d}.png")
print("PAGES", len(doc))
`;

const r = spawnSync("py", ["-c", py], { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 });
if (r.status !== 0) {
  console.error(r.stderr || r.stdout);
  process.exit(r.status || 1);
}
console.log(r.stdout.trim());

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const CHAPTER_PAGES = {};
for (const ch of manifest.chapters) {
  CHAPTER_PAGES[ch.chapter] = [];
  for (let p = ch.startPage; p <= ch.endPage; p++) {
    CHAPTER_PAGES[ch.chapter].push(`/bbe-theory/p${String(p).padStart(2, "0")}.png`);
  }
}
const CHAPTER_TITLES = Object.fromEntries(manifest.chapters.map((c) => [c.chapter, c.title]));
fs.writeFileSync(MAP_OUT, JSON.stringify({ CHAPTER_TITLES, CHAPTER_PAGES, pageCount: manifest.pageCount }, null, 2));
console.log("OK", MAP_OUT);
