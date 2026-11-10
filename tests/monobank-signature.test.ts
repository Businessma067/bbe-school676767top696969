import { test, expect, mock } from "bun:test";

mock.module("@/lib/server-secret.server", () => ({ getServerSecret: async () => "test-only-merchant-token" }));

function rawToDer(raw: Uint8Array): Uint8Array {
  const integer = (bytes: Uint8Array) => {
    let start = 0;
    while (start < bytes.length - 1 && bytes[start] === 0) start++;
    const trimmed = bytes.slice(start);
    const value = trimmed[0]! & 0x80 ? new Uint8Array([0, ...trimmed]) : trimmed;
    return new Uint8Array([2, value.length, ...value]);
  };
  const r = integer(raw.slice(0, 32));
  const s = integer(raw.slice(32));
  return new Uint8Array([0x30, r.length + s.length, ...r, ...s]);
}

test("Monobank verifier accepts genuine signatures and rejects modified bodies", async () => {
  const pair = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
  const spki = await crypto.subtle.exportKey("spki", pair.publicKey);
  const key = Buffer.from(`-----BEGIN PUBLIC KEY-----\n${Buffer.from(spki).toString("base64")}\n-----END PUBLIC KEY-----`).toString("base64");
  const originalFetch = globalThis.fetch;
  globalThis.fetch = mock(async () => new Response(JSON.stringify({ key }))) as unknown as typeof fetch;
  try {
    const { verifyMonoSignature } = await import("../src/lib/monobank-webhook.server");
    const body = '{"invoiceId":"invoice-test","status":"success"}';
    const signed = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, pair.privateKey, new TextEncoder().encode(body));
    const signature = Buffer.from(rawToDer(new Uint8Array(signed))).toString("base64");
    expect(await verifyMonoSignature(body, signature)).toBe(true);
    expect(await verifyMonoSignature(body.replace("success", "failure"), signature)).toBe(false);
    expect(await verifyMonoSignature(body, null)).toBe(false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});