import { cleanExplanation } from "@/lib/clean-explanation";
import type { DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";

function firstSentences(text: string, count: number): string {
  const sentences = text.match(/[^.!?]+[.!?]+(?:["”)\]]+)?/g);
  if (!sentences || sentences.length <= count) return text.trim();
  return sentences.slice(0, count).join(" ").trim();
}

function isLetterHeader(part: string): boolean {
  return /^[A-E][.)]\s/i.test(part) || /^[A-E]\.\s*→\s*(?:True|False)\s*$/i.test(part);
}

/** A display-math block with no course sentence around it. */
function isFormulaDump(part: string): boolean {
  const prose = part
    .replace(/\$\$[\s\S]*?\$\$/g, "")
    .replace(/\$[^$]+\$/g, "")
    .replace(/\\[a-zA-Z]+/g, "")
    .trim();
  return prose.length < 16;
}

/**
 * Two real sentences from the course bank, plus the bank's own verdict line.
 * Skips the letter header and the formula dump so every card is the same shape.
 */
export function evenExplanation(raw: string): string {
  const parts = cleanExplanation(raw)
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
  const verdict = [...parts].reverse().find((part) => /statement is (?:true|false)/i.test(part));
  const prose = parts.find(
    (part) => part !== verdict && !isLetterHeader(part) && !isFormulaDump(part),
  );
  const body = prose ? firstSentences(prose, 1) : "";
  if (verdict && body && verdict !== body) return `${body}\n\n${verdict}`;
  return body || verdict || "";
}

/**
 * The explanation text the math practice page shows: header stripped, formulas kept.
 * Same cleanup as AllExplanationsPanel, without shortening.
 */
export function fullExplanation(raw: string): string {
  let expl = raw.trim();
  const verdictHeader =
    /^(?:\*\*\s*)?[A-F]\.\s*(?:\*\*)?\s*→\s*(?:True|False|Wahr|Falsch|Richtig)\s*/i;
  for (let guard = 0; guard < 4 && verdictHeader.test(expl); guard++) {
    expl = expl.replace(verdictHeader, "").trim();
  }
  expl = expl
    .replace(/^\*\*[A-F]\)[\s\S]*?\*\*\s*\((?:true|false|wahr|falsch|richtig)\)\s*/i, "")
    .replace(/^(?:[A-F]\.\s*)?→\s*(?:True|False|Wahr|Falsch|Richtig)\s*\n+/i, "")
    .trim();
  return expl;
}

function readingPoint(stage: HTMLElement, panel: HTMLElement, selector = "[data-d^='prose']") {
  const sr = stage.getBoundingClientRect();
  const pr = panel.getBoundingClientRect();
  let viewTop = Math.max(pr.top, sr.top);
  const viewBottom = Math.min(pr.bottom, sr.bottom);
  const chrome = stage.querySelector<HTMLElement>("[data-d='exam-chrome']");
  if (chrome) {
    const cover = chrome.getBoundingClientRect().bottom;
    if (cover > viewTop) viewTop = cover + 4;
  }
  const lines = [...panel.querySelectorAll<HTMLElement>(selector)];
  const mid = (viewTop + viewBottom) / 2;
  let best: { x: number; y: number; dist: number } | null = null;
  for (const node of lines) {
    const box = node.getBoundingClientRect();
    const top = Math.max(box.top, viewTop + 6);
    const bottom = Math.min(box.bottom, viewBottom - 6);
    const left = Math.max(box.left, sr.left + 8);
    const right = Math.min(box.right, Math.min(pr.right, sr.right) - 8);
    if (bottom - top < 8 || right - left < 8) continue;
    const y = (top + bottom) / 2;
    const dist = Math.abs(y - mid);
    if (best && dist >= best.dist) continue;
    best = {
      x: left - sr.left + Math.min((right - left) * 0.32, 88) - 5,
      y: y - sr.top - 3,
      dist,
    };
  }
  return best;
}

function overflowParent(el: HTMLElement, stage: HTMLElement): HTMLElement | null {
  let node = el.parentElement;
  while (node && node !== stage) {
    const oy = getComputedStyle(node).overflowY;
    if ((oy === "auto" || oy === "scroll") && node.scrollHeight > node.clientHeight + 12) return node;
    node = node.parentElement;
  }
  return null;
}

function cursorFrom(stage: HTMLElement) {
  const cursor = stage.querySelector<HTMLElement>("[data-cx]");
  return {
    x: Number(cursor?.dataset.cx ?? 36),
    y: Number(cursor?.dataset.cy ?? 36),
  };
}

/**
 * Ease a scroller while the pointer stays on the text that is passing the middle.
 */
async function glideScroller(
  api: DemoPlayerApi,
  stage: HTMLElement,
  scroller: HTMLElement,
  dest: number,
  trackSelector: string,
  pace: number,
) {
  const start = scroller.scrollTop;
  const distance = dest - start;
  if (distance < 8) {
    await api.wait(420);
    return;
  }
  const from = cursorFrom(stage);
  const duration = Math.round(Math.min(14000, Math.max(4200, distance * pace)));
  await api.tween(duration, (eased) => {
    scroller.scrollTop = start + distance * eased;
    const spot = readingPoint(stage, scroller, trackSelector);
    if (!spot) return;
    const blend = Math.min(1, eased / 0.08);
    api.setCursorAt({
      x: from.x + (spot.x - from.x) * blend,
      y: from.y + (spot.y - from.y) * blend,
    });
  });
}

/** Read the whole results sheet, from the score down through the question table. */
export async function glideFrame(api: DemoPlayerApi, trackSelector: string) {
  await api.flush();
  const stage = api.stage();
  const frame = api.scroll();
  if (!stage || !frame) return;
  const max = Math.max(0, frame.scrollHeight - frame.clientHeight);
  await glideScroller(api, stage, frame, max, trackSelector, 2.4);
}

/**
 * Scroll until `endSelector` has passed through the reader.
 * Uses the inner explanation scroller when that is what actually moves the cards.
 */
export async function glideRead(api: DemoPlayerApi, endSelector: string, trackSelector: string) {
  await api.flush();
  const stage = api.stage();
  const frame = api.scroll();
  const end = stage?.querySelector<HTMLElement>(endSelector);
  if (!stage || !frame || !end) return;
  let scroller = overflowParent(end, stage) ?? frame;
  const scrollerBox = scroller.getBoundingClientRect();
  const stageBox = stage.getBoundingClientRect();
  const scrollerSeen =
    scrollerBox.bottom > stageBox.top + 8 &&
    scrollerBox.top < stageBox.bottom - 8 &&
    scrollerBox.height > 24;
  if (!scrollerSeen) scroller = frame;
  const top =
    end.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
  const bottom = top + end.offsetHeight;
  const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  const dest = Math.max(0, Math.min(bottom - scroller.clientHeight + 20, max));
  await glideScroller(api, stage, scroller, dest, trackSelector, 2.6);
}

/**
 * Three showpiece spots in each chapter. Headings are element ids.
 * A phrase with a space is matched against a figure caption.
 */
const CHAPTER_SPOTS: Record<number, readonly [string, string, string]> = {
  1: ["the-power-set", "the-truth-table-of-an-implication", "mathematical-induction"],
  10: ["Growth uses a base", "doubling-time-and-half-life", "Read the intercept"],
  11: ["the-newton-quotient", "Expand while MR", "Zeros at"],
};

function findSpot(panel: HTMLElement, key: string): HTMLElement | null {
  if (!key.includes(" ")) {
    const byId = panel.querySelector<HTMLElement>(`#${CSS.escape(key)}`);
    if (byId) return byId;
  }
  const caption = [...panel.querySelectorAll("figcaption")].find((node) =>
    (node.textContent ?? "").includes(key),
  );
  return (caption?.closest("figure") as HTMLElement | null) ?? null;
}

function pointOn(stage: HTMLElement, el: HTMLElement) {
  const sr = stage.getBoundingClientRect();
  const box = el.getBoundingClientRect();
  const top = Math.max(box.top, sr.top + 8);
  const bottom = Math.min(box.bottom, sr.bottom - 8);
  const left = Math.max(box.left, sr.left + 8);
  const right = Math.min(box.right, sr.right - 8);
  if (bottom - top < 8 || right - left < 8) return null;
  return {
    x: left - sr.left + (right - left) * 0.42,
    y: (top + bottom) / 2 - sr.top,
  };
}

/** Park a heading at the top, or a figure in the middle, so the highlight stays on screen. */
function destFor(panel: HTMLElement, el: HTMLElement, max: number): number {
  const top = el.getBoundingClientRect().top - panel.getBoundingClientRect().top + panel.scrollTop;
  const figure = el.tagName === "FIGURE";
  const room = panel.clientHeight - el.offsetHeight;
  const dest = figure ? top - Math.max(16, room / 2) : top - 8;
  return Math.max(0, Math.min(dest, max));
}

/**
 * Read the whole chapter the site shows. Three pauses, each on a highlight of that chapter.
 */
export async function skimChapter(api: DemoPlayerApi, panelSelector: string, chapter = 1) {
  await api.flush();
  const stage = api.stage();
  if (!stage) return;
  const spots = CHAPTER_SPOTS[chapter] ?? CHAPTER_SPOTS[1];
  let panel: HTMLElement | null = null;
  let max = 0;
  // Wait for KaTeX / figures so stop targets exist before the skim starts.
  for (let i = 0; i < 48; i++) {
    if (api.cancelled()) return;
    panel = stage.querySelector<HTMLElement>(panelSelector);
    if (panel) {
      panel.scrollTop = 0;
      max = Math.max(0, panel.scrollHeight - panel.clientHeight);
      const ready = max > 80 && spots.every((key) => findSpot(panel!, key));
      if (ready) break;
    }
    await api.flush();
    await api.wait(40);
  }
  if (!panel) return;
  max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  if (max < 24) {
    await api.wait(240);
    return;
  }
  await api.moveTo('[data-d="prose0"]', 20);
  const found = spots
    .map((key) => {
      const el = findSpot(panel!, key);
      return el ? { dest: destFor(panel!, el, max), el } : null;
    })
    .filter((stop): stop is { dest: number; el: HTMLElement } => stop != null)
    .sort((a, b) => a.dest - b.dest);
  const plan = (
    found.length
      ? found
      : [
          { dest: max * 0.28, el: panel },
          { dest: max * 0.55, el: panel },
          { dest: max * 0.82, el: panel },
        ]
  ).map((stop) => ({ ...stop, pause: true }));

  let fromTop = 0;
  for (const step of plan) {
    if (api.cancelled()) return;
    const dest = step.dest;
    const distance = dest - fromTop;
    const cursor = stage.querySelector<HTMLElement>("[data-cx]");
    const from = {
      x: Number(cursor?.dataset.cx ?? 36),
      y: Number(cursor?.dataset.cy ?? 36),
    };
    const onFigure = step.el.tagName === "FIGURE";
    if (distance >= 8) {
      const duration = Math.round(Math.min(3800, Math.max(880, distance * 0.55)));
      await api.tween(duration, (eased) => {
        panel.scrollTop = fromTop + distance * eased;
        const spot = (onFigure ? pointOn(stage, step.el) : null) ?? readingPoint(stage, panel);
        if (!spot) return;
        const blend = Math.min(1, eased / 0.12);
        api.setCursorAt({
          x: from.x + (spot.x - from.x) * blend,
          y: from.y + (spot.y - from.y) * blend,
        });
      });
    }
    fromTop = panel.scrollTop;
    if (step.pause) await api.wait(700);
  }
}

/**
 * A pass over part of a reader. Stops before the bottom of the panel.
 * A longer excerpt gets a little more time, so the scroll stays even.
 */
export async function skimPanel(api: DemoPlayerApi, panelSelector: string, fraction = 0.8) {
  await api.flush();
  const stage = api.stage();
  const panel = stage?.querySelector<HTMLElement>(panelSelector);
  if (!panel || !stage) return;
  panel.scrollTop = 0;
  await api.flush();
  await api.moveTo('[data-d="prose0"]', 20);
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const dest = max * fraction;
  if (dest < 8) {
    await api.wait(480);
    return;
  }
  const cursor = stage.querySelector<HTMLElement>("[data-cx]");
  const from = {
    x: Number(cursor?.dataset.cx ?? 36),
    y: Number(cursor?.dataset.cy ?? 36),
  };
  const duration = Math.round(Math.min(3000, Math.max(1750, dest * 0.92)));
  await api.tween(duration, (eased) => {
    panel.scrollTop = dest * eased;
    const spot = readingPoint(stage, panel);
    if (!spot) return;
    const blend = Math.min(1, eased / 0.1);
    api.setCursorAt({
      x: from.x + (spot.x - from.x) * blend,
      y: from.y + (spot.y - from.y) * blend,
    });
  });
}

/**
 * Steady read of a sheet. The pointer starts on the first line and stays
 * over the words while the sheet eases from top to bottom.
 */
export async function readPanel(api: DemoPlayerApi, panelSelector: string) {
  await api.flush();
  const stage = api.stage();
  const panel = stage?.querySelector<HTMLElement>(panelSelector);
  if (!panel || !stage) return;
  panel.scrollTop = 0;
  await api.flush();
  await api.moveTo('[data-d="prose0"]', 40);
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  if (max < 8) {
    await api.wait(700);
    return;
  }
  const cursor = stage.querySelector<HTMLElement>("[data-cx]");
  const from = {
    x: Number(cursor?.dataset.cx ?? 36),
    y: Number(cursor?.dataset.cy ?? 36),
  };
  const duration = Math.max(3200, Math.min(7000, max * 0.62));
  await api.tween(duration, (eased) => {
    panel.scrollTop = max * eased;
    const spot = readingPoint(stage, panel);
    if (!spot) return;
    const blend = Math.min(1, eased / 0.16);
    api.setCursorAt({
      x: from.x + (spot.x - from.x) * blend,
      y: from.y + (spot.y - from.y) * blend,
    });
  });
}

/** Least scroll that puts `item` fully inside the panel. No-op when it already fits. */
export async function scrollPanelTo(
  api: DemoPlayerApi,
  panelSelector: string,
  itemSelector: string,
) {
  await api.flush();
  const stage = api.stage();
  const panel = stage?.querySelector<HTMLElement>(panelSelector);
  const el = stage?.querySelector<HTMLElement>(itemSelector);
  if (!panel || !el) return;
  const pad = 12;
  const pb = panel.getBoundingClientRect();
  const eb = el.getBoundingClientRect();
  if (eb.width === 0 && eb.height === 0) return;
  let delta = 0;
  if (eb.height + pad * 2 >= pb.height) delta = eb.top - (pb.top + pad);
  else if (eb.top < pb.top + pad) delta = eb.top - (pb.top + pad);
  else if (eb.bottom > pb.bottom - pad) delta = eb.bottom - (pb.bottom - pad);
  if (Math.abs(delta) < 2) return;
  const start = panel.scrollTop;
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const next = Math.max(0, Math.min(start + delta, max));
  if (Math.abs(next - start) < 2) return;
  await api.tween(480, (eased) => {
    panel.scrollTop = start + (next - start) * eased;
  });
}

function scrollerOf(el: HTMLElement): HTMLElement | null {
  let node = el.parentElement;
  while (node) {
    const oy = getComputedStyle(node).overflowY;
    if (oy === "auto" || oy === "scroll") return node;
    node = node.parentElement;
  }
  return null;
}

/** Slide a keypad just enough for the key to sit inside the stage, not only inside a clipped scroller. */
async function revealKey(api: DemoPlayerApi, btn: HTMLElement) {
  const scroller = scrollerOf(btn);
  const stage = api.stage();
  if (!scroller || !stage) return;
  const pad = 6;
  for (let pass = 0; pass < 2; pass++) {
    const sb = scroller.getBoundingClientRect();
    const st = stage.getBoundingClientRect();
    const visTop = Math.max(sb.top, st.top) + pad;
    const visBottom = Math.min(sb.bottom, st.bottom) - pad;
    const kb = btn.getBoundingClientRect();
    let delta = 0;
    if (kb.height + pad * 2 >= visBottom - visTop) delta = kb.top - visTop;
    else if (kb.top < visTop) delta = kb.top - visTop;
    else if (kb.bottom > visBottom) delta = kb.bottom - visBottom;
    if (Math.abs(delta) < 2) return;
    const start = scroller.scrollTop;
    const next = start + delta;
    await api.tween(380, (eased) => {
      scroller.scrollTop = start + (next - start) * eased;
    });
    await api.flush();
  }
}

/**
 * One scroll that puts every key in `labels` on screen together.
 * Later presses then only move the pointer, with no keypad jump.
 */
export async function parkCalcKeys(api: DemoPlayerApi, labels: string[]) {
  await api.flush();
  const root = api.stage()?.querySelector("[data-d='calc-panel']");
  if (!root) return;
  const buttons = labels
    .map((label) =>
      root.querySelector<HTMLButtonElement>(`[data-calc-key="${CSS.escape(label)}"]`),
    )
    .filter((btn): btn is HTMLButtonElement => !!btn);
  if (!buttons.length) return;
  const scroller = scrollerOf(buttons[0]);
  if (!scroller) return;
  const pad = 8;
  const sb = scroller.getBoundingClientRect();
  const boxes = buttons.map((btn) => btn.getBoundingClientRect());
  const top = Math.min(...boxes.map((box) => box.top));
  const bottom = Math.max(...boxes.map((box) => box.bottom));
  const block = bottom - top;
  let delta = 0;
  if (block + pad * 2 <= sb.height) {
    if (top < sb.top + pad || bottom > sb.bottom - pad) delta = top - (sb.top + pad);
  } else {
    delta = top - (sb.top + pad);
  }
  if (Math.abs(delta) < 2) return;
  const start = scroller.scrollTop;
  const next = start + delta;
  await api.tween(520, (eased) => {
    scroller.scrollTop = start + (next - start) * eased;
  });
  await api.flush();
}

/**
 * Glide onto a real TI-30 key, depress it, and fire its click on pointer-down.
 * The key has to be on screen — a clamped cursor on a clipped row is not a press.
 */
export async function pressCalcKey(api: DemoPlayerApi, label: string) {
  await api.flush();
  const stage = api.stage();
  const root = stage?.querySelector("[data-d='calc-panel']");
  if (!root) return;
  const btn = root.querySelector<HTMLButtonElement>(`[data-calc-key="${CSS.escape(label)}"]`);
  if (!btn) return;
  await revealKey(api, btn);
  btn.setAttribute("data-d", "ckey");
  await api.moveTo('[data-d="ckey"]');
  btn.style.transition = "transform 100ms ease";
  btn.style.transform = "scale(0.92)";
  await api.click(() => btn.click());
  btn.style.transform = "";
  btn.removeAttribute("data-d");
}
