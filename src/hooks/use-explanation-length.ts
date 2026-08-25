import { useCallback, useEffect, useState } from "react";
import {
  DEFAULT_EXPLANATION_LENGTH,
  EXPLANATION_LENGTH_EVENT,
  EXPLANATION_LENGTH_STORAGE_KEY,
  isExplanationLength,
  loadExplanationLength,
  saveExplanationLength,
  type ExplanationLength,
} from "@/lib/explanation-length";

export type { ExplanationLength };

/** Shared Short/Full preference. Default is the compressed phone-friendly version. */
export function useExplanationLength(): [ExplanationLength, (next: ExplanationLength) => void] {
  const [length, setLength] = useState<ExplanationLength>(DEFAULT_EXPLANATION_LENGTH);

  useEffect(() => {
    setLength(loadExplanationLength());
    const onStorage = (event: StorageEvent) => {
      if (event.key === EXPLANATION_LENGTH_STORAGE_KEY && isExplanationLength(event.newValue)) {
        setLength(event.newValue);
      }
    };
    const onCustom = (event: Event) => {
      const next = (event as CustomEvent).detail;
      if (isExplanationLength(next)) setLength(next);
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(EXPLANATION_LENGTH_EVENT, onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EXPLANATION_LENGTH_EVENT, onCustom);
    };
  }, []);

  const update = useCallback((next: ExplanationLength) => {
    setLength(next);
    saveExplanationLength(next);
  }, []);

  return [length, update];
}
