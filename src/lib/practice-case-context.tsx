"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
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

export type OpenAssistantPrompt = {
  selection: string;
  intent: "explain";
};

type AssistantBridge = {
  openWithExplain: (selection: string) => void;
  openAndFocus?: () => void;
};

type PracticeCaseContextValue = {
  casePayload: PracticeCasePayload | null;
  setCasePayload: (payload: PracticeCasePayload | null) => void;
  registerAssistant: (bridge: AssistantBridge | null) => void;
  openAssistantWithPrompt: (opts: OpenAssistantPrompt) => void;
};

const PracticeCaseContext = createContext<PracticeCaseContextValue | null>(null);

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
  const bridgeRef = useRef<AssistantBridge | null>(null);

  const setCasePayload = useCallback((payload: PracticeCasePayload | null) => {
    setCasePayloadState(payload ? compactPracticeCase(payload) : null);
  }, []);

  const registerAssistant = useCallback((bridge: AssistantBridge | null) => {
    bridgeRef.current = bridge;
  }, []);

  const openAssistantWithPrompt = useCallback((opts: OpenAssistantPrompt) => {
    const selection = opts.selection.trim();
    if (!selection) return;
    bridgeRef.current?.openWithExplain(selection);
  }, []);

  const value = useMemo(
    () => ({
      casePayload,
      setCasePayload,
      registerAssistant,
      openAssistantWithPrompt,
    }),
    [casePayload, setCasePayload, registerAssistant, openAssistantWithPrompt],
  );

  return (
    <PracticeCaseContext.Provider value={value}>{children}</PracticeCaseContext.Provider>
  );
}

export function usePracticeCase(): PracticeCasePayload | null {
  return useContext(PracticeCaseContext)?.casePayload ?? null;
}

export function useSetPracticeCase(): (payload: PracticeCasePayload | null) => void {
  const ctx = useContext(PracticeCaseContext);
  return ctx?.setCasePayload ?? (() => {});
}

export function usePracticeCaseActions() {
  const ctx = useContext(PracticeCaseContext);
  return {
    registerAssistant: ctx?.registerAssistant ?? (() => {}),
    openAssistantWithPrompt: ctx?.openAssistantWithPrompt ?? (() => {}),
  };
}
