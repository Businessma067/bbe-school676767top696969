/**
 * Lightweight verification for site lockdown helpers.
 * Run: npx tsx scripts/verify-site-access.mts
 */
import {
  DEMO_ONLY_HREF,
  hasFullSiteAccess,
  isFullCourseProtectedPath,
  isFullSiteProtectedPath,
  requiredTierForPath,
} from "../src/lib/site-access.ts";

let failed = 0;

function assert(cond: boolean, msg: string) {
  if (!cond) {
    console.error("FAIL:", msg);
    failed += 1;
  }
}

for (const [email, expected] of [
  ["georgtyrin@gmail.com", true],
  ["GeorgTyrin@gmail.com", true],
  ["info@spray-go.com", true],
  ["INFO@SPRAY-GO.COM", true],
  ["student@example.com", false],
  ["", false],
  [null, false],
  [undefined, false],
] as const) {
  assert(hasFullSiteAccess(email) === expected, `hasFullSiteAccess(${String(email)}) === ${expected}`);
}

for (const [path, expected] of [
  ["/demo-practice", false],
  ["/demo-practice/math", false],
  ["/products/demo-practice", false],
  ["/products/full-course", false],
  ["/products/lite-bbe-course", false],
  ["/flashcards", true],
  ["/flashcards/math", true],
  ["/matching/economics", true],
  ["/tutor-exam", true],
  ["/mock-exams/1/take", true],
  ["/practice", true],
  ["/dashboard", false],
  ["/products/full-course-math", true],
  ["/products/lite-bbe-course-english", true],
  ["/products/custom-mock-builder", true],
  ["/admin", false],
  ["/login", false],
  ["/de/products/full-course-math", false],
  ["/uk/flashcards", false],
] as const) {
  assert(
    isFullSiteProtectedPath(path) === expected,
    `isFullSiteProtectedPath(${path}) === ${expected}`,
  );
}

assert(isFullCourseProtectedPath("/products/full-course-math") === true, "full math is full-gated");
assert(isFullCourseProtectedPath("/products/lite-bbe-course-math") === false, "lite math is not full-gated");
assert(requiredTierForPath("/products/full-course-economics") === "full", "econ requires full");
assert(requiredTierForPath("/flashcards") === "lite", "flashcards require lite");
assert(requiredTierForPath("/demo-practice") === null, "demo is open");
assert(DEMO_ONLY_HREF === "/demo-practice", "demo href");

if (failed) {
  console.error(`verify-site-access: ${failed} failure(s)`);
  process.exit(1);
}
console.log("verify-site-access: ALL_PASS");
