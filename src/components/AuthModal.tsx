import { LocalizedLink } from "@/components/LocalizedLink";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { friendlyAuthError } from "@/lib/auth-ui";
import { signInWithGoogle } from "@/lib/google-auth";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/context";
import { localizePath } from "@/lib/i18n/locale-path";

type Mode = "signin" | "signup";

type AuthModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called after a successful sign-in (email password or Google without redirect). */
  onSignedIn?: () => void;
  defaultMode?: Mode;
};

export function AuthModal({
  open,
  onOpenChange,
  onSignedIn,
  defaultMode = "signin",
}: AuthModalProps) {
  const { lang } = useLanguage();
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setMode(defaultMode);
    setError(null);
    setInfo(null);
    setLoading(false);
  }, [open, defaultMode]);

  const switchMode = (next: Mode) => {
    setMode(next);
    setError(null);
    setInfo(null);
  };

  const handleGoogle = async () => {
    setError(null);
    if (mode === "signup" && !agree) {
      setError("Please accept the Terms of Service and Privacy Policy to continue.");
      return;
    }
    setLoading(true);
    const result = await signInWithGoogle({ redirectTo: window.location.href });
    if (result.error) {
      setError(friendlyAuthError(result.error, "Google sign-in failed"));
      setLoading(false);
      return;
    }
    if (result.redirected) return;
    onOpenChange(false);
    onSignedIn?.();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (mode === "signup") {
      const first = firstName.trim();
      const last = lastName.trim();
      const phoneClean = phone.trim();
      if (!first) return setError("Please enter your first name.");
      if (!last) return setError("Please enter your last name.");
      if (!phoneClean || phoneClean.replace(/\D/g, "").length < 7) {
        return setError("Please enter a valid phone number.");
      }
      if (password.length < 8) {
        return setError("Password must be at least 8 characters.");
      }
      if (!agree) {
        return setError("Please accept the Terms of Service and Privacy Policy.");
      }

      const displayName = `${first} ${last}`;
      const emailNorm = email.trim().toLowerCase();
      setLoading(true);
      try {
        const { data, error: err } = await supabase.auth.signUp({
          email: emailNorm,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}${localizePath("/account", lang)}`,
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
          setError("This email is already registered. Sign in instead.");
          return;
        }

        if (data.session) {
          await supabase
            .from("profiles")
            .upsert(
              { user_id: data.session.user.id, display_name: displayName },
              { onConflict: "user_id" },
            );
          onOpenChange(false);
          onSignedIn?.();
          return;
        }

        sessionStorage.setItem("bbe.pendingConfirmEmail", emailNorm);
        setInfo("Check your email to confirm your account, then sign in.");
        setMode("signin");
      } catch (err) {
        setError(friendlyAuthError(err, "Could not create account."));
      } finally {
        setLoading(false);
      }
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) throw err;
      onOpenChange(false);
      onSignedIn?.();
    } catch (err) {
      setError(friendlyAuthError(err, "Incorrect email or password."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {mode === "signin" ? "Sign in to continue" : "Create your account"}
          </DialogTitle>
          <DialogDescription>
            {mode === "signin"
              ? "Sign in to answer demo questions and save your progress."
              : "Create a free account to practice demo questions."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-secondary/50 p-1">
          <button
            type="button"
            onClick={() => switchMode("signin")}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
              mode === "signin"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => switchMode("signup")}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
              mode === "signup"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Sign up
          </button>
        </div>

        <button
          type="button"
          onClick={() => void handleGoogle()}
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary disabled:opacity-60"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="#EA4335"
              d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.6 14.6 2.7 12 2.7 6.9 2.7 2.7 6.9 2.7 12s4.2 9.3 9.3 9.3c5.4 0 8.9-3.8 8.9-9.1 0-.6-.06-1.1-.15-1.6H12z"
            />
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={(e) => void handleSubmit(e)} className="space-y-3">
          {mode === "signup" && (
            <>
              <div className="grid gap-3 sm:grid-cols-2">
                <ModalField
                  label="First name"
                  type="text"
                  value={firstName}
                  onChange={setFirstName}
                  placeholder="Georg"
                />
                <ModalField
                  label="Last name"
                  type="text"
                  value={lastName}
                  onChange={setLastName}
                  placeholder="Tyrin"
                />
              </div>
              <ModalField
                label="Phone"
                type="tel"
                value={phone}
                onChange={setPhone}
                placeholder="+43 660 0000000"
              />
            </>
          )}

          <ModalField
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
          />

          <div>
            <label className="mb-1 block text-xs font-medium text-foreground">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={mode === "signup" ? 8 : 6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "signup" ? "At least 8 characters" : "••••••••"}
                className="w-full rounded-md border border-border bg-background px-3 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 grid w-10 place-items-center text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {mode === "signup" && (
            <label className="flex items-start gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
              />
              <span>
                I agree to the{" "}
                <LocalizedLink to="/terms" className="font-medium text-primary hover:underline">
                  Terms of Service &amp; Privacy Policy
                </LocalizedLink>
                .
              </span>
            </label>
          )}

          {error && <p className="text-sm text-destructive">{error}</p>}
          {info && <p className="text-sm text-primary">{info}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        {mode === "signin" && (
          <p className="text-center text-sm text-muted-foreground">
            No account?{" "}
            <button
              type="button"
              className="font-semibold text-primary hover:underline"
              onClick={() => switchMode("signup")}
            >
              Sign up
            </button>
          </p>
        )}
        {mode === "signup" && (
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              type="button"
              className="font-semibold text-primary hover:underline"
              onClick={() => switchMode("signin")}
            >
              Sign in
            </button>
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ModalField({
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
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-foreground">{label}</label>
      <input
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
