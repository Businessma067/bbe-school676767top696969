import type { AppliedPromo } from "@/lib/applied-promo";
import { discountedPriceEur } from "@/lib/applied-promo";

type CourseOfferPriceProps = {
  catalogEur: number;
  applied: AppliedPromo | null;
  owned: boolean;
  suffix?: string;
};

export function CourseOfferPrice({
  catalogEur,
  applied,
  owned,
  suffix = "full access",
}: CourseOfferPriceProps) {
  if (owned) {
    return (
      <span className="mt-1 inline-block font-display text-2xl font-bold text-foreground">
        Unlocked
      </span>
    );
  }

  if (!applied) {
    return (
      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-display text-4xl font-bold text-foreground">€{catalogEur}</span>
        {suffix ? <span className="text-sm text-muted-foreground">{suffix}</span> : null}
      </div>
    );
  }

  const saleEur = discountedPriceEur(catalogEur, applied.discountPct);
  return (
    <div className="mt-1">
      <div className="flex items-baseline gap-2">
        <span className="text-lg text-muted-foreground line-through">€{catalogEur}</span>
        <span className="font-display text-4xl font-bold text-foreground">€{saleEur}</span>
        {suffix ? <span className="text-sm text-muted-foreground">{suffix}</span> : null}
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">
        <span>
          {applied.discountPct}% off with {applied.code}.{" "}
        </span>
        <span>You can change this promocode before you pay.</span>
      </p>
    </div>
  );
}
