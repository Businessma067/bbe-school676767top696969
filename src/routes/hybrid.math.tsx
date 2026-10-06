import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { MathTasksPage } from "@/components/MathTasksPage";
import { HybridShell } from "@/components/hybrid/HybridShell";
import { BilingualMathDesk } from "@/components/hybrid/BilingualMathDesk";
import { SharedMathLibrary } from "@/components/hybrid/SharedMathLibrary";
import { loadMathChapterTasks } from "@/data/math-chapters";
import { loadWisoMathChapterTasks } from "@/data/wiso-math-chapters";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { HYBRID_MATH_STORAGE_KEY, syncSharedMathIntoHybrid } from "@/lib/hybrid-math";
import { cn } from "@/lib/utils";

type MathSearch = { chapter?: number; view?: "split" };

export const Route = createFileRoute("/hybrid/math")({
  validateSearch: (search: Record<string, unknown>): MathSearch => {
    const raw = search.chapter;
    const n = typeof raw === "number" ? raw : typeof raw === "string" ? Number(raw) : NaN;
    const chapter = Number.isInteger(n) && n >= 1 && n <= 13 ? n : undefined;
    if (chapter == null) return {};
    return search.view === "split" ? { chapter, view: "split" } : { chapter };
  },
  head: () => ({
    meta: [
      { title: "Shared Math — Hybrid Course | BBE School" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridMathPage,
});

function HybridMathPage() {
  const { chapter, view } = Route.useSearch();
  const [lang, setLang] = useState<"en" | "de">("en");

  useEffect(() => {
    const sync = () => syncSharedMathIntoHybrid();
    sync();
    const id = window.setInterval(sync, 4000);
    return () => window.clearInterval(id);
  }, []);

  const loadChapterTasks = useCallback(
    async (num: number) => {
      return lang === "de" ? loadWisoMathChapterTasks(num, "de") : loadMathChapterTasks(num);
    },
    [lang],
  );

  if (chapter == null) {
    return (
      <HybridShell
        title="Shared Math"
        lead="Thirteen chapters, one progress store. Open a chapter as a paper, or take the same task in order: BBE, then WiSo, or the other way around."
      >
        <SharedMathLibrary />
      </HybridShell>
    );
  }

  if (view === "split") {
    return (
      <HybridShell
        title="Shared Math"
        lead="One task on screen. The focus sets whether BBE or WiSo comes first. The other language of that task is the next step."
      >
        <div className="mb-4">
          <Link
            to="/hybrid/math"
            search={{}}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Library
          </Link>
        </div>
        <BilingualMathDesk chapter={chapter} />
      </HybridShell>
    );
  }

  return (
    <MathTasksPage
      key={`${lang}-${chapter}`}
      tier="full"
      initialChapter={chapter}
      storageKey={HYBRID_MATH_STORAGE_KEY}
      loadChapterTasks={loadChapterTasks}
      contentLang={lang}
      examLabel="WU Hybrid (BBE + WiSo)"
      fullCourseHref="/products/hybrid-course"
      headerActions={
        <div className="flex items-center gap-2">
          <Link
            to="/hybrid/math"
            search={{}}
            className="rounded-md border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground"
          >
            Library
          </Link>
          <Link
            to="/hybrid/math"
            search={{ chapter, view: "split" }}
            className="rounded-md border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground"
          >
            In order
          </Link>
          <div className="inline-flex rounded-lg border border-border p-0.5">
            {(["en", "de"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-[11px] font-semibold",
                  lang === code ? "text-white" : "text-foreground",
                )}
                style={lang === code ? { backgroundColor: HYBRID_ACCENT } : undefined}
              >
                {code === "en" ? "EN" : "DE"}
              </button>
            ))}
          </div>
        </div>
      }
    />
  );
}
