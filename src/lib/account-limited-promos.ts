/**
 * Partner discounts: one code per account forever, on every paid course.
 * Activating any of these locks that account to that single partner code.
 */
export const ACCOUNT_LIMITED_DISCOUNT_CODES = {
  STUDYLINE: { discountPct: 5, name: "Studyline" },
  VSTUPUNI: { discountPct: 10, name: "Vstup Uni" },
  STARTSTUDY: { discountPct: 10, name: "Start Study" },
} as const;

export type AccountLimitedDiscountCode = keyof typeof ACCOUNT_LIMITED_DISCOUNT_CODES;

export const ACCOUNT_LIMITED_DISCOUNT_CODE_LIST = Object.keys(
  ACCOUNT_LIMITED_DISCOUNT_CODES,
) as AccountLimitedDiscountCode[];

export function isAccountLimitedDiscountCode(
  code: string,
): code is AccountLimitedDiscountCode {
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
