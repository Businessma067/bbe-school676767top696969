import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
  WisoWuSourceLink,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection } from "@/components/wiso-exam/WisoExamShell";
import { WISO_EXAM_FORMAT, WISO_FORMAT_NOTE, WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { cn } from "@/lib/utils";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/admission" as const;

export const Route = createFileRoute("/wiso/admission")({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) }],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      {
        title: "WU Vienna WiSo Admission: Registration, OSA & Entrance Exam | BBE School",
      },
      {
        name: "description",
        content:
          "How WU Vienna WiSo admission works: registration window, €50 fee, ungraded OSA, Aufnahmeprüfung at VIECON, places, ranking, and enrollment.",
      },
      { property: "og:title", content: "WU Vienna WiSo Admission & Application" },
      {
        property: "og:description",
        content:
          "Registration, OSA, exam, and enrollment for WiSo, with 2026 cycle dates you should still confirm on WU.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoAdmissionPage,
});

const faqs = [
  {
    question: "Is there an entrance exam every year?",
    answer:
      "The written Aufnahmeprüfung is held when registrations exceed available places. If registrations do not exceed places, applicants can advance without the written exam. Confirm the current cycle on the official WU website.",
  },
  {
    question: "Is the WiSo OSA graded?",
    answer:
      "No. It is ungraded and does not affect ranking, but it must be fully completed by the deadline to advance to the exam stage.",
  },
  {
    question: "How many WiSo places are available?",
    answer: `About ${WISO_EXAM_FORMAT.places} places in the 2026/27 cycle. Refresh this figure each year from official WU pages.`,
  },
  {
    question: "Is there an alternative or online exam date?",
    answer: "None. The WiSo written exam is in-person only, with no makeup date.",
  },
  {
    question: "Can I apply to BBE and WiSo?",
    answer:
      "Yes. Fees are paid separately per programme (€50 each, non-refundable). Prepare for each exam’s language pillar (English vs German), because they are separate applicant pools.",
  },
  {
    question: "When can I enroll after passing?",
    answer: `For the 2026 cycle, the enrollment window is ${WISO_EXAM_FORMAT.cycle.enrollmentWindow}. WiSo allows winter or summer program start after a successful procedure.`,
  },
];

const cycleDates: { field: string; detail: string }[] = [
  { field: "Registration window", detail: WISO_EXAM_FORMAT.cycle.registrationWindow },
  { field: "Registration fee", detail: WISO_EXAM_FORMAT.cycle.registrationFee },
  { field: "OSA deadline", detail: WISO_EXAM_FORMAT.cycle.osaDeadline },
  { field: "Entrance exam", detail: WISO_EXAM_FORMAT.cycle.examDate },
  { field: "Exam location", detail: WISO_EXAM_FORMAT.location },
  { field: "Available places (2026/27)", detail: String(WISO_EXAM_FORMAT.places) },
  { field: "Enrollment window", detail: WISO_EXAM_FORMAT.cycle.enrollmentWindow },
  { field: "Program start", detail: "Winter or summer semester possible" },
];

const stages = [
  {
    title: "1. Registration",
    body: `Register in the official window (${WISO_EXAM_FORMAT.cycle.registrationWindow}). Pay the fee per programme; it is non-refundable even if you apply to multiple WU bachelors.`,
  },
  {
    title: "2. Online Self-Assessment (OSA)",
    body: `Complete all OSA sections by ${WISO_EXAM_FORMAT.cycle.osaDeadline}. Six sections typically cover study info, a fachlicher Teil (German and English reading, basic math and economics), planning, expectations, and feedback. There is no time limit and it is not graded, but unfinished OSA blocks advancement.`,
  },
  {
    title: "3. Aufnahmeprüfung (if needed)",
    body: `In-person multiple-choice exam at ${WISO_EXAM_FORMAT.location} on ${WISO_EXAM_FORMAT.cycle.examDate}. No makeup date. Ranking is by written-exam performance when the exam is held.`,
  },
  {
    title: "4. Enrollment",
    body: `After a successful procedure, enroll in ${WISO_EXAM_FORMAT.cycle.enrollmentWindow}. Unlike BBE (winter only), WiSo can allow winter or summer start.`,
  },
];

export function WisoAdmissionPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Admission: Registration, OSA & Entrance Exam"
      lead="Registration, the ungraded OSA, the written exam, and enrollment form one pipeline. The dates below are for the 2026 cycle, so always confirm them on official WU pages before you act."
      heroActions={
        <>
          <WisoPrimaryButton to="/wiso/entrance-exam">Read the exam overview</WisoPrimaryButton>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Start WiSo demo prep</WisoPrimaryButton>
        </>
      }
    >
      <div className="space-y-14">
        <WisoSection id="introduction" title="Introduction">
          <p>
            WiSo (Wirtschafts- und Sozialwissenschaften) is WU Vienna’s German-taught bachelor. It runs
            in the same admissions cycle and registration window as BBE, but it is a separate exam with a
            separate applicant pool and a much larger intake (~{WISO_EXAM_FORMAT.places} places vs ~240
            for BBE).
          </p>
          <p>{WISO_FORMAT_NOTE}</p>
          <p className="mt-2">
            <WisoWuSourceLink />
          </p>
        </WisoSection>

        <WisoInfoCallout label="Fees" tone="official">
          The registration fee is paid per programme and is non-refundable, even if you apply to multiple
          WU bachelors. Figures and deadlines shift slightly each cycle, so refresh them from wu.ac.at.
        </WisoInfoCallout>

        <WisoSection id="pipeline" title="How the stages connect">
          <div className="space-y-4">
            {stages.map((stage) => (
              <div key={stage.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-bold text-foreground">{stage.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
        </WisoSection>

        <WisoSection id="dates" title="2026 cycle snapshot">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <dl>
              {cycleDates.map((row, i) => (
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
          <p className="text-sm text-muted-foreground">
            Last updated in this hub: {WISO_EXAM_FORMAT.cycle.lastUpdated}. Administrative details can
            change, so treat WU as authoritative.
          </p>
        </WisoSection>

        <WisoSection id="osa" title="OSA details that trip people up">
          <ul className="list-disc space-y-2 pl-5">
            <li>It is mandatory to finish, even though it is ungraded.</li>
            <li>
              The fachlicher Teil includes reading comprehension in German and English plus basic math and
              economics, which does not mean the written WiSo exam has an English section.
            </li>
            <li>Leave buffer before the deadline; last-minute technical issues are not a free pass.</li>
          </ul>
        </WisoSection>

        <WisoSection id="ranking" title="Ranking and places">
          <p>
            When the written exam is held, ranking is by exam performance for about{" "}
            {WISO_EXAM_FORMAT.places} places. There is no fixed pass score published here; relative
            standing in the pool is what matters. Prep accordingly with Teilpunktesystem awareness and
            timed practice, not only content coverage.
          </p>
          <WisoTextLink to="/wiso/exam-scoring">WiSo scoring explained →</WisoTextLink>
        </WisoSection>

        <WisoSection id="bbe" title="Applying to WiSo and BBE">
          <p>
            Dual applications are allowed with separate fees. Do not mix prep tracks: BBE’s English
            pillar does not substitute for WiSo’s German reading, and WiSo’s Wirtschaft verstehen
            chapters 2 and 4 are not covered by BBE Fuhrmann English materials.
          </p>
          <WisoTextLink to="/bbe-vs-wiso">BBE vs WiSo side-by-side →</WisoTextLink>
        </WisoSection>

        <WisoSection id="next" title="Next steps">
          <p>
            After logistics, move into content (Wirtschaft verstehen, German reading, and math), then
            timed practice on WiSo URLs.
          </p>
          <div className="flex flex-wrap gap-3">
            <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Open WiSo demo</WisoPrimaryButton>
            <WisoTextLink to="/wiso/exam-preparation">Preparation sequence →</WisoTextLink>
          </div>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
