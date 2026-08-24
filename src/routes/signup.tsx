import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { friendlyAuthError, getCurrentAuthState } from "@/lib/auth-ui";
import { signInWithGoogle } from "@/lib/google-auth";
import { Eye, EyeOff } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
  head: () => ({
    meta: [
      { title: "Sign up · BBE School" },
      { name: "description", content: "Create your BBE School account to start practicing." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function SignupPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

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
    if (!agree)
      return setError("Please accept the Terms of Service and Privacy Policy to continue.");
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
    setInfo(null);
    const first = firstName.trim();
    const last = lastName.trim();
    const phoneClean = phone.trim();
    if (!first) return setError("Please enter your first name.");
    if (!last) return setError("Please enter your last name.");
    if (!phoneClean || phoneClean.replace(/\D/g, "").length < 7)
      return setError("Please enter a valid phone number.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Введите корректный email.");
    if (password.length < 8)
      return setError("Пароль минимум 8 символов (лучше буквы + цифры).");
    if (!agree)
      return setError("Примите Terms of Service и Privacy Policy.");

    const displayName = `${first} ${last}`;
    const emailNorm = email.trim().toLowerCase();
    setLoading(true);
    try {
      // Same scheme as before admin panel: implicit link → /account
      const { data, error: err } = await supabase.auth.signUp({
        email: emailNorm,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/account`,
          data: {
            display_name: displayName,
            first_name: first,
            last_name: last,
            phone: phoneClean,
          },
        },
      });
      if (err) throw err;

      if (data.user && (data.user.identities?.length ?? 0) === 0) {
        setError("Этот email уже зарегистрирован. Войдите через Sign in.");
        return;
      }

      if (data.session) {
        await supabase.from("profiles").upsert(
          { user_id: data.session.user.id, display_name: displayName },
          { onConflict: "user_id" },
        );
        navigate({ to: "/dashboard" });
        return;
      }

      sessionStorage.setItem("bbe.pendingConfirmEmail", emailNorm);
      setInfo("Check your email to confirm your account, then sign in.");
    } catch (err: any) {
      console.error("Signup failed", err);
      setError(friendlyAuthError(err, "Не удалось создать аккаунт."));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError(null);
    setInfo(null);
    const pending =
      email.trim().toLowerCase() || sessionStorage.getItem("bbe.pendingConfirmEmail") || "";
    if (!/^\S+@\S+\.\S+$/.test(pending)) {
      setError("Введите email, на который отправить письмо снова.");
      return;
    }
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.resend({
        type: "signup",
        email: pending,
        options: { emailRedirectTo: `${window.location.origin}/account` },
      });
      if (err) throw err;
      setInfo(`Письмо отправлено повторно на ${pending}. Проверьте Inbox и Spam.`);
    } catch (err) {
      setError(friendlyAuthError(err, "Не удалось отправить письмо."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Create account" subtitle="Start your WU Vienna BBE preparation.">
      <GoogleButton onClick={handleGoogle} disabled={loading} label="Sign up with Google" />
      <Divider />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="First name"
            type="text"
            value={firstName}
            onChange={setFirstName}
            placeholder="Georg"
          />
          <Field
            label="Last name"
            type="text"
            value={lastName}
            onChange={setLastName}
            placeholder="Tyrin"
          />
        </div>
        <Field
          label="Phone"
          type="tel"
          value={phone}
          onChange={setPhone}
          placeholder="+43 660 0000000"
        />
        <Field
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@example.com"
        />
        <PasswordField
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Минимум 8 символов, не слишком простой"
          show={showPassword}
          onToggle={() => setShowPassword((v) => !v)}
        />

        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
          />
          <span>
            I agree to the{" "}
            <Link to="/terms" className="font-medium text-primary hover:underline">
              Terms of Service &amp; Privacy Policy
            </Link>
            .
          </span>
        </label>

        {error && <p className="text-sm text-destructive">{error}</p>}
        {info && <p className="text-sm text-primary">{info}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-60"
        >
          {loading ? "Creating account…" : "Create account"}
        </button>

        {info ? (
          <button
            type="button"
            disabled={loading}
            onClick={() => void handleResend()}
            className="w-full rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary disabled:opacity-60"
          >
            Resend confirmation email
          </button>
        ) : null}
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader compact maxWidthClassName="max-w-md" />
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-md flex-col justify-center px-6 py-16">
        <Link to="/" className="mb-8 flex items-center gap-3">
          <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30">
            <span className="font-display text-sm font-bold leading-none text-primary-foreground tracking-tight">
              BBE
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-tight">BBE School</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
              WU Vienna · Prep
            </span>
          </div>
        </Link>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h1 className="font-display text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const id = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

export function PasswordField({
  label,
  value,
  onChange,
  placeholder,
  show,
  onToggle,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  show: boolean;
  onToggle: () => void;
}) {
  const id = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-foreground">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-md border border-border bg-background px-3 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="button"
          onClick={onToggle}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-0 grid w-10 place-items-center text-muted-foreground hover:text-foreground"
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

export function GoogleButton({
  onClick,
  disabled,
  label,
}: {
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary disabled:opacity-60"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="#EA4335"
          d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.6 14.6 2.7 12 2.7 6.9 2.7 2.7 6.9 2.7 12s4.2 9.3 9.3 9.3c5.4 0 8.9-3.8 8.9-9.1 0-.6-.06-1.1-.15-1.6H12z"
        />
      </svg>
      {label}
    </button>
  );
}

export function Divider() {
  return (
    <div className="my-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <span className="text-xs uppercase tracking-wider text-muted-foreground">or</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
