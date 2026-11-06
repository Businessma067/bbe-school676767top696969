import {
  LITE_BBE_COURSE_SLUG,
  WISO_FULL_COURSE_SLUG,
  type Enrollment,
} from "@/lib/user-progress";
import { CONSULTATION_CALL_PRICE_EUR } from "@/lib/checkout-catalog";

export const CONSULTATION_CALL_SLUG = "consultation-call" as const;
export const FREE_CALLS_WITHOUT_COURSE = 1;
export const FREE_CALLS_WITH_COURSE = 5;

/** Paid course SKUs that unlock the higher free-call allowance. */
const PAID_COURSE_SLUGS = new Set([
  "full-course",
  WISO_FULL_COURSE_SLUG,
  "hybrid-full-course",
  LITE_BBE_COURSE_SLUG,
]);

export function accountOwnsPaidCourse(enrollments: Enrollment[]): boolean {
  return enrollments.some((e) => PAID_COURSE_SLUGS.has(e.product_slug) || e.tier === "full" || e.tier === "lite");
}

export function freeCallAllowance(ownsPaidCourse: boolean): number {
  return ownsPaidCourse ? FREE_CALLS_WITH_COURSE : FREE_CALLS_WITHOUT_COURSE;
}

export type CallBookingStatus = {
  ownsPaidCourse: boolean;
  freeAllowance: number;
  bookingsUsed: number;
  paidCredits: number;
  remaining: number;
  canBook: boolean;
  priceEur: number;
};

export function computeCallBookingStatus(input: {
  ownsPaidCourse: boolean;
  bookingsUsed: number;
  paidCredits: number;
}): CallBookingStatus {
  const freeAllowance = freeCallAllowance(input.ownsPaidCourse);
  const remaining = Math.max(
    0,
    freeAllowance + Math.max(0, input.paidCredits) - Math.max(0, input.bookingsUsed),
  );
  return {
    ownsPaidCourse: input.ownsPaidCourse,
    freeAllowance,
    bookingsUsed: Math.max(0, input.bookingsUsed),
    paidCredits: Math.max(0, input.paidCredits),
    remaining,
    canBook: remaining > 0,
    priceEur: CONSULTATION_CALL_PRICE_EUR,
  };
}
