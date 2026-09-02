import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { getPaymentStatus, listMyPayments } from "@/lib/payments.functions";

export const Route = createFileRoute("/payment-result")({
  head: () => ({
    meta: [
      { title: "Payment result — BBE School" },
      {
        name: "description",
        content:
          "Confirmation page for BBE School course purchases: we verify your payment and unlock the course.",
      },
      { property: "og:title", content: "Payment result — BBE School" },
      {
        property: "og:description",
        content: "We verify your Monobank payment and unlock your BBE School course access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PaymentResultPage,
});

const ORANGE = "#C2643A";

type View =
  | { state: "checking" }
  | { state: "paid"; productName: string | null; href: string | null }
  | { state: "pending" }
  | { state: "failed"; reason: string };

function PaymentResultPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<View>({ state: "checking" });
  const tries = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const check = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        let invoiceId = params.get("invoiceId") ?? "";
        if (!invoiceId) {
          const mine = await listMyPayments();
          invoiceId = mine[0]?.invoiceId ?? "";
        }
        if (!invoiceId) {
          if (!cancelled) setView({ state: "failed", reason: "No recent payment found." });
          return;
        }

        const result = await getPaymentStatus({ data: { invoiceId } });
        if (cancelled) return;

        if (!result.ok) {
          setView({ state: "failed", reason: result.error });
          return;
        }
        if (result.paid) {
          setView({ state: "paid", productName: result.productName, href: result.href });
          return;
        }
        if (["failure", "reversed", "expired"].includes(result.status)) {
          setView({
            state: "failed",
            reason: result.failureReason ?? "The payment was not completed.",
          });
          return;
        }

        tries.current += 1;
        setView({ state: tries.current > 2 ? "pending" : "checking" });
        if (tries.current < 12) timer = setTimeout(check, 3000);
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : "Could not check the payment.";
        setView({
          state: "failed",
          reason: /unauthorized/i.test(message) ? "Sign in to see your payment." : message,
        });
      }
    };

    void check();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        {view.state === "checking" && (
          <>
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-muted-foreground" />
            <h1 className="mt-5 font-display text-2xl font-bold text-foreground">
              Confirming your payment
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              This usually takes a few seconds. Please keep this page open.
            </p>
          </>
        )}

        {view.state === "pending" && (
          <>
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-muted-foreground" />
            <h1 className="mt-5 font-display text-2xl font-bold text-foreground">
              Payment is still processing
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Your bank has not finalised the transaction yet. Access unlocks automatically once it
              does.
            </p>
          </>
        )}

        {view.state === "paid" && (
          <>
            <CheckCircle2 className="mx-auto h-10 w-10" style={{ color: ORANGE }} />
            <h1 className="mt-5 font-display text-2xl font-bold text-foreground">Payment received</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {view.productName ?? "Your course"} is unlocked on your account.
            </p>
            <button
              type="button"
              onClick={() => navigate({ to: view.href ?? "/dashboard" })}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: ORANGE }}
            >
              Start the course →
            </button>
          </>
        )}

        {view.state === "failed" && (
          <>
            <XCircle className="mx-auto h-10 w-10 text-destructive" />
            <h1 className="mt-5 font-display text-2xl font-bold text-foreground">
              Payment not completed
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{view.reason}</p>
            <Link
              to="/products"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
            >
              Back to courses
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
