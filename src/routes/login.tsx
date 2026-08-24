import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, Field, PasswordField, GoogleButton, Divider } from "./signup";
import { friendlyAuthError, getCurrentAuthState } from "@/lib/auth-ui";
import { signInWithGoogle } from "@/lib/google-auth";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Log in · BBE School" },
      { name: "description", content: "Log in to BBE School." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const auth = await getCurrentAuthState();
      if (!cancelled && auth) navigate({ to: "/dashboard" });
    })();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  const handleGoogle = async () => {
    setError(null);
    setLoading(true);
    const result = await signInWithGoogle();
    if (result.error) {
      setError(friendlyAuthError(result.error, "Google sign-in failed"));
      setLoading(false);
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/dashboard" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Введите корректный email.");
    if (password.length < 6) return setError("Пароль минимум 6 символов.");
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) throw err;
      navigate({ to: "/dashboard" });
    } catch (err: any) {
      console.error("Login failed", err);
      setError(friendlyAuthError(err, "Неверный email или пароль."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Sign in" subtitle="Access your BBE School dashboard.">
      <GoogleButton onClick={handleGoogle} disabled={loading} label="Sign in with Google" />
      <Divider />
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
        <PasswordField label="Password" value={password} onChange={setPassword} placeholder="••••••••" show={showPassword} onToggle={() => setShowPassword((v) => !v)} />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
      <div className="mt-4 text-center text-sm">
        <Link to="/reset-password" className="text-primary hover:underline">Forgot password?</Link>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        No account?{" "}
        <Link to="/signup" className="font-semibold text-primary hover:underline">Create one</Link>
      </p>
    </AuthShell>
  );
}
