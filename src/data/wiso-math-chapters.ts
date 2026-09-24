/**
 * German syllabus chrome for WiSo Math — same chapter numbers / banks as BBE Full Course.
 * Task stems/explanations load from BBE banks and are overlaid with German translations.
 * Pass `lang: "en"` to skip overlays (admin English preview).
 */

import {
  loadMathChapterTasks,
  loadDemoMathChapterTasks,
  type MathChapter,
  type MathSubsection,
  type MathTask,
} from "@/data/math-chapters";

export type WisoMathContentLang = "de" | "en";

export const WISO_MATH_CHAPTER_TITLES = [
  "Logik",
  "Elementare Algebra",
  "Finanzmathematik",
  "Gleichungen",
  "Lineare Gleichungen mit zwei Unbekannten",
  "Ungleichungen",
  "Lineare und quadratische Funktionen",
  "Potenzfunktionen",
  "Polynomfunktionen",
  "Exponential- und Logarithmusfunktionen",
  "Differenzialrechnung und Optimierung",
  "Elementare Wahrscheinlichkeitsrechnung",
  "Binomialverteilung",
] as const;

const WISO_MATH_SUBSECTIONS: Partial<Record<number, readonly MathSubsection[]>> = {
  1: [
    { id: "1.1", title: "Mengen: Elemente, Teilmengen & Potenzmengen" },
    { id: "1.2", title: "Mengenoperationen, Komplemente & Abzählen" },
    { id: "1.3", title: "Aussagenlogik & Implikationen" },
    { id: "1.4", title: "Quantoren, Gültigkeit & Schlussfolgern" },
    { id: "1.5", title: "Prüfungsstil" },
  ],
  2: [
    { id: "2.1", title: "Ausmultiplizieren, Faktorisieren und Identitäten" },
    { id: "2.2", title: "Rationale Ausdrücke und algebraische Brüche" },
    { id: "2.3", title: "Potenzen, Wurzeln und negative Exponenten" },
    { id: "2.4", title: "Betrag und algebraisches Umformen" },
    { id: "2.5", title: "Prüfungsstil" },
  ],
  3: [
    { id: "3.1", title: "Zinsperioden und Effektivzinsen" },
    { id: "3.2", title: "Stetige Verzinsung" },
    { id: "3.3", title: "Barwert" },
    { id: "3.4", title: "Geometrische Reihen" },
    { id: "3.5", title: "Renten, vorschüssige Renten & ewige Renten" },
    { id: "3.6", title: "Hypothekenrückzahlung" },
    { id: "3.7", title: "Interner Zinsfuß" },
    { id: "3.8", title: "Prüfungsstil" },
  ],
  4: [
    { id: "4.1", title: "Lineare Gleichungen mit einer Unbekannten" },
    { id: "4.2", title: "Quadratische Gleichungen" },
    { id: "4.3", title: "Rationale, Wurzel- und Betragsgleichungen" },
    { id: "4.4", title: "Exponential- und Logarithmusgleichungen" },
    { id: "4.5", title: "Prüfungsstil" },
  ],
  5: [
    { id: "5", title: "Lineare Gleichungen mit zwei Unbekannten" },
    { id: "5.5", title: "Prüfungsstil" },
  ],
  6: [
    { id: "6.1", title: "Rationale Ungleichungen" },
    { id: "6.2", title: "Quadratische Vorzeichen-Ungleichungen" },
    { id: "6.3", title: "Zusammengesetzte & spezielle Ungleichungen" },
    { id: "6.4", title: "Textaufgaben" },
    { id: "6.5", title: "Prüfungsstil" },
  ],
  7: [
    { id: "7", title: "Lineare und quadratische Funktionen" },
    { id: "7.5", title: "Prüfungsstil" },
  ],
  8: [
    { id: "8", title: "Potenzfunktionen" },
    { id: "8.5", title: "Prüfungsstil" },
  ],
  9: [
    { id: "9", title: "Polynomfunktionen" },
    { id: "9.5", title: "Prüfungsstil" },
  ],
  10: [
    { id: "10.1", title: "Exponentialfunktionen" },
    { id: "10.2", title: "Logarithmusfunktionen" },
    { id: "10.3", title: "Prüfungsstil" },
  ],
  11: [
    { id: "11.1", title: "Differenziationsregeln & Technik" },
    { id: "11.2", title: "Ökonomische Interpretation der Ableitung" },
    { id: "11.3", title: "Optima finden und klassifizieren" },
    { id: "11.4", title: "Graphen ohne Algebra lesen" },
    { id: "11.5", title: "Prüfungsstil" },
  ],
  12: [
    { id: "12.1", title: "Kombinatorische Wahrscheinlichkeit" },
    { id: "12.2", title: "Einschluss-Ausschluss" },
    { id: "12.3", title: "Bedingte Wahrscheinlichkeit" },
    { id: "12.4", title: "Erwartungswert, Varianz & Standardabweichung" },
    { id: "12.5", title: "Satz von Bayes" },
    { id: "12.6", title: "Prüfungsstil" },
  ],
  13: [
    { id: "13", title: "Binomialverteilung" },
    { id: "13.5", title: "Prüfungsstil" },
  ],
};

export const WISO_MATH_CHAPTERS: MathChapter[] = WISO_MATH_CHAPTER_TITLES.map((title, i) => {
  const num = i + 1;
  return {
    num,
    title,
    tasks: [],
    subsections: WISO_MATH_SUBSECTIONS[num],
  };
});

type DeOverlay = Partial<
  Pick<MathTask, "title" | "context" | "statements" | "tactical_explanations" | "solution_overview">
>;

const overlayCache = new Map<number, Record<string, DeOverlay>>();

const OVERLAY_LOADERS: Record<number, () => Promise<{ default: Record<string, DeOverlay> }>> = {
  1: () => import("./wiso/math-de-ch1.json"),
  2: () => import("./wiso/math-de-ch2.json"),
  3: () => import("./wiso/math-de-ch3.json"),
  4: () => import("./wiso/math-de-ch4.json"),
  5: () => import("./wiso/math-de-ch5.json"),
  6: () => import("./wiso/math-de-ch6.json"),
  7: () => import("./wiso/math-de-ch7.json"),
  8: () => import("./wiso/math-de-ch8.json"),
  9: () => import("./wiso/math-de-ch9.json"),
  10: () => import("./wiso/math-de-ch10.json"),
  11: () => import("./wiso/math-de-ch11.json"),
  12: () => import("./wiso/math-de-ch12.json"),
  13: () => import("./wiso/math-de-ch13.json"),
};

async function loadChapterOverlay(num: number): Promise<Record<string, DeOverlay>> {
  if (overlayCache.has(num)) return overlayCache.get(num)!;
  const load = OVERLAY_LOADERS[num];
  if (!load) {
    overlayCache.set(num, {});
    return {};
  }
  try {
    const mod = await load();
    const rows = (mod.default ?? {}) as Record<string, DeOverlay>;
    overlayCache.set(num, rows);
    return rows;
  } catch {
    const empty = {};
    overlayCache.set(num, empty);
    return empty;
  }
}

let hardDemoDeCache: Record<string, DeOverlay> | null = null;

async function loadHardDemoDeOverlay(): Promise<Record<string, DeOverlay>> {
  if (hardDemoDeCache) return hardDemoDeCache;
  try {
    const hard = await import("./wiso/math-de-demo-hard.json");
    hardDemoDeCache = (hard.default ?? {}) as Record<string, DeOverlay>;
  } catch {
    hardDemoDeCache = {};
  }
  return hardDemoDeCache;
}

const GENERIC_DE_STEM =
  /^Bewerte jede Aussage\.?\s*Markiere sie mit Richtig oder Falsch\.?\s*$/i;
const GENERIC_EN_STEM =
  /^Evaluate each statement\.?\s*(Mark (it|them) (TRUE|True|true|Correct) or FALSE\.?)?\s*$/i;

/** Prefer EN when DE overlay left stem/overview empty or wiped to a generic prompt. */
function pickOverlayText(
  overlayValue: string | undefined,
  fallback: string | undefined,
  opts: { treatGenericAsMissing?: boolean } = {},
): string | undefined {
  if (overlayValue == null) return fallback;
  const trimmed = overlayValue.trim();
  if (trimmed === "") return fallback ?? overlayValue;
  if (
    opts.treatGenericAsMissing &&
    fallback &&
    GENERIC_DE_STEM.test(trimmed) &&
    !GENERIC_EN_STEM.test(fallback.trim()) &&
    fallback.trim().length > trimmed.length + 40
  ) {
    return fallback;
  }
  return overlayValue;
}

function applyOverlay(task: MathTask, overlay: DeOverlay | undefined): MathTask {
  if (!overlay) return task;
  return {
    ...task,
    title: overlay.title ?? task.title,
    context: pickOverlayText(overlay.context, task.context, {
      treatGenericAsMissing: true,
    }) ?? task.context,
    statements: overlay.statements ?? task.statements,
    tactical_explanations: overlay.tactical_explanations ?? task.tactical_explanations,
    solution_overview: pickOverlayText(overlay.solution_overview, task.solution_overview),
  };
}

/** Same BBE Full Course banks; German overlays applied unless `lang` is `"en"`. */
export async function loadWisoMathChapterTasks(
  num: number,
  lang: WisoMathContentLang = "de",
): Promise<MathTask[]> {
  const tasks = await loadMathChapterTasks(num);
  if (lang === "en") return tasks;
  const overlay = await loadChapterOverlay(num);
  return tasks.map((t) => applyOverlay(t, overlay[t.case_id] ?? overlay[t.id]));
}

/**
 * WiSo demo practice: harder free-window stems + matching DE overlay,
 * without clobbering the full-course chapter banks.
 */
export async function loadWisoDemoMathChapterTasks(
  num: number,
  lang: WisoMathContentLang = "de",
): Promise<MathTask[]> {
  const tasks = await loadDemoMathChapterTasks(num);
  if (lang === "en") return tasks;
  const [chapterOverlay, hardDe] = await Promise.all([
    loadChapterOverlay(num),
    loadHardDemoDeOverlay(),
  ]);
  return tasks.map((t) => {
    const overlay = hardDe[t.case_id] ?? chapterOverlay[t.case_id] ?? chapterOverlay[t.id];
    return applyOverlay(t, overlay);
  });
}
