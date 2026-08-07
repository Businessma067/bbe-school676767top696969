/**
 * Rebuild book-embeddings.json from the new BBE textbook plain text.
 * Requires LOVABLE_API_KEY in the environment.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEXT = path.join(__dirname, "output", "book-plain.txt");
const OUT = path.join(__dirname, "..", "src", "data", "book-embeddings.json");

const key = process.env.LOVABLE_API_KEY;
if (!key) {
  console.error("Missing LOVABLE_API_KEY");
  process.exit(1);
}

const raw = fs.readFileSync(TEXT, "utf8");
const paras = raw
  .split(/\n\n+/)
  .map((p) => p.replace(/\s+/g, " ").trim())
  .filter((p) => p.length > 40);

/** pack paragraphs into ~900-char chunks with light overlap */
const chunks = [];
let buf = "";
for (const p of paras) {
  if ((buf + "\n\n" + p).length > 1100 && buf) {
    chunks.push(buf);
    // overlap last sentence-ish
    const tail = buf.slice(-180);
    buf = tail + "\n\n" + p;
  } else {
    buf = buf ? buf + "\n\n" + p : p;
  }
}
if (buf) chunks.push(buf);

console.log(`Chunks: ${chunks.length}`);

const dim = 1536;
const vectors = [];

async function embedBatch(texts) {
  const res = await fetch("https://ai.gateway.lovable.dev/v1/embeddings", {
    method: "POST",
    headers: {
      "Lovable-API-Key": key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/text-embedding-3-small",
      input: texts.map((t) => t.slice(0, 4000)),
      dimensions: dim,
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`embed failed ${res.status}: ${t.slice(0, 400)}`);
  }
  const json = await res.json();
  return json.data.map((d) => d.embedding);
}

function l2(v) {
  let s = 0;
  for (const x of v) s += x * x;
  const n = Math.sqrt(s) || 1;
  return v.map((x) => x / n);
}

const batchSize = 32;
for (let i = 0; i < chunks.length; i += batchSize) {
  const batch = chunks.slice(i, i + batchSize);
  process.stdout.write(`Embedding ${i + 1}-${i + batch.length}/${chunks.length}…\n`);
  const embs = await embedBatch(batch);
  for (const e of embs) vectors.push(l2(e));
}

const flat = new Float32Array(vectors.length * dim);
for (let i = 0; i < vectors.length; i++) {
  flat.set(vectors[i], i * dim);
}
const bytes = Buffer.from(flat.buffer);
const embeddings_b64 = bytes.toString("base64");

const payload = {
  dim,
  count: chunks.length,
  chunks,
  embeddings_b64,
};
fs.writeFileSync(OUT, JSON.stringify(payload));
console.log(`Wrote ${OUT} (${chunks.length} chunks, ${(bytes.length / 1024).toFixed(0)} KB vectors)`);
