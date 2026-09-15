import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CreditCard, Lock, Loader2, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";
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

type PayMethod = "card" | "apple" | "google" | "promo";

function isMonoPayOrigin(origin: string): boolean {
  try {
    const host = new URL(origin).hostname;
    return (
      host === "pay.mbnk.biz" ||
      host.endsWith(".mbnk.biz") ||
      host === "pay.monobank.ua" ||
      host.endsWith(".monobank.ua")
    );
  } catch {
    return false;
  }
}

function ApplePayMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.365 12.87c.03 3.22 2.83 4.3 2.86 4.31-.02.07-.447 1.53-1.47 3.03-.886 1.3-1.806 2.59-3.254 2.62-1.424.03-1.882-.84-3.512-.84-1.63 0-2.136.82-3.486.87-1.4.05-2.466-1.4-3.36-2.69C2.3 17.4.94 12.7 2.72 9.51c.885-1.59 2.465-2.6 4.18-2.63 1.305-.02 2.537.88 3.51.88.974 0 2.497-1.09 4.21-.93.718.03 2.735.29 4.03 2.19-.104.06-2.405 1.4-2.285 4.15zM13.94 5.48c.706-.86 1.182-2.05 1.052-3.24-1.017.04-2.246.68-2.974 1.53-.653.76-1.225 1.97-1.07 3.13 1.13.09 2.286-.57 2.992-1.42z" />
    </svg>
  );
}

function GooglePayMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h5.9c-.3 1.4-1 2.5-2.1 3.3v2.7h3.4c2-1.8 3.3-4.5 3.3-8z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.9 0 5.3-.9 7.1-2.6l-3.4-2.7c-1 .7-2.2 1.1-3.7 1.1-2.8 0-5.2-1.9-6.1-4.4H2.4v2.8C4.2 20.7 7.8 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.9 14.4c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2V7.2H2.4C1.7 8.6 1.3 10.2 1.3 12s.4 3.4 1.1 4.8l3.5-2.4z"
      />
      <path
        fill="#EA4335"
        d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1C17.3 2.1 14.9 1 12 1 7.8 1 4.2 3.3 2.4 7.2l3.5 2.8c.9-2.5 3.3-4.6 6.1-4.6z"
      />
    </svg>
  );
}

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
  priceEuros: _priceEuros = 449,
  productSlug = "full-course",
}: PaymentModalProps) {
  const navigate = useNavigate();
  const [method, setMethod] = useState<PayMethod>("card");
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null);
  const [discountPct, setDiscountPct] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [promoUnlocked, setPromoUnlocked] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [payPageUrl, setPayPageUrl] = useState<string | null>(null);
  const [applePayAvailable, setApplePayAvailable] = useState(false);

  const product = PAID_PRODUCTS[productSlug];
  const discountApplied = discountPct > 0 && !!appliedPromoCode;
  const priceFactor = discountApplied ? 1 - discountPct / 100 : 1;
  const catalogEur = product.priceEur;
  const eurPrice = Math.round(catalogEur * priceFactor);
  const showDiscountedTotal = method !== "promo" || discountApplied;
  const payTab = method === "promo" ? "promo" : "pay";

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
    setPayPageUrl(null);

    try {
      const ApplePaySession = (
        window as Window & {
          ApplePaySession?: { canMakePayments?: () => boolean };
        }
      ).ApplePaySession;
      setApplePayAvailable(Boolean(ApplePaySession?.canMakePayments?.()));
    } catch {
      setApplePayAvailable(false);
    }

    // Buying requires an account first.
    void (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        onOpenChange(false);
        setAuthOpen(true);
      }
    })();
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!payPageUrl) return;

    const onMessage = (event: MessageEvent) => {
      if (!isMonoPayOrigin(event.origin)) return;
      let payload: { message?: unknown; value?: unknown } | null = null;
      try {
        payload =
          typeof event.data === "string"
            ? (JSON.parse(event.data) as { message?: unknown; value?: unknown })
            : (event.data as { message?: unknown; value?: unknown });
      } catch {
        return;
      }
      if (!payload || typeof payload.message !== "string") return;

      if (payload.message === "close-button") {
        setPayPageUrl(null);
        setLoading(false);
        return;
      }
      if (payload.message === "monopay-link" && typeof payload.value === "string") {
        window.location.href = payload.value;
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [payPageUrl]);

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
      // Embed Monobank checkout (card / Apple Pay / Google Pay via acquiring widget).
      setPayPageUrl(result.pageUrl);
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
      if (method === "promo") setMethod("card");
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

  const methodCopy: Record<Exclude<PayMethod, "promo">, string> = {
    card: "Pay securely by card through Monobank. The payment form opens here; you return automatically after the payment.",
    apple:
      "Open Monobank checkout and choose Apple Pay. Confirm with Face ID, Touch ID, or your device passcode.",
    google:
      "Open Monobank checkout and choose Google Pay. Confirm with your Google account wallet.",
  };

  const checkoutDescription =
    method === "apple"
      ? "Pay with Apple Pay. You will return here after the payment."
      : method === "google"
        ? "Pay with Google Pay. You will return here after the payment."
        : "Pay by card, Apple Pay, or Google Pay. You will return here after the payment.";

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className={cn(
            "max-h-[90vh]",
            payPageUrl ? "overflow-hidden max-w-[640px]" : "overflow-y-auto sm:max-w-md",
          )}
        >
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Payment</DialogTitle>
            <DialogDescription>
              {payPageUrl
                ? checkoutDescription
                : `Complete your one-time purchase of ${productName}, or redeem a promocode.`}
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
                  Charged as €{eurPrice}
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
                    <p className="text-sm text-muted-foreground line-through">€{catalogEur}</p>
                  )}
                  <p className="font-display text-2xl font-bold text-foreground">€{eurPrice}</p>
                </>
              )}
            </div>
          </div>

          {payPageUrl ? (
            <div className="iframe-container flex min-h-[520px] w-full items-center justify-center">
              <iframe
                id="payFrame"
                title="monopay"
                src={payPageUrl}
                allow="payment *"
                className="h-[min(600px,70vh)] w-full min-h-[520px] rounded-3xl border-0 bg-background"
              />
            </div>
          ) : promoUnlocked ? (
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
              value={payTab}
              onValueChange={(v) => {
                setMethod(v === "promo" ? "promo" : "card");
                setError(null);
              }}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pay" className="gap-1.5">
                  <CreditCard className="h-3.5 w-3.5" />
                  Pay
                </TabsTrigger>
                <TabsTrigger value="promo" className="gap-1.5">
                  <Ticket className="h-3.5 w-3.5" />
                  Promo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pay" className="mt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMethod("apple");
                        setError(null);
                      }}
                      aria-pressed={method === "apple"}
                      className={`flex flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 text-xs font-semibold transition-colors ${
                        method === "apple"
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-background text-foreground hover:bg-secondary"
                      }`}
                    >
                      <ApplePayMark className="h-5 w-5" />
                      Apple Pay
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMethod("google");
                        setError(null);
                      }}
                      aria-pressed={method === "google"}
                      className={`flex flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 text-xs font-semibold transition-colors ${
                        method === "google"
                          ? "border-foreground bg-secondary text-foreground ring-1 ring-foreground/20"
                          : "border-border bg-background text-foreground hover:bg-secondary"
                      }`}
                    >
                      <GooglePayMark className="h-5 w-5" />
                      Google Pay
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMethod("card");
                        setError(null);
                      }}
                      aria-pressed={method === "card"}
                      className={`flex flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 text-xs font-semibold transition-colors ${
                        method === "card"
                          ? "border-foreground bg-secondary text-foreground ring-1 ring-foreground/20"
                          : "border-border bg-background text-foreground hover:bg-secondary"
                      }`}
                    >
                      <CreditCard className="h-5 w-5" />
                      Card
                    </button>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {methodCopy[method === "promo" ? "card" : method]}
                    {method === "apple" && !applePayAvailable
                      ? " Apple Pay appears on supported Apple devices and browsers."
                      : null}
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
                      {discountPct}% off applied ({appliedPromoCode}) — pay €{eurPrice} instead of €
                      {catalogEur}
                    </p>
                  )}

                  {error && (
                    <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  {method === "apple" ? (
                    <button
                      type="button"
                      onClick={handlePay}
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neutral-900 disabled:opacity-70"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <ApplePayMark className="h-5 w-5" />
                          Pay with Apple Pay · €{eurPrice}
                        </>
                      )}
                    </button>
                  ) : method === "google" ? (
                    <button
                      type="button"
                      onClick={handlePay}
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:bg-neutral-50 disabled:opacity-70"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <GooglePayMark className="h-5 w-5" />
                          Pay with Google Pay · €{eurPrice}
                        </>
                      )}
                    </button>
                  ) : (
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
                          Proceed to payment · €{eurPrice}
                        </>
                      )}
                    </button>
                  )}

                  <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    Card · Apple Pay · Google Pay · Secured by Monobank
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
