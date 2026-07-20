// Auto-generated map: chapter -> ordered list of scanned page images (asset URLs)
// Each page is the full PDF page rendered as-is so every diagram, table and figure
// is preserved 1:1 from the source textbook.

type PageAsset = { url: string };

const modules = import.meta.glob<PageAsset>(
  "../assets/textbook-pages/p*.png.asset.json",
  { eager: true, import: "default" },
);

const byPage: Record<number, string> = {};
for (const [path, asset] of Object.entries(modules)) {
  const m = /p(\d+)\.png\.asset\.json$/.exec(path);
  if (m) byPage[Number(m[1])] = asset.url;
}

function range(from: number, to: number): string[] {
  const out: string[] = [];
  for (let i = from; i <= to; i++) if (byPage[i]) out.push(byPage[i]);
  return out;
}

export const CHAPTER_TITLES: Record<number, string> = {
  1: "Introduction to business matters",
  2: "Basic economic concepts",
  3: "Focus on different types of businesses",
  4: "Forms of business ownership and sources of finance",
  5: "Marketing",
  6: "Accounting — keeping record of business transactions",
};

export const CHAPTER_PAGES: Record<number, string[]> = {
  1: range(4, 6),
  2: range(7, 14),
  3: range(15, 20),
  4: range(21, 29),
  5: range(30, 49),
  6: range(50, 62),
};
