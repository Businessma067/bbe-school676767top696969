import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BookOpen, Calculator, Languages } from "lucide-react";
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
          "What is the WU Vienna WiSo entrance exam? Format, subjects (economics, math, German), scoring overview, places, and how to prepare.",
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
    question: "How many questions are on the WiSo exam?",
    answer: `Recent cycles use ${WISO_EXAM_FORMAT.questionCount} questions over ${WISO_EXAM_FORMAT.durationHours} hours, with five true/false statements per question in the same style as BBE.`,
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
    field: "Question count (recent cycles)",
    detail: `${WISO_EXAM_FORMAT.questionCount} questions × 5 true/false statements`,
  },
  { field: "Available places (2026/27)", detail: String(WISO_EXAM_FORMAT.places) },
  { field: "Registration fee", detail: WISO_EXAM_FORMAT.cycle.registrationFee },
];

export function WisoEntranceExamPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Entrance Exam: Format, Topics & Preparation Guide"
      lead="An independent overview of the WiSo Aufnahmeprüfung — what WU tests, how the two-stage process works, and how to start preparing without confusing WiSo with BBE."
      heroActions={
        <>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Open WiSo demo</WisoPrimaryButton>
          <WisoGhostButton to="/bbe-vs-wiso">Compare with BBE</WisoGhostButton>
        </>
      }
    >
      <div className="space-y-14">
        <WisoInfoCallout label="Most recent structure" tone="official">
          {WISO_FORMAT_NOTE}
        </WisoInfoCallout>

        <WisoStatGrid
          items={[
            { label: "Places", value: String(WISO_EXAM_FORMAT.places) },
            { label: "Duration", value: `${WISO_EXAM_FORMAT.durationHours}h` },
            { label: "Questions", value: String(WISO_EXAM_FORMAT.questionCount) },
            { label: "Language", value: "German" },
          ]}
        />

        <WisoSection id="glance" title="At a glance">
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[28rem] border-collapse text-left text-[0.95rem]">
              <tbody>
                {glanceRows.map((row) => (
                  <tr key={row.field} className="border-b border-border last:border-b-0">
                    <th className="w-[40%] px-4 py-3 align-top font-medium text-foreground">
                      {row.field}
                    </th>
                    <td className="px-4 py-3 align-top text-foreground">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </WisoSection>

        <WisoSection id="two-stage" title="Two-stage process">
          <p>
            <strong>Stage 1 — Registration + Online Self-Assessment (OSA).</strong> Register in the
            official window ({WISO_EXAM_FORMAT.cycle.registrationWindow}), pay the fee, and fully
            complete the OSA by {WISO_EXAM_FORMAT.cycle.osaDeadline}. The OSA is ungraded and does
            not affect ranking — but unfinished OSA blocks you from the exam. If registrations do not
            exceed places, the written exam can be skipped.
          </p>
          <p>
            <strong>Stage 2 — Aufnahmeprüfung.</strong> In-person only at VIECON on{" "}
            {WISO_EXAM_FORMAT.cycle.examDate}. Enrollment after passing (2026 cycle):{" "}
            {WISO_EXAM_FORMAT.cycle.enrollmentWindow}.
          </p>
        </WisoSection>

        <WisoSection id="subjects" title="What the exam tests">
          <div className="grid gap-4 md:grid-cols-3">
            <SubjectCard
              icon={<BookOpen className="h-5 w-5" />}
              title="Economics"
              body="Wirtschaftliche Grundkenntnisse from WU’s official study guide Wirtschaft verstehen (Feurstein, Fuhrmann et al.)."
            />
            <SubjectCard
              icon={<Calculator className="h-5 w-5" />}
              title="Mathematics"
              body="Secondary-school business math: algebra, statistics, calculus, and logical reasoning under time pressure."
            />
            <SubjectCard
              icon={<Languages className="h-5 w-5" />}
              title="German"
              body="Academic German reading comprehension — interpretation and argument, not a grammar drill copied from BBE English."
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Some third-party sites wrongly list an English section for WiSo. WU’s own FAQ lists
            German comprehension, not English.
          </p>
          <div className="flex flex-wrap gap-4">
            <WisoTextLink to="/wiso/economics-german">Economics & German guide →</WisoTextLink>
            <WisoTextLink to="/wiso/mathematics">Mathematics guide →</WisoTextLink>
            <WisoTextLink to="/wiso/exam-scoring">Scoring explained →</WisoTextLink>
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
    <div className={cn("rounded-2xl border border-teal-200/70 bg-card p-5 dark:border-teal-800/40")}>
      <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300">
        {icon}
        <h3 className="font-display text-lg font-bold">{title}</h3>
      </div>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-foreground">{body}</p>
    </div>
  );
}
