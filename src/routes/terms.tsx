import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    links: [...hreflangLinks("/terms"), { rel: "canonical", href: "https://bbe-school.com/terms" }],
    meta: [
      { title: "Terms of Service & Privacy Policy · BBE School" },
      { name: "description", content: "Terms of Service and Privacy Policy for BBE School." },
    ],
  }),
});

export function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-3xl"
        compact
        actions={
          <LocalizedLink to="/" className="text-sm text-primary hover:underline">
            ← Back to home
          </LocalizedLink>
        }
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: July 2026</p>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-foreground">
          <p>
            By creating an account or using BBE School you agree to these Terms of Service. BBE
            School provides preparation content for the WU Vienna BBE entrance exam. Content is
            offered as-is for educational purposes and does not guarantee any particular exam
            outcome.
          </p>
          <p>
            You agree not to share, resell, or redistribute paid content. Access is personal and
            non-transferable. We may suspend accounts that violate these terms or misuse the
            platform.
          </p>
          <p>
            Purchases are governed by the pricing and access terms shown on each product page at
            checkout. Refunds follow the policy listed on the product page.
          </p>
        </section>

        <h2 className="mt-12 font-display text-2xl font-bold tracking-tight">Privacy Policy</h2>
        <section className="mt-4 space-y-4 text-sm leading-relaxed text-foreground">
          <p>
            We collect the minimum data needed to run the service: your email, display name,
            authentication provider, and progress on practice tasks. We do not sell personal data.
          </p>
          <p>
            Authentication is handled via our backend provider. If you sign in with Google, we
            receive your basic profile (name, email, avatar) from Google as part of the sign-in
            flow.
          </p>
          <p>
            You can request account deletion at any time from your account settings or by contacting
            support.
          </p>
        </section>

        <div className="mt-12">
          <LocalizedLink to="/" className="text-sm text-primary hover:underline">
            ← Back to home
          </LocalizedLink>
        </div>
      </div>
    </div>
  );
}
