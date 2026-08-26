import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Languages } from "lucide-react";
import type { ReactNode } from "react";
import {
  BbeDemoCta,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection } from "@/components/bbe-exam/BbeExamShell";
import { BBE_EXAM_FORMAT, BBE_FORMAT_NOTE, BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";

export const Route = createFileRoute("/bbe-economics-english")({
  head: () => ({
    meta: [
      {
        title: "WU Vienna BBE Economics & English: What to Study | BBE School",
      },
      {
        name: "description",
        content:
          "What to study for WU Vienna BBE Economics & Business and English: Fuhrmann chapters, concepts, reading/vocabulary/grammar, common mistakes and practice links.",
      },
      {
        property: "og:title",
        content: "WU Vienna BBE Economics & English: What to Study",
      },
      {
        property: "og:description",
        content:
          "A combined study guide for BBE Economics & Business and English with practice paths.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BbeEconomicsEnglishPage,
});

const faqs = [
  {
    question: "What economics material is required?",
    answer:
      "Independent study of Fuhrmann, B. (2019), Introduction to Business and Economics, Chapters 1 to 6.",
  },
  {
    question: "How many economics and English questions are there?",
    answer: `Based on the most recent exam: ${BBE_EXAM_FORMAT.economicsQuestions} Economics & Business questions (approx. ${BBE_EXAM_FORMAT.scoreWeighting.economics} score weighting) and ${BBE_EXAM_FORMAT.englishQuestions} English questions (approx. ${BBE_EXAM_FORMAT.scoreWeighting.english} score weighting).`,
  },
  {
    question: "What English level is expected?",
    answer:
      "An expected B2 level, testing reading comprehension of contemporary social-issue texts, vocabulary and grammar.",
  },
  {
    question: "Should I study Economics and English separately?",
    answer:
      "Yes for content building (book chapters vs language skills), then combine them in mixed timed practice so exam pacing feels natural.",
  },
];

function BbeEconomicsEnglishPage() {
  return (
    <BbeExamShell
      jsonLd={buildFaqJsonLd(faqs)}
      h1="WU Vienna BBE Economics & English: What to Study"
      lead="Economics & Business and English each play a distinct role on the BBE entrance exam. This guide covers what WU tests, what to study, and how to practice without wasting time."
      heroActions={
        <>
          <BbePrimaryButton to={BBE_PRACTICE_ROUTES.economics}>
            Practice Economics
          </BbePrimaryButton>
          <BbePrimaryButton to={BBE_PRACTICE_ROUTES.english}>Practice English</BbePrimaryButton>
        </>
      }
    >
      <div className="space-y-16">
        <BbeInfoCallout label="Most recent exam structure" tone="official">
          {BBE_FORMAT_NOTE}
        </BbeInfoCallout>

        <div className="space-y-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
            Economics &amp; Business
          </h2>

          <BbeSection id="econ-tested" title="What is tested?">
            <p>
              Economics &amp; Business appears as{" "}
              <span className="font-medium text-foreground">
                {BBE_EXAM_FORMAT.economicsQuestions} questions
              </span>{" "}
              on the most recent exam, with approximately{" "}
              <span className="font-medium text-foreground">
                {BBE_EXAM_FORMAT.scoreWeighting.economics} score weighting
              </span>
              . Content is assessed through the same multi-statement multiple-choice format as the rest of
              the paper.
            </p>
          </BbeSection>

          <BbeSection id="econ-material" title="Required preparation material">
            <p>
              Preparation means independent literature study of a single required text, not an open-ended
              “read anything about business” brief.
            </p>
          </BbeSection>

          <BbeSection id="fuhrmann" title="Fuhrmann textbook / relevant chapters">
            <SubjectCard
              icon={<BookOpen className="h-5 w-5" />}
              title="Fuhrmann, B. (2019), Introduction to Business and Economics"
            >
              <p>
                Study <span className="font-medium text-foreground">Chapters 1 to 6</span>. These chapters cover
                the fundamentals of business and economics: basic economic concepts and market mechanisms,
                types and forms of businesses, ownership structures, sources of finance, marketing
                fundamentals, and interpreting short business scenarios and terminology.
              </p>
            </SubjectCard>
          </BbeSection>

          <BbeSection id="econ-concepts" title="Main concepts students should understand">
            <ul className="list-disc space-y-2 pl-5">
              <li>Core economic vocabulary and market mechanism ideas as presented in the book</li>
              <li>How businesses are typed, formed and owned</li>
              <li>Sources of finance and related terminology</li>
              <li>Marketing fundamentals used in short scenarios</li>
              <li>Precise definitions. Exam statements often hinge on a single qualifier.</li>
            </ul>
          </BbeSection>

          <BbeSection id="econ-how-tested" title="How economics questions may test understanding">
            <p>
              Stems may present a short scenario or claim and then offer several statements. You decide
              independently whether each statement is consistent with the book’s definitions and logic. The
              underlying ideas are often manageable; the difficulty is wording accuracy under time pressure.
            </p>
            <p>
              With strong approximate weighting relative to question count, this section rewards moving
              quickly once you are fluent with phrasing. Many applicants aim to finish Economics in roughly
              10 to 20 minutes after enough practice volume.
            </p>
            <p className="text-sm italic">Timing ranges above are BBE School preparation advice, not official WU rules.</p>
          </BbeSection>

          <BbeSection id="econ-mistakes" title="Common mistakes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Skimming the book once without memorising definitions</li>
              <li>Ignoring small qualifiers (“always”, “only”, “primarily”) that flip truth values</li>
              <li>Assuming everyday business language matches the textbook’s technical sense</li>
              <li>Spending math-level time on Economics and running short later</li>
            </ul>
          </BbeSection>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbeTextLink to={BBE_PRACTICE_ROUTES.economics}>Practice BBE economics questions →</BbeTextLink>
            <BbeTextLink
              to={BBE_PRACTICE_ROUTES.economicsFlashcards}
              params={{ subject: "economics" }}
            >
              Study economics flashcards →
            </BbeTextLink>
          </div>
        </div>

        <div className="space-y-14 border-t border-border pt-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">English</h2>

          <BbeSection id="eng-tested" title="What is tested?">
            <p>
              English appears as{" "}
              <span className="font-medium text-foreground">
                {BBE_EXAM_FORMAT.englishQuestions} questions
              </span>{" "}
              on the most recent exam, with approximately{" "}
              <span className="font-medium text-foreground">
                {BBE_EXAM_FORMAT.scoreWeighting.english} score weighting
              </span>
              . It examines general command of English rather than a fixed chapter syllabus.
            </p>
          </BbeSection>

          <BbeSection id="reading" title="Reading comprehension">
            <p>
              Texts relate to contemporary social issues. You must understand main ideas, implications, and
              carefully worded claims, then evaluate statements under the shared stem.
            </p>
          </BbeSection>

          <BbeSection id="vocabulary" title="Vocabulary">
            <p>
              Expect precise lexical choices in academic/business-adjacent contexts. Building
              business-relevant vocabulary over time is more effective than last-minute word lists alone.
            </p>
          </BbeSection>

          <BbeSection id="grammar" title="Grammar / language skills">
            <p>
              Grammar and language control are tested at an expected{" "}
              <span className="font-medium text-foreground">B2</span> level, alongside reading and
              vocabulary. The section is not an isolated “fill in the blank only” paper.
            </p>
          </BbeSection>

          <BbeSection id="eng-prep" title="Expected preparation approach">
            <p>WU recommends practicing with resources such as:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>BBC Learning English</li>
              <li>British Council LearnEnglish</li>
              <li>Cambridge English Language Assessment</li>
            </ul>
            <p>and reading business-focused outlets such as:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>BBC Worklife</li>
              <li>CNN Business</li>
              <li>The Guardian Business</li>
              <li>Business Insider</li>
              <li>The Conversation</li>
            </ul>
            <SubjectCard icon={<Languages className="h-5 w-5" />} title="Practical BBE School advice">
              <p>
                Treat English as a long-horizon skill. Short daily reading plus BBE-style practice stems
                beats cramming. Use practice sets to learn how statements try to mislead through near-synonyms
                and scope words.
              </p>
            </SubjectCard>
          </BbeSection>

          <BbeTextLink to={BBE_PRACTICE_ROUTES.english}>Practice BBE English →</BbeTextLink>
        </div>

        <BbeSection id="together" title="Should I study Economics and English separately?">
          <p>
            <span className="font-medium text-foreground">For learning, yes.</span> Economics has a bounded
            book; English is proficiency-building. Mixing them too early can feel busy without building real
            depth in either.
          </p>
          <p>
            <span className="font-medium text-foreground">For exam readiness, combine them.</span> Once
            definitions and reading fluency improve, practice mixed timed blocks so you can clear these
            sections efficiently and protect time for Mathematics.
          </p>
          <BbeTextLink to="/bbe-exam-preparation">Read our complete BBE preparation guide →</BbeTextLink>
        </BbeSection>

        <BbeSection id="faq" title="FAQ">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>

        <BbeDemoCta
          title="Try the BBE School demo course"
          body="Sample lessons and BBE-style Economics and English questions, with explanations."
          cta="Start Free Demo →"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BbeTextLink to="/bbe-entrance-exam">Back to the BBE Entrance Exam Guide →</BbeTextLink>
          <BbeTextLink to="/bbe-mathematics">See the BBE mathematics topic guide →</BbeTextLink>
        </div>
      </div>
    </BbeExamShell>
  );
}

function SubjectCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-foreground">
          {icon}
        </span>
        <div className="min-w-0 space-y-3">
          <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{title}</h3>
          <div className="space-y-3 text-[1.0625rem] leading-relaxed text-neutral-800 sm:text-[1.125rem]">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
