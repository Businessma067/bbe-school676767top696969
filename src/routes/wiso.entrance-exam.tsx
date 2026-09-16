import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BookOpen,
  Calculator,
  CheckCircle2,
  Languages,
  Scale,
  XCircle,
} from "lucide-react";
import {
  WisoDemoCta,
  WisoGhostButton,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection, WisoStatGrid } from "@/components/wiso-exam/WisoExamShell";
import {
  WISO_ECONOMICS_CHAPTERS,
  WISO_EXAM_FORMAT,
  WISO_FORMAT_NOTE,
  WISO_PRACTICE_ROUTES,
} from "@/config/wiso-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { cn } from "@/lib/utils";

const PATH = "/wiso/entrance-exam" as const;

export const Route = createFileRoute("/wiso/entrance-exam")({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) }],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      {
        title: "WU Vienna WiSo Entrance Exam: Format, Topics & Guide | BBE School",
      },
      {
        name: "description",
        content:
          "What is the WU Vienna WiSo entrance exam? Format, subjects (economics, math, German), Teilpunktesystem scoring, places, two-stage process, and how to prepare.",
      },
      {
        property: "og:title",
        content: "WU Vienna WiSo Entrance Exam: Format, Topics & Guide",
      },
      {
        property: "og:description",
        content:
          "Independent overview of the WiSo Aufnahmeprüfung: structure, subjects, scoring, and preparation paths.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoEntranceExamPage,
});

const faqs = [
  {
    question: "What is the WU WiSo entrance exam?",
    answer:
      "A written, in-person, multiple-choice exam that is part of the selection procedure for WU Vienna’s German-taught Bachelor’s Program in Business, Economics and Social Sciences (WiSo), held when registrations exceed available places.",
  },
  {
    question: "What subjects are tested on WiSo?",
    answer:
      "Three areas per WU’s FAQ: wirtschaftliche Grundkenntnisse (economics), Mathematik, and deutsches Sprachverständnis (German reading comprehension). There is no English section.",
  },
  {
    question: "How long is the WiSo exam?",
    answer: `2 hours. The 2026 cycle is scheduled for ${WISO_EXAM_FORMAT.cycle.examDate} at ${WISO_EXAM_FORMAT.location}.`,
  },
  {
    question: "How many questions are on the WiSo exam?",
    answer: `WU confirms the exam is entirely multiple choice. Recent cycles are often described with about ${WISO_EXAM_FORMAT.questionCount} questions; the exact per-question template is not spelled out in the FAQ the way BBE materials sometimes are. Confirm your cycle on official WU pages.`,
  },
  {
    question: "How is WiSo scored?",
    answer:
      "With WU’s gemischtes Teilpunktesystem — the same partial-credit mechanism as BBE (credit for correct options, penalties for incorrect ones, floor at zero per question).",
  },
  {
    question: "How many WiSo places are there?",
    answer: `About ${WISO_EXAM_FORMAT.places} places in the 2026/27 cycle. Confirm the current figure on official WU pages.`,
  },
  {
    question: "Is WiSo the same as BBE?",
    answer:
      "No. Same university and admissions cycle timing, but different language, applicant pool, intake size, language pillar (German vs English), and some economics content (Wirtschaft verstehen chapters 2 and 4).",
  },
];

const glanceRows: { field: string; detail: ReactNode }[] = [
  { field: "University", detail: "Vienna University of Economics and Business (WU Vienna)" },
  {
    field: "Programme",
    detail: "Wirtschafts- und Sozialwissenschaften (WiSo), German-taught",
  },
  { field: "Program start", detail: "Winter or summer semester (after a successful procedure)" },
  { field: "Exam type", detail: "Written, in person, multiple-choice only" },
  { field: "Exam location", detail: WISO_EXAM_FORMAT.location },
  { field: "Exam duration", detail: `${WISO_EXAM_FORMAT.durationHours} hours` },
  { field: "Exam date / time", detail: WISO_EXAM_FORMAT.cycle.examDate },
  { field: "Alternative date / online option", detail: "None. No makeup date." },
  {
    field: "Exam sections",
    detail: "Economics, Mathematics, German reading comprehension",
  },
  {
    field: "Question format",
    detail: "Entirely multiple choice (exact per-question template: confirm for your cycle)",
  },
  {
    field: "Question count (recent descriptions)",
    detail: `About ${WISO_EXAM_FORMAT.questionCount} (not a hard WU FAQ constant)`,
  },
  { field: "Available places (2026/27)", detail: String(WISO_EXAM_FORMAT.places) },
  { field: "Registration window", detail: WISO_EXAM_FORMAT.cycle.registrationWindow },
  { field: "Registration fee", detail: WISO_EXAM_FORMAT.cycle.registrationFee },
  { field: "OSA deadline", detail: WISO_EXAM_FORMAT.cycle.osaDeadline },
  { field: "OSA graded?", detail: "No. Ungraded — but must be completed." },
  { field: "Enrollment window", detail: WISO_EXAM_FORMAT.cycle.enrollmentWindow },
  {
    field: "Scoring",
    detail: (
      <>
        Gemischtes Teilpunktesystem — see{" "}
        <WisoTextLink to="/wiso/exam-scoring" className="inline-flex">
          WiSo Exam Scoring
        </WisoTextLink>
      </>
    ),
  },
];

const compareRows = [
  { label: "Language", bbe: "English", wiso: "German" },
  { label: "Places (2026/27)", bbe: "~240", wiso: String(WISO_EXAM_FORMAT.places) },
  { label: "Semester start", bbe: "Winter only", wiso: "Winter or summer" },
  { label: "Language pillar", bbe: "English", wiso: "German reading" },
  { label: "Economics guide", bbe: "Fuhrmann (English)", wiso: "Wirtschaft verstehen (German)" },
  { label: "Scoring", bbe: "wi2 / partial credit", wiso: "Identical Teilpunktesystem" },
];

const mistakes = [
  "Studying BBE English packs as if they cover WiSo’s language pillar.",
  "Skipping Wirtschaft verstehen chapters 2 and 4 because chapter 1 felt familiar.",
  "Ignoring Teilpunktesystem and ticking every option.",
  "Treating the OSA as optional because it is ungraded.",
  "Assuming an online or makeup exam date exists.",
  "First timed full paper in the final week only.",
  "Mixing /bbe and /wiso practice URLs and losing track of which language you trained.",
];

export function WisoEntranceExamPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Entrance Exam: Format, Topics & Preparation Guide"
      lead="An independent overview of the WiSo Aufnahmeprüfung — what WU tests, how the two-stage process works, how scoring behaves, and how to start preparing without confusing WiSo with BBE."
      heroActions={
        <>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Open WiSo demo</WisoPrimaryButton>
          <WisoGhostButton to="/bbe-vs-wiso">Compare with BBE</WisoGhostButton>
        </>
      }
    >
      <div className="space-y-16">
        <WisoSection id="introduction" title="Introduction">
          <p>
            WiSo — <em>Wirtschafts- und Sozialwissenschaften</em> — is WU Vienna’s German-taught bachelor
            in Business, Economics and Social Sciences. When registrations exceed available places,
            admission includes a written entrance exam. This hub is BBE School’s independent map of that
            exam: format, subjects, scoring, difficulty patterns, and preparation paths.
          </p>
          <p>
            WiSo shares an admissions calendar with BBE but is a separate exam and applicant pool. If you
            only remember one difference: the language pillar is German reading comprehension, not
            English.
          </p>
        </WisoSection>

        <WisoSection id="at-a-glance" title="Exam at a glance">
          <WisoStatGrid
            items={[
              { label: "Places", value: String(WISO_EXAM_FORMAT.places) },
              { label: "Duration", value: `${WISO_EXAM_FORMAT.durationHours}h` },
              { label: "Questions*", value: `~${WISO_EXAM_FORMAT.questionCount}` },
              { label: "Language", value: "German" },
            ]}
          />
          <WisoInfoCallout label="Most recent structure" tone="official">
            {WISO_FORMAT_NOTE}
          </WisoInfoCallout>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <dl>
              {glanceRows.map((row, i) => (
                <div
                  key={row.field}
                  className={cn(
                    "grid gap-1 px-4 py-3 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:gap-6 sm:px-5",
                    i % 2 === 0 ? "bg-card" : "bg-secondary/40",
                  )}
                >
                  <dt className="text-[0.975rem] font-semibold text-foreground">{row.field}</dt>
                  <dd className="text-[0.975rem] leading-relaxed text-foreground sm:text-[1.0625rem]">
                    {row.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <WisoTextLink to="/wiso/exam-scoring">Learn how WiSo Teilpunktesystem scoring works →</WisoTextLink>
        </WisoSection>

        <WisoSection id="two-stage" title="Two-stage process">
          <p>
            <strong>Stage 1 — Registration + Online Self-Assessment (OSA).</strong> Register in the
            official window ({WISO_EXAM_FORMAT.cycle.registrationWindow}), pay{" "}
            {WISO_EXAM_FORMAT.cycle.registrationFee}, and fully complete the OSA by{" "}
            {WISO_EXAM_FORMAT.cycle.osaDeadline}. The OSA is ungraded and does not affect ranking — but
            unfinished OSA blocks you from the exam. If registrations do not exceed places, the written
            exam can be skipped.
          </p>
          <p>
            <strong>Stage 2 — Aufnahmeprüfung.</strong> In-person only at VIECON on{" "}
            {WISO_EXAM_FORMAT.cycle.examDate}. Entirely multiple choice across three content areas.
            Enrollment after passing (2026 cycle): {WISO_EXAM_FORMAT.cycle.enrollmentWindow}.
          </p>
          <WisoTextLink to="/wiso/admission">Full admission timeline →</WisoTextLink>
        </WisoSection>

        <WisoSection id="subjects" title="What the exam tests">
          <div className="grid gap-4 md:grid-cols-3">
            <SubjectCard
              icon={<BookOpen className="h-5 w-5" />}
              title="Economics"
              body="Wirtschaftliche Grundkenntnisse from WU’s official study guide Wirtschaft verstehen (Feurstein, Fuhrmann et al.) — four chapters spanning foundations, sustainability, firms, and digitalisation."
            />
            <SubjectCard
              icon={<Calculator className="h-5 w-5" />}
              title="Mathematics"
              body="Secondary-school business math: algebra, statistics, calculus, and logical reasoning under time pressure. No official WU math skriptum."
            />
            <SubjectCard
              icon={<Languages className="h-5 w-5" />}
              title="German"
              body="Academic German reading comprehension — interpretation and argument, not a grammar drill copied from BBE English."
            />
          </div>
          <WisoInfoCallout label="Myth to ignore" tone="note">
            Some third-party sites wrongly list an English section for WiSo. WU’s own FAQ lists German
            comprehension, not English.
          </WisoInfoCallout>
          <div className="flex flex-wrap gap-4">
            <WisoTextLink to="/wiso/economics-german">Economics & German guide →</WisoTextLink>
            <WisoTextLink to="/wiso/mathematics">Mathematics guide →</WisoTextLink>
          </div>
        </WisoSection>

        <WisoSection id="wirtschaft-verstehen" title="Economics guide map">
          <p>
            WU reissues Wirtschaft verstehen each cycle (typically late February). Chapter titles stay
            stable; study the current PDF anyway.
          </p>
          <ol className="mt-4 list-decimal space-y-3 pl-5">
            {WISO_ECONOMICS_CHAPTERS.map((ch) => (
              <li key={ch.id}>
                <span className="font-semibold text-foreground">{ch.title}</span>
                <span className="text-muted-foreground"> — {ch.topics}</span>
              </li>
            ))}
          </ol>
        </WisoSection>

        <WisoSection id="scoring" title="How scoring works (short version)">
          <p>
            WU’s Teilpunktesystem WISO PDF describes the same partial-credit idea as BBE: each question
            has a maximum; correct marks earn a share; incorrect marks cost a share; the question cannot
            go below zero. Single-correct stems can be all-or-nothing.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Credit for correct marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
              <XCircle className="h-3.5 w-3.5 text-rose-600" /> Penalties for incorrect marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
              <Scale className="h-3.5 w-3.5 text-indigo-700" /> Floor at zero
            </span>
          </div>
          <WisoTextLink to="/wiso/exam-scoring">Worked scoring examples →</WisoTextLink>
        </WisoSection>

        <WisoSection id="vs-bbe" title="WiSo vs BBE at a glance">
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead className="bg-secondary/60 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Dimension</th>
                  <th className="px-4 py-3 font-semibold">BBE</th>
                  <th className="px-4 py-3 font-semibold">WiSo</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn("border-t border-border", i % 2 === 1 && "bg-secondary/30")}
                  >
                    <td className="px-4 py-3 font-medium">{row.label}</td>
                    <td className="px-4 py-3">{row.bbe}</td>
                    <td className="px-4 py-3">{row.wiso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WisoTextLink to="/bbe-vs-wiso">Full comparison page →</WisoTextLink>
        </WisoSection>

        <WisoSection id="difficulty" title="What feels hard in practice">
          <p>
            Math usually demands the most timed practice. Economics rewards precise reading of German
            definitions from Wirtschaft verstehen. German reading rewards stamina and careful scope —
            not last-week vocabulary lists. The larger intake versus BBE does not mean the paper is
            “easy”; relative ranking still decides selection when the exam is held.
          </p>
        </WisoSection>

        <WisoSection id="mistakes" title="Common mistakes">
          <ul className="list-disc space-y-2 pl-5">
            {mistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </WisoSection>

        <WisoSection id="prepare" title="How to prepare">
          <p>
            Start with format and scoring, cover Wirtschaft verstehen (including WiSo-only chapters),
            build German reading weekly, lock math fluency, then move to timed mocks on WiSo URLs.
          </p>
          <div className="flex flex-wrap gap-4">
            <WisoTextLink to="/wiso/exam-preparation">Full preparation sequence →</WisoTextLink>
            <WisoTextLink to={WISO_PRACTICE_ROUTES.products}>Products (BBE + WiSo) →</WisoTextLink>
          </div>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}

function SubjectCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-indigo-200/70 bg-card p-5 dark:border-indigo-800/40">
      <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
        {icon}
        <h3 className="font-display text-lg font-bold">{title}</h3>
      </div>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-foreground">{body}</p>
    </div>
  );
}
