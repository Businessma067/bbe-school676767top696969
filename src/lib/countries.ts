/**
 * Country helpers for admin display: alpha-2 → name, flag emoji,
 * and phone country-code detection (signup phone is the best fallback
 * for accounts created before signup-country capture existed).
 */

const NAMES_BY_ALPHA2: Record<string, string> = {
  AT: "Austria",
  BE: "Belgium",
  BG: "Bulgaria",
  BY: "Belarus",
  CH: "Switzerland",
  CY: "Cyprus",
  CZ: "Czechia",
  DE: "Germany",
  DK: "Denmark",
  EE: "Estonia",
  ES: "Spain",
  FI: "Finland",
  FR: "France",
  GB: "United Kingdom",
  GE: "Georgia",
  GR: "Greece",
  HR: "Croatia",
  HU: "Hungary",
  IE: "Ireland",
  IS: "Iceland",
  IT: "Italy",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  MD: "Moldova",
  MT: "Malta",
  NL: "Netherlands",
  NO: "Norway",
  PL: "Poland",
  PT: "Portugal",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  SE: "Sweden",
  SI: "Slovenia",
  SK: "Slovakia",
  TR: "Turkey",
  UA: "Ukraine",
  US: "United States",
  CA: "Canada",
  AE: "United Arab Emirates",
  IL: "Israel",
  KZ: "Kazakhstan",
};

/** Dialing prefixes (longest match first) → alpha-2. */
const CALLING_CODE_TO_ALPHA2: [string, string][] = [
  ["+380", "UA"],
  ["+370", "LT"],
  ["+371", "LV"],
  ["+372", "EE"],
  ["+373", "MD"],
  ["+375", "BY"],
  ["+41", "CH"],
  ["+43", "AT"],
  ["+44", "GB"],
  ["+45", "DK"],
  ["+46", "SE"],
  ["+47", "NO"],
  ["+48", "PL"],
  ["+49", "DE"],
  ["+30", "GR"],
  ["+31", "NL"],
  ["+32", "BE"],
  ["+33", "FR"],
  ["+34", "ES"],
  ["+351", "PT"],
  ["+353", "IE"],
  ["+358", "FI"],
  ["+359", "BG"],
  ["+385", "HR"],
  ["+386", "SI"],
  ["+39", "IT"],
  ["+40", "RO"],
  ["+420", "CZ"],
  ["+421", "SK"],
  ["+7", "RU"],
  ["+90", "TR"],
  ["+994", "AZ"],
  ["+995", "GE"],
  ["+1", "US"],
  ["+971", "AE"],
  ["+972", "IL"],
  ["+77", "KZ"],
];

export function countryName(alpha2: string | null | undefined): string | null {
  if (!alpha2) return null;
  const key = alpha2.trim().toUpperCase();
  return NAMES_BY_ALPHA2[key] ?? null;
}

export function flagEmoji(alpha2: string | null | undefined): string | null {
  if (!alpha2) return null;
  const key = alpha2.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(key)) return null;
  return String.fromCodePoint(
    ...[...key].map((c) => 0x1f1e6 + (c.charCodeAt(0) - 65)),
  );
}

/** Best-effort: derive a country from a signup phone number's calling code. */
export function countryFromPhone(phone: string | null | undefined): string | null {
  if (!phone) return null;
  const cleaned = phone.replace(/[^\d+]/g, "");
  if (!cleaned.startsWith("+")) return null;
  for (const [prefix, alpha2] of CALLING_CODE_TO_ALPHA2) {
    if (cleaned.startsWith(prefix)) return alpha2;
  }
  return null;
}

export type AdminCountryParts = {
  /** Captured geo country at signup (alpha-2), if known. */
  signupCountry?: string | null;
  /** Signup phone number, used to guess the country for older accounts. */
  phone?: string | null;
  /** Human-readable payer country from the newest successful payment. */
  payerCountryName?: string | null;
};

/**
 * Resolve "where did this user come from" for admin display.
 * Priority: captured signup geo → phone calling code → payment payer country.
 */
export function resolveAdminCountry(parts: AdminCountryParts): string | null {
  const signup = parts.signupCountry?.trim().toUpperCase() ?? "";
  if (/^[A-Z]{2}$/.test(signup)) {
    return countryName(signup) ?? signup;
  }
  const fromPhone = countryFromPhone(parts.phone);
  if (fromPhone) return countryName(fromPhone) ?? fromPhone;
  const payer = parts.payerCountryName?.trim();
  if (payer && !payer.startsWith("Country ")) return payer;
  return null;
}
