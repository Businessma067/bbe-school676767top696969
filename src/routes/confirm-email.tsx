import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell } from "./signup";
import { friendlyAuthError } from "@/lib/auth-ui";
import { LocalizedLink } from "@/components/LocalizedLink";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";

const PENDING_EMAIL_KEY = "bbe.pendingConfirmEmail";

export const Route = createFileRoute("/confirm-email")({
  component: ConfirmEmailPage,
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/confirm-email" }],
    meta: [
      { title: "Confirm email · BBE School" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function hasConfirmLinkParams(): boolean {
  const url = new URL(window.location.href);
  if (url.searchParams.get("code")) return true;
  if (url.searchParams.get("error_description") || url.searchParams.get("error")) return true;
  const hash = window.location.hash.slice(1);
  if (!hash) return false;
  const params = new URLSearchParams(hash);
  return Boolean(
    params.get("access_token") ||
      params.get("refresh_token") ||
      params.get("type") === "signup" ||
      params.get("type") === "email" ||
      params.get("type") === "magiclink",
  );
}

/** Dual-purpose: post-signup “check your inbox” + landing for confirmation links. */
function ConfirmEmailPage() {
  const [mode, setMode] = useState<"pending" | "verifying" | null>(null);

  useEffect(() => {
    setMode(hasConfirmLinkParams() ? "verifying" : "pending");
  }, []);

  if (mode === null) {
    return (
      <AuthShell title="Confirm email" subtitle="Just a moment…">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </AuthShell>
    );
  }

  if (mode === "verifying") return <VerifyingEmail />;
  return <PendingEmailConfirmation />;
}

function PendingEmailConfirmation() {
  const [email, setEmail] = useState("");
  const [knownEmail, setKnownEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const pending = sessionStorage.getItem(PENDING_EMAIL_KEY) || "";
    if (pending) {
      setEmail(pending);
      setKnownEmail(true);
    }
  }, []);

  const handleResend = async () => {
    setError(null);
    setInfo(null);
    const target = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(target)) {
      setError("Enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.resend({
        type: "signup",
        email: target,
        options: {
          emailRedirectTo: `${window.location.origin}/confirm-email`,
        },
      });
      if (err) throw err;
      sessionStorage.setItem(PENDING_EMAIL_KEY, target);
      setEmail(target);
      setKnownEmail(true);
      setInfo("Confirmation email sent. Check your inbox and spam folder.");
    } catch (err) {
      setError(friendlyAuthError(err, "Could not resend confirmation email."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Check your email"
      subtitle="We sent a confirmation link to finish creating your account."
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
          <Mail className="h-6 w-6" aria-hidden />
        </div>
        {knownEmail ? (
          <p className="text-sm text-muted-foreground">
            We sent a confirmation link to{" "}
            <span className="font-semibold text-foreground">{email}</span>. Open the email and
            tap the link, then sign in.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Open the confirmation email we sent you, then tap the link inside. After that you can
            sign in.
          </p>
        )}
      </div>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
      {info && <p className="mt-4 text-sm text-primary">{info}</p>}

      {!knownEmail ? (
        <div className="mt-4">
          <label htmlFor="confirm-email-input" className="mb-1 block text-xs font-medium">
            Email
          </label>
          <input
            id="confirm-email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      ) : null}

      <div className="mt-6 space-y-3">
        <button
          type="button"
          disabled={loading}
          onClick={() => void handleResend()}
          className="w-full rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary disabled:opacity-60"
        >
          {loading ? "Sending…" : "Resend confirmation email"}
        </button>
        <LocalizedLink
          to="/login"
          className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Continue to sign in
        </LocalizedLink>
        <LocalizedLink
          to="/signup"
          className="inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          Back to sign up
        </LocalizedLink>
      </div>
    </AuthShell>
  );
}

function VerifyingEmail() {
  const navigate = useLocalizedNavigate();
  const [status, setStatus] = useState<"working" | "ok" | "error">("working");
  const [message, setMessage] = useState("Confirming your email…");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        const errorDescription =
          url.searchParams.get("error_description") || url.searchParams.get("error");

        if (errorDescription) {
          throw new Error(decodeURIComponent(errorDescription.replace(/\+/g, " ")));
        }

        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
        } else {
          const { data, error } = await supabase.auth.getSession();
          if (error) throw error;
          if (!data.session) {
            await new Promise((r) => setTimeout(r, 500));
            const again = await supabase.auth.getSession();
            if (!again.data.session) {
              throw new Error(
                "This confirmation link is invalid or has expired. Request a new email from the confirmation page.",
              );
            }
          }
        }

        const { data: userData } = await supabase.auth.getUser();
        const user = userData.user;
        if (user) {
          const meta = user.user_metadata ?? {};
          const displayName =
            (typeof meta.display_name === "string" && meta.display_name.trim()) ||
            [meta.first_name, meta.last_name].filter(Boolean).join(" ").trim() ||
            null;
          if (displayName) {
            await supabase
              .from("profiles")
              .upsert({ user_id: user.id, display_name: displayName }, { onConflict: "user_id" });
          }
        }

        sessionStorage.removeItem(PENDING_EMAIL_KEY);

        if (cancelled) return;
        setStatus("ok");
        setMessage("Email confirmed. Taking you to your dashboard…");
        setTimeout(() => navigate({ to: "/dashboard" }), 900);
      } catch (err) {
        console.error("Email confirm failed", err);
        if (cancelled) return;
        setStatus("error");
        setMessage(friendlyAuthError(err, "Could not confirm email."));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  return (
    <AuthShell
      title="Confirm email"
      subtitle={
        status === "working"
          ? "Checking the link from your email…"
          : status === "ok"
            ? "All set."
            : "Something went wrong."
      }
    >
      <p className={`text-sm ${status === "error" ? "text-destructive" : "text-muted-foreground"}`}>
        {message}
      </p>
      {status === "error" ? (
        <div className="mt-6 space-y-3">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            onClick={() => {
              window.location.assign("/confirm-email");
            }}
          >
            Request a new email
          </button>
          <Link
            to="/login"
            className="inline-flex w-full items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-semibold"
          >
            Sign in
          </Link>
        </div>
      ) : null}
    </AuthShell>
  );
}
