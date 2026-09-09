import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BookOpen,
  CalendarDays,
  Globe2,
  GraduationCap,
  Languages,
} from "lucide-react";
import examHallAsset from "@/assets/exam-hall-real.png.asset.json";
import {
  BbeDemoCta,
  BbeGhostButton,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection, BbeStatGrid } from "@/components/bbe-exam/BbeExamShell";
import { BBE_EXAM_FORMAT, BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { cn } from "@/lib/utils";

const PATH = "/bbe-vs-wiso" as const;

/** Public cycle figures commonly cited for recent WU bachelor selection rounds. */
const WISO_PLACES = 2703;
const BBE_PLACES = BBE_EXAM_FORMAT.places;
const WISO_ELIGIBLE_APPROX = 6370;
const BBE_ELIGIBLE_APPROX = 3900;

export const Route = createFileRoute("/bbe-vs-wiso")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "BBE vs WISO at WU Vienna: Entrance Exam Comparison Guide",
          description:
            "Compare WU Vienna’s BBE and WISO entrance exams: language, subjects, places, selectivity, semester start, and how to decide which path fits you.",
          author: { "@type": "Organization", name: "BBE School" },
          publisher: { "@type": "Organization", name: "BBE School", url: "https://bbe-school.com" },
          mainEntityOfPage: `https://bbe-school.com${PATH}`,
          dateModified: "2026-09-09",
        }),
      },
    ],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      {
        title: "BBE vs WISO at WU Vienna: Entrance Exam Comparison Guide | BBE School",
      },
      {
        name: "description",
        content:
          "BBE vs WISO at WU Vienna explained: English vs German programmes, entrance exam subjects, places, selectivity, semester start, and which exam to prepare for.",
      },
      {
        property: "og:title",
        content: "BBE vs WISO at WU Vienna: Entrance Exam Comparison Guide",
      },
      {
        property: "og:description",
        content:
          "Side-by-side comparison of WU’s BBE and WISO entrance exams: language, subjects, competition, and how to choose.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "BBE vs WISO, WU Vienna, Aufnahmeprüfung, BBE entrance exam, WISO entrance exam, Business and Economics, Wirtschafts- und Sozialwissenschaften" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: BbeVsWisoPage,
});

const faqs = [
  {
    question: "What is the difference between BBE and WISO at WU Vienna?",
    answer:
      "BBE is WU’s English-taught Bachelor’s Program in Business and Economics. WISO is the German-taught Bachelor’s Program in Business, Economics and Social Sciences. Both use a written multiple-choice entrance exam when demand exceeds places, but language of instruction, language section of the exam, place numbers, and semester start options differ.",
  },
  {
    question: "Is the BBE entrance exam harder than the WISO exam?",
    answer:
      "BBE is generally more selective because far fewer places are available. Content overlap exists in mathematics and basic economics, but BBE tests English skills while WISO tests German language comprehension. Which feels harder depends on your language strengths and how competitive your cohort is.",
  },
  {
    question: "Can I take both the BBE and WISO entrance exams?",
    answer:
      "Yes. Applicants interested in more than one WU bachelor programme typically register and pay the fee for each programme separately, then complete each selection procedure’s required steps. Confirm the current rules on the official WU website.",
  },
  {
    question: "How many places do BBE and WISO offer?",
    answer:
      "Recent cycles referenced about 240 BBE places and about 2,703 WISO places. Exact figures can change by year, so verify on official WU pages.",
  },
  {
    question: "Which exam should I prepare for if I am undecided?",
    answer:
      "Decide by language of study first: strong English and an international cohort point toward BBE; strong German and broader curricular flexibility often point toward WISO. Many applicants sit a diagnostic-style practice set to see how they handle BBE-format mathematics, economics, and English under time pressure.",
  },
];

const comparisonRows: { aspect: string; bbe: string; wiso: string }[] = [
  {
    aspect: "Programme language",
    bbe: "English-taught",
    wiso: "German-taught",
  },
  {
    aspect: "Full programme name",
    bbe: "Business and Economics (BBE)",
    wiso: "Business, Economics and Social Sciences (WISO)",
  },
  {
    aspect: "Exam language focus",
    bbe: "English (grammar, vocabulary, reading)",
    wiso: "German language comprehension",
  },
  {
    aspect: "Shared exam pillars",
    bbe: "Mathematics + economics/business basics",
    wiso: "Mathematics + economics/business basics",
  },
  {
    aspect: "Places (recent cycle)",
    bbe: String(BBE_PLACES),
    wiso: String(WISO_PLACES),
  },
  {
    aspect: "Selectivity signal",
    bbe: "Very high (often ~16 applicants per place)",
    wiso: "High, but more places available",
  },
  {
    aspect: "Programme start",
    bbe: "Winter semester only",
    wiso: "Winter or summer semester possible after a successful procedure",
  },
  {
    aspect: "Typical cohort feel",
    bbe: "Smaller, international, English campus life",
    wiso: "Larger programme with broader specialisation paths later",
  },
];

const decideCards: { title: string; body: string; tone: "bbe" | "wiso" | "both" }[] = [
  {
    title: "Lean toward BBE if…",
    body: "You want to study fully in English, prefer a smaller international cohort, and are ready for a highly selective written exam with an English section.",
    tone: "bbe",
  },
  {
    title: "Lean toward WISO if…",
    body: "You are comfortable studying in German, value a larger programme with more later specialisation options, and may want a summer-semester start after a successful selection procedure.",
    tone: "wiso",
  },
  {
    title: "Consider both if…",
    body: "Your language skills support either path and you want a second chance at a WU bachelor seat. Register for each programme separately and prepare for the language section that each exam actually tests.",
    tone: "both",
  },
];

export function BbeVsWisoPage() {
  return (
    <BbeExamShell
      h1="BBE vs WISO at WU Vienna: Entrance Exam Comparison Guide"
      lead="Choosing between WU Vienna’s BBE and WISO programmes starts with the entrance exams behind them. This independent guide compares language, subjects, places, selectivity, and preparation — so you can decide which path fits you."
      heroActions={
        <>
          <BbePrimaryButton to={BBE_PRACTICE_ROUTES.demo}>
            Try the free BBE demo course
          </BbePrimaryButton>
          <BbeGhostButton to={BBE_PRACTICE_ROUTES.mockExams}>
            Take a diagnostic test
          </BbeGhostButton>
        </>
      }
    >
      <div className="space-y-14">
        <BbeSection id="quick-answer" title="Quick answer: BBE vs WISO">
          <p>
            BBE is WU Vienna’s English-taught Bachelor’s Program in Business and Economics. WISO is
            the German-taught Bachelor’s Program in Business, Economics and Social Sciences. Both
            selection procedures usually include a written, in-person multiple-choice entrance exam
            when registrations exceed places. The practical differences that matter most for
            applicants are language of study, the language section on the exam, how many seats exist,
            and when you can start.
          </p>
          <BbeStatGrid
            items={[
              { label: "BBE places", value: String(BBE_PLACES) },
              { label: "WISO places", value: String(WISO_PLACES) },
              { label: "BBE exam language", value: "English" },
              { label: "WISO exam language", value: "German" },
            ]}
          />
          <BbeInfoCallout label="Independent guide" tone="official">
            BBE School prepares applicants for the BBE entrance exam. Figures below summarise recent
            public WU cycle information and can change. Always confirm dates, fees, and rules on the
            official WU Vienna website.
          </BbeInfoCallout>
        </BbeSection>

        <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <img
            src="/exam-info/bbe-vs-wiso-paths.jpg"
            alt="Illustration of two academic pathways branching from one university campus"
            className="h-auto w-full object-cover"
            loading="lazy"
            width={1600}
            height={900}
          />
          <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
            One university, two bachelor pathways: BBE and WISO share a WU campus identity but differ
            in language, cohort size, and entrance-exam competition.
          </figcaption>
        </figure>

        <BbeSection id="side-by-side" title="Side-by-side comparison">
          <p>
            Use this table as a decision snapshot. For BBE exam format details, see the BBE Entrance
            Exam Overview linked below.
          </p>
          <BbeTextLink to="/bbe-entrance-exam">BBE Entrance Exam Guide →</BbeTextLink>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-[0.95rem]">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-4 py-3 font-semibold text-foreground">Aspect</th>
                  <th className="px-4 py-3 font-semibold text-foreground">BBE</th>
                  <th className="px-4 py-3 font-semibold text-foreground">WISO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.aspect} className="border-b border-border last:border-b-0">
                    <th className="px-4 py-3 align-top font-medium text-foreground">{row.aspect}</th>
                    <td className="px-4 py-3 align-top text-neutral-800">{row.bbe}</td>
                    <td className="px-4 py-3 align-top text-neutral-800">{row.wiso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BbeSection>

        <BbeSection id="places-selectivity" title="Places and selectivity">
          <p>
            Place counts are the clearest structural difference. WISO offers many more seats; BBE
            remains one of WU’s most competitive bachelor intakes. In a recent WU announcement,
            roughly 3,900 people were eligible for the BBE exam against 240 places, while about 6,370
            were eligible for WISO against 2,703 places.
          </p>
          <PlacesChart />
          <SelectivityChart />
          <p className="text-sm text-muted-foreground">
            Charts use approximate recent-cycle figures for illustration. Competition ratios move
            with each year’s registrations.
          </p>
        </BbeSection>

        <BbeSection id="exam-content" title="What each entrance exam tests">
          <p>
            Both exams are multiple-choice and typically cover mathematics plus basic economics and
            business knowledge. The language pillar is where they diverge: BBE tests English; WISO
            tests German comprehension.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <SubjectCard
              title="BBE written exam"
              icon={<Globe2 className="h-5 w-5" />}
              items={[
                "Economics & business fundamentals",
                "English grammar, vocabulary, and reading",
                "Mathematics at Austrian school-leaving depth",
                "Most recent BBE structure: 34 questions in 2 hours",
              ]}
              accent="bbe"
            />
            <SubjectCard
              title="WISO written exam"
              icon={<Languages className="h-5 w-5" />}
              items={[
                "Economics & business fundamentals",
                "German language comprehension",
                "Mathematics",
                "Multiple-choice only; held in person when the procedure runs",
              ]}
              accent="wiso"
            />
          </div>
          <figure className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src="/exam-info/bbe-vs-wiso-languages.jpg"
              alt="Split academic atmosphere suggesting English-taught and German-taught study environments"
              className="h-auto w-full object-cover"
              loading="lazy"
              width={1600}
              height={900}
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
              Language is the hinge decision: BBE campus life and exam tasks run in English; WISO
              study and the language section of the exam assume solid German.
            </figcaption>
          </figure>
          <p>
            If you are aiming at BBE specifically, dig into the Mathematics and Economics & English
            guides next.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbeTextLink to="/bbe-mathematics">Mathematics topics →</BbeTextLink>
            <BbeTextLink to="/bbe-economics-english">Economics & English →</BbeTextLink>
          </div>
        </BbeSection>

        <BbeSection id="process" title="Shared admission process building blocks">
          <p>
            Despite different programmes, the administrative spine often looks similar: register in
            the published window, complete the Online Self-Assessment (OSA) if required, then sit the
            written exam if demand exceeds places. There is typically no alternative exam date.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Registration fee applies per programme (confirm the current amount with WU).</li>
            <li>OSA is usually ungraded and does not replace the ranking based on the written exam.</li>
            <li>
              Recent BBE and WISO exams have been held at VIECON, Vienna Congress and Convention
              Center (Messe Wien).
            </li>
            <li>
              BBE start is winter semester only; WISO can allow winter or summer start after a
              successful procedure.
            </li>
          </ul>
          <div className="grid gap-3 sm:grid-cols-3">
            <ProcessChip icon={<CalendarDays className="h-4 w-4" />} label="Register in the window" />
            <ProcessChip icon={<BookOpen className="h-4 w-4" />} label="Complete the OSA" />
            <ProcessChip icon={<GraduationCap className="h-4 w-4" />} label="Sit the written exam" />
          </div>
          <BbeTextLink to="/bbe-admission">BBE admission & application overview →</BbeTextLink>
        </BbeSection>

        <BbeSection id="who-should-choose" title="Who should choose BBE or WISO?">
          <div className="grid gap-4 lg:grid-cols-3">
            {decideCards.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "rounded-2xl border px-5 py-5",
                  card.tone === "bbe" && "border-orange-200/80 bg-orange-50/50",
                  card.tone === "wiso" && "border-sky-200/80 bg-sky-50/60",
                  card.tone === "both" && "border-border bg-card",
                )}
              >
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-neutral-800">{card.body}</p>
              </div>
            ))}
          </div>
        </BbeSection>

        <BbeSection id="preparation-overlap" title="Preparation overlap — and what does not transfer">
          <p>
            Mathematics and basic economics preparation can transfer between the two exams. What does
            not transfer is the language section: English practice will not replace German
            comprehension prep for WISO, and the reverse is also true.
          </p>
          <p>
            For BBE applicants, the highest-leverage sequence is usually: understand format and
            scoring, run a diagnostic, close topic gaps, then add timed mocks. A practical starting
            point is the free demo course, followed by a diagnostic-style mock exam.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbeTextLink to={BBE_PRACTICE_ROUTES.demo}>free demo course →</BbeTextLink>
            <BbeTextLink to={BBE_PRACTICE_ROUTES.mockExams}>diagnostic-style mock exam →</BbeTextLink>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src={examHallAsset.url}
              alt="Large exam hall seating at a WU Vienna entrance exam"
              className="h-auto max-h-[22rem] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
              Both pathways can lead to the same kind of high-pressure hall experience. Preparation
              quality matters more than collecting random PDFs.
            </figcaption>
          </figure>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BbeTextLink to="/bbe-exam-scoring">How BBE scoring works →</BbeTextLink>
            <BbeTextLink to="/bbe-exam-preparation">How to prepare for BBE →</BbeTextLink>
          </div>
        </BbeSection>

        <BbeSection id="myths" title="Common myths about BBE vs WISO">
          <dl className="space-y-5">
            <div>
              <dt className="font-semibold text-foreground">
                “WISO is just the easy German version of BBE.”
              </dt>
              <dd className="mt-1 text-neutral-800">
                Not accurate. WISO is a different programme with its own scale, language, and
                curriculum options. It is less scarce on seats, but it is still a competitive WU
                bachelor intake.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">
                “If I prepare for one exam, I am ready for both.”
              </dt>
              <dd className="mt-1 text-neutral-800">
                Shared math and economics skills help, but the language section and ranking pools are
                separate. Treat each registration as its own race.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">
                “BBE is only for international students.”
              </dt>
              <dd className="mt-1 text-neutral-800">
                BBE is English-taught and attracts an international cohort, but eligibility depends on
                WU’s official requirements — not on nationality alone.
              </dd>
            </div>
          </dl>
        </BbeSection>

        <BbeSection id="next-steps" title="Next steps if you choose BBE">
          <p>
            If BBE is your target — or your parallel application — start with format literacy, then
            measure your baseline under exam-style statements. The free demo course shows how BBE
            School lessons and explanations feel; diagnostic mocks show where your score leaks first.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <BbePrimaryButton to={BBE_PRACTICE_ROUTES.demo}>Start the free demo course</BbePrimaryButton>
            <BbeGhostButton to={BBE_PRACTICE_ROUTES.mockExams}>Open diagnostic mocks</BbeGhostButton>
          </div>
        </BbeSection>

        <BbeFaqAccordion faqs={faqs} />

        <BbeDemoCta
          title="Want to feel the BBE exam style before you commit?"
          body="Use the free demo course to sample Economics, Math, and English tasks with explanations, then take a diagnostic mock to see your starting point."
          cta="Start Free Demo Course →"
        />
      </div>
    </BbeExamShell>
  );
}

function PlacesChart() {
  const max = WISO_PLACES;
  const bars = [
    { label: "BBE places", value: BBE_PLACES, color: "#E85D3A" },
    { label: "WISO places", value: WISO_PLACES, color: "#0F766E" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
        Available places (recent cycle)
      </p>
      <div className="mt-5 space-y-4">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium text-foreground">{bar.label}</span>
              <span className="font-display text-lg font-bold tabular-nums text-foreground">
                {bar.value.toLocaleString("en-US")}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full transition-[width] duration-700"
                style={{
                  width: `${Math.max(4, (bar.value / max) * 100)}%`,
                  background: bar.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SelectivityChart() {
  const bbeRatio = Math.round(BBE_ELIGIBLE_APPROX / BBE_PLACES);
  const wisoRatio = Math.round((WISO_ELIGIBLE_APPROX / WISO_PLACES) * 10) / 10;
  const max = bbeRatio;
  const bars = [
    { label: "BBE · eligible per place", value: bbeRatio, display: `~${bbeRatio}`, color: "#E85D3A" },
    { label: "WISO · eligible per place", value: wisoRatio, display: `~${wisoRatio}`, color: "#0F766E" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
        Approximate competition (eligible applicants ÷ places)
      </p>
      <div className="mt-5 space-y-4">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium text-foreground">{bar.label}</span>
              <span className="font-display text-lg font-bold tabular-nums text-foreground">
                {bar.display}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.max(8, (bar.value / max) * 100)}%`,
                  background: bar.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubjectCard({
  title,
  icon,
  items,
  accent,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
  accent: "bbe" | "wiso";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-5 shadow-sm",
        accent === "bbe" ? "border-orange-200/70" : "border-teal-200/70",
      )}
    >
      <div className="flex items-center gap-2 text-foreground">
        <span
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full",
            accent === "bbe" ? "bg-orange-100 text-[#E85D3A]" : "bg-teal-100 text-teal-800",
          )}
        >
          {icon}
        </span>
        <h3 className="font-display text-lg font-bold tracking-tight">{title}</h3>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed text-neutral-800">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProcessChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-3 text-sm font-medium text-foreground">
      {icon}
      {label}
    </div>
  );
}
