import { useEffect, useState } from "react";
import { CreditCard, Landmark, Lock, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [email, setEmail] = useState("");
  const [method, setMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    setEmail("");
    setMethod("card");
    setLoading(false);
    setError(null);
    setSubmitted(false);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Payment</DialogTitle>
          <DialogDescription>
            Complete your one-time purchase of {productName}.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-4 py-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-taupe">Order</p>
            <p className="mt-0.5 font-display text-sm font-semibold text-foreground">{productName}</p>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">€{priceEuros}</p>
        </div>

        {submitted ? (
          <div className="space-y-4 py-1">
            <div
              className="rounded-xl border p-4 text-center"
              style={{ borderColor: `${ORANGE}55`, backgroundColor: `${ORANGE}10` }}
            >
              <p className="font-display text-lg font-semibold text-foreground">Request received</p>
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <Tabs value={method} onValueChange={setMethod}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card" className="gap-1.5">
                  <CreditCard className="h-3.5 w-3.5" />
                  Card
                </TabsTrigger>
                <TabsTrigger value="bank" className="gap-1.5">
                  <Landmark className="h-3.5 w-3.5" />
                  Bank transfer
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="mt-4 space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Pay securely by card. Enter your email and we&apos;ll send a checkout link for €
                  {priceEuros}.
                </p>
              </TabsContent>

              <TabsContent value="bank" className="mt-4 space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Prefer a bank transfer? Enter your email and we&apos;ll send transfer details and
                  a payment reference for €{priceEuros}.
                </p>
              </TabsContent>
            </Tabs>

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
        )}
      </DialogContent>
    </Dialog>
  );
}
