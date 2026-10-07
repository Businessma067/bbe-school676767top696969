/** One-shot gate so `/payment/success` only opens after a verified payment or promo unlock. */

export const PAYMENT_SUCCESS_PATH = "/payment/success" as const;

const STORAGE_KEY = "bbe.paymentSuccess";

function storageTarget(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    // Prefer the top window so a mark set inside Monobank's iframe survives
    // navigateTopWindow → parent /payment/success.
    const top = window.top ?? window;
    return top.sessionStorage;
  } catch {
    try {
      return sessionStorage;
    } catch {
      return null;
    }
  }
}

export function markPaymentSuccessAccess(): void {
  const store = storageTarget();
  if (!store) return;
  try {
    store.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function consumePaymentSuccessAccess(): boolean {
  const store = storageTarget();
  if (!store) return false;
  try {
    const raw = store.getItem(STORAGE_KEY);
    store.removeItem(STORAGE_KEY);
    return raw === "1";
  } catch {
    return false;
  }
}
