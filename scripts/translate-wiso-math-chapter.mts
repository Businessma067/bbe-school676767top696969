#!/usr/bin/env node
/**
 * Translate one BBE math chapter into a WiSo German overlay JSON.
 * Protects KaTeX; skips strings that are almost entirely math.
 *
 *   npx tsx scripts/translate-wiso-math-chapter.mts <1-13>
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadMathChapterTasks, type MathTask } from "../src/data/math-chapters.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "src/data/wiso");

const chapter = Number(process.argv[2] || "1");
if (!Number.isFinite(chapter) || chapter < 1 || chapter > 13) {
  console.error("Usage: npx tsx scripts/translate-wiso-math-chapter.mts <1-13>");
  process.exit(1);
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const TOKEN_RE = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;

function protect(text: string) {
  const tokens: string[] = [];
  const masked = String(text ?? "").replace(TOKEN_RE, (m) => {
    const i = tokens.length;
    tokens.push(m);
    return ` XXLAT${i}XX `;
  });
  return { masked, tokens };
}

function restore(text: string, tokens: string[]) {
  return String(text ?? "")
    .replace(/\s*XXLAT(\d+)XX\s*/gi, (_, n) => tokens[Number(n)] ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function proseRatio(text: string): number {
  const { masked } = protect(text);
  const prose = masked.replace(/XXLAT\d+XX/gi, "").replace(/\s+/g, "");
  const raw = String(text ?? "").replace(/\s+/g, "");
  if (!raw.length) return 0;
  return prose.length / raw.length;
}

async function translate(text: string): Promise<string> {
  if (!text?.trim()) return text;
  // Keep formula-heavy stems exactly as BBE — MT destroys KaTeX.
  if (proseRatio(text) < 0.35) return text;

  const { masked, tokens } = protect(text);
  const url = new URL("https://api.mymemory.translated.net/get");
  // Keep chunks short; do not split mid-placeholder.
  const chunk = masked.slice(0, 450);
  url.searchParams.set("q", chunk);
  url.searchParams.set("langpair", "en|de");
  const res = await fetch(url);
  const data = (await res.json()) as {
    quotaFinished?: boolean;
    responseStatus?: number;
    responseData?: { translatedText?: string };
  };
  if (data.quotaFinished) throw new Error("MyMemory quota finished");
  const t = data.responseData?.translatedText;
  await sleep(250);
  if (!t || data.responseStatus !== 200) return text;
  // If translator ate placeholders, keep original.
  const expected = (masked.match(/XXLAT\d+XX/gi) || []).length;
  const got = (t.match(/XXLAT\d+XX/gi) || []).length;
  if (expected > 0 && got < expected) return text;
  return restore(t, tokens);
}

type Overlay = {
  title?: string;
  context?: string;
  statements?: string[];
  tactical_explanations?: string[];
  solution_overview?: string;
};

async function translateTask(task: MathTask): Promise<Overlay> {
  return {
    title: await translate(task.title),
    context: await translate(task.context),
    statements: await Promise.all((task.statements || []).map((s) => translate(s))),
    tactical_explanations: await Promise.all(
      (task.tactical_explanations || []).map((s) => translate(s)),
    ),
    solution_overview: task.solution_overview
      ? await translate(task.solution_overview)
      : undefined,
  };
}

async function main() {
  const outPath = path.join(outDir, `math-de-ch${chapter}.json`);
  // Always rebuild this chapter cleanly.
  const existing: Record<string, Overlay> = {};
  const tasks = await loadMathChapterTasks(chapter);
  console.log(`Chapter ${chapter}: ${tasks.length} tasks`);

  let i = 0;
  for (const task of tasks) {
    i += 1;
    const id = task.case_id || task.id;
    console.log(`[${i}/${tasks.length}] ${id}`);
    try {
      existing[id] = await translateTask(task);
      if (i % 5 === 0) fs.writeFileSync(outPath, `${JSON.stringify(existing, null, 2)}\n`);
    } catch (err) {
      console.error("stopped:", err instanceof Error ? err.message : err);
      fs.writeFileSync(outPath, `${JSON.stringify(existing, null, 2)}\n`);
      process.exit(2);
    }
  }
  fs.writeFileSync(outPath, `${JSON.stringify(existing, null, 2)}\n`);
  console.log("wrote", outPath, Object.keys(existing).length);
}

main();
