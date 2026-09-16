import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoInfoCallout,
  WisoPrimaryButton,
  WisoTextLink,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection } from "@/components/wiso-exam/WisoExamShell";
import {
  WISO_ECONOMICS_CHAPTERS,
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
          "What to study for WiSo economics (Wirtschaft verstehen) and German reading comprehension: chapters, topics, and how they differ from BBE.",
      },
      { property: "og:title", content: "WU Vienna WiSo Economics & German: What to Study" },
      {
        property: "og:description",
        content: "Wirtschaft verstehen chapters plus German comprehension for the WiSo exam.",
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
      "WU publishes Wirtschaft verstehen. Was Wirtschaften im Allgemeinen und für Unternehmen im Besonderen bedeutet — Lernunterlage für das Aufnahmeverfahren (authors include Feurstein and Fuhrmann). A new PDF is issued each cycle (e.g. 2026/27).",
  },
  {
    question: "Is there an English section on WiSo?",
    answer:
      "No. WU’s FAQ lists German reading comprehension (deutsches Sprachverständnis), not English. Ignore third-party pages that copy BBE’s English section onto WiSo.",
  },
];

export function WisoEconomicsGermanPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Economics & German: What to Study"
      lead="Economics follows WU’s official Wirtschaft verstehen guide. The language pillar is academic German reading — analogous in skill to BBE English, but not the same content."
      heroActions={
        <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Open WiSo demo URLs</WisoPrimaryButton>
      }
    >
      <div className="space-y-14">
        <WisoInfoCallout label="Official study guide" tone="official">
          Download Wirtschaft verstehen from wu.ac.at each year (usually late February). Chapter
          structure is stable even when the PDF is reissued.
        </WisoInfoCallout>

        <WisoSection id="economics" title="Economics — Wirtschaft verstehen">
          <div className="space-y-4">
            {WISO_ECONOMICS_CHAPTERS.map((ch, i) => (
              <div key={ch.id} className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Chapter {i + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-foreground">{ch.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {ch.topics}
                </p>
              </div>
            ))}
          </div>
          <p>
            Chapters 1 and 3 overlap meaningfully with BBE economics concepts; chapters 2 and 4
            (sustainability / digitalisation) are WiSo-specific and need dedicated study.
          </p>
        </WisoSection>

        <WisoSection id="german" title="German reading comprehension">
          <p>
            Academic-level texts testing comprehension, interpretation, and argument — not a
            vocabulary/grammar mini-section like some unreliable sources claim. Treat it as a
            transferable skill: text strategies, timing, and careful statement evaluation in German.
          </p>
          <WisoTextLink to="/bbe-vs-wiso">How this differs from BBE English →</WisoTextLink>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
