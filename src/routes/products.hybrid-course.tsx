import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, FileText, GitBranch, Languages, Layers, Target } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";
import { LocalizedLink } from "@/components/LocalizedLink";
import { PaymentModal } from "@/components/PaymentModal";
import { SiteHeader } from "@/components/SiteHeader";
import { useFullCourseAccess } from "@/hooks/use-full-course-access";
import { PAID_PRODUCTS } from "@/lib/checkout-catalog";
import { HYBRID_HUB_HREF } from "@/lib/full-course-access";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/products/hybrid-course" as const;
const IMAGE = "/hybrid-bbe-wiso-course-product.jpg";
const PRODUCT = PAID_PRODUCTS["hybrid-full-course"];

export const Route = createFileRoute("/products/hybrid-course")({
  head: () => ({
    links: [{ rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Hybrid BBE + WiSo Course | BBE School" },
      {
        name: "description",
        content:
          "Hybrid Course: one plan for both WU exams — shared math in English and German, a hybrid paper, bridge cases, and English + German lanes.",
      },
      { property: "og:title", content: "Hybrid BBE + WiSo Course" },
      {
        property: "og:description",
        content:
          "Prepare for BBE and WiSo with one homework stream, shared math in both languages, a hybrid paper, and bridge cases.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: HybridCourseProductPage,
});

const FEATURES = [
  {
    icon: Layers,
    title: "Shared Math library",
    text: "Thirteen chapters. One task at a time, BBE then WiSo or the reverse, following the focus you pick.",
  },
  {
    icon: FileText,
    title: "Hybrid paper",
    text: "Mathematics plus German reading, one task at a time. The focus sets BBE then WiSo, or the reverse.",
  },
  {
    icon: GitBranch,
    title: "Bridge case library",
    text: "Twenty economics concepts. English side, then German, cleared once at 75% on both.",
  },
  {
    icon: Languages,
    title: "Two language lanes",
    text: "BBE English and WiSo German stay separate. Neither lane moves the other paper.",
  },
  {
    icon: Target,
    title: "Twin readiness",
    text: "One daily plan: shared math, one bridge case, both language lanes, then a hybrid paper.",
  },
];

export function HybridCourseProductPage() {
  const { ready, signedIn, ownsHybridCourse } = useFullCourseAccess();
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const openBuy = () => {
    if (!signedIn) {
      setAuthOpen(true);
      return;
    }
    setPaymentOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <LocalizedLink
            to="/products"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Products
          </LocalizedLink>
        }
      />

      <main className="px-6 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: HYBRID_ACCENT }}
          >
            New product
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hybrid BBE + WiSo Course
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            One study path for both WU entrance exams. Shared math and bridged economics count once.
            English and German stay as separate lanes, and both full course libraries stay open.
          </p>

          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-secondary">
            <img
              src={IMAGE}
              alt="Hybrid BBE + WiSo Course"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center">
            <div>
              <div className="text-sm text-muted-foreground">
                {ownsHybridCourse ? "Your access" : "One-time payment"}
              </div>
              <div className="mt-1 font-display text-3xl font-bold">
                {ownsHybridCourse ? "Unlocked" : `€${PRODUCT.priceEur}`}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Includes Full BBE + Full WiSo libraries plus the Hybrid tools.
              </p>
            </div>
            {!ready ? (
              <div className="h-12 w-40 animate-pulse rounded-xl bg-secondary" />
            ) : ownsHybridCourse ? (
              <Link
                to={HYBRID_HUB_HREF}
                className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white"
                style={{ backgroundColor: HYBRID_ACCENT }}
              >
                Go to course →
              </Link>
            ) : (
              <button
                type="button"
                onClick={openBuy}
                className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white"
                style={{ backgroundColor: HYBRID_ACCENT }}
              >
                Buy Hybrid · €{PRODUCT.priceEur} →
              </button>
            )}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-5"
                  style={{ borderTop: `4px solid ${HYBRID_ACCENT}` }}
                >
                  <Icon className="h-5 w-5" style={{ color: HYBRID_ACCENT }} />
                  <h2 className="mt-3 font-display text-lg font-semibold">{f.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">What you unlock</h2>
            <ul className="mt-4 space-y-2">
              {[
                "Hybrid hub with twin readiness and a daily plan",
                "Shared Math library, chapters 1–13, BBE then WiSo in the order you choose",
                "Hybrid paper: mathematics plus German reading, BBE then WiSo or the reverse",
                "Bridge library: 20 concepts in 4 units",
                "Full BBE Course library (econ, math, English, mocks, tools)",
                "Full WiSo Course library (Wirtschaft verstehen, math, German, mocks, tools)",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: HYBRID_ACCENT }} />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <PaymentModal
        open={paymentOpen}
        onOpenChange={setPaymentOpen}
        productName={PRODUCT.name}
        priceEuros={PRODUCT.priceEur}
        productSlug="hybrid-full-course"
      />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </div>
  );
}
