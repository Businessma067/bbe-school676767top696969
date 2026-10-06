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
  const verdict = [...parts].reverse().find(
    (part) =>
      /statement is (?:true|false)/i.test(part) ||
      /die aussage ist (?:wahr|falsch|richtig)/i.test(part),
  );
  const prose = parts.find(
    (part) => part !== verdict && !isLetterHeader(part) && !isFormulaDump(part),
  );
  const body = prose ? firstSentences(prose, 1) : "";
  if (verdict && body && verdict !== body) return `${body}\n\n${verdict}`;
  return body || verdict || "";
}

/**
 * The explanation body English practice shows for one statement.
 * Same two strips as EnglishTasksPage: verdict header, then the bold claim line.
 */
export function englishBankExplanation(raw: string): string {
  let expl = raw.trim();
  if (!expl) return "";
  expl = expl.replace(/^\*\*[A-F]\.\*\*\s*→\s*(?:True|False)\s*/i, "").trim();
  expl = expl.replace(/^\*\*[A-E]\)[\s\S]*?\*\*\s*/i, "").trim();
  return expl;
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

function overflowParent(el: HTMLElement, stage: HTMLElement): HTMLElement | null {
  let node = el.parentElement;
  while (node && node !== stage) {
    const oy = getComputedStyle(node).overflowY;
    if ((oy === "auto" || oy === "scroll") && node.scrollHeight > node.clientHeight + 12)
      return node;
    node = node.parentElement;
  }
  return null;
}

type ReadingAnchor = { mid: number; x: number };

/** Line positions in the scroller's content, measured once so later frames do not reflow. */
function captureReading(
  stage: HTMLElement,
  panel: HTMLElement,
  selector = "[data-d^='prose']",
): ReadingAnchor[] {
  const sr = stage.getBoundingClientRect();
  const pr = panel.getBoundingClientRect();
  const scroll = panel.scrollTop;
  const anchors: ReadingAnchor[] = [];
  for (const node of panel.querySelectorAll<HTMLElement>(selector)) {
    const box = node.getBoundingClientRect();
    if (box.width < 8 || box.height < 8) continue;
    const left = Math.max(box.left, sr.left + 8);
    const right = Math.min(box.right, Math.min(pr.right, sr.right) - 8);
    if (right - left < 8) continue;
    anchors.push({
      mid: box.top - pr.top + scroll + box.height / 2,
      x: left - sr.left + Math.min((right - left) * 0.32, 88) - 5,
    });
  }
  return anchors;
}

/** Where the reading hand sits for a scroll position. Geometry is measured once. */
function handOnLine(
  anchors: ReadingAnchor[],
  contentMid: number,
  originY: number,
  scrollTop: number,
): { x: number; y: number } | null {
  if (!anchors.length) return null;
  let i = 0;
  while (i < anchors.length - 1 && anchors[i + 1].mid < contentMid) i++;
  const a = anchors[i];
  const b = anchors[Math.min(i + 1, anchors.length - 1)];
  const span = b.mid - a.mid;
  const u = span > 1 ? Math.min(1, Math.max(0, (contentMid - a.mid) / span)) : 0;
  const mid = a.mid + (b.mid - a.mid) * u;
  return {
    x: a.x + (b.x - a.x) * u,
    y: originY + (mid - scrollTop) - 3,
  };
}

/**
 * Move a sheet on the compositor. One frame only writes a transform and the
 * cursor, so the text is not repainted on every tick.
 */
async function glideWithPointer(
  api: DemoPlayerApi,
  stage: HTMLElement,
  panel: HTMLElement,
  fromTop: number,
  dest: number,
  duration: number,
  anchors: ReadingAnchor[],
  hold = false,
) {
  const inner = panel.querySelector<HTMLElement>("[data-glide-inner]");
  // A math sheet is a tall KaTeX layer. Moving it whole misses frames.
  // Scroll the viewport instead, and let off-screen cards skip paint.
  const mathSheet = panel.hasAttribute("data-math-sheet");
  const layer = Boolean(inner) && !mathSheet;
  const sr = stage.getBoundingClientRect();
  const pr = panel.getBoundingClientRect();
  const originY = pr.top - sr.top;
  const viewMid = (Math.max(pr.top, sr.top) + Math.min(pr.bottom, sr.bottom)) / 2 - pr.top;
  const from = cursorFrom(stage);
  const blendUntil = performance.now() + 180;
  let lastSpot: { x: number; y: number } | null = null;
  if (layer && inner) {
    panel.style.overflow = "hidden";
    inner.style.willChange = "transform";
  }
  await api.tween(duration, (eased) => {
    const top = fromTop + (dest - fromTop) * eased;
    if (layer && inner) inner.style.transform = `translate3d(0, ${(-top).toFixed(2)}px, 0)`;
    else panel.scrollTop = top;
    const spot = handOnLine(anchors, top + viewMid, originY, top);
    if (!spot) return;
    lastSpot = spot;
    const u = Math.min(1, Math.max(0, 1 - (blendUntil - performance.now()) / 180));
    const e = u * u * (3 - 2 * u);
    api.setCursorAt({
      x: from.x + (spot.x - from.x) * e,
      y: from.y + (spot.y - from.y) * e,
    });
  });
  if (layer && inner && !hold) {
    panel.scrollTop = dest;
    inner.style.transform = "";
    inner.style.willChange = "";
    panel.style.overflow = "";
  }
  if (lastSpot) api.setCursorAt(lastSpot);
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
    await api.wait(120);
    return;
  }
  const duration = Math.round(Math.min(4400, Math.max(1200, distance * pace * 0.46)));
  const anchors = captureReading(stage, scroller, trackSelector);
  await glideWithPointer(api, stage, scroller, start, dest, duration, anchors);
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
    await api.wait(160);
    return;
  }
  const duration = Math.round(Math.min(2700, Math.max(1000, dest * 0.58)));
  const anchors = captureReading(stage, panel);
  await glideWithPointer(api, stage, panel, 0, dest, duration, anchors);
}

/**
 * Lock each math card and display formula, then skip paint for the ones
 * outside the sheet. Heights stay put, so the two reading stops do not jump.
 */
function rememberMathCards(panel: HTMLElement) {
  if (!panel.hasAttribute("data-math-sheet")) return;
  const blocks = panel.querySelectorAll<HTMLElement>(
    "[data-d^='card'], [data-math-block], .flashcard-math-display",
  );
  const sized: { el: HTMLElement; h: number }[] = [];
  for (const block of blocks) {
    if (block.dataset.paintReady) continue;
    const h = block.offsetHeight;
    if (h < 8) continue;
    sized.push({ el: block, h });
  }
  for (const { el, h } of sized) {
    el.style.height = `${h}px`;
    el.style.contentVisibility = "auto";
    el.style.containIntrinsicSize = `auto ${h}px`;
    el.dataset.paintReady = "1";
  }
}

/**
 * Steady read of a sheet. The pointer starts on the first line and stays
 * over the words while the sheet eases from top to bottom.
 */
export async function readPanel(api: DemoPlayerApi, panelSelector: string, stops = 1) {
  await api.flush();
  const stage = api.stage();
  const panel = stage?.querySelector<HTMLElement>(panelSelector);
  if (!panel || !stage) return;
  const inner = panel.querySelector<HTMLElement>("[data-glide-inner]");
  if (inner) inner.style.transform = "";
  panel.scrollTop = 0;
  await api.flush();
  // A tall overview would be scrolled clear of the zoom control, then the
  // read would jump back to the top. Aim at the short title instead.
  await api.moveTo(
    panel.hasAttribute("data-math-sheet") ? '[data-d="read-start"]' : '[data-d="prose0"]',
    40,
  );
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  if (max < 8) {
    await api.wait(200);
    return;
  }
  const anchors = captureReading(stage, panel);
  rememberMathCards(panel);
  const legs = stops >= 2 && max > 48 ? [max * 0.46, max * 0.84] : [max];
  let from = 0;
  for (let i = 0; i < legs.length; i++) {
    if (api.cancelled()) return;
    const dest = legs[i]!;
    const distance = dest - from;
    const duration = Math.max(720, Math.min(2400, distance * 0.85));
    const last = i === legs.length - 1;
    await glideWithPointer(api, stage, panel, from, dest, duration, anchors, !last);
    from = dest;
  }
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
  const travel = Math.abs(next - start);
  const mathSheet = panel.hasAttribute("data-math-sheet");
  const inner = mathSheet ? null : panel.querySelector<HTMLElement>("[data-glide-inner]");
  if (inner) {
    panel.style.overflow = "hidden";
    inner.style.willChange = "transform";
  }
  await api.tween(Math.round(Math.min(800, Math.max(240, travel * 0.7))), (eased) => {
    const top = start + (next - start) * eased;
    if (inner) inner.style.transform = `translate3d(0, ${(-top).toFixed(2)}px, 0)`;
    else panel.scrollTop = top;
  });
  if (inner) {
    panel.scrollTop = next;
    inner.style.transform = "";
    inner.style.willChange = "";
    panel.style.overflow = "";
  }
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
    await api.tween(320, (eased) => {
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
    .map((label) => root.querySelector<HTMLButtonElement>(`[data-calc-key="${CSS.escape(label)}"]`))
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
  await api.tween(360, (eased) => {
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
