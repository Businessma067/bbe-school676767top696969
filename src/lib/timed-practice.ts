import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Base per-question time budget for Timed Practice Mode.
 * Change this single constant to re-balance every difficulty level.
 */
export const DEFAULT_QUESTION_SECONDS = 90;

export type TimedDifficulty = "easy" | "standard" | "hard";

export const DIFFICULTY_MULTIPLIER: Record<TimedDifficulty, number> = {
  easy: 1.5,
  standard: 1,
  hard: 0.7,
};

export const DIFFICULTY_LABEL: Record<TimedDifficulty, string> = {
  easy: "Easy",
  standard: "Standard",
  hard: "Hard",
};

export type QuestionTimerStatus =
  | "not_started"
  | "running"
  | "paused"
  | "timed_out"
  | "overtime"
  | "submitted";

export interface QuestionTimerState {
  status: QuestionTimerStatus;
  allocatedSeconds: number;
  remainingSeconds: number;
  overtimeSeconds: number;
  timedOut: boolean;
  /** true once the user picked "Check the answer" after a timeout → review-only view */
  reviewOnly: boolean;
  /** true while the timeout modal is awaiting a choice */
  awaitingChoice: boolean;
  totalTimeSpentSeconds: number;
}

export type TimedSessionState = Record<string, QuestionTimerState>;

export function allocatedFor(difficulty: TimedDifficulty): number {
  return Math.round(DEFAULT_QUESTION_SECONDS * DIFFICULTY_MULTIPLIER[difficulty]);
}

export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, "0")}`;
}

export function describeSpent(state: QuestionTimerState): string {
  if (!state.timedOut) return `Answered in ${formatClock(state.totalTimeSpentSeconds)}`;
  if (state.overtimeSeconds > 0) {
    return `Answered in ${formatClock(state.allocatedSeconds)} + ${formatClock(
      state.overtimeSeconds,
    )} overtime = ${formatClock(state.totalTimeSpentSeconds)}`;
  }
  return `Timed out after ${formatClock(state.allocatedSeconds)}`;
}

function makeEntry(difficulty: TimedDifficulty): QuestionTimerState {
  const allocated = allocatedFor(difficulty);
  return {
    status: "not_started",
    allocatedSeconds: allocated,
    remainingSeconds: allocated,
    overtimeSeconds: 0,
    timedOut: false,
    reviewOnly: false,
    awaitingChoice: false,
    totalTimeSpentSeconds: 0,
  };
}

/**
 * Session-level timer store. Lives ABOVE the question component, so navigating
 * between questions never resets or restarts a countdown (anti-cheat).
 */
export function useTimedSession() {
  const [enabled, setEnabled] = useState(false);
  const [difficulty, setDifficultyState] = useState<TimedDifficulty>("standard");
  const [state, setState] = useState<TimedSessionState>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeRef = useRef<string | null>(null);
  activeRef.current = activeId;
  const difficultyRef = useRef(difficulty);
  difficultyRef.current = difficulty;
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  /** Freeze a question's clock exactly where it is. */
  const pause = useCallback((id: string) => {
    setState((prev) => {
      const e = prev[id];
      if (!e) return prev;
      if (e.status !== "running" && e.status !== "overtime") return prev;
      return { ...prev, [id]: { ...e, status: "paused" } };
    });
  }, []);

  /**
   * Open (or re-open) a question in timed mode.
   * - not_started → start running
   * - paused → resume
   * - running / overtime → no-op (keep clock)
   * - submitted / timed_out → leave as-is (call resetQuestion to retry)
   */
  const openQuestion = useCallback(
    (id: string | null) => {
      const previous = activeRef.current;
      if (previous && previous !== id) pause(previous);
      setActiveId(id);
      if (!id) return;
      setState((prev) => {
        const existing = prev[id];
        if (!existing) {
          return { ...prev, [id]: { ...makeEntry(difficultyRef.current), status: "running" } };
        }
        if (existing.status === "not_started") {
          return { ...prev, [id]: { ...existing, status: "running" } };
        }
        if (existing.status === "paused") {
          return {
            ...prev,
            [id]: {
              ...existing,
              status: existing.overtimeSeconds > 0 && existing.timedOut ? "overtime" : "running",
            },
          };
        }
        // running / overtime / submitted / timed_out — leave unchanged
        return prev;
      });
    },
    [pause],
  );

  /** Difficulty only affects questions that have not been opened yet. */
  const setDifficulty = useCallback((d: TimedDifficulty) => {
    setDifficultyState(d);
    setState((prev) => {
      const next: TimedSessionState = { ...prev };
      for (const [id, e] of Object.entries(prev)) {
        if (e.status === "not_started") next[id] = makeEntry(d);
      }
      return next;
    });
  }, []);

  const chooseOvertime = useCallback((id: string) => {
    setState((prev) => {
      const e = prev[id];
      if (!e) return prev;
      return { ...prev, [id]: { ...e, status: "overtime", awaitingChoice: false, reviewOnly: false } };
    });
  }, []);

  const chooseReview = useCallback((id: string) => {
    setState((prev) => {
      const e = prev[id];
      if (!e) return prev;
      return { ...prev, [id]: { ...e, status: "timed_out", awaitingChoice: false, reviewOnly: true } };
    });
  }, []);

  const markSubmitted = useCallback((id: string) => {
    setState((prev) => {
      const e = prev[id];
      if (!e) return prev;
      if (e.status === "submitted") return prev;
      const total = e.timedOut
        ? e.allocatedSeconds + e.overtimeSeconds
        : e.allocatedSeconds - e.remainingSeconds;
      return {
        ...prev,
        [id]: { ...e, status: "submitted", awaitingChoice: false, totalTimeSpentSeconds: total },
      };
    });
  }, []);

  /** Clear one question so Timed Mode can start a fresh countdown (Try again). */
  const resetQuestion = useCallback((id: string) => {
    setState((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setState({});
    setActiveId(null);
  }, []);

  const disable = useCallback(() => {
    const current = activeRef.current;
    if (current) pause(current);
    setEnabled(false);
  }, [pause]);

  /**
   * Turn Timed Mode on. When `id` is passed (Timed Mode button), start that
   * question's clock immediately so the UI does not wait on a parent effect.
   */
  const enable = useCallback(
    (id?: string | null) => {
      setEnabled(true);
      if (!id) return;
      const previous = activeRef.current;
      if (previous && previous !== id) pause(previous);
      setActiveId(id);
      setState((prev) => {
        const existing = prev[id];
        if (!existing || existing.status === "not_started" || existing.status === "submitted") {
          return { ...prev, [id]: { ...makeEntry(difficultyRef.current), status: "running" } };
        }
        if (existing.status === "paused") {
          return {
            ...prev,
            [id]: {
              ...existing,
              status: existing.overtimeSeconds > 0 && existing.timedOut ? "overtime" : "running",
            },
          };
        }
        if (existing.status === "timed_out" && existing.reviewOnly) {
          return { ...prev, [id]: { ...makeEntry(difficultyRef.current), status: "running" } };
        }
        // already running / overtime / awaiting timeout choice — keep
        return prev;
      });
    },
    [pause],
  );

  // Active question status — used so the tick effect does not re-subscribe on every second.
  const activeStatus = activeId ? state[activeId]?.status : undefined;

  // 1-second tick for the active question only.
  useEffect(() => {
    if (!enabled || !activeId) return;
    if (activeStatus !== "running" && activeStatus !== "overtime") return;
    const id = activeId;
    const t = window.setInterval(() => {
      if (!enabledRef.current) return;
      setState((prev) => {
        const e = prev[id];
        if (!e) return prev;
        if (e.status === "running") {
          const remaining = e.remainingSeconds - 1;
          if (remaining <= 0) {
            return {
              ...prev,
              [id]: {
                ...e,
                remainingSeconds: 0,
                status: "timed_out",
                timedOut: true,
                awaitingChoice: true,
              },
            };
          }
          return { ...prev, [id]: { ...e, remainingSeconds: remaining } };
        }
        if (e.status === "overtime") {
          return { ...prev, [id]: { ...e, overtimeSeconds: e.overtimeSeconds + 1 } };
        }
        return prev;
      });
    }, 1000);
    return () => window.clearInterval(t);
  }, [enabled, activeId, activeStatus]);

  const get = useCallback((id: string | null | undefined) => (id ? state[id] : undefined), [state]);

  return {
    enabled,
    enable,
    disable,
    difficulty,
    setDifficulty,
    state,
    get,
    activeId,
    openQuestion,
    pause,
    chooseOvertime,
    chooseReview,
    markSubmitted,
    resetQuestion,
    reset,
  };
}

export type TimedSession = ReturnType<typeof useTimedSession>;
