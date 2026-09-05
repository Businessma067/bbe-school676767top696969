import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, Field } from "./signup";
import { friendlyAuthError } from "@/lib/auth-ui";
import { LocalizedLink } from "@/components/LocalizedLink";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import { useLanguage } from "@/lib/i18n/context";
import { hreflangLinks, localizePath } from "@/lib/i18n/locale-path";

export const Route = createFileRoute("/reset-password")({
  component: ResetPasswordPage,
  head: () => ({
    links: [
      ...hreflangLinks("/reset-password"),
      { rel: "canonical", href: "https://bbe-school.com/reset-password" },
    ],
    meta: [
      { title: "Set new password · BBE School" },
      { name: "description", content: "Set a new password." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

export function ResetPasswordPage() {
  const navigate = useLocalizedNavigate();
  const { lang } = useLanguage();
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    // Supabase auto-consumes the recovery link on load and fires PASSWORD_RECOVERY event.
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email address.");
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}${localizePath("/reset-password", lang)}`,
      });
      if (err) throw err;
      setInfo("If an account exists for that email, we've sent a reset link.");
    } catch (err) {
      console.error("Password reset request failed", err);
      setError(friendlyAuthError(err, "Could not send reset email."));
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    if (password !== confirm) return setError("Passwords don't match.");
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.updateUser({ password });
      if (err) throw err;
      setInfo("Password updated. Redirecting…");
      setTimeout(() => navigate({ to: "/dashboard" }), 800);
    } catch (err) {
      console.error("Password update failed", err);
      setError(friendlyAuthError(err, "Could not update password."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title={ready ? "Set new password" : "Reset password"}
      subtitle={
        ready
          ? "Choose a new password for your account."
          : "Enter your email and we'll send you a reset link."
      }
    >
      {!ready ? (
        <form onSubmit={handleRequest} className="space-y-4">
          <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
          {error && <p className="text-sm text-destructive">{error}</p>}
          {info && <p className="text-sm text-primary">{info}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send reset link"}
          </button>
          <p className="text-center text-sm text-muted-foreground">
            <LocalizedLink to="/login" className="text-primary hover:underline">
              Back to sign in
            </LocalizedLink>
          </p>
        </form>
      ) : (
        <form onSubmit={handleUpdate} className="space-y-4">
          <Field
            label="New password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="At least 6 characters"
          />
          <Field
            label="Confirm password"
            type="password"
            value={confirm}
            onChange={setConfirm}
            placeholder="Repeat password"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          {info && <p className="text-sm text-primary">{info}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? "Updating…" : "Update password"}
          </button>
        </form>
      )}
    </AuthShell>
  );
}
