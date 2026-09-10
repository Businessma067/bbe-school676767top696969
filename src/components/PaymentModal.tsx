import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CreditCard, Lock, Loader2, Ticket } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuthModal } from "@/components/AuthModal";
import { supabase } from "@/integrations/supabase/client";
import { redeemPromocode, validateDiscountCode } from "@/lib/promo.functions";
import { createCheckout } from "@/lib/payments.functions";
import { PAID_PRODUCTS, type PaidProductSlug } from "@/lib/checkout-catalog";

const ORANGE = "#C2643A";

type PaymentModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
  priceEuros?: number;
  productSlug?: PaidProductSlug;
};

export function PaymentModal({
  open,
  onOpenChange,
  productName = "Full BBE Course",
  priceEuros = 479,
  productSlug = "full-course",
}: PaymentModalProps) {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null);
  const [discountPct, setDiscountPct] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [promoUnlocked, setPromoUnlocked] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const product = PAID_PRODUCTS[productSlug];
  const discountApplied = discountPct > 0 && !!appliedPromoCode;
  const priceFactor = discountApplied ? 1 - discountPct / 100 : 1;
  const uahPrice = Math.round(product.priceUah * priceFactor);
  const eurPrice = Math.round(priceEuros * priceFactor);
  const showDiscountedTotal = method !== "promo" || discountApplied;

  useEffect(() => {
    if (!open) return;
    setMethod("card");
    setPromoCode("");
    setAppliedPromoCode(null);
    setDiscountPct(0);
    setLoading(false);
    setError(null);
    setPromoUnlocked(false);
    setAuthOpen(false);

    // Buying requires an account first.
    void (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        onOpenChange(false);
        setAuthOpen(true);
      }
    })();
  }, [open, onOpenChange]);

  const handlePay = async () => {
    setError(null);
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      onOpenChange(false);
      setAuthOpen(true);
      return;
    }

    setLoading(true);
    try {
      const result = await createCheckout({
        data: {
          productSlug,
          ...(appliedPromoCode ? { promoCode: appliedPromoCode } : {}),
        },
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      // Hand the user over to Monobank's secure checkout page.
      window.location.href = result.pageUrl;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not start the payment.";
      setError(/unauthorized/i.test(message) ? "Sign in to continue to payment." : message);
    } finally {
      setLoading(false);
    }
  };

  const applyDiscountCode = async (code: string): Promise<boolean> => {
    const discount = await validateDiscountCode({
      data: { code, productSlug },
    });
    if (discount.ok) {
      setAppliedPromoCode(discount.code);
      setDiscountPct(discount.discountPct);
      setMethod("card");
      setError(null);
      return true;
    }

    const discountOnlyError =
      /expired|use limit|does not apply|percent off|% off/i.test(discount.error) &&
      !/unlock/i.test(discount.error);
    if (discountOnlyError) {
      setAppliedPromoCode(null);
      setDiscountPct(0);
      setError(discount.error);
      return true; // handled; caller should not try unlock
    }
    return false;
  };

  const handleApplyDiscountOnCard = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const code = promoCode.trim();
    if (!code) {
      setError("Enter a promocode.");
      return;
    }

    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      setAuthOpen(true);
      setError("Sign in to apply a promocode.");
      return;
    }

    setLoading(true);
    try {
      const handled = await applyDiscountCode(code);
      if (!handled) {
        setError("This promocode is invalid, or it is an unlock code — use the Promo tab.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not apply promocode.";
      if (/unauthorized/i.test(message)) {
        setAuthOpen(true);
        setError("Sign in to apply a promocode.");
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePromoRedeem = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const code = promoCode.trim();
    if (!code) {
      setError("Enter a promocode.");
      return;
    }

    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      setAuthOpen(true);
      setError("Sign in to redeem a promocode.");
      return;
    }

    setLoading(true);
    try {
      // Try percent-off discount codes first — these reduce the Monobank charge.
      if (await applyDiscountCode(code)) {
        return;
      }

      // Otherwise attempt a one-time unlock code.
      setAppliedPromoCode(null);
      setDiscountPct(0);

      const result = await redeemPromocode({ data: { code } });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      const { clearAccessStateCache } = await import("@/lib/entitlements");
      clearAccessStateCache();
      setPromoUnlocked(true);
      setTimeout(() => {
        onOpenChange(false);
        navigate({
          to: "/payment/success",
          search: { product: productName, href: result.href, promo: true },
        });
      }, 1200);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not redeem promocode.";
      if (/unauthorized/i.test(message)) {
        setAuthOpen(true);
        setError("Sign in to redeem a promocode.");
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Payment</DialogTitle>
            <DialogDescription>
              Complete your one-time purchase of {productName}, or redeem a promocode.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-4 py-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-taupe">Order</p>
              <p className="mt-0.5 font-display text-sm font-semibold text-foreground">
                {productName}
              </p>
              {showDiscountedTotal && (
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Charged as {uahPrice.toLocaleString("uk-UA")} UAH
                  {discountApplied ? ` (−${discountPct}%)` : ""}
                </p>
              )}
            </div>
            <div className="text-right">
              {method === "promo" && !discountApplied ? (
                <p className="font-display text-2xl font-bold text-foreground">Free</p>
              ) : (
                <>
                  {discountApplied && (
                    <p className="text-sm text-muted-foreground line-through">€{priceEuros}</p>
                  )}
                  <p className="font-display text-2xl font-bold text-foreground">€{eurPrice}</p>
                </>
              )}
            </div>
          </div>

          {promoUnlocked ? (
            <div
              className="rounded-xl border p-4 text-center"
              style={{ borderColor: `${ORANGE}55`, backgroundColor: `${ORANGE}10` }}
            >
              <p className="font-display text-lg font-semibold text-foreground">
                Full access unlocked
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your promocode worked. Taking you to the course…
              </p>
            </div>
          ) : (
            <Tabs
              value={method}
              onValueChange={(v) => {
                setMethod(v);
                setError(null);
              }}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card" className="gap-1.5">
                  <CreditCard className="h-3.5 w-3.5" />
                  Card
                </TabsTrigger>
                <TabsTrigger value="promo" className="gap-1.5">
                  <Ticket className="h-3.5 w-3.5" />
                  Promo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Pay securely by card through Monobank. You will be taken to the bank&apos;s
                    checkout page and returned here right after the payment.
                  </p>

                  <form onSubmit={handleApplyDiscountOnCard} className="space-y-2">
                    <label className="block text-xs font-medium text-foreground">
                      Discount promocode
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="BBE-15-……"
                        autoComplete="off"
                        spellCheck={false}
                        className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 font-mono text-sm uppercase outline-none focus:ring-2 focus:ring-ring"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="shrink-0 rounded-md border border-border bg-background px-3 py-2 text-sm font-semibold hover:bg-secondary disabled:opacity-70"
                      >
                        Apply
                      </button>
                    </div>
                  </form>

                  {discountApplied && (
                    <p
                      className="rounded-md border px-3 py-2 text-sm font-semibold"
                      style={{
                        borderColor: `${ORANGE}55`,
                        backgroundColor: `${ORANGE}10`,
                        color: ORANGE,
                      }}
                    >
                      {discountPct}% off applied ({appliedPromoCode}) — pay{" "}
                      {uahPrice.toLocaleString("uk-UA")} UAH instead of{" "}
                      {product.priceUah.toLocaleString("uk-UA")} UAH
                    </p>
                  )}

                  {error && (
                    <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={handlePay}
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 disabled:opacity-70"
                    style={{ backgroundColor: ORANGE, boxShadow: `0 10px 28px -8px ${ORANGE}90` }}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Lock className="h-4 w-4" />
                        Proceed to payment · {uahPrice.toLocaleString("uk-UA")} UAH
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    One-time payment · No subscription · Secured by Monobank
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="promo" className="mt-4">
                <form onSubmit={handlePromoRedeem} className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Enter a discount code for 15% off Lite or Full, or a one-time unlock code for
                    free access.
                  </p>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      Promocode
                    </label>
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="BBE-15-……"
                      autoComplete="off"
                      spellCheck={false}
                      className="w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-sm uppercase outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  {error && (
                    <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 disabled:opacity-70"
                    style={{ backgroundColor: ORANGE, boxShadow: `0 10px 28px -8px ${ORANGE}90` }}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Ticket className="h-4 w-4" />
                        Apply promocode
                      </>
                    )}
                  </button>
                </form>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>

      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        defaultMode="signin"
        onSignedIn={() => {
          setAuthOpen(false);
          onOpenChange(true);
        }}
      />
    </>
  );
}
