import { useEffect, useState } from "react";
import {
  getFlashcardSubject,
  getFlashcardSubjectMeta,
  type FlashcardSubject,
} from "@/data/flashcards";
import {
  getWisoFlashcardSubject,
  getWisoFlashcardSubjectMeta,
  type WisoFlashcardSubject,
} from "@/data/wiso-flashcards";

/** Load one BBE flashcard deck on demand. */
export function useFlashcardSubject(subjectId: string) {
  const meta = getFlashcardSubjectMeta(subjectId);
  const [subject, setSubject] = useState<FlashcardSubject | null>(null);

  useEffect(() => {
    let cancel = false;
    setSubject(null);
    if (!meta || meta.comingSoon) return;
    void getFlashcardSubject(subjectId).then((deck) => {
      if (!cancel) setSubject(deck ?? null);
    });
    return () => {
      cancel = true;
    };
  }, [subjectId, meta]);

  return { meta, subject, loading: !!meta && !meta.comingSoon && !subject };
}

/** Load one WiSo flashcard deck on demand. */
export function useWisoFlashcardSubject(subjectId: string) {
  const meta = getWisoFlashcardSubjectMeta(subjectId);
  const [subject, setSubject] = useState<WisoFlashcardSubject | null>(null);

  useEffect(() => {
    let cancel = false;
    setSubject(null);
    if (!meta || meta.comingSoon) return;
    void getWisoFlashcardSubject(subjectId).then((deck) => {
      if (!cancel) setSubject(deck ?? null);
    });
    return () => {
      cancel = true;
    };
  }, [subjectId, meta]);

  return { meta, subject, loading: !!meta && !meta.comingSoon && !subject };
}
