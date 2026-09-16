import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  ListChecks,
  Languages,
  ClipboardCheck,
  Check,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/products/full-course" as const;
const INDIGO = "#3730A3";

export const Route = createFileRoute("/wiso/products/full-course")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Full WiSo Course — WU Aufnahmeprüfung Prep | BBE School" },
      {
        name: "description",
        content:
          "Full WiSo Course: Wirtschaft verstehen economics, mathematics, German reading, mocks and study tools for the WU Vienna WiSo exam.",
      },
      { property: "og:title", content: "Full WiSo Course — Unlock WiSo Prep" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoFullCourseProduct,
});

const features = [
  {
    icon: BookOpen,
    title: "3 WiSo pillars",
    text: "Economics (Wirtschaft verstehen), Mathematics, and German reading comprehension.",
  },
  {
    icon: ListChecks,
    title: "Exam-format practice",
    text: "Statement-style cases with Teilpunktesystem scoring — not BBE English drills.",
  },
  {
    icon: Languages,
    title: "German-first design",
    text: "Built around deutsches Sprachverständnis and German economics wording.",
  },
  {
    icon: ClipboardCheck,
    title: "Mocks on /wiso URLs",
    text: "Timed mocks and builder stay on the WiSo track so you never teleport into BBE.",
  },
];

export function WisoFullCourseProduct() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        actions={
          <LocalizedLink
            to="/products"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
          >
            ← Products
          </LocalizedLink>
        }
      />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 px-6 py-16 text-white lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/90">
                WiSo track · German-taught
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Full WiSo Course
              </h1>
              <p className="mt-4 text-lg text-indigo-50/90">
                Complete preparation for the WU Vienna WiSo Aufnahmeprüfung — visually and
                structurally distinct from the Full BBE Course.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
                  Coming soon · checkout next
                </span>
                <LocalizedLink
                  to="/wiso/demo-practice"
                  className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-indigo-900 hover:bg-indigo-50"
                >
                  Preview WiSo demo URL
                </LocalizedLink>
              </div>
            </div>
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 shadow-2xl"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(15,118,110,0.5),transparent_50%)]" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="font-display text-2xl font-bold">WiSo · 2,703 places</p>
                <p className="mt-1 text-sm text-indigo-100/90">
                  Economics · Math · German comprehension
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-indigo-200/70 bg-card p-6 dark:border-indigo-800/40"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-lg text-white"
                    style={{ backgroundColor: INDIGO }}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-lg font-semibold">{f.title}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-secondary/30 p-6">
            <h2 className="font-display text-xl font-semibold">Included when live</h2>
            <ul className="mt-4 space-y-2">
              {[
                "Practice aligned to Wirtschaft verstehen",
                "German reading drills",
                "Math timed sets",
                "WiSo mocks & mock builder URLs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Need BBE instead?{" "}
              <LocalizedLink to="/products/full-course" className="font-semibold text-primary hover:underline">
                Full BBE Course
              </LocalizedLink>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
