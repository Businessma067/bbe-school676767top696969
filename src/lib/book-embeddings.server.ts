// Server-only loader for the textbook RAG index.
//
// The embeddings file is ~1.9 MB. Bundling it into the worker bloats the
// server build and slows cold starts for EVERY route, so it lives in Cloud
// storage and is fetched (and cached in module memory) on first AI request.

export type BookData = {
  dim: number;
  count: number;
  chunks: string[];
  embeddings_b64: string;
};

export type BookIndex = BookData & { vectors: Float32Array };

const BUCKET = "app-data";
const OBJECT = "book-embeddings.json";

let cached: BookIndex | null = null;
let inflight: Promise<BookIndex> | null = null;

function decode(b64: string): Float32Array {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Float32Array(bytes.buffer);
}

async function load(): Promise<BookIndex> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.storage.from(BUCKET).download(OBJECT);
  if (error || !data) {
    throw new Error(`Failed to load textbook index: ${error?.message ?? "no data"}`);
  }
  const book = JSON.parse(await data.text()) as BookData;
  const index: BookIndex = { ...book, vectors: decode(book.embeddings_b64) };
  cached = index;
  return index;
}

export async function getBookIndex(): Promise<BookIndex> {
  if (cached) return cached;
  if (!inflight) {
    inflight = load().finally(() => {
      inflight = null;
    });
  }
  return inflight;
}

export function topKChunks(
  book: BookIndex,
  queryVec: Float32Array,
  k: number,
): { idx: number; score: number }[] {
  const { dim, count, vectors } = book;
  const scores: { idx: number; score: number }[] = new Array(count);
  for (let i = 0; i < count; i++) {
    let dot = 0;
    const base = i * dim;
    for (let d = 0; d < dim; d++) dot += queryVec[d] * vectors[base + d];
    scores[i] = { idx: i, score: dot };
  }
  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, k);
}

export function l2Normalize(v: number[]): Float32Array {
  let s = 0;
  for (const x of v) s += x * x;
  const n = Math.sqrt(s) || 1;
  const out = new Float32Array(v.length);
  for (let i = 0; i < v.length; i++) out[i] = v[i] / n;
  return out;
}
