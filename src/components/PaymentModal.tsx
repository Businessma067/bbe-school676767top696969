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
import { redeemPromocode } from "@/lib/promo.functions";
import { createCheckout } from "@/lib/payments.functions";
import {
  DISCOUNT_CODE,
  DISCOUNT_PCT,
  PAID_PRODUCTS,
  type PaidProductSlug,
} from "@/lib/checkout-catalog";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [promoUnlocked, setPromoUnlocked] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const product = PAID_PRODUCTS[productSlug];
  const uahPrice = Math.round(product.priceUah * (discountApplied ? 1 - DISCOUNT_PCT / 100 : 1));
  const eurPrice = Math.round(priceEuros * (discountApplied ? 1 - DISCOUNT_PCT / 100 : 1));

  useEffect(() => {
    if (!open) return;
    setMethod("card");
    setPromoCode("");
    setLoading(false);
    setError(null);
    setPromoUnlocked(false);
    setDiscountApplied(false);
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
          ...(discountApplied ? { promoCode: DISCOUNT_CODE } : {}),
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

  const handlePromoRedeem = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const code = promoCode.trim();
    if (!code) {
      setError("Enter a promocode.");
      return;
    }

    // Discount-only code: applies 15% off, nothing else.
    if (code.toLowerCase() === DISCOUNT_CODE.toLowerCase()) {
      setDiscountApplied(true);
      setMethod("card");
      return;
    }
    setDiscountApplied(false);

    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      setAuthOpen(true);
      setError("Sign in to redeem a promocode and unlock full access.");
      return;
    }

    setLoading(true);
    try {
      const result = await redeemPromocode({ data: { code } });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setPromoUnlocked(true);
      setTimeout(() => {
        onOpenChange(false);
        navigate({ to: result.href });
      }, 1200);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not redeem promocode.";
      if (/unauthorized/i.test(message)) {
        setAuthOpen(true);
        setError("Sign in to redeem a promocode and unlock full access.");
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
              {method !== "promo" && (
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Charged as {uahPrice.toLocaleString("uk-UA")} UAH
                </p>
              )}
            </div>
            <p className="font-display text-2xl font-bold text-foreground">
              {method === "promo" ? "Free" : `€${eurPrice}`}
            </p>
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

                  {discountApplied && (
                    <p
                      className="rounded-md border px-3 py-2 text-sm font-semibold"
                      style={{
                        borderColor: `${ORANGE}55`,
                        backgroundColor: `${ORANGE}10`,
                        color: ORANGE,
                      }}
                    >
                      {DISCOUNT_PCT}% discount applied
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
                    Have a one-time promocode? Redeem it while signed in to unlock full course
                    access instantly — no payment needed.
                  </p>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-foreground">
                      Promocode
                    </label>
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="BBE-FREE-……"
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
                        Redeem &amp; unlock
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
