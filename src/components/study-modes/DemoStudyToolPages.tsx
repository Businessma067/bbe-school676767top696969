import { useEffect, useState } from "react";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { FlashcardSubjectView } from "@/components/study-modes/FlashcardSubjectView";
import { MatchingSubjectView } from "@/components/study-modes/MatchingSubjectView";
import { TutorExamSubjectView } from "@/components/study-modes/TutorExamSubjectView";
import {
  FLASHCARD_SUBJECTS,
  getFlashcardSubject,
  getFlashcardSubjectMeta,
} from "@/data/flashcards";
import {
  WISO_FLASHCARD_SUBJECTS,
  getWisoFlashcardSubject,
  getWisoFlashcardSubjectMeta,
} from "@/data/wiso-flashcards";
import type { FlashcardSubjectViewModel } from "@/components/study-modes/FlashcardSubjectView";

export type DemoStudyToolKind = "flashcards" | "matching" | "tutor-exam";
export type DemoStudyTrack = "bbe" | "wiso";

function subjectsHref(track: DemoStudyTrack, kind: DemoStudyToolKind) {
  if (track === "wiso") {
    if (kind === "flashcards") return "/wiso/demo-practice/flashcards";
    if (kind === "matching") return "/wiso/demo-practice/matching";
    return "/wiso/demo-practice/tutor-exam";
  }
  if (kind === "flashcards") return "/demo-practice/flashcards";
  if (kind === "matching") return "/demo-practice/matching";
  return "/demo-practice/tutor-exam";
}

function subjectPath(
  track: DemoStudyTrack,
  kind: DemoStudyToolKind,
):
  | "/demo-practice/flashcards/$subject"
  | "/demo-practice/matching/$subject"
  | "/demo-practice/tutor-exam/$subject"
  | "/wiso/demo-practice/flashcards/$subject"
  | "/wiso/demo-practice/matching/$subject"
  | "/wiso/demo-practice/tutor-exam/$subject" {
  if (track === "wiso") {
    if (kind === "flashcards") return "/wiso/demo-practice/flashcards/$subject";
    if (kind === "matching") return "/wiso/demo-practice/matching/$subject";
    return "/wiso/demo-practice/tutor-exam/$subject";
  }
  if (kind === "flashcards") return "/demo-practice/flashcards/$subject";
  if (kind === "matching") return "/demo-practice/matching/$subject";
  return "/demo-practice/tutor-exam/$subject";
}

function backHref(track: DemoStudyTrack) {
  return track === "wiso" ? "/wiso/demo-practice" : "/demo-practice";
}

function productSlug(track: DemoStudyTrack) {
  return track === "wiso" ? "wiso-full-course" : undefined;
}

export function DemoStudyToolIndexPage({
  track,
  kind,
}: {
  track: DemoStudyTrack;
  kind: DemoStudyToolKind;
}) {
  const isWiso = track === "wiso";
  const subjects = (isWiso ? WISO_FLASHCARD_SUBJECTS : FLASHCARD_SUBJECTS).map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    accent: s.accent,
    cardCount: s.cardCount,
    sectionCount: s.sectionCount,
    comingSoon: s.comingSoon,
    artSubject: s.id,
  }));

  return (
    <StudyToolsSubjectIndex
      kind={kind}
      locale={isWiso ? "de" : "en"}
      subjectPath={subjectPath(track, kind)}
      backHref={backHref(track)}
      backLabel={isWiso ? "← Demo Practice" : "← Demo Practice"}
      subjects={subjects}
    />
  );
}

export function DemoStudyToolSubjectPage({
  track,
  kind,
  subjectId,
}: {
  track: DemoStudyTrack;
  kind: DemoStudyToolKind;
  subjectId: string;
}) {
  const isWiso = track === "wiso";
  const [subject, setSubject] = useState<FlashcardSubjectViewModel | null>(null);

  useEffect(() => {
    let cancel = false;
    setSubject(null);
    const load = isWiso ? getWisoFlashcardSubject(subjectId) : getFlashcardSubject(subjectId);
    void load.then((deck) => {
      if (cancel || !deck) return;
      setSubject({
        ...deck,
        downloadHref: null,
        downloadLabel: null,
      });
    });
    return () => {
      cancel = true;
    };
  }, [isWiso, subjectId]);

  if (!subject) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-sm text-muted-foreground">
        Loading deck…
      </div>
    );
  }

  const href = subjectsHref(track, kind);
  const slug = productSlug(track);
  const locale = isWiso ? ("de" as const) : ("en" as const);

  if (kind === "matching") {
    return (
      <MatchingSubjectView
        subjectId={subjectId}
        subject={subject}
        subjectsHref={href}
        locale={locale}
        demoRevealLocked
        productSlug={slug}
      />
    );
  }

  if (kind === "tutor-exam") {
    return (
      <TutorExamSubjectView
        subjectId={subjectId}
        subject={subject}
        subjectsHref={href}
        locale={locale}
        demoRevealLocked
        productSlug={slug}
      />
    );
  }

  return (
    <FlashcardSubjectView
      subjectId={subjectId}
      subject={subject}
      progressSubjectId={isWiso ? `demo-wiso-${subjectId}` : `demo-${subjectId}`}
      subjectsHref={href}
      vocabularyModes={subjectId === "english"}
      locale={locale}
      demoRevealLocked
      productSlug={slug}
    />
  );
}

export function isValidDemoStudySubject(track: DemoStudyTrack, subjectId: string) {
  const subject =
    track === "wiso"
      ? getWisoFlashcardSubjectMeta(subjectId)
      : getFlashcardSubjectMeta(subjectId);
  return !!subject && !subject.comingSoon;
}
