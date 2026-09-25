/**
 * Human-readable labels for Monobank paymentInfo fields shown in admin.
 * Country codes are ISO 3166-1 numeric (as strings from the API).
 */

const COUNTRY_BY_NUMERIC: Record<string, string> = {
  "40": "Austria",
  "040": "Austria",
  "56": "Belgium",
  "056": "Belgium",
  "100": "Bulgaria",
  "112": "Belarus",
  "124": "Canada",
  "191": "Croatia",
  "196": "Cyprus",
  "203": "Czechia",
  "208": "Denmark",
  "233": "Estonia",
  "246": "Finland",
  "250": "France",
  "276": "Germany",
  "300": "Greece",
  "348": "Hungary",
  "372": "Ireland",
  "380": "Italy",
  "428": "Latvia",
  "440": "Lithuania",
  "442": "Luxembourg",
  "470": "Malta",
  "498": "Moldova",
  "528": "Netherlands",
  "578": "Norway",
  "616": "Poland",
  "620": "Portugal",
  "642": "Romania",
  "643": "Russia",
  "703": "Slovakia",
  "705": "Slovenia",
  "724": "Spain",
  "752": "Sweden",
  "756": "Switzerland",
  "792": "Turkey",
  "804": "Ukraine",
  "826": "United Kingdom",
  "840": "United States",
};

const METHOD_LABELS: Record<string, string> = {
  pan: "Card",
  card: "Card",
  apple: "Apple Pay",
  applepay: "Apple Pay",
  apple_pay: "Apple Pay",
  google: "Google Pay",
  googlepay: "Google Pay",
  google_pay: "Google Pay",
  monobank: "Monobank",
  wallet: "Wallet",
};

export function countryLabelFromNumeric(code: string | null | undefined): string | null {
  if (!code) return null;
  const raw = String(code).trim();
  if (!raw) return null;
  const normalized = raw.replace(/^0+/, "") || "0";
  const padded = normalized.padStart(3, "0");
  return (
    COUNTRY_BY_NUMERIC[raw] ??
    COUNTRY_BY_NUMERIC[normalized] ??
    COUNTRY_BY_NUMERIC[padded] ??
    `Country ${raw}`
  );
}

export function paymentMethodLabel(
  method: string | null | undefined,
  paymentSystem?: string | null,
): string | null {
  if (!method && !paymentSystem) return null;
  const key = (method ?? "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  const base =
    (key && METHOD_LABELS[key]) ||
    (method ? method.charAt(0).toUpperCase() + method.slice(1) : null);
  const system = paymentSystem?.trim();
  if (base && system) {
    const sys = system.toUpperCase() === system ? system : system.toUpperCase();
    // "Card · VISA" reads better than repeating card brands alone.
    if (base === "Card") return `Card (${sys})`;
    return `${base} · ${sys}`;
  }
  if (base) return base;
  if (system) return system.toUpperCase();
  return null;
}

export function formatAmountMinor(amountMinor: number, currencyCode: number): string {
  const major = amountMinor / 100;
  const formatted = major.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (currencyCode === 978) return `€${formatted}`;
  if (currencyCode === 980) return `${formatted} UAH`;
  return `${formatted} (${currencyCode})`;
}

export type MonoPaymentInfo = {
  country?: string;
  paymentMethod?: string;
  paymentSystem?: string;
  maskedPan?: string;
  bank?: string;
};

/** Pull paymentInfo fields from a Monobank status/webhook JSON object. */
export function extractMonoPaymentInfo(source: unknown): MonoPaymentInfo | null {
  if (!source || typeof source !== "object" || Array.isArray(source)) return null;
  const root = source as Record<string, unknown>;
  const infoRaw = root["paymentInfo"];
  if (!infoRaw || typeof infoRaw !== "object" || Array.isArray(infoRaw)) return null;
  const info = infoRaw as Record<string, unknown>;
  const out: MonoPaymentInfo = {};
  if (typeof info.country === "string" && info.country.trim()) out.country = info.country.trim();
  else if (typeof info.country === "number") out.country = String(info.country);
  if (typeof info.paymentMethod === "string" && info.paymentMethod.trim()) {
    out.paymentMethod = info.paymentMethod.trim();
  }
  if (typeof info.paymentSystem === "string" && info.paymentSystem.trim()) {
    out.paymentSystem = info.paymentSystem.trim();
  }
  if (typeof info.maskedPan === "string" && info.maskedPan.trim()) {
    out.maskedPan = info.maskedPan.trim();
  }
  if (typeof info.bank === "string" && info.bank.trim()) out.bank = info.bank.trim();
  return Object.keys(out).length ? out : null;
}
