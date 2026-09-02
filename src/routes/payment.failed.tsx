import { createFileRoute, Link } from "@tanstack/react-router";
import { XCircle } from "lucide-react";

type FailedSearch = { reason?: string };

export const Route = createFileRoute("/payment/failed")({
  validateSearch: (search: Record<string, unknown>): FailedSearch => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/payment/failed" }],
    reason: typeof search.reason === "string" ? search.reason : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Payment not completed — BBE School" },
      {
        name: "description",
        content:
          "Your BBE School course payment did not go through. Review what happened and try the checkout again.",
      },
      { property: "og:title", content: "Payment not completed — BBE School" },
      {
        property: "og:description",
        content: "The payment was not completed. You can retry the checkout at any time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PaymentFailedPage,
});

function PaymentFailedPage() {
  const { reason } = Route.useSearch();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <XCircle className="mx-auto h-12 w-12 text-destructive" />
        <h1 className="mt-5 font-display text-2xl font-bold text-foreground">
          Payment not completed
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {reason ?? "The payment was not completed. No money has been taken for this attempt."}
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#C2643A" }}
        >
          Try again
        </Link>
        <Link
          to="/"
          className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
