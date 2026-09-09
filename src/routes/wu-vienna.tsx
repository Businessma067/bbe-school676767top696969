import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import {
  BbeGhostButton,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection, BbeStatGrid } from "@/components/bbe-exam/BbeExamShell";
import { BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wu-vienna" as const;

const CHART = {
  ink: "#161616",
  muted: "#5A584F",
  border: "#D8D6CE",
  paper: "#F2F1ED",
  red: "#B3392A",
  amber: "#D97706",
  slate: "#3F3F46",
  teal: "#0F766E",
};

const FT_EUROPEAN_TREND = [
  { year: "2023", rank: 41 },
  { year: "2024", rank: 46 },
  { year: "2025", rank: 41 },
];

const QS_SUBJECT_RANKS = [
  { subject: "Supply Chain MSc", rank: 2, fill: CHART.red },
  { subject: "Marketing MSc", rank: 12, fill: CHART.amber },
  { subject: "Management MSc", rank: 17, fill: CHART.slate },
  { subject: "Finance MSc", rank: 22, fill: CHART.teal },
  { subject: "Business & Mgmt (subject)", rank: 69, fill: CHART.muted },
];

const PROGRAM_MIX = [
  { name: "Bachelor’s", value: 3, fill: CHART.red },
  { name: "Master’s", value: 16, fill: CHART.amber },
  { name: "Doctoral / PhD", value: 5, fill: CHART.slate },
  { name: "MBA tracks", value: 10, fill: CHART.teal },
];

const BACHELOR_PROGRAMS = [
  {
    name: "Business and Economics (BBE)",
    language: "English",
    note: "International cohort, winter-semester start, selective written entrance exam.",
  },
  {
    name: "Business, Economics and Social Sciences (WISO)",
    language: "German",
    note: "Largest bachelor pathway with broader later specialisation options.",
  },
  {
    name: "Business Law",
    language: "German",
    note: "Law degree with a strong business and economics focus.",
  },
];

const MASTER_HIGHLIGHTS = [
  "International Management / CEMS",
  "Supply Chain Management",
  "Marketing",
  "Quantitative Finance",
  "Economics",
  "Digital Economy",
  "Strategy, Innovation, and Management Control",
  "Socio-Ecological Economics and Policy",
  "Business Communication",
];

const CAMPUS_FACTS = [
  { label: "Campus address", value: "Welthandelsplatz 1, 1020 Vienna" },
  { label: "Students", value: "~21,000 from 100+ countries" },
  { label: "Library workplaces", value: "~1,500 in the Central Library" },
  { label: "Campus character", value: "Climate-neutral, barrier-free, next to Prater Park" },
];

export const Route = createFileRoute("/wu-vienna")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "WU Vienna University Overview: Rankings, Courses & Campus Life",
          description:
            "Independent overview of WU Vienna: international rankings, bachelor and master programmes, Campus WU life, and how it connects to the BBE entrance exam.",
          author: { "@type": "Organization", name: "BBE School" },
          publisher: { "@type": "Organization", name: "BBE School", url: "https://bbe-school.com" },
          mainEntityOfPage: `https://bbe-school.com${PATH}`,
          dateModified: "2026-09-10",
          image: `https://bbe-school.com${wuAsset.url}`,
        }),
      },
    ],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      {
        title: "WU Vienna University Overview: Rankings, Courses & Campus Life | BBE School",
      },
      {
        name: "description",
        content:
          "WU Vienna overview for applicants: FT and QS rankings, bachelor and master courses, Campus WU life, and how the university connects to the BBE entrance exam.",
      },
      {
        property: "og:title",
        content: "WU Vienna University Overview: Rankings, Courses & Campus Life",
      },
      {
        property: "og:description",
        content:
          "Rankings, degree programmes, and campus life at WU Vienna — an independent guide for BBE applicants.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "WU Vienna, Wirtschaftsuniversität Wien, WU rankings, Campus WU, BBE, Business and Economics, WU courses, WU campus life",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WuViennaOverviewPage,
});

const faqs = [
  {
    question: "What is WU Vienna?",
    answer:
      "WU (Vienna University of Economics and Business / Wirtschaftsuniversität Wien) is Austria’s leading public university for business, economics, and related social sciences. It offers bachelor’s, master’s, doctoral, and MBA programmes on Campus WU in Vienna’s second district.",
  },
  {
    question: "How is WU ranked internationally?",
    answer:
      "Recent public results include #41 in the Financial Times European Business School Ranking 2025, #69 in QS Business & Management Studies 2026, and very strong QS master’s placements such as Supply Chain Management (#2) and Marketing (#12). Rankings change yearly and measure different things.",
  },
  {
    question: "What bachelor programmes does WU offer?",
    answer:
      "Three bachelor pathways: English-taught Business and Economics (BBE), German-taught Business, Economics and Social Sciences (WISO), and German-taught Business Law. Exact curricula and selection rules are set by WU for each cycle.",
  },
  {
    question: "What is Campus WU like?",
    answer:
      "Campus WU at Welthandelsplatz 1 is a purpose-built modern campus next to Prater Park. The Library & Learning Center is the academic heart, with thousands of study workplaces, open plazas, cafés, and barrier-free design. Student life mixes lectures, clubs, and Vienna city life.",
  },
  {
    question: "Is BBE School affiliated with WU?",
    answer:
      "No. BBE School is an independent preparation provider for the BBE entrance exam. Always confirm official admissions, rankings claims, and programme details on wu.ac.at.",
  },
];

export function WuViennaOverviewPage() {
  return (
    <BbeExamShell
      h1="WU Vienna University Overview: Rankings, Courses & Campus Life"
      lead="WU Vienna is Austria’s flagship university for business and economics. This independent guide reviews recent rankings, the degree programmes on offer, and what daily life on Campus WU feels like — especially if you are aiming for the English-taught BBE bachelor."
      badges={[
        "Independent, unofficial guide. Not affiliated with WU Vienna",
        "Last updated: September 10, 2026",
      ]}
      heroActions={
        <>
          <BbePrimaryButton to="/bbe-entrance-exam">BBE entrance exam guide</BbePrimaryButton>
          <BbeGhostButton to={BBE_PRACTICE_ROUTES.demo}>Start free demo prep</BbeGhostButton>
        </>
      }
    >
      <div className="space-y-14">
        <BbeSection id="at-a-glance" title="WU Vienna at a glance">
          <p>
            WU Vienna (Wirtschaftsuniversität Wien) concentrates teaching and research in business,
            economics, and neighbouring social sciences. About 21,000 students from more than 100
            countries study on a single modern campus in Vienna’s second district — next to Prater
            Park and a short ride from the city centre.
          </p>
          <BbeStatGrid
            items={[
              { label: "FT Europe 2025", value: "#41" },
              { label: "QS Business & Mgmt 2026", value: "#69" },
              { label: "Bachelor programmes", value: "3" },
              { label: "Master programmes", value: "16" },
            ]}
          />
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src={wuAsset.url}
              alt="Modern Campus WU buildings under a clear sky in Vienna"
              className="h-auto max-h-[26rem] w-full object-cover object-center"
              loading="eager"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
              Campus WU at Welthandelsplatz: a purpose-built business-university campus rather than a
              scattered city-centre faculty map.
            </figcaption>
          </figure>
          <BbeInfoCallout label="Independent guide" tone="official">
            Rankings, place numbers, and programme lists can change. Treat this page as orientation
            for applicants, then verify details on the official WU Vienna website.
          </BbeInfoCallout>
        </BbeSection>

        <BbeSection id="rankings" title="Rankings and reputation">
          <p>
            WU selectively enters major business-school rankings. The picture that matters for most
            applicants: strong European brand recognition, Triple Crown accreditation context for
            the wider school, and especially competitive master’s placements in supply chain,
            marketing, management, and finance.
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            <ChartCard
              title="FT European Business School rank"
              subtitle="Lower number is better. WU returned to #41 in 2025 after #46 in 2024."
            >
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={FT_EUROPEAN_TREND} margin={{ top: 12, right: 16, left: 0, bottom: 8 }}>
                    <CartesianGrid stroke={CHART.border} strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fill: CHART.muted, fontSize: 12 }} />
                    <YAxis
                      reversed
                      domain={[35, 50]}
                      tick={{ fill: CHART.muted, fontSize: 12 }}
                      width={36}
                    />
                    <Tooltip
                      formatter={(value) => [`#${value}`, "Rank"]}
                      contentStyle={tooltipStyle}
                    />
                    <Line
                      type="monotone"
                      dataKey="rank"
                      stroke={CHART.red}
                      strokeWidth={3}
                      dot={{ r: 5, fill: CHART.red }}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>

            <ChartCard
              title="Selected QS 2026 ranks"
              subtitle="Master’s programme ranks and the Business & Management subject table."
            >
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={QS_SUBJECT_RANKS}
                    layout="vertical"
                    margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
                  >
                    <CartesianGrid stroke={CHART.border} strokeDasharray="3 3" horizontal={false} />
                    <XAxis
                      type="number"
                      domain={[0, 80]}
                      tick={{ fill: CHART.muted, fontSize: 12 }}
                    />
                    <YAxis
                      type="category"
                      dataKey="subject"
                      width={118}
                      tick={{ fill: CHART.ink, fontSize: 11 }}
                    />
                    <Tooltip
                      formatter={(value) => [`#${value}`, "Rank"]}
                      contentStyle={tooltipStyle}
                    />
                    <Bar dataKey="rank" radius={[0, 6, 6, 0]} isAnimationActive={false}>
                      {QS_SUBJECT_RANKS.map((row) => (
                        <Cell key={row.subject} fill={row.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[34rem] border-collapse text-left text-[0.95rem]">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-4 py-3 font-semibold text-foreground">Ranking</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Recent result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    ranking: "FT European Business School 2025",
                    result: "#41 of 100 (#6 in the DACH region)",
                  },
                  {
                    ranking: "FT Masters in Management 2025",
                    result: "#18 of 100 (#2 in DACH)",
                  },
                  {
                    ranking: "QS Business & Management Studies 2026",
                    result: "#69 of 650",
                  },
                  {
                    ranking: "QS Economics & Econometrics 2026",
                    result: "#106 of 699",
                  },
                  {
                    ranking: "QS Masters in Supply Chain Management 2026",
                    result: "#2 of 106",
                  },
                  {
                    ranking: "Handelsblatt/WiWo Business Administration 2024",
                    result: "#5 in the DACH region",
                  },
                ].map((row) => (
                  <tr key={row.ranking} className="border-b border-border last:border-b-0">
                    <th className="px-4 py-3 align-top font-medium text-foreground">{row.ranking}</th>
                    <td className="px-4 py-3 align-top text-neutral-800">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Sources: WU’s published ranking pages and the Financial Times / QS tables for the cycles
            named above. Always read methodology notes — a master’s rank is not the same claim as a
            bachelor admission rate.
          </p>
        </BbeSection>

        <BbeSection id="courses" title="Courses and degree programmes">
          <p>
            WU’s portfolio is deliberately focused: three bachelor programmes, sixteen master’s
            programmes, five doctoral/PhD tracks, and MBA offerings through the Executive Academy.
            For most readers of this hub, the decision starts with the bachelor language track —
            English BBE versus German WISO or Business Law.
          </p>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground">Bachelor’s programmes</h3>
              <ul className="space-y-3">
                {BACHELOR_PROGRAMS.map((program) => (
                  <li
                    key={program.name}
                    className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-foreground">{program.name}</span>
                      <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {program.language}
                      </span>
                    </div>
                    <p className="mt-2 text-[0.98rem] leading-relaxed text-neutral-800">
                      {program.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <ChartCard
              title="Programme mix at WU"
              subtitle="Count of programme tracks commonly listed by WU (not enrolment share)."
            >
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <PieChart width={200} height={200}>
                  <Pie
                    data={PROGRAM_MIX}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={84}
                    paddingAngle={2}
                    stroke="#fff"
                    strokeWidth={2}
                    isAnimationActive={false}
                  >
                    {PROGRAM_MIX.map((slice) => (
                      <Cell key={slice.name} fill={slice.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
                <ul className="space-y-2 text-sm">
                  {PROGRAM_MIX.map((slice) => (
                    <li key={slice.name} className="flex items-center gap-2 text-neutral-800">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: slice.fill }}
                      />
                      <span>
                        {slice.name}: <span className="font-medium text-foreground">{slice.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ChartCard>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src="/wu-vienna/wu-lecture-hall.jpg"
              alt="Students seated in a bright modern university lecture hall"
              className="h-auto max-h-[24rem] w-full object-cover object-[center_35%]"
              loading="lazy"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
              Teaching at WU is organised around a compact campus: bachelor courses concentrate in the
              Teaching Center, while many master’s seminars sit in department buildings.
            </figcaption>
          </figure>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              English-taught master’s highlights
            </h3>
            <p className="mt-3">
              After a bachelor degree, many students continue into English master’s programmes that
              feed WU’s ranking profile. A sample of the English-taught master’s list:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {MASTER_HIGHLIGHTS.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-neutral-800 shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              German-taught master’s options include Finance and Accounting, Management, Business Law,
              Business Education, and related tracks. Confirm the live list on WU’s programme pages.
            </p>
          </div>
        </BbeSection>

        <BbeSection id="campus-life" title="Campus life on Campus WU">
          <p>
            Campus life is one of WU’s strongest selling points. Instead of hopping between downtown
            buildings, students spend most of the week on one award-winning campus with plazas,
            lawns, reflecting pools, cafés, and the Library & Learning Center as a daily hub —
            with Prater Park for a reset between lectures.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {CAMPUS_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {fact.label}
                </p>
                <p className="mt-2 font-medium text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img
                src="/wu-vienna/wu-campus-plaza.jpg"
                alt="Students walking across an open modern university campus plaza with trees"
                className="h-56 w-full object-cover sm:h-64"
                loading="lazy"
              />
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
                Open plazas and green edges shape the rhythm between classes — campus life is outdoor
                as much as indoor.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img
                src="/wu-vienna/wu-library-study.jpg"
                alt="Students studying at desks inside a modern university library atrium"
                className="h-56 w-full object-cover sm:h-64"
                loading="lazy"
              />
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
                The Library & Learning Center is the academic heart: quiet floors, group spaces, and
                roughly 1,500 workplaces in the Central Library.
              </figcaption>
            </figure>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Study spaces",
                body: "From silent library floors to group rooms and outdoor seating, Campus WU is built for long study days without leaving the site.",
              },
              {
                title: "Student community",
                body: "Clubs, career events, and an international cohort make networking feel part of the week — especially on English-taught tracks like BBE.",
              },
              {
                title: "Vienna around you",
                body: "Safe, transit-connected, and repeatedly ranked among the world’s most liveable cities — campus is the hub, Vienna is the extended campus.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h3 className="font-display text-lg font-bold text-foreground">{card.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-neutral-800">{card.body}</p>
              </div>
            ))}
          </div>
        </BbeSection>

        <BbeSection id="bbe-path" title="How this connects to the BBE entrance exam">
          <p>
            If your goal is the English-taught Bachelor in Business and Economics, campus reputation
            and rankings explain why demand is high — but admission still runs through WU’s selection
            procedure, including a written multiple-choice entrance exam when applications exceed
            places.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Read the{" "}
              <BbeTextLink to="/bbe-entrance-exam">BBE Entrance Exam Overview</BbeTextLink> for
              format, timing, and subjects.
            </li>
            <li>
              Compare pathways on the{" "}
              <BbeTextLink to="/bbe-vs-wiso">BBE vs WISO guide</BbeTextLink> if you are still
              choosing a language track.
            </li>
            <li>
              Check administrative steps on the{" "}
              <BbeTextLink to="/bbe-admission">admission overview</BbeTextLink>.
            </li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <BbePrimaryButton to={BBE_PRACTICE_ROUTES.demo}>Try free BBE demo prep</BbePrimaryButton>
            <BbeGhostButton to={BBE_PRACTICE_ROUTES.mockExams}>Take a diagnostic mock</BbeGhostButton>
          </div>
        </BbeSection>

        <BbeSection id="faq" title="Frequently asked questions">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>
      </div>
    </BbeExamShell>
  );
}

const tooltipStyle = {
  background: "#fff",
  border: `1px solid ${CHART.border}`,
  borderRadius: 12,
  color: CHART.ink,
  fontSize: 12,
};

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
