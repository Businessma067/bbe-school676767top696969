/**
 * Apple Pay merchant session validation (server-only).
 * Needs APPLE_PAY_MERCHANT_ID + Merchant Identity Certificate PEM/key.
 */
import https from "node:https";

export function applePayMerchantId(): string | null {
  return process.env["APPLE_PAY_MERCHANT_ID"]?.trim() || null;
}

export function applePayConfigured(): boolean {
  return !!(
    applePayMerchantId() &&
    process.env["APPLE_PAY_MERCHANT_CERT_PEM"]?.trim() &&
    process.env["APPLE_PAY_MERCHANT_KEY_PEM"]?.trim()
  );
}

/**
 * POST to Apple’s validation URL with the Merchant Identity Certificate.
 * `validationURL` comes from ApplePaySession onvalidatemerchant.
 */
export async function validateApplePayMerchant(input: {
  validationURL: string;
  displayName: string;
  initiativeContext: string;
}): Promise<Record<string, unknown>> {
  const merchantId = applePayMerchantId();
  const cert = process.env["APPLE_PAY_MERCHANT_CERT_PEM"]?.trim();
  const key = process.env["APPLE_PAY_MERCHANT_KEY_PEM"]?.trim();
  if (!merchantId || !cert || !key) {
    throw new Error(
      "Apple Pay is not fully configured (APPLE_PAY_MERCHANT_ID / CERT / KEY).",
    );
  }

  let validationURL: URL;
  try {
    validationURL = new URL(input.validationURL);
  } catch {
    throw new Error("Invalid Apple Pay validation URL.");
  }
  if (
    validationURL.protocol !== "https:" ||
    !validationURL.hostname.endsWith("apple.com")
  ) {
    throw new Error("Apple Pay validation URL must be an apple.com HTTPS URL.");
  }

  const body = JSON.stringify({
    merchantIdentifier: merchantId,
    displayName: input.displayName.slice(0, 64) || "BBE School",
    initiative: "web",
    initiativeContext: input.initiativeContext.replace(/^https?:\/\//, "").replace(/\/$/, ""),
  });

  const session = await new Promise<Record<string, unknown>>((resolve, reject) => {
    const req = https.request(
      {
        hostname: validationURL.hostname,
        path: validationURL.pathname + validationURL.search,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
        cert,
        key,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const text = Buffer.concat(chunks).toString("utf8");
          if ((res.statusCode ?? 500) >= 400) {
            reject(new Error(`Apple Pay validation failed (${res.statusCode}).`));
            return;
          }
          try {
            resolve(JSON.parse(text) as Record<string, unknown>);
          } catch {
            reject(new Error("Apple Pay returned an invalid merchant session."));
          }
        });
      },
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });

  return session;
}
