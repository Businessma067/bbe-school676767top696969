"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PracticeCaseSubject = "math" | "english" | "economics";

export type PracticeCasePayload = {
  subject: PracticeCaseSubject;
  chapterLabel: string;
  taskId: string;
  title: string;
  /** Case stem / passage / theory body. */
  context: string;
  statements: string[];
  solutionOverview?: string;
  theorySnippet?: string;
  /** Authored A–E explanations (case database). */
  tacticalExplanations?: string[];
  answerKey?: boolean[];
};

type PracticeCaseActions = {
  setCasePayload: (payload: PracticeCasePayload | null) => void;
};

/** Payload-only context — consumers re-render when the active case changes. */
const PracticeCasePayloadContext = createContext<PracticeCasePayload | null>(null);

/** Stable actions — does not re-render when case payload changes. */
const PracticeCaseActionsContext = createContext<PracticeCaseActions | null>(null);

const MAX_STEM = 8000;
const MAX_STATEMENT = 1200;
const MAX_OVERVIEW = 5000;
const MAX_TACTICAL = 4500;

export function truncatePracticeText(text: string, max: number): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

export function compactPracticeCase(payload: PracticeCasePayload): PracticeCasePayload {
  return {
    ...payload,
    context: truncatePracticeText(payload.context, MAX_STEM),
    statements: payload.statements.map((s) => truncatePracticeText(s, MAX_STATEMENT)),
    solutionOverview: payload.solutionOverview
      ? truncatePracticeText(payload.solutionOverview, MAX_OVERVIEW)
      : undefined,
    theorySnippet: payload.theorySnippet
      ? truncatePracticeText(payload.theorySnippet, MAX_STEM)
      : undefined,
    tacticalExplanations: payload.tacticalExplanations?.map((e) =>
      truncatePracticeText(e, MAX_TACTICAL),
    ),
    answerKey: payload.answerKey,
  };
}

export function PracticeCaseProvider({ children }: { children: ReactNode }) {
  const [casePayload, setCasePayloadState] = useState<PracticeCasePayload | null>(null);

  const setCasePayload = useCallback((payload: PracticeCasePayload | null) => {
    setCasePayloadState(payload ? compactPracticeCase(payload) : null);
  }, []);

  const actions = useMemo(
    () => ({
      setCasePayload,
    }),
    [setCasePayload],
  );

  return (
    <PracticeCaseActionsContext.Provider value={actions}>
      <PracticeCasePayloadContext.Provider value={casePayload}>
        {children}
      </PracticeCasePayloadContext.Provider>
    </PracticeCaseActionsContext.Provider>
  );
}

export function usePracticeCase(): PracticeCasePayload | null {
  return useContext(PracticeCasePayloadContext);
}

export function useSetPracticeCase(): (payload: PracticeCasePayload | null) => void {
  const ctx = useContext(PracticeCaseActionsContext);
  return ctx?.setCasePayload ?? (() => {});
}

