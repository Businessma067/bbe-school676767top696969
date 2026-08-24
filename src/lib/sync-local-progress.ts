import { supabase } from "@/integrations/supabase/client";
import { upsertFlashcardProgress } from "@/lib/activity-tracker";
import { cardKey, loadProgress as loadFlashProgress } from "@/lib/flashcard-progress";
import { recordTaskAttempt } from "@/lib/user-progress";
import { MATH_CHAPTERS } from "@/data/math-chapters";

const MATH_STORAGE = "bbe.math.progress.v1";
const ECON_STORAGE = "bbe.economics.progress.v1";
const ENGLISH_STORAGE = "bbe.english.course.progress.v1";
const FLASH_PREFIX = "bbe-flashcard-progress:";

type LocalListProgress = { passed: string[]; revision: string[] };

function readLocalList(key: string): LocalListProgress {
  if (typeof window === "undefined") return { passed: [], revision: [] };
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { passed: [], revision: [] };
    const p = JSON.parse(raw) as LocalListProgress;
    return { passed: p.passed ?? [], revision: p.revision ?? [] };
  } catch {
    return { passed: [], revision: [] };
  }
}

function findMathTask(taskId: string) {
  for (const ch of MATH_CHAPTERS) {
    const task = ch.tasks.find((t) => t.id === taskId);
    if (task) return { task, chapter: ch };
  }
  return null;
}

async function syncMathProgress(): Promise<void> {
  const local = readLocalList(MATH_STORAGE);
  const ids = [...new Set([...local.passed, ...local.revision])];
  if (ids.length === 0) return;

  const { data: existing } = await supabase
    .from("task_attempts")
    .select("task_key")
    .eq("subject", "math");

  const existingKeys = new Set((existing ?? []).map((r) => r.task_key));

  for (const id of ids) {
    const found = findMathTask(id);
    if (!found) continue;
    const taskKey = `migration:${found.task.case_id || found.task.id}`;
    if (existingKeys.has(taskKey)) continue;

    const passed = local.passed.includes(id);
    const stmtCount = found.task.statements.length || found.task.answer_key.length;
    await recordTaskAttempt({
      subject: "math",
      chapter: `Chapter ${found.chapter.num}`,
      taskKey,
      taskTitle: found.task.title,
      correctCount: passed ? stmtCount : Math.max(0, stmtCount - 1),
      statementCount: stmtCount,
      source: "localStorage_migration",
    });
  }
}

async function syncFlashcards(): Promise<void> {
  if (typeof window === "undefined") return;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(FLASH_PREFIX)) continue;
    const subjectId = key.slice(FLASH_PREFIX.length);
    const map = loadFlashProgress(subjectId);
    for (const [cardId, knowledge] of Object.entries(map)) {
      if (knowledge === "known" || knowledge === "unknown") {
        await upsertFlashcardProgress(subjectId, cardId, knowledge);
      }
    }
  }
}

export async function syncLocalProgressToServer(): Promise<void> {
  const { data } = await supabase.auth.getSession();
  if (!data.session?.user) return;

  await Promise.all([syncMathProgress(), syncFlashcards()]);
}
