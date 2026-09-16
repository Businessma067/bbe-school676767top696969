import { createFileRoute } from "@tanstack/react-router";
import {
  WisoDemoCta,
  WisoInfoCallout,
  WisoPrimaryButton,
} from "@/components/wiso-exam/WisoExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { WisoExamShell, WisoSection } from "@/components/wiso-exam/WisoExamShell";
import { WISO_MATH_TOPICS, WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/mathematics" as const;

export const Route = createFileRoute("/wiso/mathematics")({
  head: () => ({
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) }],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WU Vienna WiSo Mathematics: What to Study | BBE School" },
      {
        name: "description",
        content:
          "What to study for WU Vienna WiSo mathematics: algebra, statistics, calculus, logical reasoning, and timed fluency — adapted in German.",
      },
      { property: "og:title", content: "WU Vienna WiSo Mathematics: What to Study" },
      {
        property: "og:description",
        content: "Math prep for the WiSo entrance exam at secondary-school business depth.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoMathematicsPage,
});

const faqs = [
  {
    question: "Does WU publish a WiSo math skriptum?",
    answer:
      "No official math study guide equivalent to Wirtschaft verstehen is published. Prep focuses on general Matura-level business mathematics, in German.",
  },
  {
    question: "Is WiSo math the same as BBE math?",
    answer:
      "Topic depth is similar (algebra, statistics, calculus, logic). The language of stems and explanations for WiSo prep is German; BBE is English.",
  },
];

export function WisoMathematicsPage() {
  return (
    <WisoExamShell
      h1="WU Vienna WiSo Mathematics: What to Study"
      lead="Mathematics is typically the most time-pressured WiSo section. There is no official WU math skriptum — treat it as secondary-school business math with formula fluency under the clock."
      heroActions={
        <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>Open WiSo practice URLs</WisoPrimaryButton>
      }
    >
      <div className="space-y-14">
        <WisoInfoCallout label="Source note" tone="official">
          Topic list below is aligned with common third-party descriptions of WiSo math and mirrors
          BBE’s framing of math as the hardest timed section. Confirm any official updates on WU
          pages.
        </WisoInfoCallout>

        <WisoSection id="topics" title="Core topic areas">
          <ul className="grid gap-3 sm:grid-cols-2">
            {WISO_MATH_TOPICS.map((topic) => (
              <li
                key={topic}
                className="rounded-xl border border-border bg-card px-4 py-3 text-[0.98rem] font-medium"
              >
                {topic}
              </li>
            ))}
          </ul>
        </WisoSection>

        <WisoSection id="approach" title="How to practice">
          <p>
            Prioritise speed and precision: rearranging formulas, reading German word problems
            without translation delay, and checking whether a statement follows from the stem. Timed
            mixed sets beat endless untimed drills.
          </p>
        </WisoSection>

        <WisoDemoCta />
        <BbeFaqAccordion faqs={faqs} />
      </div>
    </WisoExamShell>
  );
}
