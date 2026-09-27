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
