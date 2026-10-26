/**
 * Calling codes for the countries Monobank records on a payment (ISO 3166-1
 * numeric) and for ISO alpha-2 codes from signup / IP logs.
 */
const DIAL_BY_NUMERIC: Record<string, string> = {
  "040": "43",
  "056": "32",
  "100": "359",
  "112": "375",
  "124": "1",
  "191": "385",
  "196": "357",
  "203": "420",
  "208": "45",
  "233": "372",
  "246": "358",
  "250": "33",
  "276": "49",
  "300": "30",
  "348": "36",
  "372": "353",
  "380": "39",
  "428": "371",
  "440": "370",
  "442": "352",
  "470": "356",
  "498": "373",
  "528": "31",
  "578": "47",
  "616": "48",
  "620": "351",
  "642": "40",
  "643": "7",
  "703": "421",
  "705": "386",
  "724": "34",
  "752": "46",
  "756": "41",
  "792": "90",
  "804": "380",
  "826": "44",
  "840": "1",
};

const DIAL_BY_ISO2: Record<string, string> = {
  AT: "43",
  BE: "32",
  BG: "359",
  BY: "375",
  CA: "1",
  HR: "385",
  CY: "357",
  CZ: "420",
  DK: "45",
  EE: "372",
  FI: "358",
  FR: "33",
  DE: "49",
  GR: "30",
  HU: "36",
  IE: "353",
  IT: "39",
  LV: "371",
  LT: "370",
  LU: "352",
  MT: "356",
  MD: "373",
  NL: "31",
  NO: "47",
  PL: "48",
  PT: "351",
  RO: "40",
  RU: "7",
  SK: "421",
  SI: "386",
  ES: "34",
  SE: "46",
  CH: "41",
  TR: "90",
  UA: "380",
  GB: "44",
  UK: "44",
  US: "1",
  RS: "381",
  BA: "387",
  MK: "389",
  AL: "355",
  XK: "383",
  KZ: "7",
  GE: "995",
  AM: "374",
  AZ: "994",
};

const COUNTRY_NAME: Record<string, string> = {
  AT: "Austria",
  BE: "Belgium",
  BG: "Bulgaria",
  BY: "Belarus",
  CA: "Canada",
  HR: "Croatia",
  CY: "Cyprus",
  CZ: "Czechia",
  DK: "Denmark",
  EE: "Estonia",
  FI: "Finland",
  FR: "France",
  DE: "Germany",
  GR: "Greece",
  HU: "Hungary",
  IE: "Ireland",
  IT: "Italy",
  LV: "Latvia",
  LT: "Lithuania",
  LU: "Luxembourg",
  MT: "Malta",
  MD: "Moldova",
  NL: "Netherlands",
  NO: "Norway",
  PL: "Poland",
  PT: "Portugal",
  RO: "Romania",
  RU: "Russia",
  SK: "Slovakia",
  SI: "Slovenia",
  ES: "Spain",
  SE: "Sweden",
  CH: "Switzerland",
  TR: "Turkey",
  UA: "Ukraine",
  GB: "United Kingdom",
  US: "United States",
  RS: "Serbia",
  BA: "Bosnia and Herzegovina",
  MK: "North Macedonia",
  AL: "Albania",
  XK: "Kosovo",
  KZ: "Kazakhstan",
  GE: "Georgia",
  AM: "Armenia",
  AZ: "Azerbaijan",
};

export type PhoneCountry = { iso: string; name: string; dial: string };

export function phoneCountries(): PhoneCountry[] {
  return Object.entries(DIAL_BY_ISO2)
    .filter(([iso]) => iso !== "UK")
    .map(([iso, dial]) => ({ iso, dial, name: COUNTRY_NAME[iso] ?? iso }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function callingCodeForCountry(country: string | null | undefined): string | null {
  if (!country) return null;
  const raw = country.trim();
  if (!raw) return null;
  if (/^[A-Za-z]{2}$/.test(raw)) return DIAL_BY_ISO2[raw.toUpperCase()] ?? null;
  const normalized = raw.replace(/^0+/, "") || "0";
  const padded = normalized.padStart(3, "0");
  return DIAL_BY_NUMERIC[raw] ?? DIAL_BY_NUMERIC[normalized] ?? DIAL_BY_NUMERIC[padded] ?? null;
}

/**
 * Put a +country code in front of a national number. Numbers that already
 * start with + are left alone. A leading trunk 0 is dropped when a code is added.
 */
export function phoneWithCountryCode(phone: string, country: string | null | undefined): string {
  const trimmed = phone.trim();
  if (!trimmed) return trimmed;
  const compact = trimmed.replace(/[^\d+]/g, "");
  if (compact.startsWith("+")) {
    const rest = compact.slice(1).replace(/\D/g, "");
    return rest ? `+${rest}` : trimmed;
  }
  let digits = compact.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  const dial = callingCodeForCountry(country);
  if (!dial || !digits) return trimmed;
  if (digits.startsWith(dial)) return `+${digits}`;
  const local = digits.replace(/^0+/, "");
  if (!local) return trimmed;
  return `+${dial}${local}`;
}

/** ISO alpha-2 from an IP, used when a signup or promo log has an address but no country. */
export async function countryFromIp(ip: string): Promise<string | null> {
  if (!ip || ip === "unknown" || ip.startsWith("127.") || ip === "::1") return null;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 2500);
  try {
    const res = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, { signal: ctrl.signal });
    if (!res.ok) return null;
    const json = (await res.json()) as { success?: boolean; country_code?: string };
    if (json.success && typeof json.country_code === "string" && /^[A-Za-z]{2}$/.test(json.country_code)) {
      return json.country_code.toUpperCase();
    }
    return null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export function whatsAppHref(phone: string | null | undefined): string | null {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (!phone.trim().startsWith("+") || digits.length < 8) return null;
  return `https://wa.me/${digits}`;
}
