#!/usr/bin/env node
/**
 * Title-only German overlays for WiSo math (keeps stems/explanations identical to BBE).
 *   npx tsx scripts/translate-wiso-math-titles.mts
 */
import fs from "node:fs";
import { loadMathChapterTasks } from "../src/data/math-chapters.ts";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function translateTitle(text: string): Promise<string> {
  if (!text?.trim()) return text;
  if ((text.match(/\$/g) || []).length >= 2) return text;
  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", text.slice(0, 450));
  url.searchParams.set("langpair", "en|de");
  const res = await fetch(url);
  const data = (await res.json()) as {
    quotaFinished?: boolean;
    responseStatus?: number;
    responseData?: { translatedText?: string };
  };
  if (data.quotaFinished) throw new Error("MyMemory quota finished");
  const t = data.responseData?.translatedText;
  await sleep(180);
  return t && data.responseStatus === 200 ? t : text;
}

async function main() {
  const start = Number(process.argv[2] || "1");
  const end = Number(process.argv[3] || "13");
  for (let ch = start; ch <= end; ch++) {
    const tasks = await loadMathChapterTasks(ch);
    const out: Record<string, { title: string }> = {};
    console.log("ch", ch, tasks.length);
    let i = 0;
    for (const task of tasks) {
      i += 1;
      const id = task.case_id || task.id;
      process.stdout.write(`  [${i}/${tasks.length}] ${id}\r`);
      out[id] = { title: await translateTitle(task.title) };
    }
    console.log("");
    fs.writeFileSync(`src/data/wiso/math-de-ch${ch}.json`, `${JSON.stringify(out, null, 2)}\n`);
    console.log("wrote ch", ch, Object.keys(out).length);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
