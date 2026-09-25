import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { fmtDate } from "@/components/admin/AdminLayout";
import type { AdminPaymentRow, AdminUserRow } from "@/lib/admin-types";
import { formatAmountMinor } from "@/lib/payment-display";

/** Expandable one-row-per-account list with plan + payment details. */
export function AdminUsersTable({
  rows,
  empty = "No accounts yet.",
}: {
  rows: AdminUserRow[];
  empty?: string;
}) {
  // Default: every user expanded so plan/country/method/when are visible.
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());

  if (rows.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
        {empty}
      </p>
    );
  }

  const toggle = (userId: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(userId)) next.delete(userId);
      else next.add(userId);
      return next;
    });
  };

  return (
    <div className="space-y-2">
      {rows.map((u) => {
        const open = !collapsed.has(u.userId);
        const latestPaid =
          u.payments.find((p) => p.status === "success" && p.paidAt) ??
          u.payments.find((p) => p.status === "success") ??
          null;
        return (
          <article
            key={u.userId}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="flex flex-wrap items-center gap-2 px-3 py-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => toggle(u.userId)}
                aria-expanded={open}
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border text-xs font-semibold text-muted-foreground hover:bg-secondary"
                title={open ? "Collapse" : "Expand"}
              >
                {open ? "−" : "+"}
              </button>
              <div className="min-w-0 flex-1">
                <Link
                  to="/admin/users/$userId"
                  params={{ userId: u.userId }}
                  className="break-all font-mono text-[13px] font-semibold text-primary hover:underline"
                >
                  {u.email || "—"}
                </Link>
                <p className="truncate text-xs text-muted-foreground">{u.displayName}</p>
              </div>
              <PlanChips plans={u.plans} tier={u.tier} />
              <PaymentSummaryChip payment={latestPaid} />
              <div className="hidden text-xs text-muted-foreground sm:block">
                {fmtDate(u.lastSeenAt)}
              </div>
              <Link
                to="/admin/users/$userId"
                params={{ userId: u.userId }}
                className="inline-flex rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground hover:opacity-90"
              >
                Open →
              </Link>
            </div>

            {open ? (
              <div className="border-t border-border bg-secondary/30 px-3 py-3">
                <UserPaymentExpanded user={u} />
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

function PlanChips({
  plans,
  tier,
}: {
  plans: AdminUserRow["plans"];
  tier: string;
}) {
  if (plans.length === 0) {
    return (
      <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-semibold capitalize text-muted-foreground">
        {tier === "none" ? "No plan" : tier}
      </span>
    );
  }
  return (
    <div className="flex max-w-[14rem] flex-wrap gap-1">
      {plans.map((p) => (
        <span
          key={p.productSlug}
          className="truncate rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary"
          title={`${p.productName} · ${p.tier}`}
        >
          {shortPlanName(p.productName)} · {p.tier}
        </span>
      ))}
    </div>
  );
}

function PaymentSummaryChip({ payment }: { payment: AdminPaymentRow | null }) {
  if (!payment) {
    return (
      <span className="rounded-full border border-dashed border-border px-2 py-0.5 text-[11px] text-muted-foreground">
        No payment
      </span>
    );
  }
  const country = payment.payerCountryName ?? payment.payerCountryCode ?? "—";
  const method = payment.paymentMethodLabel ?? "—";
  return (
    <span
      className="hidden max-w-[18rem] truncate rounded-full border border-border px-2 py-0.5 text-[11px] text-foreground md:inline"
      title={`${country} · ${method} · ${fmtDate(payment.paidAt ?? payment.createdAt)}`}
    >
      {country} · {method} · {fmtDate(payment.paidAt ?? payment.createdAt)}
    </span>
  );
}

function UserPaymentExpanded({ user }: { user: AdminUserRow }) {
  return (
    <div className="space-y-3 text-sm">
      <section>
        <h3 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Plan
        </h3>
        {user.plans.length === 0 ? (
          <p className="text-muted-foreground">No enrollment.</p>
        ) : (
          <ul className="space-y-1">
            {user.plans.map((p) => (
              <li key={p.productSlug} className="flex flex-wrap gap-x-3 gap-y-0.5">
                <span className="font-medium">{p.productName}</span>
                <span className="capitalize text-muted-foreground">{p.tier}</span>
                <span className="text-xs text-muted-foreground">
                  since {fmtDate(p.createdAt)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Payments
        </h3>
        {user.payments.length === 0 ? (
          <p className="text-muted-foreground">
            No card payments recorded
            {user.plans.length > 0 ? " (plan may be promo / grant)." : "."}
          </p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-border bg-card">
            <table className="min-w-full text-left text-xs">
              <thead className="border-b border-border bg-secondary/40 text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-2.5 py-1.5 font-semibold">Plan</th>
                  <th className="px-2.5 py-1.5 font-semibold">Country</th>
                  <th className="px-2.5 py-1.5 font-semibold">Method</th>
                  <th className="px-2.5 py-1.5 font-semibold">When</th>
                  <th className="px-2.5 py-1.5 font-semibold">Amount</th>
                  <th className="px-2.5 py-1.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {user.payments.map((p) => (
                  <tr key={p.id}>
                    <td className="px-2.5 py-1.5">
                      <div className="font-medium">{p.productName}</div>
                      <div className="capitalize text-muted-foreground">{p.tier}</div>
                    </td>
                    <td className="px-2.5 py-1.5">
                      {p.payerCountryName ?? p.payerCountryCode ?? "—"}
                      {p.payerCountryCode && p.payerCountryName ? (
                        <span className="ml-1 text-muted-foreground">({p.payerCountryCode})</span>
                      ) : null}
                    </td>
                    <td className="px-2.5 py-1.5">
                      <div>{p.paymentMethodLabel ?? "—"}</div>
                      {p.maskedPan ? (
                        <div className="font-mono text-[10px] text-muted-foreground">
                          {p.maskedPan}
                        </div>
                      ) : null}
                      {p.promoCode ? (
                        <div className="text-[10px] text-muted-foreground">
                          promo {p.promoCode}
                        </div>
                      ) : null}
                    </td>
                    <td className="whitespace-nowrap px-2.5 py-1.5">
                      {fmtDate(p.paidAt ?? (p.status === "success" ? p.createdAt : null))}
                      {!p.paidAt && p.status !== "success" ? (
                        <div className="text-muted-foreground">created {fmtDate(p.createdAt)}</div>
                      ) : null}
                    </td>
                    <td className="whitespace-nowrap px-2.5 py-1.5 tabular-nums">
                      {formatAmountMinor(p.amountMinor, p.currencyCode)}
                    </td>
                    <td className="px-2.5 py-1.5 capitalize">{p.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span>
          Tasks {user.tasksPassed}/{user.tasksAttempted}
        </span>
        <span>
          Acc. {user.averageAccuracy != null ? `${Math.round(user.averageAccuracy)}%` : "—"}
        </span>
        <span>Mocks {user.mockAttempts}</span>
        <span>Streak {user.currentStreak}d</span>
      </div>
    </div>
  );
}

function shortPlanName(name: string): string {
  return name
    .replace(/^Full\s+/i, "")
    .replace(/\s+Course$/i, "")
    .trim() || name;
}
