import { supabase } from "@/integrations/supabase/client";
import { resolveAppRole, type AppRole } from "@/lib/admin-access";

export type { AppRole };

export type AuthState = {
  userId: string;
  email: string;
  name: string;
  role: AppRole;
};

export function friendlyAuthError(error: unknown, fallback = "Something went wrong.") {
  const code =
    error && typeof error === "object" && "code" in error
      ? String((error as { code?: unknown }).code ?? "")
      : "";
  const message =
    error && typeof error === "object" && "message" in error
      ? String((error as { message?: unknown }).message ?? "").trim()
      : typeof error === "string"
        ? error.trim()
        : "";

  const lower = message.toLowerCase();

  if (code === "weak_password" || lower.includes("weak") || lower.includes("pwned")) {
    return "Пароль слишком простой / известный. Придумайте другой (минимум 8 символов, буквы и цифры).";
  }
  if (
    code === "invalid_credentials" ||
    lower.includes("invalid login credentials") ||
    lower.includes("invalid credentials")
  ) {
    return "Неверный email или пароль. Если аккаунт новый — сначала подтвердите email по ссылке из письма.";
  }
  if (lower.includes("already registered") || lower.includes("user already")) {
    return "Этот email уже зарегистрирован. Войдите или восстановите пароль.";
  }
  if (lower.includes("email not confirmed")) {
    return "Email ещё не подтверждён. Откройте письмо и нажмите Confirm, затем войдите.";
  }
  if (
    code === "over_email_send_rate_limit" ||
    lower.includes("rate_limit") ||
    lower.includes("only request this after")
  ) {
    return "Слишком много писем подряд. Подождите ~1 минуту и попробуйте снова. Также проверьте Spam.";
  }
  if (lower.includes("provider is not enabled") || lower.includes("unsupported provider") || lower.includes("missing oauth secret")) {
    return "Google не настроен в Supabase. Authentication → Providers → Google → Enable и вставь Client ID + Client Secret из Google Cloud Console.";
  }
  if (message) return message;
  return fallback;
}

type AuthCache = { ready: boolean; auth: AuthState | null };

let authCache: AuthCache = { ready: false, auth: null };
let inflightAuth: Promise<AuthState | null> | null = null;
let authListenerBound = false;

function bindAuthCacheInvalidation() {
  if (authListenerBound || typeof window === "undefined") return;
  authListenerBound = true;
  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT") {
      authCache = { ready: true, auth: null };
      inflightAuth = null;
      return;
    }
    if (event === "SIGNED_IN" || event === "USER_UPDATED") {
      // Keep the last painted account chrome until the refresh finishes.
      inflightAuth = null;
      authCache = { ready: false, auth: authCache.auth };
    }
  });
}

/** Last known header auth — avoids Sign-in skeleton flash on every page remount. */
export function peekAuthState(): AuthCache {
  return authCache;
}

export function clearAuthStateCache(): void {
  authCache = { ready: false, auth: null };
  inflightAuth = null;
}

async function loadAuthState(): Promise<AuthState | null> {
  const sessionRes = await supabase.auth.getSession();
  if (!sessionRes.data.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;

  const user = data.user;
  const [profileRes, roleRes] = await Promise.all([
    supabase.from("profiles").select("display_name").eq("user_id", user.id).maybeSingle(),
    supabase.from("user_roles").select("role").eq("user_id", user.id).order("created_at", { ascending: true }),
  ]);

  const displayName = profileRes.data?.display_name?.trim();
  const metadataName =
    typeof user.user_metadata?.display_name === "string"
      ? user.user_metadata.display_name.trim()
      : typeof user.user_metadata?.name === "string"
        ? user.user_metadata.name.trim()
        : "";
  const email = user.email ?? "";
  const dbRole = (roleRes.data?.find((row) => row.role === "admin")?.role ??
    roleRes.data?.[0]?.role ??
    "student") as AppRole;
  const role = resolveAppRole(email, dbRole);

  return {
    userId: user.id,
    email,
    name: displayName || metadataName || email.split("@")[0] || "Account",
    role,
  };
}

export async function getCurrentAuthState(options?: {
  refresh?: boolean;
}): Promise<AuthState | null> {
  bindAuthCacheInvalidation();
  if (!options?.refresh && authCache.ready) return authCache.auth;
  if (!options?.refresh && inflightAuth) return inflightAuth;

  const request = loadAuthState().then((auth) => {
    authCache = { ready: true, auth };
    if (inflightAuth === request) inflightAuth = null;
    return auth;
  });
  inflightAuth = request;
  return request;
}
