import { todayStamp, type HybridProgress } from "@/lib/hybrid-progress";

export type PlannerItem = {
  id: string;
  title: string;
  blurb: string;
  minutes: number;
  to: string;
  kind: "shared" | "bridge" | "language" | "format";
  doneHint?: (p: HybridProgress) => boolean;
};

/** Shared-first daily pack — one homework stream for both exams. */
export function buildTodayPlan(progress: HybridProgress): {
  stamp: string;
  items: PlannerItem[];
  completedCount: number;
} {
  const stamp = todayStamp();
  const dayIndex = Math.floor(Date.now() / 86_400_000) % 2;
  const languageFirst = dayIndex === 0 ? "english" : "german";
  const languageSecond = dayIndex === 0 ? "german" : "english";

  const items: PlannerItem[] = [
    {
      id: "shared-math",
      title: "Shared Math block",
      blurb: "One math pack that counts for both BBE and WiSo readiness.",
      minutes: 40,
      to: "/hybrid/math",
      kind: "shared",
      doneHint: (p) => p.plannerDays.includes(stamp) || p.sharedMathPassed.length > 0,
    },
    {
      id: "bridge",
      title: "Bridge Cases",
      blurb: "Same economics concept in English and German, back to back.",
      minutes: 20,
      to: "/hybrid/bridge",
      kind: "bridge",
      doneHint: (p) => p.bridgePassed.length > 0,
    },
    {
      id: `lang-${languageFirst}`,
      title: languageFirst === "english" ? "English lane" : "German lane",
      blurb:
        languageFirst === "english"
          ? "BBE language overlay — reading / grammar / vocab."
          : "WiSo German reading overlay — deutsches Sprachverständnis.",
      minutes: 15,
      to: languageFirst === "english" ? "/products/full-course-english" : "/wiso/products/full-course-german",
      kind: "language",
      doneHint: (p) =>
        languageFirst === "english" ? p.englishSessions > 0 : p.germanSessions > 0,
    },
    {
      id: `lang-${languageSecond}`,
      title: languageSecond === "english" ? "English lane (light)" : "German lane (light)",
      blurb: "Keep the second language warm without doubling the shared core.",
      minutes: 12,
      to:
        languageSecond === "english"
          ? "/products/full-course-english"
          : "/wiso/products/full-course-german",
      kind: "language",
    },
    {
      id: "format",
      title: dayIndex === 0 ? "Exam Flip sprint" : "Mirror Drill",
      blurb:
        dayIndex === 0
          ? "Switch BBE ↔ WiSo scoring on the same ideas."
          : "Alternate EN/DE wording until the concept is language-proof.",
      minutes: 15,
      to: dayIndex === 0 ? "/hybrid/exam-flip" : "/hybrid/mirror",
      kind: "format",
      doneHint: (p) =>
        dayIndex === 0 ? p.examFlipSessions > 0 : p.mirrorPassed.length > 0,
    },
  ];

  const completedCount = items.filter((item) => item.doneHint?.(progress)).length;
  return { stamp, items, completedCount };
}
