import type { HybridLeanId } from "@/config/hybrid-mock-builder";
import { todayStamp, type HybridProgress } from "@/lib/hybrid-progress";

export type PlannerItem = {
  id: string;
  title: string;
  blurb: string;
  minutes: number;
  to:
    | "/hybrid/math"
    | "/hybrid/bridge"
    | "/products/full-course-english"
    | "/wiso/products/full-course-german"
    | "/products/full-course-economics"
    | "/wiso/products/full-course-economics"
    | "/hybrid/mock-builder";
  kind: "shared" | "bridge" | "language" | "econ" | "paper";
  lean?: HybridLeanId;
  doneHint?: (p: HybridProgress, stamp: string) => boolean;
};

/** Shared-first day: math once, one bridge concept, then the two language lanes. */
export function buildTodayPlan(progress: HybridProgress): {
  stamp: string;
  items: PlannerItem[];
  completedCount: number;
} {
  const stamp = todayStamp();
  const dayIndex = Math.floor(Date.now() / 86_400_000) % 2;
  const languageFirst = dayIndex === 0 ? "english" : "german";
  const languageSecond = dayIndex === 0 ? "german" : "english";
  const paperLean = (["bbe", "half", "wiso"] as const)[Math.floor(Date.now() / 86_400_000) % 3];

  const items: PlannerItem[] = [
    {
      id: "shared-math",
      title: "Shared math",
      blurb: "One chapter from the shared bank. A fully correct task counts for both exams.",
      minutes: 40,
      to: "/hybrid/math",
      kind: "shared",
      doneHint: (p, day) => p.mathDays.includes(day),
    },
    {
      id: "bridge",
      title: "Bridge case",
      blurb: "One economics concept in English, then the same concept in German.",
      minutes: 20,
      to: "/hybrid/bridge",
      kind: "bridge",
      doneHint: (p, day) => p.bridgeDays.includes(day),
    },
    {
      id: `lang-${languageFirst}`,
      title: languageFirst === "english" ? "English lane" : "German lane",
      blurb:
        languageFirst === "english"
          ? "BBE reading, grammar, and vocabulary. This section does not move the WiSo paper."
          : "WiSo reading comprehension. This section does not move the BBE paper.",
      minutes: 15,
      to:
        languageFirst === "english"
          ? "/products/full-course-english"
          : "/wiso/products/full-course-german",
      kind: "language",
      doneHint: (p) => (languageFirst === "english" ? p.englishSessions > 0 : p.germanSessions > 0),
    },
    {
      id: `lang-${languageSecond}`,
      title: languageSecond === "english" ? "English lane" : "German lane",
      blurb:
        "Keep the second language warm. It is a separate score, not a translation of the first.",
      minutes: 12,
      to:
        languageSecond === "english"
          ? "/products/full-course-english"
          : "/wiso/products/full-course-german",
      kind: "language",
      doneHint: (p) =>
        languageSecond === "english" ? p.englishSessions > 0 : p.germanSessions > 0,
    },
    {
      id: "hybrid-paper",
      title:
        paperLean === "bbe"
          ? "Hybrid paper · BBE"
          : paperLean === "wiso"
            ? "Hybrid paper · WiSo"
            : "Hybrid paper · half",
      blurb:
        "Shared mathematics plus German reading. The lean sets the stem language and how large the German block is.",
      minutes: 30,
      to: "/hybrid/mock-builder",
      kind: "paper",
      lean: paperLean,
      doneHint: (p, day) => p.paperDays.includes(day),
    },
  ];

  const completedCount = items.filter((item) => item.doneHint?.(progress, stamp)).length;
  return { stamp, items, completedCount };
}
