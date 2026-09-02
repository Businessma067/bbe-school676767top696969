import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell } from "./signup";
import { friendlyAuthError } from "@/lib/auth-ui";

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

/** Landing page for Supabase signup confirmation links (PKCE + hash). */
function ConfirmEmailPage() {
  const navigate = useNavigate();
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
                "Ссылка подтверждения недействительна или устарела. Запросите письмо ещё раз на странице регистрации.",
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

        if (cancelled) return;
        setStatus("ok");
        setMessage("Email подтверждён. Переходим в кабинет…");
        setTimeout(() => navigate({ to: "/dashboard" }), 900);
      } catch (err) {
        console.error("Email confirm failed", err);
        if (cancelled) return;
        setStatus("error");
        setMessage(friendlyAuthError(err, "Не удалось подтвердить email."));
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
          ? "Проверяем ссылку из письма…"
          : status === "ok"
            ? "Готово."
            : "Что-то пошло не так."
      }
    >
      <p className={`text-sm ${status === "error" ? "text-destructive" : "text-muted-foreground"}`}>
        {message}
      </p>
      {status === "error" ? (
        <div className="mt-6 space-y-3">
          <Link
            to="/signup"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Back to sign up
          </Link>
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
