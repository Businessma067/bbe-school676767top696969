import { useCallback, useEffect, useMemo, useState } from "react";
import { MathTasksPage } from "@/components/MathTasksPage";
import { TaskContentLangToggle } from "@/components/TaskContentLangToggle";
import { MATH_CHAPTERS } from "@/data/math-chapters";
import {
  WISO_MATH_CHAPTERS,
  loadWisoMathChapterTasks,
  type WisoMathContentLang,
} from "@/data/wiso-math-chapters";
import { getWisoMathCourseTheory } from "@/data/wiso-math-course-theory";
import { getMathCourseTheory } from "@/data/math-course-theory";

const LANG_STORAGE_KEY = "wiso.math.contentLang.v1";

function readStoredLang(): WisoMathContentLang {
  if (typeof window === "undefined") return "de";
  try {
    const raw = localStorage.getItem(LANG_STORAGE_KEY);
    return raw === "en" ? "en" : "de";
  } catch {
    return "de";
  }
}

/**
 * WiSo math practice — German overlays by default.
 * EN switches to the original BBE English bank (no live translation).
 */
export function WisoMathTasksPage() {
  const [lang, setLang] = useState<WisoMathContentLang>("de");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLang(readStoredLang());
    setReady(true);
  }, []);

  const setContentLang = useCallback((next: WisoMathContentLang) => {
    setLang(next);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const chapters = lang === "en" ? MATH_CHAPTERS : WISO_MATH_CHAPTERS;
  const getTheory = lang === "en" ? getMathCourseTheory : getWisoMathCourseTheory;

  const loadChapterTasks = useMemo(
    () => (num: number) => loadWisoMathChapterTasks(num, lang),
    [lang],
  );

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <p className="text-sm text-muted-foreground">Mathematik wird geladen…</p>
      </div>
    );
  }

  return (
    <MathTasksPage
      key={`wiso-math-${lang}`}
      tier="full"
      backTo="/wiso/products/full-course-subjects"
      chapters={chapters}
      loadChapterTasks={loadChapterTasks}
      getTheory={getTheory}
      storageKey="wiso.math.progress.v1"
      contentLang={lang}
      headerActions={
        <TaskContentLangToggle lang={lang} onChange={setContentLang} label="Task" />
      }
    />
  );
}
