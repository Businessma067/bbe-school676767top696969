import { useEffect, useState } from "react";
import {
  APPLIED_PROMO_EVENT,
  getAppliedPromo,
  getAppliedPromoMap,
  type AppliedPromo,
} from "@/lib/applied-promo";
import type { PaidProductSlug } from "@/lib/checkout-catalog";

export function useAppliedPromo(productSlug: PaidProductSlug): AppliedPromo | null {
  const [applied, setApplied] = useState<AppliedPromo | null>(null);

  useEffect(() => {
    const sync = () => setApplied(getAppliedPromo(productSlug));
    sync();
    window.addEventListener(APPLIED_PROMO_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(APPLIED_PROMO_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [productSlug]);

  return applied;
}

export function useAppliedPromoMap(): Partial<Record<PaidProductSlug, AppliedPromo>> {
  const [map, setMap] = useState<Partial<Record<PaidProductSlug, AppliedPromo>>>({});

  useEffect(() => {
    const sync = () => setMap(getAppliedPromoMap());
    sync();
    window.addEventListener(APPLIED_PROMO_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(APPLIED_PROMO_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return map;
}
