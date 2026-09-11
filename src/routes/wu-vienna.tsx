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
import examHallAsset from "@/assets/exam-hall-real.png.asset.json";
import audimaxImg from "@/assets/wu-vienna/audimax.jpg";
import campusPlazaImg from "@/assets/wu-vienna/campus-plaza.jpg";
import libraryInteriorImg from "@/assets/wu-vienna/library-interior.jpg";
import libraryExteriorImg from "@/assets/wu-vienna/library-learning-center.jpg";
import teachingCenterImg from "@/assets/wu-vienna/teaching-center.jpg";
import {
  BbeGhostButton,
  BbeInfoCallout,
  BbePrimaryButton,
  BbeTextLink,
} from "@/components/bbe-exam/BbeExamCtas";
import { BbeFaqAccordion, buildFaqJsonLd } from "@/components/bbe-exam/BbeFaq";
import { BbeExamShell, BbeSection, BbeStatGrid } from "@/components/bbe-exam/BbeExamShell";
import { BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";
import { hreflangLinks, SITE_ORIGIN } from "@/lib/i18n/locale-path";
import { absoluteMediaUrl, socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wu-vienna" as const;
const CANONICAL = `${SITE_ORIGIN}${PATH}`;
/** Stable public URL for OG/Twitter crawlers (also kept under public/wu-vienna/). */
const PAGE_IMAGE = absoluteMediaUrl("/wu-vienna/campus-plaza.jpg");

const IMAGES = {
  campusPlaza: campusPlazaImg,
  teachingCenter: teachingCenterImg,
  audimax: audimaxImg,
  libraryExterior: libraryExteriorImg,
  libraryInterior: libraryInteriorImg,
} as const;

const CHART = {
  ink: "var(--foreground)",
  muted: "var(--muted-foreground)",
  border: "var(--border)",
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

const TOC = [
  { href: "#what-is-wu-vienna", label: "What is WU Vienna?" },
  { href: "#wu-vienna-rankings", label: "Rankings" },
  { href: "#wu-vienna-courses", label: "Courses" },
  { href: "#campus-wu-life", label: "Campus life" },
  { href: "#bbe-entrance-exam", label: "BBE entrance exam" },
  { href: "#faq", label: "FAQ" },
] as const;

const TITLE =
  "WU Vienna (Wirtschaftsuniversität Wien): Rankings, Courses & Campus Life | BBE School";
const DESCRIPTION =
  "Independent WU Vienna guide for applicants: FT and QS rankings, bachelor and master courses, Campus WU life at Welthandelsplatz, and how admission links to the BBE entrance exam.";
const HEADLINE = "WU Vienna (Wirtschaftsuniversität Wien): Rankings, Courses & Campus Life";
const LEAD =
  "WU Vienna is Austria’s leading university for business and economics. This independent guide covers recent rankings, the bachelor and master programmes on offer, and daily life on Campus WU — with a clear path into the English-taught BBE entrance exam.";

const faqs = [
  {
    question: "What is WU Vienna?",
    answer:
      "WU (Vienna University of Economics and Business / Wirtschaftsuniversität Wien) is Austria’s leading public university for business, economics, and related social sciences. It offers bachelor’s, master’s, doctoral, and MBA programmes on Campus WU in Vienna’s second district.",
  },
  {
    question: "How is WU Vienna ranked internationally?",
    answer:
      "Recent public results include #41 in the Financial Times European Business School Ranking 2025, #69 in QS Business & Management Studies 2026, and very strong QS master’s placements such as Supply Chain Management (#2) and Marketing (#12). Rankings change yearly and measure different things.",
  },
  {
    question: "What courses and programmes does WU Vienna offer?",
    answer:
      "Three bachelor pathways: English-taught Business and Economics (BBE), German-taught Business, Economics and Social Sciences (WISO), and German-taught Business Law. WU also lists about 16 master’s programmes, doctoral tracks, and MBA offerings. Exact curricula and selection rules are set by WU for each cycle.",
  },
  {
    question: "What is campus life like at Campus WU?",
    answer:
      "Campus WU at Welthandelsplatz 1 is a purpose-built modern campus next to Prater Park. The Library & Learning Center is the academic heart, with thousands of study workplaces, open plazas, cafés, and barrier-free design. Student life mixes lectures, clubs, and Vienna city life.",
  },
  {
    question: "How do I apply to the English-taught BBE programme at WU?",
    answer:
      "BBE admission usually includes registration, an ungraded OSA, and a written multiple-choice entrance exam when applications exceed places. Start with BBE School’s entrance-exam overview, then confirm dates and rules on the official WU website.",
  },
  {
    question: "Is BBE School affiliated with WU Vienna?",
    answer:
      "No. BBE School is an independent preparation provider for the BBE entrance exam. Always confirm official admissions, rankings claims, and programme details on wu.ac.at.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: DESCRIPTION,
  inLanguage: "en",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "BBE School", url: SITE_ORIGIN },
  publisher: {
    "@type": "Organization",
    name: "BBE School",
    url: SITE_ORIGIN,
    logo: { "@type": "ImageObject", url: absoluteMediaUrl("/logo.png") },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  image: [
    PAGE_IMAGE,
    absoluteMediaUrl("/wu-vienna/library-learning-center.jpg"),
    absoluteMediaUrl("/wu-vienna/teaching-center.jpg"),
    absoluteMediaUrl("/wu-vienna/library-interior.jpg"),
  ],
  about: {
    "@type": "CollegeOrUniversity",
    name: "WU Vienna University of Economics and Business",
    alternateName: ["Wirtschaftsuniversität Wien", "WU Wien", "Vienna University of Economics and Business"],
    url: "https://www.wu.ac.at/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Welthandelsplatz 1",
      addressLocality: "Vienna",
      postalCode: "1020",
      addressCountry: "AT",
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    {
      "@type": "ListItem",
      position: 2,
      name: "BBE Entrance Exam",
      item: `${SITE_ORIGIN}/bbe-entrance-exam`,
    },
    { "@type": "ListItem", position: 3, name: "WU Vienna Overview", item: CANONICAL },
  ],
};

const universityJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "WU Vienna University of Economics and Business",
  alternateName: ["Wirtschaftsuniversität Wien", "WU Wien"],
  url: "https://www.wu.ac.at/",
  sameAs: [
    "https://www.wu.ac.at/",
    "https://en.wikipedia.org/wiki/Vienna_University_of_Economics_and_Business",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Welthandelsplatz 1",
    addressLocality: "Vienna",
    postalCode: "1020",
    addressCountry: "AT",
  },
  description:
    "Austria’s leading public university for business, economics, and related social sciences, based on Campus WU in Vienna.",
};

export const Route = createFileRoute("/wu-vienna")({
  head: () => ({
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(articleJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(universityJsonLd) },
    ],
    links: [...hreflangLinks(PATH), { rel: "canonical", href: CANONICAL }],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: HEADLINE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "de_AT" },
      { property: "og:locale:alternate", content: "uk_UA" },
      { property: "og:site_name", content: "BBE School" },
      { property: "og:image:alt", content: "Campus WU plaza and buildings at Welthandelsplatz in Vienna" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HEADLINE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WuViennaOverviewPage,
});

export function WuViennaOverviewPage() {
  return (
    <BbeExamShell
      h1={HEADLINE}
      lead={LEAD}
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
        <nav aria-label="On this page" className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm sm:px-5">
          <p className="text-sm font-semibold text-foreground">
            On this page
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {TOC.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="font-medium text-foreground underline-offset-4 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <BbeSection id="what-is-wu-vienna" title="What is WU Vienna?">
          <p>
            WU Vienna (Wirtschaftsuniversität Wien / Vienna University of Economics and Business)
            concentrates teaching and research in business, economics, and neighbouring social sciences.
            About 21,000 students from more than 100 countries study on a single modern campus in
            Vienna’s second district — next to Prater Park and a short ride from the city centre.
          </p>
          <p>
            Applicants often arrive here because of the English-taught Bachelor in Business and Economics
            (BBE). This page orients you on the university first — rankings, courses, and campus life —
            then links into the{" "}
            <BbeTextLink to="/bbe-entrance-exam">BBE entrance exam guide</BbeTextLink>,{" "}
            <BbeTextLink to="/bbe-vs-wiso">BBE vs WISO comparison</BbeTextLink>, and{" "}
            <BbeTextLink to="/bbe-admission">admission overview</BbeTextLink>.
          </p>
          <BbeStatGrid
            items={[
              { label: "FT Europe 2025", value: "#41" },
              { label: "QS Business & Mgmt 2026", value: "#69" },
              { label: "Bachelor programmes", value: "3" },
              { label: "Master programmes", value: "16" },
            ]}
          />
          <PhotoFigure
            src={IMAGES.campusPlaza}
            alt="Campus WU buildings and open plaza at Welthandelsplatz 1 in Vienna"
            width={1280}
            height={685}
            priority
            caption="Campus WU at Welthandelsplatz 1, 1020 Vienna: a purpose-built business-university campus rather than a scattered city-centre faculty map. Photo: Wikimedia Commons (CC BY-SA)."
          />
          <BbeInfoCallout label="Independent guide" tone="official">
            Rankings, place numbers, and programme lists can change. Treat this page as orientation for
            applicants, then verify details on the official WU Vienna website.
          </BbeInfoCallout>
        </BbeSection>

        <BbeSection id="wu-vienna-rankings" title="WU Vienna rankings and reputation">
          <p>
            WU selectively enters major business-school rankings. The picture that matters for most
            applicants: strong European brand recognition, Triple Crown accreditation context for the
            wider school, and especially competitive master’s placements in supply chain, marketing,
            management, and finance.
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
                    <Tooltip formatter={(value) => [`#${value}`, "Rank"]} contentStyle={tooltipStyle} />
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
                    <XAxis type="number" domain={[0, 80]} tick={{ fill: CHART.muted, fontSize: 12 }} />
                    <YAxis
                      type="category"
                      dataKey="subject"
                      width={118}
                      tick={{ fill: CHART.ink, fontSize: 11 }}
                    />
                    <Tooltip formatter={(value) => [`#${value}`, "Rank"]} contentStyle={tooltipStyle} />
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
              <caption className="sr-only">
                Selected recent WU Vienna ranking results from FT, QS, and Handelsblatt/WiWo
              </caption>
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                    Ranking
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                    Recent result
                  </th>
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
                    <th scope="row" className="px-4 py-3 align-top font-medium text-foreground">
                      {row.ranking}
                    </th>
                    <td className="px-4 py-3 align-top text-foreground">{row.result}</td>
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

        <BbeSection id="wu-vienna-courses" title="WU Vienna courses and degree programmes">
          <p>
            WU’s portfolio is deliberately focused: three bachelor programmes, sixteen master’s
            programmes, five doctoral/PhD tracks, and MBA offerings through the Executive Academy. For
            most readers of this hub, the decision starts with the bachelor language track — English
            BBE versus German WISO or Business Law.
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
                      <h4 className="font-semibold text-foreground">{program.name}</h4>
                      <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {program.language}
                      </span>
                    </div>
                    <p className="mt-2 text-[0.98rem] leading-relaxed text-foreground">{program.note}</p>
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
                    <li key={slice.name} className="flex items-center gap-2 text-foreground">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: slice.fill }}
                      />
                      <span>
                        {slice.name}:{" "}
                        <span className="font-medium text-foreground">{slice.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ChartCard>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <PhotoFigure
              src={IMAGES.teachingCenter}
              alt="Teaching Center on Campus WU Vienna where many bachelor courses are taught"
              width={1280}
              height={854}
              caption="Teaching Center on Campus WU: bachelor teaching concentrates here. Photo: Wikimedia Commons (CC BY-SA)."
            />
            <PhotoFigure
              src={IMAGES.audimax}
              alt="Audimax lecture hall interior at WU Vienna Teaching Center"
              width={1280}
              height={960}
              caption="WU Audimax lecture hall inside the Teaching Center. Photo: Wikimedia Commons (CC BY-SA)."
            />
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              English-taught master’s highlights
            </h3>
            <p className="mt-3">
              After a bachelor degree, many students continue into English master’s programmes that feed
              WU’s ranking profile. A sample of the English-taught master’s list:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {MASTER_HIGHLIGHTS.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground shadow-sm"
                >
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              German-taught master’s options include Finance and Accounting, Management, Business Law,
              Business Education, and related tracks. Confirm the live list on WU’s programme pages.
            </p>
          </div>
        </BbeSection>

        <BbeSection id="campus-wu-life" title="Campus life at Campus WU">
          <p>
            Campus life is one of WU’s strongest selling points. Instead of hopping between downtown
            buildings, students spend most of the week on one award-winning campus with plazas, lawns,
            reflecting pools, cafés, and the Library & Learning Center as a daily hub — with Prater
            Park for a reset between lectures.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {CAMPUS_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-foreground">
                  {fact.label}
                </p>
                <p className="mt-2 font-medium text-foreground">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <PhotoFigure
              src={IMAGES.libraryExterior}
              alt="Library and Learning Center by Zaha Hadid on Campus WU Vienna"
              width={1280}
              height={854}
              caption="Library & Learning Center on Campus WU — the academic heart of the campus. Photo: Wikimedia Commons (CC BY-SA)."
            />
            <PhotoFigure
              src={IMAGES.libraryInterior}
              alt="Interior atrium and study spaces inside the WU Vienna Library and Learning Center"
              width={1280}
              height={853}
              caption="Inside the Library & Learning Center: quiet floors, group spaces, and roughly 1,500 workplaces in the Central Library. Photo: Wikimedia Commons (CC BY-SA)."
            />
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
                <p className="mt-2 text-[0.98rem] leading-relaxed text-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </BbeSection>

        <BbeSection id="bbe-entrance-exam" title="How this connects to the BBE entrance exam">
          <p>
            If your goal is the English-taught Bachelor in Business and Economics, campus reputation and
            rankings explain why demand is high — but admission still runs through WU’s selection
            procedure, including a written multiple-choice entrance exam when applications exceed places.
          </p>
          <PhotoFigure
            src={examHallAsset.url}
            alt="WU Vienna BBE entrance exam hall with rows of desks at VIECON"
            width={1600}
            height={900}
            caption="The written BBE entrance exam is typically held in person when registrations exceed places — preparation quality matters more than collecting random PDFs."
          />
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Read the <BbeTextLink to="/bbe-entrance-exam">BBE Entrance Exam Overview</BbeTextLink> for
              format, timing, and subjects.
            </li>
            <li>
              Compare pathways on the <BbeTextLink to="/bbe-vs-wiso">BBE vs WISO guide</BbeTextLink> if
              you are still choosing a language track.
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

        <BbeSection id="faq" title="Frequently asked questions about WU Vienna">
          <BbeFaqAccordion faqs={faqs} />
        </BbeSection>
      </div>
    </BbeExamShell>
  );
}

const tooltipStyle = {
  background: "var(--popover)",
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

function PhotoFigure({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto max-h-[26rem] w-full object-cover object-center"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
      <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
        {caption}
      </figcaption>
    </figure>
  );
}
