import { useEffect, useState } from "react";
import seeds from "@/data/marketing-demo-seeds.json";
import {
  WISO_FLASHCARD_UI,
  WISO_MATCHING_UI,
  WISO_TUTOR_CORRECT,
  WISO_TUTOR_GREETINGS,
  WISO_TUTOR_PROMPTS,
  WISO_TUTOR_RESULT_LINES,
  WISO_TUTOR_UI,
} from "@/lib/wiso-study-ui";
import { getWisoCustomMockChapters } from "@/data/wiso-custom-mock-catalog";
import {
  loadWisoMathCourseTheory,
  WISO_MATH_COURSE_THEORY,
} from "@/data/wiso-math-course-theory";
import type { ExamQuestion } from "@/lib/mock-exams";
import { CourseEconDemo } from "./CourseEconDemo";
import { CourseEnglishDemo } from "./CourseEnglishDemo";
import { CourseMathDemo } from "./CourseMathDemo";
import { CourseMockDemo, DE_MOCK_BUILDER_COPY } from "./CourseMockDemo";
import { CourseMockExamDemo, DE_MOCK_EXAM_COPY } from "./CourseMockExamDemo";
import { CourseTheoryDemo, DE_THEORY_COPY } from "./CourseTheoryDemo";
import { COURSE_MATH, type CourseTask } from "./course-tasks";
import { DE_CHROME } from "./course-copy";
import {
  CourseFlashDemo,
  CourseMatchDemo,
  CourseTutorDemo,
  type DemoFlashCopy,
  type DemoMatchCopy,
  type DemoTutorCopy,
} from "./StudyToolsDemos";

const ECON_MARKS = [0, 2];
const GERMAN_MARKS = [2, 4];

const WISO_ECON: CourseTask = {
  caseId: seeds.wisoEcon.case_id,
  title: seeds.wisoEcon.title,
  context: seeds.wisoEcon.context,
  statements: seeds.wisoEcon.statements,
  answerKey: seeds.wisoEcon.answer_key,
  explanations: seeds.wisoEcon.tactical_explanations,
  chapter: "Kapitel 1.1 · Jeder Mensch ist Teil der Wirtschaft",
};

const WISO_MATH: CourseTask = {
  caseId: "MATH 12.01",
  title: seeds.wisoMathDe.title,
  context: seeds.wisoMathDe.context,
  statements: seeds.wisoMathDe.statements,
  answerKey: COURSE_MATH.answerKey,
  explanations: seeds.wisoMathDe.tactical_explanations,
  chapter: "Kapitel 12 · Elementare Wahrscheinlichkeitsrechnung",
};

const GERMAN_SHOW = seeds.germanHighlightIndex;
const GERMAN_HIGHLIGHT = seeds.german.highlights?.[GERMAN_SHOW] ?? "";
const GERMAN_PARAGRAPH = seeds.germanParagraph;

const WISO_GERMAN: CourseTask = {
  caseId: seeds.german.case_id,
  title: seeds.german.exam_title || seeds.german.title,
  context: seeds.german.context,
  statements: seeds.german.statements,
  answerKey: seeds.german.answer_key,
  explanations: seeds.german.tactical_explanations,
  chapter: "Texte · Die Vier-Tage-Woche",
};

const ECON_SECTION_TITLE = seeds.wisoFlashSectionTitle;
const card = (term: keyof typeof seeds.wisoFlashcards) => seeds.wisoFlashcards[term];

const FLASH_TERMS = ["Privater Haushalt", "Bedürfnisse", "Güter"] as const;
const FLASH_CARDS = FLASH_TERMS.map((term) => card(term));

const MATCH_TERMS = ["Produkt", "Dienstleistung", "Güter", "Unternehmen"] as const;
const MATCH_PAIRS = MATCH_TERMS.map((term, id) => ({ id, ...card(term) }));
const MATCH_RIGHT = [1, 0, 3, 2];

const FLASH_COPY: DemoFlashCopy = {
  eyebrow: "Lernwerkzeuge · Wirtschaft",
  title: "Karteikarten",
  known: WISO_FLASHCARD_UI.known,
  dont: WISO_FLASHCARD_UI.dontKnow,
  fresh: WISO_FLASHCARD_UI.neu,
  term: WISO_FLASHCARD_UI.term,
  explanation: WISO_FLASHCARD_UI.explanation,
  flip: WISO_FLASHCARD_UI.flip,
};

const MATCH_COPY: DemoMatchCopy = {
  eyebrow: "Lernwerkzeuge · Wirtschaft",
  title: WISO_MATCHING_UI.title,
  round: (done, total) => `${WISO_MATCHING_UI.round(1)} · ${done}/${total}`,
  concepts: WISO_MATCHING_UI.concepts,
  meanings: WISO_MATCHING_UI.meanings,
  complete: `${WISO_MATCHING_UI.roundComplete} · 4/4`,
};

const TUTOR_COPY: DemoTutorCopy = {
  eyebrow: "Lernwerkzeuge · Wirtschaft",
  title: WISO_TUTOR_UI.theoryExam,
  exam: WISO_TUTOR_UI.exam(1),
  question: (n, total) => `${WISO_TUTOR_UI.question} ${n} / ${total}`,
  score: (score, pct) => `${WISO_TUTOR_UI.score} ${score}${pct}`,
  complete: `Tutor Bot · ${WISO_TUTOR_UI.examComplete}`,
  resultLine: WISO_TUTOR_RESULT_LINES.high,
  correctLine: WISO_TUTOR_CORRECT[0],
  greeting: WISO_TUTOR_GREETINGS[1],
  defineHint: WISO_TUTOR_UI.defineHint,
  identifyHint: WISO_TUTOR_UI.identifyHint,
  next: WISO_TUTOR_UI.nextQuestion,
  results: WISO_TUTOR_UI.seeResults,
  pct: (pct) => WISO_TUTOR_UI.pctCorrect(pct),
  asking: (n) => `Tutor Bot · F${n}`,
};

const WISO_BUILDER_CHAPTERS = getWisoCustomMockChapters("economics").slice(0, 3);

const DEFINE_TERMS = ["Produkt", "Dienstleistung", "Güter", "Unternehmen"] as const;

const TUTOR_QUESTIONS = [
  {
    mode: "define" as const,
    prompt: WISO_TUTOR_PROMPTS.define,
    stem: card("Produkt").term,
    choices: DEFINE_TERMS.map((term) => card(term).explanation),
    correct: 0,
    revealTerm: "Produkt",
    revealExplanation: card("Produkt").explanation,
    sectionTitle: ECON_SECTION_TITLE,
  },
  {
    mode: "identify" as const,
    prompt: WISO_TUTOR_PROMPTS.identify,
    stem: card("Dienstleistung").explanation,
    choices: ["Produkt", "Unternehmen", "Dienstleistung", "Güter"],
    correct: 2,
    revealTerm: "Dienstleistung",
    revealExplanation: card("Dienstleistung").explanation,
    sectionTitle: ECON_SECTION_TITLE,
  },
];

/** Demo flash deck size — keep UI stable without loading the full WiSo bank. */
const WISO_FLASH_DECK_TOTAL = 277;

export function WisoHowItWorksDemo({
  tab,
  slideKey,
  rest,
}: {
  tab: "course" | "theory" | "mock-exams" | "mock-builder" | "games";
  slideKey: string;
  rest: number;
}) {
  if (tab === "theory") {
    return (
      <CourseTheoryDemo
        catalog={WISO_MATH_COURSE_THEORY}
        loadChapter={loadWisoMathCourseTheory}
        copy={DE_THEORY_COPY}
        rest={rest}
        lockCopy
      />
    );
  }
  if (tab === "mock-exams") {
    return <WisoMockExamDemo rest={rest} />;
  }
  if (tab === "mock-builder") {
    return (
      <CourseMockDemo
        chapters={WISO_BUILDER_CHAPTERS}
        preview={WISO_ECON}
        copy={DE_MOCK_BUILDER_COPY}
        rest={rest}
        lockCopy
      />
    );
  }
  if (tab === "games") {
    if (slideKey === "matching") {
      return (
        <CourseMatchDemo
          pairs={MATCH_PAIRS}
          rightOrder={MATCH_RIGHT}
          topic={ECON_SECTION_TITLE}
          copy={MATCH_COPY}
          rest={rest}
          lockCopy
        />
      );
    }
    if (slideKey === "tutor-exam") {
      return (
        <CourseTutorDemo questions={TUTOR_QUESTIONS} copy={TUTOR_COPY} rest={rest} lockCopy />
      );
    }
    return (
      <CourseFlashDemo
        cards={FLASH_CARDS}
        deckTotal={WISO_FLASH_DECK_TOTAL}
        topic={ECON_SECTION_TITLE}
        copy={FLASH_COPY}
        rest={rest}
        lockCopy
      />
    );
  }
  if (slideKey === "math") {
    return (
      <CourseMathDemo task={WISO_MATH} chrome={DE_CHROME} rest={rest} lockCopy showOverview={false} />
    );
  }
  if (slideKey === "german") {
    return (
      <CourseEnglishDemo
        task={WISO_GERMAN}
        passage={GERMAN_PARAGRAPH}
        highlight={GERMAN_HIGHLIGHT}
        showAt={GERMAN_SHOW}
        markAt={GERMAN_MARKS}
        rest={rest}
        lockCopy
      />
    );
  }
  return <CourseEconDemo task={WISO_ECON} markAt={ECON_MARKS} rest={rest} lockCopy />;
}

/** Load WiSo mock-1 only when the mock-exams tab is shown. */
function WisoMockExamDemo({ rest }: { rest: number }) {
  const [questions, setQuestions] = useState<ExamQuestion[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import("@/lib/wiso-mock-exam-1-content").then((mod) => {
      if (!cancelled) setQuestions(mod.buildWisoMockExam1Questions());
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!questions) {
    return (
      <div className="flex h-full min-h-[240px] items-center justify-center text-sm text-muted-foreground">
        …
      </div>
    );
  }

  return (
    <CourseMockExamDemo questions={questions} copy={DE_MOCK_EXAM_COPY} rest={rest} lockCopy />
  );
}
