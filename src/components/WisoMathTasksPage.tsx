import { useCallback, useEffect, useMemo, useState } from "react";
import { Languages } from "lucide-react";
import { MathTasksPage } from "@/components/MathTasksPage";
import { supabase } from "@/integrations/supabase/client";
import { isAdminEmail } from "@/lib/admin-access";
import { MATH_CHAPTERS } from "@/data/math-chapters";
import {
  WISO_MATH_CHAPTERS,
  loadWisoMathChapterTasks,
  type WisoMathContentLang,
} from "@/data/wiso-math-chapters";
import { getWisoMathCourseTheory } from "@/data/wiso-math-course-theory";
import { getMathCourseTheory } from "@/data/math-course-theory";
import { cn } from "@/lib/utils";

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
 * WiSo math practice with German as the default student language.
 * Admin accounts can switch to the original English bank for review.
 */
export function WisoMathTasksPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [lang, setLang] = useState<WisoMathContentLang>("de");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const { data } = await supabase.auth.getSession();
      const email = data.session?.user?.email ?? null;
      const admin = isAdminEmail(email);
      if (cancelled) return;
      setIsAdmin(admin);
      const stored = readStoredLang();
      setLang(admin ? stored : "de");
      setReady(true);
    })();
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      const admin = isAdminEmail(session?.user?.email ?? null);
      setIsAdmin(admin);
      if (!admin) setLang("de");
    });
    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
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
    <div className="relative">
      {isAdmin ? (
        <div className="pointer-events-none fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6">
          <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-card/95 p-1 shadow-lg backdrop-blur">
            <span className="flex items-center gap-1.5 px-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              <Languages className="h-3.5 w-3.5" aria-hidden="true" />
              Admin
            </span>
            <button
              type="button"
              onClick={() => setContentLang("de")}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                lang === "de"
                  ? "bg-indigo-700 text-white"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
              aria-pressed={lang === "de"}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setContentLang("en")}
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
                lang === "en"
                  ? "bg-indigo-700 text-white"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
        </div>
      ) : null}
      <MathTasksPage
        key={`wiso-math-${lang}`}
        tier="full"
        backTo="/wiso/products/full-course-subjects"
        chapters={chapters}
        loadChapterTasks={loadChapterTasks}
        getTheory={getTheory}
        storageKey="wiso.math.progress.v1"
        contentLang={lang}
      />
    </div>
  );
}
