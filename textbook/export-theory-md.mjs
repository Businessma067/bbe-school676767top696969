/**
 * Export economics-book chapters → src/data/economics-theory/chN.md
 * Plain readable markdown for TheoryReader (no PDF).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ch2 from "../economics-book/chapters/ch02.mjs";
import ch3 from "../economics-book/chapters/ch03.mjs";
import ch4 from "../economics-book/chapters/ch04.mjs";
import ch5 from "../economics-book/chapters/ch05.mjs";
import ch6 from "../economics-book/chapters/ch06.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "data", "economics-theory");
fs.mkdirSync(outDir, { recursive: true });

function escCell(s) {
  return String(s ?? "")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ")
    .replace(/\*\*/g, "");
}

function mdInline(s) {
  return String(s ?? "").trim();
}

function blockToMd(b) {
  const t = b.type;
  if (t === "subhead") {
    const id = mdInline(b.id || "");
    const title = mdInline(b.title || "");
    if (!id && !title) return "";
    return `### ${id ? `${id} ` : ""}${title}\n`;
  }
  if (t === "p" || t === "scene" || t === "mechanism" || t === "connect" || t === "trap" || t === "exam") {
    let text = mdInline(b.text || b.prompt || "");
    if (t === "think" || b.prompt) text = mdInline(b.prompt || b.text || "");
    return text ? `${text}\n` : "";
  }
  if (t === "think") {
    const prompt = mdInline(b.prompt || b.text || "");
    return prompt ? `*${prompt}*\n` : "";
  }
  if (t === "idea") {
    const term = mdInline(b.term || "");
    const text = mdInline(b.text || "");
    if (!term && !text) return "";
    if (text.toLowerCase().startsWith(term.toLowerCase())) {
      return `**${term}**${text.slice(term.length)}\n`;
    }
    return `**${term}** — ${text}\n`;
  }
  if (t === "formula") {
    const label = mdInline(b.label || "");
    const text = mdInline(b.text || "");
    const vars = mdInline(b.vars || "");
    let out = `> **${label || "Formula"}**  \n> ${text}`;
    if (vars) out += `  \n> *${vars}*`;
    return `${out}\n`;
  }
  if (t === "table") {
    const headers = b.headers || [];
    const rows = b.rows || [];
    const caption = mdInline(b.caption || "").replace(/^(Figure|Table)\s*\d*\s*[.:—-]?\s*/i, "");
    if (!headers.length) return "";
    const lines = [];
    if (caption) lines.push(`*${caption}*`);
    lines.push(`| ${headers.map(escCell).join(" | ")} |`);
    lines.push(`| ${headers.map(() => "---").join(" | ")} |`);
    for (const row of rows) {
      const cells = headers.map((_, i) => escCell(row[i] ?? ""));
      lines.push(`| ${cells.join(" | ")} |`);
    }
    return `${lines.join("\n")}\n`;
  }
  if (t === "figure") {
    const id = mdInline(b.id || "");
    const caption = mdInline(b.caption || "").replace(/^(Figure|Table)\s*\d*\s*[.:—-]?\s*/i, "");
    if (!id) return caption ? `*${caption}*\n` : "";
    // Live site figure marker — TheoryReader renders React/SVG (not PNG)
    return `[[FIGURE:${id}|${caption || id}]]\n`;
  }
  if (t === "bullets" || t === "takeaways") {
    return (b.items || []).map((item) => `- ${mdInline(item)}`).join("\n") + "\n";
  }
  if (t === "worked") {
    const title = mdInline(b.title || "Example");
    const steps = (b.steps || []).map((s) => mdInline(s)).join(" ");
    const result = mdInline(b.result || "");
    return `*${title}. ${steps}${result ? ` ${result}` : ""}*\n`;
  }
  if (t === "compare") {
    const title = mdInline(b.title || "");
    const left = b.left || {};
    const right = b.right || {};
    const li = left.items || [];
    const ri = right.items || [];
    const n = Math.max(li.length, ri.length);
    const lines = [];
    if (title) lines.push(`*${title}*`);
    lines.push(`| ${escCell(left.title || "A")} | ${escCell(right.title || "B")} |`);
    lines.push("| --- | --- |");
    for (let i = 0; i < n; i++) {
      lines.push(`| ${escCell(li[i] || "")} | ${escCell(ri[i] || "")} |`);
    }
    return `${lines.join("\n")}\n`;
  }
  if (t === "check") return "";
  return "";
}

function chapterToMd(ch) {
  const parts = [];
  parts.push(`# Chapter ${ch.num} — ${ch.title}\n`);
  if (ch.intro) parts.push(`${mdInline(ch.intro)}\n`);
  if (ch.objectives?.length) {
    parts.push(`## Learning objectives\n`);
    for (const o of ch.objectives) parts.push(`- ${mdInline(o)}`);
    parts.push("");
  }
  for (const sec of ch.sections || []) {
    parts.push(`## ${sec.id} ${sec.title}\n`);
    for (const b of sec.blocks || []) {
      const md = blockToMd(b);
      if (md) parts.push(md);
    }
  }
  if (ch.recap?.length) {
    parts.push(`## Chapter recap\n`);
    for (const item of ch.recap) parts.push(`- ${mdInline(item)}`);
    parts.push("");
  }
  return parts.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

const chapters = [ch2, ch3, ch4, ch5, ch6];
for (const ch of chapters) {
  const file = path.join(outDir, `ch${ch.num}.md`);
  fs.writeFileSync(file, chapterToMd(ch), "utf8");
  console.log("wrote", path.relative(path.join(__dirname, ".."), file));
}
