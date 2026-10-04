import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { MathTasksPage } from "@/components/MathTasksPage";
import { loadMathChapterTasks } from "@/data/math-chapters";
import { loadWisoMathChapterTasks } from "@/data/wiso-math-chapters";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { loadHybridProgress, patchHybridProgress } from "@/lib/hybrid-progress";
import { cn } from "@/lib/utils";

const MATH_STORAGE = "hybrid.math.progress.v1";

export const Route = createFileRoute("/hybrid/math")({
  head: () => ({
    meta: [
      { title: "Shared Math — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridMathPage,
});

function HybridMathPage() {
  const [lang, setLang] = useState<"en" | "de">("en");

  const loadChapterTasks = useCallback(
    async (num: number) => {
      return lang === "de"
        ? loadWisoMathChapterTasks(num, "de")
        : loadMathChapterTasks(num);
    },
    [lang],
  );

  // Sync MathTasksPage progress into Twin Readiness shared-math ring.
  useEffect(() => {
    const sync = () => {
      try {
        const raw = localStorage.getItem(MATH_STORAGE);
        if (!raw) return;
        const parsed = JSON.parse(raw) as { passed?: string[] };
        const passed = Array.isArray(parsed.passed) ? parsed.passed : [];
        const current = loadHybridProgress();
        const merged = Array.from(new Set([...current.sharedMathPassed, ...passed]));
        if (merged.length !== current.sharedMathPassed.length) {
          patchHybridProgress({ sharedMathPassed: merged });
        }
      } catch {
        /* ignore */
      }
    };
    sync();
    const id = window.setInterval(sync, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <MathTasksPage
      key={lang}
      tier="full"
      backTo="/hybrid"
      backLabel="← Hybrid hub"
      storageKey={MATH_STORAGE}
      loadChapterTasks={loadChapterTasks}
      contentLang={lang}
      examLabel="WU Hybrid (BBE + WiSo)"
      fullCourseHref="/products/hybrid-course"
      headerActions={
        <div className="inline-flex rounded-lg border border-border p-0.5">
          {(["en", "de"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={cn(
                "rounded-md px-2.5 py-1 text-[11px] font-semibold",
                lang === l ? "text-white" : "text-foreground",
              )}
              style={lang === l ? { backgroundColor: HYBRID_ACCENT } : undefined}
            >
              {l === "en" ? "EN" : "DE"}
            </button>
          ))}
        </div>
      }
    />
  );
}
