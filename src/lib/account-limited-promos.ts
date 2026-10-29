/**
 * Partner / campaign discounts that require a signed-in account and may be
 * used once per account per paid course (same rules as STUDYLINE).
 */
export const ACCOUNT_LIMITED_DISCOUNT_CODES = {
  STUDYLINE: { discountPct: 5, name: "Studyline" },
  VSTUPUNI: { discountPct: 10, name: "Vstup Uni" },
} as const;

export type AccountLimitedDiscountCode = keyof typeof ACCOUNT_LIMITED_DISCOUNT_CODES;

export function isAccountLimitedDiscountCode(code: string): code is AccountLimitedDiscountCode {
  return Object.prototype.hasOwnProperty.call(
    ACCOUNT_LIMITED_DISCOUNT_CODES,
    code.trim().toUpperCase(),
  );
}

export function accountLimitedDiscountMeta(code: string) {
  const normalized = code.trim().toUpperCase();
  if (!isAccountLimitedDiscountCode(normalized)) return null;
  return {
    code: normalized,
    ...ACCOUNT_LIMITED_DISCOUNT_CODES[normalized],
  };
}
