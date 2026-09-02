/**
 * Monobank webhook signature verification (ECDSA P-256 / SHA-256).
 *
 * Monobank signs the raw request body with its private key and sends the
 * base64 DER signature in the `x-sign` header. The matching public key is
 * fetched from GET /api/merchant/pubkey (base64-encoded PEM) using the
 * server-only merchant token.
 */

const MONO_API = "https://api.monobank.ua/api/merchant";

let cachedKey: { key: CryptoKey; fetchedAt: number } | null = null;
const KEY_TTL_MS = 60 * 60 * 1000; // refresh hourly (Monobank may rotate)

function monoToken(): string {
  const token = process.env["MONOBANK_TOKEN"]?.trim();
  if (!token) throw new Error("MONOBANK_TOKEN is not configured on the server.");
  return token;
}

function base64ToBytes(b64: string): Uint8Array {
  const binary = atob(b64.replace(/\s+/g, ""));
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

/** Monobank returns the public key base64-encoded; the decoded value is a PEM block. */
function pubKeyToDer(pubKeyBase64: string): Uint8Array {
  const decoded = new TextDecoder().decode(base64ToBytes(pubKeyBase64));
  if (decoded.includes("BEGIN")) {
    const body = decoded
      .replace(/-----BEGIN [^-]+-----/g, "")
      .replace(/-----END [^-]+-----/g, "")
      .replace(/\s+/g, "");
    return base64ToBytes(body);
  }
  // Already raw DER.
  return base64ToBytes(pubKeyBase64);
}

/** DER-encoded ECDSA signature -> raw r||s (IEEE P1363), which WebCrypto expects. */
function derToRawSignature(der: Uint8Array): Uint8Array {
  let offset = 0;
  if (der[offset++] !== 0x30) throw new Error("Invalid DER signature");
  let seqLen = der[offset++]!;
  if (seqLen & 0x80) {
    const n = seqLen & 0x7f;
    seqLen = 0;
    for (let i = 0; i < n; i++) seqLen = (seqLen << 8) | der[offset++]!;
  }
  const readInt = (): Uint8Array => {
    if (der[offset++] !== 0x02) throw new Error("Invalid DER integer");
    const len = der[offset++]!;
    let bytes = der.slice(offset, offset + len);
    offset += len;
    while (bytes.length > 32 && bytes[0] === 0x00) bytes = bytes.slice(1);
    const padded = new Uint8Array(32);
    padded.set(bytes, 32 - bytes.length);
    return padded;
  };
  const r = readInt();
  const s = readInt();
  const raw = new Uint8Array(64);
  raw.set(r, 0);
  raw.set(s, 32);
  return raw;
}

async function fetchPublicKey(force = false): Promise<CryptoKey> {
  if (!force && cachedKey && Date.now() - cachedKey.fetchedAt < KEY_TTL_MS) {
    return cachedKey.key;
  }
  const res = await fetch(`${MONO_API}/pubkey`, { headers: { "X-Token": monoToken() } });
  const text = await res.text();
  if (!res.ok) {
    console.error("[mono-webhook] pubkey fetch failed", res.status, text);
    throw new Error("Could not fetch the Monobank public key.");
  }
  const json = JSON.parse(text) as { key?: string };
  if (!json.key) throw new Error("Monobank pubkey response had no key.");

  const key = await crypto.subtle.importKey(
    "spki",
    pubKeyToDer(json.key).buffer as ArrayBuffer,
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["verify"],
  );
  cachedKey = { key, fetchedAt: Date.now() };
  return key;
}

/** Verifies the `x-sign` header against the raw request body. */
export async function verifyMonoSignature(rawBody: string, xSign: string | null): Promise<boolean> {
  if (!xSign) return false;
  try {
    const signature = derToRawSignature(base64ToBytes(xSign));
    const data = new TextEncoder().encode(rawBody);
    const algo = { name: "ECDSA", hash: "SHA-256" } as const;

    const key = await fetchPublicKey();
    const ok = await crypto.subtle.verify(algo, key, signature.buffer as ArrayBuffer, data);
    if (ok) return true;

    // Key may have rotated — retry once with a fresh key.
    const fresh = await fetchPublicKey(true);
    return await crypto.subtle.verify(algo, fresh, signature.buffer as ArrayBuffer, data);
  } catch (err) {
    console.error("[mono-webhook] signature verification error", err);
    return false;
  }
}

export type WebhookLog = {
  invoiceId: string | null;
  status: string | null;
  amountMinor: number | null;
  currencyCode: number | null;
  signatureValid: boolean;
  headers: Record<string, string>;
  payload: unknown;
  rawBody: string;
  error?: string;
};

/** Persists every webhook hit (valid or not) for debugging. */
export async function logWebhook(entry: WebhookLog): Promise<void> {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin.from("payment_webhook_logs").insert({
      invoice_id: entry.invoiceId,
      status: entry.status,
      amount_minor: entry.amountMinor,
      currency_code: entry.currencyCode,
      signature_valid: entry.signatureValid,
      headers: entry.headers,
      payload: entry.payload as never,
      raw_body: entry.rawBody.slice(0, 20000),
      error: entry.error ?? null,
    });
  } catch (err) {
    console.error("[mono-webhook] failed to store log", err);
  }
}
