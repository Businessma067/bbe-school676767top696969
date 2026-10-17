import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const CountryInput = z.object({
  /** Browser timezone, used as a fallback when the CDN geo header is absent. */
  timezone: z.string().optional(),
});

/** Timezone → ISO alpha-2, only for zones that map cleanly to one country. */
const COUNTRY_BY_TZ: Record<string, string> = {
  "Europe/Kyiv": "UA",
  "Europe/Kiev": "UA",
  "Europe/Uzhgorod": "UA",
  "Europe/Zaporozhye": "UA",
  "Europe/Vienna": "AT",
  "Europe/Berlin": "DE",
  "Europe/Warsaw": "PL",
  "Europe/Prague": "CZ",
  "Europe/Bratislava": "SK",
  "Europe/Budapest": "HU",
  "Europe/Bucharest": "RO",
  "Europe/Sofia": "BG",
  "Europe/Zagreb": "HR",
  "Europe/Belgrade": "RS",
  "Europe/Ljubljana": "SI",
  "Europe/Amsterdam": "NL",
  "Europe/Brussels": "BE",
  "Europe/Paris": "FR",
  "Europe/Madrid": "ES",
  "Europe/Rome": "IT",
  "Europe/Zurich": "CH",
  "Europe/London": "GB",
  "Europe/Dublin": "IE",
  "Europe/Lisbon": "PT",
  "Europe/Copenhagen": "DK",
  "Europe/Stockholm": "SE",
  "Europe/Oslo": "NO",
  "Europe/Helsinki": "FI",
  "Europe/Riga": "LV",
  "Europe/Vilnius": "LT",
  "Europe/Tallinn": "EE",
  "Europe/Athens": "GR",
  "Europe/Chisinau": "MD",
  "Europe/Istanbul": "TR",
  "Europe/Minsk": "BY",
  "Europe/Moscow": "RU",
  "Europe/Bern": "CH",
};

/**
 * Public: returns the visitor's own country. Prefers the CDN geo header
 * (Cloudflare `cf-ipcountry` on the published app); falls back to a
 * small timezone map for local/dev/preview where the header is absent.
 */
export const getVisitorCountry = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => CountryInput.parse(d ?? {}))
  .handler(async ({ data }) => {
    const geo = getRequestHeader("cf-ipcountry");
    if (geo && /^[A-Za-z]{2}$/.test(geo.trim())) {
      return { country: geo.trim().toUpperCase() };
    }
    const tz = data.timezone?.trim();
    if (tz) {
      const mapped = COUNTRY_BY_TZ[tz];
      if (mapped) return { country: mapped };
    }
    return { country: null };
  });
