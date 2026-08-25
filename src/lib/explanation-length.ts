export type ExplanationLength = "compact" | "full";

export const DEFAULT_EXPLANATION_LENGTH: ExplanationLength = "compact";
export const EXPLANATION_LENGTH_STORAGE_KEY = "bbe.explanationLength.v1";
export const EXPLANATION_LENGTH_EVENT = "bbe:explanation-length";

export function isExplanationLength(value: unknown): value is ExplanationLength {
  return value === "compact" || value === "full";
}

export function loadExplanationLength(): ExplanationLength {
  if (typeof window === "undefined") return DEFAULT_EXPLANATION_LENGTH;
  try {
    const raw = window.localStorage.getItem(EXPLANATION_LENGTH_STORAGE_KEY);
    if (isExplanationLength(raw)) return raw;
  } catch {
    /* ignore */
  }
  return DEFAULT_EXPLANATION_LENGTH;
}

export function saveExplanationLength(value: ExplanationLength) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(EXPLANATION_LENGTH_STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent(EXPLANATION_LENGTH_EVENT, { detail: value }));
  } catch {
    /* ignore */
  }
}

function isDisplayMathPara(trimmed: string): boolean {
  return /^\$\$[\s\S]+\$\$/.test(trimmed) || /^\$[^$\n]+\$\s*$/.test(trimmed);
}

function isNotePara(trimmed: string): boolean {
  return (
    /^\*\*(Tip|Trap|Note|Watch|Why it fails)\b/i.test(trimmed) ||
    /^(Tip|Trap|Note):\s/i.test(trimmed)
  );
}

function isHeaderPara(trimmed: string): boolean {
  return (
    /^\*\*[A-F][.)]/.test(trimmed) ||
    /^\*\*[A-F]\.\*\*/.test(trimmed) ||
    /^(TRUE|FALSE)\s+[—–-]/.test(trimmed)
  );
}

function isPaddingSentence(s: string): boolean {
  const t = s
    .replace(/^\*\*[^*]+\*\*\s*/, "")
    .replace(/^(TRUE|FALSE)\s+[—–-]\s*/i, "")
    .trim();
  return /^(the claim is correct|this statement is correct|evaluated against the textbook|on the fuhrmann definition|the reasoning chain is complete|every part of the claim aligns|no qualifying word breaks|the sentence is correct)\b/i.test(
    t,
  );
}

function splitSentences(text: string): string[] {
  const parts = text
    .split(/(?<=[.!?])\s+(?=[A-Z“"'(*\d$])/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length ? parts : [text.trim()];
}

function hasMeat(s: string): boolean {
  return (
    /\d|%|€|\$|£|means |is the |defined |ratio |equals |because |so the statement|so it is |mark the statement|true|false/i.test(
      s,
    ) || s.length <= 140
  );
}

/** Squeeze one prose block down to header + one fact + verdict. */
export function compressParagraph(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  const sentences = splitSentences(trimmed);
  if (sentences.length <= 2) return trimmed;

  const first = sentences[0];
  const last = sentences[sentences.length - 1];
  const middle = sentences.slice(1, -1).filter((s) => !isPaddingSentence(s) && hasMeat(s));
  const meat =
    middle.find((s) => /\d|%|€|\$|£|means |is the |defined |ratio |equals /i.test(s)) ?? middle[0];

  const kept: string[] = [];
  if (!isPaddingSentence(first) || !meat) {
    kept.push(first);
  } else {
    const prefix = first.match(/^(TRUE|FALSE)\s+[—–-]\s*/i);
    kept.push(prefix ? `${prefix[0]}${meat.replace(/^(TRUE|FALSE)\s+[—–-]\s*/i, "")}` : first);
  }
  if (meat && !kept.some((k) => k === meat) && !kept[0].includes(meat)) {
    kept.push(meat);
  }
  if (last && last !== meat && last !== first && !kept.includes(last)) {
    kept.push(last);
  }
  return kept.join(" ").replace(/\s+/g, " ").trim();
}

/**
 * Most compressed solution text that still keeps the verdict and any display math.
 * Tips/traps and tutorial filler are dropped.
 */
export function compressExplanation(text: string): string {
  const source = text.trim();
  if (!source) return source;

  const paras = source
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paras.length === 1) return compressParagraph(paras[0]);

  const header = paras.find(isHeaderPara);
  const math = paras.filter(isDisplayMathPara);
  const body = paras.filter((p) => p !== header && !isDisplayMathPara(p) && !isNotePara(p));

  const parts: string[] = [];
  if (header) {
    parts.push(header.length > 220 ? compressParagraph(header) : header);
  }

  parts.push(...math);

  const firstBody = body[0];
  const verdict = body[body.length - 1];

  // Tweet-length: if we already have a verdict header, skip the tutorial middle
  // unless there is display math (the actual working).
  if (math.length === 0 && firstBody && (!header || firstBody === verdict)) {
    parts.push(compressParagraph(firstBody));
  }

  if (verdict && verdict !== header && !parts.includes(verdict)) {
    parts.push(verdict.length > 280 ? compressParagraph(verdict) : verdict);
  }

  const out = parts.join("\n\n").trim();
  return out || compressParagraph(source);
}

export function applyExplanationLength(
  text: string | null | undefined,
  length: ExplanationLength,
): string {
  const source = (text ?? "").trim();
  if (!source || length === "full") return source;
  return compressExplanation(source);
}
