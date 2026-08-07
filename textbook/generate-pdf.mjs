/**
 * BBE School — Economics Full Course textbook PDF generator
 */
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import ch2 from "./content/ch2.mjs";
import ch3 from "./content/ch3.mjs";
import ch4 from "./content/ch4.mjs";
import ch5 from "./content/ch5.mjs";
import ch6 from "./content/ch6.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "output");
const PDF_PATH = path.join(OUT_DIR, "bbe-economics-textbook.pdf");
const MANIFEST_PATH = path.join(OUT_DIR, "chapter-pages.json");
const TEXT_PATH = path.join(OUT_DIR, "book-plain.txt");
const CHAPTERS = [ch2, ch3, ch4, ch5, ch6];

const C = {
  espresso: "#1A1A1A",
  taupe: "#737373",
  caramel: "#C96A2B",
  caramelSoft: "#F3E4D6",
  amber: "#E0A04A",
  white: "#FFFFFF",
  ivory: "#FBF8F4",
  line: "#E5E0D8",
  trapBg: "#FDF2F0",
  trapBorder: "#C45C3A",
  defBg: "#F7F3EC",
  exBg: "#F4F8F3",
  exBorder: "#5A8F6B",
  stmtBg: "#F3F6FA",
  stmtBorder: "#4A6FA5",
  takeBg: "#FFF8EF",
};

const W = 595.28;
const H = 841.89;
const L = 52;
const R = 52;
const T = 62;
const B = 52;
const CW = W - L - R;
const MAX_Y = H - B;

fs.mkdirSync(OUT_DIR, { recursive: true });

const doc = new PDFDocument({
  size: "A4",
  bufferPages: true,
  autoFirstPage: false,
  margins: { top: T, bottom: B, left: L, right: R },
  info: {
    Title: "BBE School — Introduction to Business & Economics",
    Author: "BBE School",
  },
});

const stream = fs.createWriteStream(PDF_PATH);
doc.pipe(stream);

/** @type {{ chapter: number, title: string, startPage: number, endPage: number }[]} */
const chapterRanges = [];
/** @type {string[]} */
const pageFooters = []; // index 0 = page 1
const plainChunks = [];

function pageIndex() {
  // buffered pages: range starts after first addPage
  const range = doc.bufferedPageRange();
  return range.start + range.count; // 1-based after add
}

function startPage(footer = "BBE School · Economics") {
  doc.addPage();
  pageFooters.push(footer);
  doc.x = L;
  doc.y = T;
}

function spaceLeft() {
  return MAX_Y - doc.y;
}

function need(minH) {
  if (spaceLeft() < minH) {
    startPage(pageFooters[pageFooters.length - 1] || "BBE School · Economics");
  }
}

function setFooter(title) {
  // updates upcoming pages' footer label
  pageFooters._current = title;
}

function para(text) {
  need(28);
  doc.font("Helvetica").fontSize(10.2).fillColor(C.espresso).lineGap(2.2);
  // Write in slices that fit on the current page to avoid pdfkit auto-flow bugs
  const words = text.split(/\s+/);
  let buf = "";
  const flush = (forceNew) => {
    if (!buf) return;
    const h = doc.heightOfString(buf, { width: CW, align: "justify" });
    if (h > spaceLeft() - 2) {
      startPage(pageFooters._current || pageFooters[pageFooters.length - 1]);
    }
    doc.text(buf, L, doc.y, { width: CW, align: "justify", lineBreak: true });
    doc.moveDown(0.45);
    buf = "";
    if (forceNew) startPage(pageFooters._current || pageFooters[pageFooters.length - 1]);
  };
  for (const w of words) {
    const trial = buf ? `${buf} ${w}` : w;
    const h = doc.heightOfString(trial, { width: CW, align: "justify" });
    if (h > spaceLeft() - 4 && buf) {
      flush(false);
      buf = w;
      if (spaceLeft() < 36) startPage(pageFooters._current || pageFooters[pageFooters.length - 1]);
    } else {
      buf = trial;
    }
  }
  flush(false);
  plainChunks.push(text);
}

function callout(title, body, bg, border, icon) {
  doc.font("Helvetica").fontSize(9.2).fillColor(C.espresso).lineGap(1.8);
  const pad = 9;
  const inner = CW - pad * 2 - 5;
  const titleH = 13;

  // Split oversized bodies
  const paint = (tTitle, tBody) => {
    const bodyH = doc.heightOfString(tBody, { width: inner });
    const boxH = pad + titleH + 5 + bodyH + pad;
    need(Math.min(boxH + 4, spaceLeft() > 80 ? boxH + 4 : 80));
    if (boxH > spaceLeft() - 2) startPage(pageFooters._current || pageFooters[pageFooters.length - 1]);
    const top = doc.y;
    doc.save();
    doc.roundedRect(L, top, CW, boxH, 4).fill(bg);
    doc.roundedRect(L, top, CW, boxH, 4).lineWidth(0.8).strokeColor(border).stroke();
    doc.rect(L, top, 3.2, boxH).fill(border);
    doc.restore();
    doc.font("Helvetica-Bold").fontSize(8.2).fillColor(border);
    doc.text(`${icon}  ${tTitle}`, L + pad + 3, top + pad, { width: inner });
    doc.font("Helvetica").fontSize(9.2).fillColor(C.espresso).lineGap(1.8);
    doc.text(tBody, L + pad + 3, top + pad + titleH + 2, { width: inner });
    doc.y = top + boxH + 9;
    plainChunks.push(`${tTitle}: ${tBody}`);
  };

  const maxBodyH = MAX_Y - T - 80;
  if (doc.heightOfString(body, { width: inner }) <= maxBodyH) {
    paint(title, body);
    return;
  }
  const words = body.split(/\s+/);
  let buf = "";
  let part = 0;
  for (const w of words) {
    const trial = buf ? `${buf} ${w}` : w;
    if (doc.heightOfString(trial, { width: inner }) > maxBodyH * 0.7 && buf) {
      paint(part === 0 ? title : `${title} (continued)`, buf);
      part += 1;
      buf = w;
    } else buf = trial;
  }
  if (buf) paint(part === 0 ? title : `${title} (continued)`, buf);
}

function block(b) {
  switch (b.type) {
    case "p":
      para(b.text);
      break;
    case "definition":
      callout(`Definition — ${b.term}`, b.text, C.defBg, C.caramel, "◆");
      break;
    case "bullets":
      for (const item of b.items) {
        need(20);
        doc.font("Helvetica").fontSize(10).fillColor(C.espresso);
        doc.text(`•  ${item}`, L + 4, doc.y, { width: CW - 4 });
        plainChunks.push(item);
      }
      doc.moveDown(0.3);
      break;
    case "example":
      callout(b.title || "Worked example", b.text, C.exBg, C.exBorder, "▶");
      break;
    case "formula":
      callout(b.label || "Formula", b.text, C.ivory, C.amber, "ƒ");
      break;
    case "trap":
      callout(b.title || "Exam trap", b.text, C.trapBg, C.trapBorder, "!");
      break;
    case "statement":
      callout(
        "Sample exam statement",
        `Statement: ${b.claim}\n\nAnswer: ${b.answer ? "TRUE" : "FALSE"}\nWhy: ${b.why}`,
        C.stmtBg,
        C.stmtBorder,
        "?",
      );
      break;
    case "application":
      callout(b.title || "In practice", b.text, C.takeBg, C.caramel, "★");
      break;
    case "takeaways":
      need(30);
      doc.font("Helvetica-Bold").fontSize(10).fillColor(C.caramel);
      doc.text("Key takeaways", L, doc.y);
      doc.moveDown(0.25);
      for (const item of b.items) {
        need(18);
        doc.font("Helvetica").fontSize(9.6).fillColor(C.espresso);
        doc.text(`→  ${item}`, L, doc.y, { width: CW });
        plainChunks.push(item);
      }
      doc.moveDown(0.4);
      break;
    default:
      if (b.text) para(b.text);
  }
}

function cover() {
  startPage("");
  doc.rect(0, 0, W, H).fill(C.white);
  doc.rect(0, 0, 13, H).fill(C.caramel);
  doc.rect(0, H - 118, W, 118).fill(C.espresso);
  doc.font("Helvetica").fontSize(11).fillColor(C.caramel);
  doc.text("BBE SCHOOL", L + 18, 88, { characterSpacing: 2.4 });
  doc.font("Helvetica-Bold").fontSize(30).fillColor(C.espresso);
  doc.text("Introduction to\nBusiness &\nEconomics", L + 18, 125, { width: CW - 16, lineGap: 4 });
  doc.font("Helvetica").fontSize(11).fillColor(C.taupe);
  doc.text(
    "A premium course textbook for the Economics Full Course.\nClear theory · worked examples · exam traps · practice statements.",
    L + 18,
    280,
    { width: CW - 30, lineGap: 3 },
  );
  doc.font("Helvetica-Bold").fontSize(10).fillColor(C.caramel);
  doc.text("CHAPTERS 2–6  ·  FULL COURSE THEORY", L + 18, 350);
  doc.font("Helvetica").fontSize(11).fillColor(C.white);
  doc.text("Designed for the WU BBE entrance-exam pathway", L + 18, H - 76);
  doc.fontSize(9).fillColor("#C8C8C8");
  doc.text("Original BBE School edition  ·  Built for this platform", L + 18, H - 54);
}

function toc() {
  startPage("Contents");
  pageFooters._current = "Contents";
  doc.font("Helvetica-Bold").fontSize(20).fillColor(C.espresso);
  doc.text("Contents", L, T);
  doc.moveDown(0.3);
  doc.moveTo(L, doc.y).lineTo(L + 70, doc.y).lineWidth(2).strokeColor(C.caramel).stroke();
  doc.moveDown(0.9);
  for (const ch of CHAPTERS) {
    need(40);
    doc.font("Helvetica-Bold").fontSize(10).fillColor(C.caramel);
    doc.text(`Chapter ${ch.num}`, L, doc.y);
    doc.font("Helvetica-Bold").fontSize(11.5).fillColor(C.espresso);
    doc.text(ch.title, L, doc.y, { width: CW });
    doc.moveDown(0.15);
    for (const s of ch.sections) {
      need(13);
      doc.font("Helvetica").fontSize(9.2).fillColor(C.taupe);
      doc.text(`${s.id}    ${s.title}`, L + 8, doc.y, { width: CW - 8 });
    }
    doc.moveDown(0.5);
  }
}

function chapterDivider(ch) {
  const label = `Chapter ${ch.num} · ${ch.title}`;
  pageFooters._current = label;
  startPage(label);
  const start = pageFooters.length; // 1-based page number
  doc.font("Helvetica").fontSize(10).fillColor(C.caramel);
  doc.text(`CHAPTER ${ch.num}`, L, 150, { characterSpacing: 1.8 });
  doc.font("Helvetica-Bold").fontSize(22).fillColor(C.espresso);
  doc.text(ch.title, L, 175, { width: CW, lineGap: 2 });
  doc.y = 230;
  doc.font("Helvetica").fontSize(10.3).fillColor(C.espresso).lineGap(2.4);
  doc.text(ch.intro, L, doc.y, { width: CW, align: "justify" });
  plainChunks.push(`Chapter ${ch.num}. ${ch.title}\n${ch.intro}`);
  const boxY = H - 145;
  doc.roundedRect(L, boxY, CW, 54, 5).fill(C.caramelSoft);
  doc.font("Helvetica-Bold").fontSize(7.5).fillColor(C.caramel);
  doc.text("IN THIS CHAPTER", L + 12, boxY + 12);
  doc.font("Helvetica").fontSize(8.2).fillColor(C.espresso);
  doc.text(ch.sections.map((s) => s.id).join("   ·   "), L + 12, boxY + 28, { width: CW - 24 });
  return start;
}

function section(sec) {
  need(70);
  const band = 28;
  need(band + 14);
  const top = doc.y;
  doc.roundedRect(L, top, CW, band, 3).fill(C.espresso);
  doc.font("Helvetica-Bold").fontSize(8).fillColor(C.amber);
  doc.text(sec.id, L + 9, top + 9, { lineBreak: false });
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(C.white);
  doc.text(sec.title, L + 40, top + 8, { width: CW - 50 });
  doc.y = top + band + 11;
  plainChunks.push(`${sec.id} ${sec.title}`);
  for (const b of sec.blocks) block(b);
}

function renderChapter(ch) {
  const start = chapterDivider(ch);
  for (const s of ch.sections) section(s);
  chapterRanges.push({
    chapter: ch.num,
    title: ch.title,
    startPage: start,
    endPage: pageFooters.length,
  });
}

function stampChrome() {
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(range.start + i);
    const n = i + 1;
    const isCover = n === 1;
    if (isCover) continue;
    doc.save();
    doc.rect(0, 0, W, 4).fill(C.caramel);
    doc.font("Helvetica").fontSize(7.5).fillColor(C.taupe);
    const foot = pageFooters[i] || "BBE School · Economics";
    doc.text("BBE SCHOOL", L, 18, { width: CW / 2, lineBreak: false });
    doc.text(String(foot).slice(0, 55), L + CW / 2, 18, { width: CW / 2, align: "right", lineBreak: false });
    doc.moveTo(L, H - 36).lineTo(W - R, H - 36).lineWidth(0.5).strokeColor(C.line).stroke();
    doc.text("Full Course Theory", L, H - 28, { width: CW / 2, lineBreak: false });
    doc.text(String(n), L + CW / 2, H - 28, { width: CW / 2, align: "right", lineBreak: false });
    doc.restore();
  }
}

cover();
toc();
for (const ch of CHAPTERS) renderChapter(ch);

pageFooters._current = "BBE School · Economics";
startPage(pageFooters._current);
doc.font("Helvetica-Bold").fontSize(17).fillColor(C.espresso);
doc.text("You are ready to practise", L, 200);
doc.font("Helvetica").fontSize(11).fillColor(C.taupe).lineGap(3.5);
doc.text(
  "Return to the Economics Full Course and open Practice for the chapter you just studied. Use the Key takeaways as a checklist, then attack True/False statements with the traps in mind.\n\nTheory explains. Practice proves it.",
  L,
  235,
  { width: CW },
);
doc.font("Helvetica-Bold").fontSize(10).fillColor(C.caramel);
doc.text("BBE School  ·  Economics Full Course", L, 330);

stampChrome();
doc.end();

await new Promise((res, rej) => {
  stream.on("finish", res);
  stream.on("error", rej);
});

const pageCount = pageFooters.length;
fs.writeFileSync(MANIFEST_PATH, JSON.stringify({ pageCount, chapters: chapterRanges }, null, 2));
fs.writeFileSync(TEXT_PATH, plainChunks.join("\n\n"));
console.log(JSON.stringify({ pdf: PDF_PATH, pages: pageCount, chapters: chapterRanges }, null, 2));
