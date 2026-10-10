import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { getCurrentAuthState } from "@/lib/auth-ui";
import { useLanguage } from "@/lib/i18n/context";
import { localizePath } from "@/lib/i18n/locale-path";
import { consumePostSignupContinue, consumeSignupComplete } from "@/lib/signup-complete";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";

const DEMO_AFTER_SIGNUP = "/demo-practice";

/** Let the Google Ads tag register before leaving the conversion URL. */
const CONTINUE_DELAY_MS = 2000;

/** Exact URL restore (keeps /de|/uk prefixes and search). */
function goToContinue(path: string) {
  window.location.assign(path);
}

export const Route = createFileRoute("/signup-complete")({
  component: SignupCompletePage,
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/signup-complete" }],
    meta: [
      { title: "Sign up confirmed · BBE School" },
      {
        name: "description",
        content: "Your BBE School account is ready. Start practicing for the WU Vienna entrance exam.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

/**
 * Google Ads conversion landing — only reachable right after a successful signup.
 * Every signup then opens the BBE demo. WiSo demo is a switch on that page.
 */
function SignupCompletePage() {
  const navigate = useLocalizedNavigate();
  const { lang } = useLanguage();
  const [allowed, setAllowed] = useState(false);
  const [continueTo, setContinueTo] = useState(DEMO_AFTER_SIGNUP);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const auth = await getCurrentAuthState();
      if (cancelled) return;

      if (!auth) {
        void navigate({ to: "/signup", replace: true });
        return;
      }

      if (!consumeSignupComplete()) {
        void navigate({ to: "/dashboard", replace: true });
        return;
      }

      consumePostSignupContinue();
      setContinueTo(localizePath(DEMO_AFTER_SIGNUP, lang));
      setAllowed(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [navigate, lang]);

  useEffect(() => {
    if (!allowed) return;
    const timer = window.setTimeout(() => goToContinue(continueTo), CONTINUE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [allowed, continueTo]);

  const goContinue = () => goToContinue(continueTo);

  if (!allowed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <p className="text-sm text-muted-foreground">Confirming your account…</p>
      </div>
    );
  }

  const continueLabel = "Start the demo →";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
        <h1 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
          You&apos;re signed up
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your BBE School account is confirmed. Taking you to the free demo…
        </p>
        <button
          type="button"
          onClick={goContinue}
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {continueLabel}
        </button>
      </div>
    </div>
  );
}
