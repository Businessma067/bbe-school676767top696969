import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CreditCard, Landmark, Lock, Loader2, Ticket } from "lucide-react";
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

const ORANGE = "#C2643A";

type PaymentModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
  priceEuros?: number;
};

export function PaymentModal({
  open,
  onOpenChange,
  productName = "Full BBE Course",
  priceEuros = 479,
}: PaymentModalProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [method, setMethod] = useState("card");
  const [promoCode, setPromoCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [promoUnlocked, setPromoUnlocked] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);


  useEffect(() => {
    if (!open) return;
    setEmail("");
    setMethod("card");
    setPromoCode("");
    setLoading(false);
    setError(null);
    setSubmitted(false);
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

  const handlePaySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);
    // Placeholder until a payment provider is connected.
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
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
            </div>
            <p className="font-display text-2xl font-bold text-foreground">
              {method === "promo" ? "Free" : `€${priceEuros}`}
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
          ) : submitted ? (
            <div className="space-y-4 py-1">
              <div
                className="rounded-xl border p-4 text-center"
                style={{ borderColor: `${ORANGE}55`, backgroundColor: `${ORANGE}10` }}
              >
                <p className="font-display text-lg font-semibold text-foreground">
                  Request received
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We&apos;ll send a secure payment link to <strong>{email}</strong> so you can finish
                  checkout.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: ORANGE }}
              >
                Done
              </button>
            </div>
          ) : (
            <Tabs value={method} onValueChange={(v) => { setMethod(v); setError(null); }}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card" className="gap-1.5">
                  <CreditCard className="h-3.5 w-3.5" />
                  Card
                </TabsTrigger>
                <TabsTrigger value="bank" className="gap-1.5">
                  <Landmark className="h-3.5 w-3.5" />
                  Bank
                </TabsTrigger>
                <TabsTrigger value="promo" className="gap-1.5">
                  <Ticket className="h-3.5 w-3.5" />
                  Promo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="mt-4">
                <PayForm
                  email={email}
                  setEmail={setEmail}
                  error={error}
                  loading={loading}
                  priceEuros={priceEuros}
                  onSubmit={handlePaySubmit}
                  hint={`Pay securely by card. Enter your email and we'll send a checkout link for €${priceEuros}.`}
                />
              </TabsContent>

              <TabsContent value="bank" className="mt-4">
                <PayForm
                  email={email}
                  setEmail={setEmail}
                  error={error}
                  loading={loading}
                  priceEuros={priceEuros}
                  onSubmit={handlePaySubmit}
                  hint={`Prefer a bank transfer? Enter your email and we'll send transfer details and a payment reference for €${priceEuros}.`}
                />
              </TabsContent>

              <TabsContent value="promo" className="mt-4">
                <form onSubmit={handlePromoRedeem} className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Have a one-time promocode? Redeem it while signed in to unlock full course access
                    instantly — no payment needed.
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

function PayForm({
  email,
  setEmail,
  error,
  loading,
  priceEuros,
  onSubmit,
  hint,
}: {
  email: string;
  setEmail: (v: string) => void;
  error: string | null;
  loading: boolean;
  priceEuros: number;
  onSubmit: (e: React.FormEvent) => void;
  hint: string;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="text-sm leading-relaxed text-muted-foreground">{hint}</p>
      <div>
        <label className="mb-1 block text-xs font-medium text-foreground">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
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
            <Lock className="h-4 w-4" />
            Continue · €{priceEuros}
          </>
        )}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
        <Lock className="h-3 w-3" />
        One-time payment · No subscription
      </p>
    </form>
  );
}
