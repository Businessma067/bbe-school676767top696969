// Per-plan practice history stored in localStorage.
// Records each graded case attempt with date + accuracy so the dashboard
// can render daily activity heatmaps and per-day breakdowns.

export type Plan = "demo" | "full";

export type AttemptEntry = {
  date: string;      // YYYY-MM-DD (local)
  caseId: string;
  correct: number;   // 0..total
  total: number;     // usually 5
  ts: number;        // epoch ms
};

const KEY = (plan: Plan) => `bbe.history.${plan}.v1`;

function todayLocal(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function loadHistory(plan: Plan): AttemptEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY(plan));
    if (!raw) return [];
    const arr = JSON.parse(raw) as AttemptEntry[];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function recordAttempt(plan: Plan, caseId: string, correct: number, total = 5) {
  if (typeof window === "undefined") return;
  const entries = loadHistory(plan);
  entries.push({ date: todayLocal(), caseId, correct, total, ts: Date.now() });
  try {
    localStorage.setItem(KEY(plan), JSON.stringify(entries));
    window.dispatchEvent(new CustomEvent("bbe:history-updated", { detail: { plan } }));
  } catch {}
}

export type DayStat = { date: string; tasks: number; correct: number; total: number; accuracy: number };

export function dailyAggregate(plan: Plan): Map<string, DayStat> {
  const map = new Map<string, DayStat>();
  for (const e of loadHistory(plan)) {
    const cur = map.get(e.date) ?? { date: e.date, tasks: 0, correct: 0, total: 0, accuracy: 0 };
    cur.tasks += 1;
    cur.correct += e.correct;
    cur.total += e.total;
    cur.accuracy = cur.total > 0 ? Math.round((cur.correct / cur.total) * 100) : 0;
    map.set(e.date, cur);
  }
  return map;
}

export function planTotals(plan: Plan) {
  const entries = loadHistory(plan);
  const tasks = entries.length;
  const correct = entries.reduce((a, e) => a + e.correct, 0);
  const total = entries.reduce((a, e) => a + e.total, 0);
  const passed = entries.filter((e) => e.correct === e.total).length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const activeDays = new Set(entries.map((e) => e.date)).size;
  return { tasks, correct, total, passed, accuracy, activeDays };
}
