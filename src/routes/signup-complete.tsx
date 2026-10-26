import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { getCurrentAuthState } from "@/lib/auth-ui";
import { useLanguage } from "@/lib/i18n/context";
import { localizePath } from "@/lib/i18n/locale-path";
import { supabase } from "@/integrations/supabase/client";
import { getVisitorCountry } from "@/lib/geo.functions";
import { phoneCountries, phoneWithCountryCode } from "@/lib/phone-country";
import {
  consumePostSignupContinue,
  consumeSignupComplete,
  hasSignupComplete,
} from "@/lib/signup-complete";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { ensureOwnDemoEnrollment } from "@/lib/ensure-own-demo-enrollment";
import { recordSignupCountry } from "@/lib/signup-country";

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
      { property: "og:title", content: "Sign up confirmed · BBE School" },
      { property: "og:description", content: "Your BBE School account is ready. Start practicing for the WU Vienna entrance exam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
  const [askPhone, setAskPhone] = useState(false);
  const [country, setCountry] = useState("AT");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [savingPhone, setSavingPhone] = useState(false);
  const [continueTo, setContinueTo] = useState(DEMO_AFTER_SIGNUP);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      let auth = await getCurrentAuthState();
      if (!auth) auth = await getCurrentAuthState({ refresh: true });
      if (cancelled) return;

      if (!auth) {
        void navigate({ to: "/signup", replace: true });
        return;
      }

      if (!hasSignupComplete()) {
        void navigate({ to: "/dashboard", replace: true });
        return;
      }

      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      const google =
        user?.app_metadata?.provider === "google" ||
        (user?.identities ?? []).some((identity) => identity.provider === "google");
      const savedPhone = user?.user_metadata?.phone;
      const hasCode = typeof savedPhone === "string" && savedPhone.trim().startsWith("+");
      if (google && !hasCode) {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const geo = await getVisitorCountry({ data: { timezone } }).catch(() => null);
        if (!cancelled && geo?.country && phoneCountries().some((c) => c.iso === geo.country)) {
          setCountry(geo.country);
        }
        if (!cancelled) {
          setAskPhone(true);
          setAllowed(true);
        }
        return;
      }

      if (!consumeSignupComplete()) {
        void navigate({ to: "/dashboard", replace: true });
        return;
      }

      await Promise.all([recordSignupCountry(), ensureOwnDemoEnrollment()]);
      if (cancelled) return;

      consumePostSignupContinue();
      setContinueTo(localizePath(DEMO_AFTER_SIGNUP, lang));
      setAllowed(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [navigate, lang]);

  useEffect(() => {
    if (!allowed || askPhone) return;
    const timer = window.setTimeout(() => goToContinue(continueTo), CONTINUE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [allowed, askPhone, continueTo]);

  const savePhone = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError(null);
    const formatted = phoneWithCountryCode(phone, country);
    const digits = formatted.replace(/\D/g, "");
    if (!formatted.startsWith("+") || digits.length < 8) {
      setPhoneError("Enter your phone number with the country code.");
      return;
    }
    setSavingPhone(true);
    const { error } = await supabase.auth.updateUser({
      data: { phone: formatted, phone_country: country },
    });
    setSavingPhone(false);
    if (error) {
      setPhoneError("Could not save your phone number. Try again.");
      return;
    }
    consumeSignupComplete();
    await Promise.all([recordSignupCountry(), ensureOwnDemoEnrollment()]);
    consumePostSignupContinue();
    setContinueTo(localizePath(DEMO_AFTER_SIGNUP, lang));
    setAskPhone(false);
  };

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
          {askPhone
            ? "Add your phone number and country code so we can reach you on WhatsApp."
            : "Your BBE School account is confirmed. Taking you to the free demo…"}
        </p>
        {askPhone ? (
          <form onSubmit={savePhone} className="mt-6 space-y-3 text-left">
            <label className="block text-xs font-medium text-foreground">
              Country code
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                {phoneCountries().map((c) => (
                  <option key={c.iso} value={c.iso}>
                    {c.name} (+{c.dial})
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs font-medium text-foreground">
              Phone
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="660 0000000"
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            {phoneError ? <p className="text-sm text-destructive">{phoneError}</p> : null}
            <button
              type="submit"
              disabled={savingPhone}
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {savingPhone ? "Saving…" : "Continue"}
            </button>
          </form>
        ) : (
          <button
            type="button"
            onClick={goContinue}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {continueLabel}
          </button>
        )}
      </div>
    </div>
  );
}
