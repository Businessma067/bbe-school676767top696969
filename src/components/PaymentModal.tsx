import { useCallback, useEffect, useRef, useState } from "react";
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
import {
  completeWalletPayment,
  createCheckout,
  getWalletPayConfig,
  validateApplePayMerchantSession,
  type WalletPayConfigResult,
} from "@/lib/payments.functions";
import {
  MONOBANK_TEST_CHARGE,
  PAID_PRODUCTS,
  type PaidProductSlug,
} from "@/lib/checkout-catalog";
import {
  canUseApplePay,
  mountGooglePayButton,
  startApplePaySession,
  type WalletPayConfig,
} from "@/lib/wallet-pay.client";

const ORANGE = "#C2643A";

type PaymentModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
  priceEuros?: number;
  productSlug?: PaidProductSlug;
};

function configFromResult(result: Extract<WalletPayConfigResult, { ok: true }>): WalletPayConfig {
  return {
    amountMinor: result.amountMinor,
    totalPrice: result.totalPrice,
    currencyCode: result.currencyCode,
    countryCode: result.countryCode,
    merchantName: result.merchantName,
    googleGatewayMerchantId: result.googleGatewayMerchantId,
    appleMerchantId: result.appleMerchantId,
    applePayReady: result.applePayReady,
    label: result.label,
  };
}

export function PaymentModal({
  open,
  onOpenChange,
  productName = "Full BBE Course",
  priceEuros = 449,
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
  const [walletConfig, setWalletConfig] = useState<WalletPayConfig | null>(null);
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const product = PAID_PRODUCTS[productSlug];
  const discountApplied = discountPct > 0 && !!appliedPromoCode;
  const priceFactor = discountApplied ? 1 - discountPct / 100 : 1;
  const catalogEur = product.priceEur;
  const eurPrice = Math.round(catalogEur * priceFactor);
  const chargeLabel = walletConfig?.label
    ?? (MONOBANK_TEST_CHARGE.enabled ? MONOBANK_TEST_CHARGE.label : `€${eurPrice}`);
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
    setWalletConfig(null);

    void (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        onOpenChange(false);
        setAuthOpen(true);
      }
    })();
  }, [open, onOpenChange]);

  // Load wallet config whenever the pay tab is open (and after discount changes).
  useEffect(() => {
    if (!open || method === "promo") return;
    let cancelled = false;

    void (async () => {
      try {
        const result = await getWalletPayConfig({
          data: {
            productSlug,
            ...(appliedPromoCode ? { promoCode: appliedPromoCode } : {}),
          },
        });
        if (cancelled) return;
        if (!result.ok) {
          setError(result.error);
          return;
        }
        setWalletConfig(configFromResult(result));
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : "Could not load wallet options.";
        if (!/unauthorized/i.test(message)) {
          console.error(message);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open, method, productSlug, appliedPromoCode]);

  const finishWallet = useCallback(
    async (wallet: "apple" | "google", token: string) => {
      const result = await completeWalletPayment({
        data: {
          productSlug,
          wallet,
          token,
          ...(appliedPromoCode ? { promoCode: appliedPromoCode } : {}),
        },
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      if (result.tdsUrl) {
        window.location.assign(result.tdsUrl);
        return;
      }
      if (result.paid) {
        onOpenChange(false);
        navigate({
          to: "/payment/success",
          search: {
            product: productName,
            href: result.href ?? product.href,
          },
        });
        return;
      }
      window.location.assign(
        `/payment-result?invoiceId=${encodeURIComponent(result.invoiceId)}`,
      );
    },
    [appliedPromoCode, navigate, onOpenChange, product.href, productName, productSlug],
  );

  // Mount the official Google Pay button whenever config is ready.
  useEffect(() => {
    if (!open || method === "promo" || !walletConfig) return;
    const el = googleButtonRef.current;
    if (!el) return;

    return mountGooglePayButton({
      container: el,
      config: walletConfig,
      onToken: async (token) => {
        setError(null);
        setLoading(true);
        try {
          await finishWallet("google", token);
        } finally {
          setLoading(false);
        }
      },
      onError: (message) => {
        // Ignore mount-time noise; click errors still surface.
        if (/unavailable|script failed/i.test(message)) return;
        setError(message);
      },
    });
  }, [open, method, walletConfig, finishWallet]);

  const handleApplePay = () => {
    setError(null);
    if (!walletConfig?.appleMerchantId) {
      setError(
        "Apple Pay needs APPLE_PAY_MERCHANT_ID (and certificates) on the server. Use card for now, or ask Monobank to enable Apple Pay on the hosted page.",
      );
      return;
    }
    if (!canUseApplePay()) {
      setError("Apple Pay is not available in this browser. Try Safari on iPhone/Mac, or pay by card.");
      return;
    }
    if (!walletConfig.applePayReady) {
      setError(
        "Apple Pay merchant certificates are not configured yet (APPLE_PAY_MERCHANT_CERT_PEM / KEY). Use Google Pay or card.",
      );
      return;
    }

    setLoading(true);
    startApplePaySession({
      config: walletConfig,
      validateMerchant: async (validationURL) => {
        const result = await validateApplePayMerchantSession({ data: { validationURL } });
        if (!result.ok) throw new Error(result.error);
        return JSON.parse(result.sessionJson) as object;
      },
      onToken: async (tokenJson) => {
        await finishWallet("apple", tokenJson);
      },
      onError: (message) => {
        setError(message);
        setLoading(false);
      },
      onCancel: () => setLoading(false),
    });
  };

  const handlePayByCard = async () => {
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
      // Top-level Monobank checkout for card (and any wallets Monobank enables there).
      window.location.assign(result.pageUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not start the payment.";
      setError(/unauthorized/i.test(message) ? "Sign in to continue to payment." : message);
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
      return true;
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
      if (await applyDiscountCode(code)) {
        return;
      }

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

  void priceEuros;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[90vh] overflow-y-auto overscroll-contain sm:max-w-md">
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
                  {MONOBANK_TEST_CHARGE.enabled
                    ? `Test charge ${MONOBANK_TEST_CHARGE.label}`
                    : `Charged as €${eurPrice}${discountApplied ? ` (−${discountPct}%)` : ""}`}
                </p>
              )}
            </div>
            <div className="text-right">
              {method === "promo" && !discountApplied ? (
                <p className="font-display text-2xl font-bold text-foreground">Free</p>
              ) : (
                <>
                  {!MONOBANK_TEST_CHARGE.enabled && discountApplied && (
                    <p className="text-sm text-muted-foreground line-through">€{catalogEur}</p>
                  )}
                  <p className="font-display text-2xl font-bold text-foreground">{chargeLabel}</p>
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
                  Pay
                </TabsTrigger>
                <TabsTrigger value="promo" className="gap-1.5">
                  <Ticket className="h-3.5 w-3.5" />
                  Promo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Pay with Apple Pay or Google Pay here, or continue to Monobank for card payment.
                  </p>

                  <div className="space-y-2.5">
                    {/* Always show Apple Pay so the option is visible; availability checked on click. */}
                    <button
                      type="button"
                      onClick={handleApplePay}
                      disabled={loading}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-black px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-70"
                      aria-label="Apple Pay"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <ApplePayMark />
                          <span>Pay</span>
                        </>
                      )}
                    </button>

                    {/* Official Google Pay button mounts here. */}
                    <div className="relative min-h-12 w-full overflow-hidden rounded-lg border border-border bg-white">
                      {!walletConfig && (
                        <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
                          <GooglePayMark />
                          <span>Google Pay</span>
                        </div>
                      )}
                      <div ref={googleButtonRef} className="min-h-12 w-full [&_button]:!w-full" />
                    </div>

                    <div className="relative py-1">
                      <div className="absolute inset-0 flex items-center" aria-hidden>
                        <div className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
                        <span className="bg-background px-2 text-muted-foreground">or</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handlePayByCard}
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 disabled:opacity-70"
                      style={{ backgroundColor: ORANGE, boxShadow: `0 10px 28px -8px ${ORANGE}90` }}
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <CreditCard className="h-4 w-4" />
                          Pay by card · {chargeLabel}
                        </>
                      )}
                    </button>
                  </div>

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
                      {MONOBANK_TEST_CHARGE.enabled
                        ? `Discount noted (${appliedPromoCode}) — test charge remains ${MONOBANK_TEST_CHARGE.label}`
                        : `${discountPct}% off applied (${appliedPromoCode}) — pay €${eurPrice} instead of €${catalogEur}`}
                    </p>
                  )}

                  {error && (
                    <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    Apple Pay · Google Pay · Card · Secured by Monobank
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

function ApplePayMark() {
  return (
    <svg viewBox="0 0 41 16" width="52" height="20" aria-hidden className="fill-current">
      <path d="M8.2 3.4c-.5.6-1.3 1.1-2.1 1-.1-.8.3-1.7.8-2.2.5-.6 1.4-1 2.1-1 .1.9-.2 1.7-.8 2.2zm.7 1.2c-1.2 0-2.2.7-2.8.7-.6 0-1.5-.7-2.5-.6-1.3 0-2.4.7-3.1 1.9-1.3 2.3-.3 5.7 1 7.6.6.9 1.4 1.9 2.4 1.9 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6c1 0 1.7-.9 2.3-1.8.7-1 1-2 1-2.1-.1 0-1.9-.7-1.9-2.9 0-1.8 1.5-2.7 1.5-2.7-.9-1.2-2.2-1.4-2.4-1.4z" />
      <path d="M18.4 1.2h2.2l2.7 7.8h.1l2.7-7.8h2.1l-3.9 10.6h-2.1L18.4 1.2zm11.2 10.8c-1.1 0-1.9-.3-2.6-.8v-.1l.8-1.1c.6.5 1.3.8 2 .8.8 0 1.2-.3 1.2-.8 0-.4-.3-.6-1.2-.9l-.8-.3c-1.4-.5-2-1.2-2-2.4 0-1.4 1.1-2.4 2.8-2.4 1 0 1.8.3 2.4.7l-.7 1.1c-.5-.4-1.1-.6-1.8-.6-.7 0-1.1.3-1.1.8 0 .4.3.7 1.2.9l.8.3c1.5.5 2.1 1.2 2.1 2.4 0 1.5-1.1 2.4-3.1 2.4zm6.5.2c-2.1 0-3.4-1.4-3.4-3.6s1.3-3.6 3.4-3.6 3.4 1.4 3.4 3.6-1.3 3.6-3.4 3.6zm0-1.3c1.1 0 1.7-.8 1.7-2.3s-.6-2.3-1.7-2.3-1.7.8-1.7 2.3.6 2.3 1.7 2.3z" />
    </svg>
  );
}

function GooglePayMark() {
  return (
    <svg viewBox="0 0 57 24" width="57" height="24" aria-hidden>
      <path
        fill="#5F6368"
        d="M26.5 11.1v2.5h4c-.2 1.2-1.5 3.5-4 3.5-2.4 0-4.4-2-4.4-4.5s2-4.5 4.4-4.5c1.4 0 2.3.6 2.8 1.1l1.9-1.8C30.2 6.2 28.5 5.4 26.5 5.4c-3.8 0-6.9 3.1-6.9 6.9s3.1 6.9 6.9 6.9c4 0 6.6-2.8 6.6-6.7 0-.5 0-.8-.1-1.2h-6.5z"
      />
      <path fill="#4285F4" d="M12.8 16.8c1.6 0 2.9-.5 3.9-1.4l-1.9-1.5c-.5.4-1.2.7-2 .7-1.5 0-2.8-1-3.3-2.4H5.5v1.5c1 2 3 3.1 7.3 3.1z" />
      <path fill="#34A853" d="M9.5 12.2c-.1-.4-.2-.8-.2-1.2s.1-.8.2-1.2V8.3H5.5c-.4.8-.6 1.7-.6 2.7s.2 1.9.6 2.7l4-1.5z" />
      <path fill="#FABB05" d="M12.8 6.8c.9 0 1.6.3 2.2.9l1.7-1.7c-1-.9-2.3-1.5-3.9-1.5-2.9 0-5.4 1.7-6.6 4.1l4 1.5c.5-1.4 1.8-2.3 3.3-2.3z" />
      <path fill="#E94235" d="M45.5 7.6h-2.1v7.9h2.1V7.6zm-10.2 5.1c0 1.3 1 2.3 2.3 2.3 1.1 0 1.8-.5 2.2-1.1h.1v.7h1.9V9.2h-1.9v.6h-.1c-.4-.6-1.2-1.1-2.2-1.1-1.3 0-2.3 1.1-2.3 2.4v1.6zm2.1-.1c0-.7.5-1.3 1.3-1.3s1.3.6 1.3 1.3-.5 1.3-1.3 1.3-1.3-.6-1.3-1.3zm14.2-1.3c-.9 0-1.5.4-1.9.9h-.1V9.4h-2v6.1h2v-3c0-.8.5-1.3 1.2-1.3.7 0 1 .5 1 1.3v3h2v-3.3c0-1.6-1-2.6-2.2-2.6z" />
      <path fill="#5F6368" d="M37.2 19.1l-1.1 1.1c.7.6 1.8 1.1 3 1.1 2.4 0 3.9-1.3 3.9-3.4v-.8h-.1c-.5.6-1.4 1.1-2.5 1.1-2 0-3.6-1.6-3.6-3.7s1.6-3.8 3.7-3.8c1.1 0 2 .5 2.5 1.1h.1V11h2v6.9c0 2.9-2.1 4.9-5.1 4.9-1.8-.1-3.1-.7-3.8-1.7z" />
    </svg>
  );
}
