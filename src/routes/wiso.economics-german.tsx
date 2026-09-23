import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoGhostButton,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
  WisoWuSourceLink,
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

const PATH = "/wiso/economics-german" as const;

export const Route = createFileRoute("/wiso/economics-german")({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) }],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      {
        title: "WU Vienna WiSo Economics & German: What to Study | BBE School",
      },
      {
        name: "description",
        content:
          "What to study for WiSo economics (Wirtschaft verstehen chapters) and German reading comprehension: TOC, topics, myths, and how they differ from BBE.",
      },
      { property: "og:title", content: "WU Vienna WiSo Economics & German: What to Study" },
      {
        property: "og:description",
        content:
          "Wirtschaft verstehen chapter guide plus academic German comprehension for the WiSo Aufnahmeprüfung.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoEconomicsGermanPage,
});

const faqs = [
  {
    question: "What economics book does WiSo use?",
    answer:
      "WU publishes Wirtschaft verstehen. Was Wirtschaften im Allgemeinen und für Unternehmen im Besonderen bedeutet (Lernunterlage für das Aufnahmeverfahren; authors include Feurstein M.S., Fuhrmann B., Lampe M., Prettner K., Stagl S., Strembeck M.). A new PDF is issued each cycle (e.g. 2026/27), usually around late February.",
  },
  {
    question: "Is there an English section on WiSo?",
    answer:
      "No. WU’s FAQ lists deutsche Sprachverständnis (German reading comprehension), not English. Ignore third-party pages that copy BBE’s English section onto WiSo.",
  },
  {
    question: "Does Fuhrmann mean WiSo equals BBE economics?",
    answer:
      "Same lead author family as BBE’s Introduction to Business and Economics, and chapters 1 and 3 overlap conceptually, but chapters 2 and 4 (sustainability / digitalisation) are WiSo-specific, and the language of the exam is German.",
  },
  {
    question: "Is German a grammar test?",
    answer:
      "Treat it as academic reading comprehension: interpretation and argument from texts. Unreliable sources sometimes invent a grammar/vocabulary mini-section; WU frames it as Sprachverständnis.",
  },
  {
    question: "Where do I download Wirtschaft verstehen?",
    answer:
      "From wu.ac.at each cycle (search for the current Aufnahmeverfahren Lernunterlage PDF). Content is relatively stable year to year even when the file is reissued.",
  },
];

const chapterDetail: {
  id: string;
  focus: string;
  studyNotes: string[];
  overlap: "shared" | "wiso-only";
}[] = [
  {
    id: "ch1",
    focus: "Foundations of wirtschaften",
    studyNotes: [
      "Circular flow of the economy; who participates",
      "Opportunity cost and scarce resources",
      "Supply/demand intuition and market types (Monopol, Oligopol, Polypol)",
      "Money, interest, inflation (causes, CPI, ECB’s 2% target), GDP/GNP",
    ],
    overlap: "shared",
  },
  {
    id: "ch2",
    focus: "Economy inside society and environment",
    studyNotes: [
      "Embedding of the economy in society and environment",
      "Sustainability and decoupling debates",
      "Planetary / Earth-system boundaries",
      "Subjective wellbeing (SWB) and Doughnut-style framing",
    ],
    overlap: "wiso-only",
  },
  {
    id: "ch3",
    focus: "Firms and managerial basics",
    studyNotes: [
      "What a company is; types of enterprises",
      "Legal forms (Rechtsformen)",
      "Financing sources",
      "Accounting basics: balance sheet, P&L, cash flow",
      "Marketing and market orientation",
    ],
    overlap: "shared",
  },
  {
    id: "ch4",
    focus: "Digitalisation and Wirtschaftsinformatik",
    studyNotes: [
      "Digital transformation of products and business models",
      "Internet as a platform for firms",
      "Perspectives and definitions in Wirtschaftsinformatik",
      "Application and information systems at a conceptual level",
    ],
    overlap: "wiso-only",
  },
];

const germanSkills = [
  {
    title: "Comprehension",
    body: "Locate claims, evidence, and conclusions in academic-length German passages without needing every rare word.",
  },
  {
    title: "Interpretation",
    body: "Decide whether a statement is supported, contradicted, or simply not implied by the text, since partial credit punishes over-claiming.",
  },
  {
    title: "Argument structure",
    body: "Track how an author builds a position. Options often twist scope (“always”, “only”, “mainly”) rather than inventing new facts.",
  },
  {
    title: "Timing",
    body: "Build speed with short daily passages. Saving German for the last week is a common failure mode for bilingual applicants who feel “fine at German.”",
  },
];

export function WisoEconomicsGermanPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Economics & German: What to Study"
      lead="Economics follows WU’s official Wirtschaft verstehen guide. The language pillar is academic German reading, which is analogous in skill to BBE English but not the same content or vocabulary."
      heroActions={
        <>
          <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Open WiSo demo</WisoPrimaryButton>
          <WisoGhostButton to="/bbe-vs-wiso">Compare with BBE</WisoGhostButton>
        </>
      }
    >
      <div className="space-y-14">
        <WisoSection id="introduction" title="Introduction">
          <p>
            WiSo’s content areas are wirtschaftliche Grundkenntnisse, Mathematik, and deutsches
            Sprachverständnis. This page covers the two non-math pillars: the official economics
            Lernunterlage and German reading comprehension. Together they are where many applicants
            accidentally study the wrong track, especially if they reuse BBE English materials.
          </p>
        </WisoSection>

        <WisoInfoCallout label="Most recent exam structure" tone="official">
          <p>{WISO_FORMAT_NOTE}</p>
          <p className="mt-2">
            <WisoWuSourceLink />
          </p>
        </WisoInfoCallout>

        <WisoStatGrid
          items={[
            { label: "Econ questions", value: String(WISO_EXAM_FORMAT.economicsQuestions) },
            { label: "German questions", value: String(WISO_EXAM_FORMAT.germanQuestions) },
            { label: "Language pillar", value: "German" },
            { label: "English section?", value: "No" },
          ]}
        />

        <WisoInfoCallout label="Official study guide" tone="note">
          Download Wirtschaft verstehen from wu.ac.at each year (usually late February). Authors include
          Feurstein and Fuhrmann. Chapter structure is stable even when the PDF is reissued. PDF example
          for 2026/27: Wirtschaft_verstehen_Aufnahmeprüfung_2026.pdf on wu.ac.at.
        </WisoInfoCallout>

        <WisoSection id="economics" title="Economics: Wirtschaft verstehen">
          <p>
            Work the guide chapter by chapter. Precision of definitions matters, because a single
            qualifier in a German statement can flip an option under Teilpunktesystem scoring.
          </p>
          <div className="mt-4 space-y-4">
            {WISO_ECONOMICS_CHAPTERS.map((ch, i) => {
              const detail = chapterDetail[i];
              return (
                <div key={ch.id} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Chapter {i + 1}
                    </p>
                    {detail ? (
                      <span
                        className={
                          detail.overlap === "wiso-only"
                            ? "rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-semibold text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200"
                            : "rounded-full bg-secondary px-2 py-0.5 text-[11px] font-semibold text-foreground"
                        }
                      >
                        {detail.overlap === "wiso-only" ? "WiSo-specific" : "Overlaps BBE concepts"}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold text-foreground">{ch.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-foreground">
                    {ch.topics}
                  </p>
                  {detail ? (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground">
                      {detail.studyNotes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
          <p className="mt-4">
            Chapters 1 and 3 overlap meaningfully with BBE economics concepts, so some question logic can
            transfer if you rewrite stems in German. Chapters 2 and 4 need dedicated WiSo study, because
            sustainability/wellbeing economics and digitalisation/Wirtschaftsinformatik have no BBE
            English twin.
          </p>
        </WisoSection>

        <WisoSection id="german" title="German reading comprehension">
          <p>
            Academic-level texts testing comprehension, interpretation, and argument formation; this is a
            skill section rather than a content syllabus. There is no official reading list. Build
            transferable strategies the same way BBE applicants build English reading stamina.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {germanSkills.map((skill) => (
              <div key={skill.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-bold">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.body}</p>
              </div>
            ))}
          </div>
          <WisoInfoCallout label="Myth to ignore" tone="note">
            Some third-party prep sites list an “Englisch” section for WiSo. That is wrong or copy-pasted
            from BBE. WU’s own FAQ lists German comprehension, not English.
          </WisoInfoCallout>
        </WisoSection>

        <WisoSection id="study-sequence" title="Suggested study sequence">
          <ol className="list-decimal space-y-3 pl-5">
            <li>Skim all four Wirtschaft verstehen chapters for map awareness.</li>
            <li>Deep-dive chapter 1 definitions with statement-style practice.</li>
            <li>Lock chapter 3 firm/accounting vocabulary in German.</li>
            <li>Allocate explicit weeks to chapters 2 and 4 (WiSo-only).</li>
            <li>Run parallel German reading drills every week; do not backlog them.</li>
          </ol>
        </WisoSection>

        <WisoSection id="next" title="What to do next">
          <div className="flex flex-wrap gap-4">
            <WisoTextLink to="/wiso/mathematics">Mathematics guide →</WisoTextLink>
            <WisoTextLink to="/wiso/exam-scoring">Scoring explained →</WisoTextLink>
            <WisoTextLink to="/wiso/exam-preparation">Prep plan →</WisoTextLink>
          </div>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
