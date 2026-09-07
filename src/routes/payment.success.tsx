import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { LocalizedLink } from "@/components/LocalizedLink";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { PAID_PRODUCTS, isPaidProductSlug } from "@/lib/checkout-catalog";
import { hreflangLinks, isLocalizablePath } from "@/lib/i18n/locale-path";

type SuccessSearch = {
  product?: string;
  href?: string;
  promo?: boolean;
};

function parseSuccessSearch(search: Record<string, unknown>): SuccessSearch {
  return {
    product: typeof search.product === "string" ? search.product : undefined,
    href: typeof search.href === "string" ? search.href : undefined,
    promo:
      search.promo === true || search.promo === "1" || search.promo === "true" ? true : undefined,
  };
}

/** Only allow post-checkout deep links into known product destinations. */
function safeStartHref(href: string | undefined, productSlug: string | undefined): string {
  if (productSlug && isPaidProductSlug(productSlug)) {
    return PAID_PRODUCTS[productSlug].href;
  }
  if (href) {
    for (const product of Object.values(PAID_PRODUCTS)) {
      if (href === product.href || href.startsWith(`${product.href}/`)) {
        return product.href;
      }
    }
  }
  return "/dashboard";
}

export const Route = createFileRoute("/payment/success")({
  validateSearch: (search: Record<string, unknown>): SuccessSearch => parseSuccessSearch(search),
  head: () => ({
    links: [...hreflangLinks("/payment/success"), { rel: "canonical", href: "https://bbe-school.com/payment/success" }],
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Purchase confirmed — BBE School" },
      {
        name: "description",
        content:
          "Your BBE School course purchase is confirmed and your access is unlocked. Start studying right away.",
      },
      { property: "og:title", content: "Purchase confirmed — BBE School" },
      {
        property: "og:description",
        content: "Your BBE School course access is unlocked. Jump straight into the material.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PaymentSuccessPage,
});

const ORANGE = "#C2643A";

export function PaymentSuccessPage() {
  const navigate = useLocalizedNavigate();
  const { product, href, promo } = useRouterState({
    select: (s) => parseSuccessSearch(s.location.search as Record<string, unknown>),
  });
  const productSlug =
    typeof product === "string" && isPaidProductSlug(product) ? product : undefined;
  const startHref = safeStartHref(href, productSlug);
  const productLabel =
    (productSlug ? PAID_PRODUCTS[productSlug].name : null) ??
    (typeof product === "string" && product.trim() ? product : null) ??
    "Your course";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12" style={{ color: ORANGE }} />
        <h1 className="mt-5 font-display text-2xl font-bold text-foreground">
          {promo ? "Promocode redeemed" : "Payment received"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {productLabel} is unlocked on your account
          {promo ? " — no payment needed." : "."}
        </p>
        <button
          type="button"
          onClick={() => {
            if (isLocalizablePath(startHref)) {
              navigate({ to: startHref });
            } else {
              window.location.assign(startHref);
            }
          }}
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: ORANGE }}
        >
          Start the course →
        </button>
        <LocalizedLink
          to="/dashboard"
          className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
        >
          Go to dashboard
        </LocalizedLink>
      </div>
    </div>
  );
}
