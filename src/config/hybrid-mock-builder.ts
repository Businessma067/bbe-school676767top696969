/**
 * Hybrid paper: shared mathematics plus German reading.
 * The lean moves the paper between a BBE-shaped mix and a WiSo-shaped mix.
 *
 * 0 = BBE. The paper opens on English mathematics, then a WiSo task.
 * 50 = half. One BBE task, then one WiSo task, for the whole paper.
 * 100 = WiSo. The paper opens on a WiSo task, then a BBE task.
 */

export const HYBRID_PAPER_MIN_QUESTIONS = 6;
export const HYBRID_PAPER_MAX_QUESTIONS = 32;
export const HYBRID_PAPER_DEFAULT_QUESTIONS = 16;
export const HYBRID_PAPER_MINUTES_PER_QUESTION = 2;

export const HYBRID_MOCK_EXAM_PREFIX = "hybridmock-";

export type HybridLeanId = "bbe" | "half" | "wiso";

export type HybridPaperMix = {
  /** 0 BBE … 100 WiSo. */
  lean: number;
  leanId: HybridLeanId;
  mathCount: number;
  enMath: number;
  deMath: number;
  germanCount: number;
};

type Anchor = {
  /** Share of the paper that is mathematics. The rest is German reading. */
  mathShare: number;
  /** Share of the math block whose stem is German. */
  deStemShare: number;
};

const ANCHORS: Record<HybridLeanId, Anchor> = {
  bbe: { mathShare: 13 / (13 + 6), deStemShare: 0 },
  half: { mathShare: 0.5, deStemShare: 0.5 },
  wiso: { mathShare: 13 / (13 + 9), deStemShare: 1 },
};

export function clampPaperCount(count: number): number {
  if (!Number.isFinite(count)) return HYBRID_PAPER_DEFAULT_QUESTIONS;
  return Math.max(
    HYBRID_PAPER_MIN_QUESTIONS,
    Math.min(HYBRID_PAPER_MAX_QUESTIONS, Math.floor(count)),
  );
}

export function leanIdFor(lean: number): HybridLeanId {
  if (lean <= 25) return "bbe";
  if (lean >= 75) return "wiso";
  return "half";
}

export function leanValueFor(id: HybridLeanId): number {
  if (id === "bbe") return 0;
  if (id === "wiso") return 100;
  return 50;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function anchorAt(lean: number): Anchor {
  const t = Math.max(0, Math.min(100, lean));
  if (t <= 50) {
    const u = t / 50;
    return {
      mathShare: lerp(ANCHORS.bbe.mathShare, ANCHORS.half.mathShare, u),
      deStemShare: lerp(ANCHORS.bbe.deStemShare, ANCHORS.half.deStemShare, u),
    };
  }
  const u = (t - 50) / 50;
  return {
    mathShare: lerp(ANCHORS.half.mathShare, ANCHORS.wiso.mathShare, u),
    deStemShare: lerp(ANCHORS.half.deStemShare, ANCHORS.wiso.deStemShare, u),
  };
}

/** Split a paper into English math, German math, and German reading. */
export function mixForPaper(total: number, lean: number): HybridPaperMix {
  const count = clampPaperCount(total);
  const anchor = anchorAt(lean);
  let mathCount = Math.round(count * anchor.mathShare);
  mathCount = Math.max(1, Math.min(count - 1, mathCount));
  const germanCount = count - mathCount;
  let deMath = Math.round(mathCount * anchor.deStemShare);
  deMath = Math.max(0, Math.min(mathCount, deMath));
  return {
    lean: Math.max(0, Math.min(100, Math.round(lean))),
    leanId: leanIdFor(lean),
    mathCount,
    enMath: mathCount - deMath,
    deMath,
    germanCount,
  };
}

export function hybridMockExamId(id: string): string {
  return `${HYBRID_MOCK_EXAM_PREFIX}${id}`;
}

export function parseHybridMockExamId(examId: string): string | null {
  if (!examId.startsWith(HYBRID_MOCK_EXAM_PREFIX)) return null;
  const id = examId.slice(HYBRID_MOCK_EXAM_PREFIX.length);
  return id.length > 0 ? id : null;
}

export function isHybridMockExamId(examId: string): boolean {
  return parseHybridMockExamId(examId) !== null;
}

export type PaperSectionId = "math-en" | "math-de" | "german";

export type PaperSection = {
  id: PaperSectionId;
  label: string;
  count: number;
};

export type TrackSide = "bbe" | "wiso";

/**
 * Focus leads. The other track follows. Spacing follows the two counts,
 * so a longer side is spread through the paper instead of dumped at the end.
 */
export function weaveByLead<T>(leadItems: readonly T[], followItems: readonly T[]): T[] {
  const out: T[] = [];
  let i = 0;
  let j = 0;
  let debt = 0;
  while (i < leadItems.length || j < followItems.length) {
    if (i >= leadItems.length) {
      out.push(followItems[j++]);
      continue;
    }
    if (j >= followItems.length) {
      out.push(leadItems[i++]);
      continue;
    }
    if (debt <= 0) {
      out.push(leadItems[i++]);
      debt += followItems.length;
    } else {
      out.push(followItems[j++]);
      debt -= leadItems.length;
    }
  }
  return out;
}

/** BBE = English mathematics. WiSo = German mathematics and German reading. */
export function focusRhythm(mix: HybridPaperMix): TrackSide[] {
  const bbe = Array.from({ length: mix.enMath }, (): TrackSide => "bbe");
  const wiso = Array.from({ length: mix.deMath + mix.germanCount }, (): TrackSide => "wiso");
  if (mix.leanId === "wiso") return weaveByLead(wiso, bbe);
  return weaveByLead(bbe, wiso);
}

/** Counts only. The sitting order is focusRhythm, one task at a time. */
export function paperSections(mix: HybridPaperMix): PaperSection[] {
  const sections: PaperSection[] = [];
  if (mix.enMath > 0) {
    sections.push({ id: "math-en", label: "Mathematics · English", count: mix.enMath });
  }
  if (mix.deMath > 0) {
    sections.push({ id: "math-de", label: "Mathematics · German", count: mix.deMath });
  }
  if (mix.germanCount > 0) {
    sections.push({ id: "german", label: "German reading", count: mix.germanCount });
  }
  return sections;
}

export function paperTitle(mix: HybridPaperMix): string {
  const lean = mix.leanId === "bbe" ? "BBE" : mix.leanId === "wiso" ? "WiSo" : "Half";
  return `Hybrid paper · ${lean} · ${mix.enMath + mix.deMath + mix.germanCount}q`;
}

export function paperMinutes(questionCount: number): number {
  return questionCount * HYBRID_PAPER_MINUTES_PER_QUESTION;
}
