import { useEffect, useState } from "react";
import {
  APPLIED_PROMO_EVENT,
  getAppliedPromo,
  getAppliedPromoMap,
  type AppliedPromo,
} from "@/lib/applied-promo";
import type { PaidProductSlug } from "@/lib/checkout-catalog";
import { syncAccountPromos } from "@/lib/applied-promo";
import { getMyPromoSelections } from "@/lib/promo.functions";
import { supabase } from "@/integrations/supabase/client";

let accountSync: Promise<void> | null = null;
function syncFromAccount() {
  accountSync ??= (async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) return;
    syncAccountPromos(await getMyPromoSelections());
  })().catch(() => {
    accountSync = null;
  });
}


export function useAppliedPromo(productSlug: PaidProductSlug): AppliedPromo | null {
  const [applied, setApplied] = useState<AppliedPromo | null>(null);

  useEffect(() => {
    const sync = () => setApplied(getAppliedPromo(productSlug));
    sync();
    syncFromAccount();
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
    syncFromAccount();
    window.addEventListener(APPLIED_PROMO_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(APPLIED_PROMO_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return map;
}
