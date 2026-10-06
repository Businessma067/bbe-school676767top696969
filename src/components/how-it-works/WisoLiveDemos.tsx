import { countCards } from "@/data/flashcards";
import { WISO_ECONOMICS_FLASHCARD_SECTIONS } from "@/data/wiso-economics-flashcards";
import econCh1 from "@/data/wiso-economics-cases-ch1-subtopics.json";
import mathDe12 from "@/data/wiso/math-de-ch12.json";
import germanTexts from "@/data/wiso/german/texts.json";
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
import { WISO_MATH_COURSE_THEORY } from "@/data/wiso-math-course-theory";
import { buildWisoMockExam1Questions } from "@/lib/wiso-mock-exam-1-content";
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

type EconRaw = {
  case_id: string;
  title: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  tactical_explanations: string[];
};

const econRaw = (econCh1 as EconRaw[])[0];
if (!econRaw) throw new Error("WiSo economics demo task missing");

const WISO_ECON: CourseTask = {
  caseId: econRaw.case_id,
  title: econRaw.title,
  context: econRaw.context,
  statements: econRaw.statements,
  answerKey: econRaw.answer_key,
  explanations: econRaw.tactical_explanations,
  chapter: "Kapitel 1.1 · Jeder Mensch ist Teil der Wirtschaft",
};

type MathDe = {
  title: string;
  context: string;
  statements: string[];
  tactical_explanations: string[];
};

const mathRaw = (mathDe12 as Record<string, MathDe>)["MATH 12.01"];
if (!mathRaw) throw new Error("WiSo math demo task missing");

const WISO_MATH: CourseTask = {
  caseId: "MATH 12.01",
  title: mathRaw.title,
  context: mathRaw.context,
  statements: mathRaw.statements,
  answerKey: COURSE_MATH.answerKey,
  explanations: mathRaw.tactical_explanations,
  chapter: "Kapitel 12 · Elementare Wahrscheinlichkeitsrechnung",
};

type GermanFile = {
  subsections: { id: string; title: string; passage?: string }[];
  tasks: {
    case_id: string;
    title: string;
    exam_title?: string;
    context: string;
    statements: string[];
    answer_key: boolean[];
    tactical_explanations: string[];
    highlights?: string[];
    subsection: string;
  }[];
};

const german = germanTexts as GermanFile;
const germanTask = german.tasks.find((task) => task.case_id === "DE T.1.01");
const germanPassage = german.subsections.find((section) => section.id === "t.1")?.passage;
if (!germanTask || !germanPassage) throw new Error("WiSo German demo task missing");

const GERMAN_SHOW = 2;
const GERMAN_HIGHLIGHT = germanTask.highlights?.[GERMAN_SHOW] ?? "";
const GERMAN_PARAGRAPH =
  germanPassage.split(/\n\n/).find((paragraph) => paragraph.includes(GERMAN_HIGHLIGHT)) ??
  germanPassage.split(/\n\n/).slice(0, 3).join("\n\n");

const WISO_GERMAN: CourseTask = {
  caseId: germanTask.case_id,
  title: germanTask.exam_title || germanTask.title,
  context: germanTask.context,
  statements: germanTask.statements,
  answerKey: germanTask.answer_key,
  explanations: germanTask.tactical_explanations,
  chapter: "Texte · Die Vier-Tage-Woche",
};

const ECON_SECTION = WISO_ECONOMICS_FLASHCARD_SECTIONS[0];
if (!ECON_SECTION) throw new Error("WiSo flashcard section missing");

function cardOrThrow(term: string) {
  const card = WISO_ECONOMICS_FLASHCARD_SECTIONS.flatMap((section) => section.cards).find(
    (item) => item.term === term,
  );
  if (!card) throw new Error(`WiSo flashcard missing: ${term}`);
  return card;
}

const FLASH_TERMS = ["Privater Haushalt", "Bedürfnisse", "Güter"] as const;
const FLASH_CARDS = FLASH_TERMS.map((term) => cardOrThrow(term));

const MATCH_TERMS = ["Produkt", "Dienstleistung", "Güter", "Unternehmen"] as const;
const MATCH_PAIRS = MATCH_TERMS.map((term, id) => ({ id, ...cardOrThrow(term) }));
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

const WISO_EXAM_QUESTIONS = buildWisoMockExam1Questions();
const WISO_BUILDER_CHAPTERS = getWisoCustomMockChapters("economics").slice(0, 3);

const DEFINE_TERMS = ["Produkt", "Dienstleistung", "Güter", "Unternehmen"] as const;

const TUTOR_QUESTIONS = [
  {
    mode: "define" as const,
    prompt: WISO_TUTOR_PROMPTS.define,
    stem: cardOrThrow("Produkt").term,
    choices: DEFINE_TERMS.map((term) => cardOrThrow(term).explanation),
    correct: 0,
    revealTerm: "Produkt",
    revealExplanation: cardOrThrow("Produkt").explanation,
    sectionTitle: ECON_SECTION.title,
  },
  {
    mode: "identify" as const,
    prompt: WISO_TUTOR_PROMPTS.identify,
    stem: cardOrThrow("Dienstleistung").explanation,
    choices: ["Produkt", "Unternehmen", "Dienstleistung", "Güter"],
    correct: 2,
    revealTerm: "Dienstleistung",
    revealExplanation: cardOrThrow("Dienstleistung").explanation,
    sectionTitle: ECON_SECTION.title,
  },
];

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
        copy={DE_THEORY_COPY}
        rest={rest}
        lockCopy
      />
    );
  }
  if (tab === "mock-exams") {
    return (
      <CourseMockExamDemo
        questions={WISO_EXAM_QUESTIONS}
        copy={DE_MOCK_EXAM_COPY}
        rest={rest}
        lockCopy
      />
    );
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
          topic={ECON_SECTION.title}
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
        deckTotal={countCards(WISO_ECONOMICS_FLASHCARD_SECTIONS)}
        topic={ECON_SECTION.title}
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
  return (
    <CourseEconDemo
      task={WISO_ECON}
      markAt={ECON_MARKS}
      rest={rest}
      lockCopy
    />
  );
}
