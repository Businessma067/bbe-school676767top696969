#!/usr/bin/env node
/**
 * Translate one BBE math chapter into a WiSo German overlay JSON.
 * Protects KaTeX $...$ / $$...$$. Uses MyMemory (rate-limited).
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
    return `⟦K${i}⟧`;
  });
  return { masked, tokens };
}

function restore(text: string, tokens: string[]) {
  return String(text ?? "").replace(/⟦K(\d+)⟧/g, (_, n) => tokens[Number(n)] ?? "");
}

async function translate(text: string): Promise<string> {
  if (!text?.trim()) return text;
  const { masked, tokens } = protect(text);
  const parts = masked.split(/(?<=\.)\s+/);
  const chunks: string[] = [];
  let buf = "";
  for (const part of parts) {
    if ((buf + " " + part).trim().length > 420) {
      if (buf) chunks.push(buf);
      buf = part;
    } else {
      buf = buf ? `${buf} ${part}` : part;
    }
  }
  if (buf) chunks.push(buf);

  const out: string[] = [];
  for (const chunk of chunks) {
    const url = new URL("https://api.mymemory.translated.net/get");
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
    out.push(t && data.responseStatus === 200 ? t : chunk);
    await sleep(300);
  }
  return restore(out.join(" "), tokens);
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
  const existing: Record<string, Overlay> = fs.existsSync(outPath)
    ? JSON.parse(fs.readFileSync(outPath, "utf8"))
    : {};
  const tasks = await loadMathChapterTasks(chapter);
  console.log(`Chapter ${chapter}: ${tasks.length} tasks`);

  let i = 0;
  for (const task of tasks) {
    i += 1;
    const id = task.case_id || task.id;
    if (existing[id]?.statements?.length) {
      console.log(`skip ${id}`);
      continue;
    }
    console.log(`[${i}/${tasks.length}] ${id}`);
    try {
      existing[id] = await translateTask(task);
      fs.writeFileSync(outPath, `${JSON.stringify(existing, null, 2)}\n`);
    } catch (err) {
      console.error("stopped:", err instanceof Error ? err.message : err);
      fs.writeFileSync(outPath, `${JSON.stringify(existing, null, 2)}\n`);
      process.exit(2);
    }
  }
  console.log("wrote", outPath, Object.keys(existing).length);
}

main();
