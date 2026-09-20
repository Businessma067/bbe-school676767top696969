import fs from "fs";

const env = fs.readFileSync(new URL("../.env", import.meta.url), "utf8");
const url = env.match(/SUPABASE_URL="?([^"\r\n]+)"?/)?.[1];
const key = env.match(/SUPABASE_PUBLISHABLE_KEY="?([^"\r\n]+)"?/)?.[1];
const email = process.argv[2] || "georgtyrin@gmail.com";
const redirectTo = process.argv[3] || "http://localhost:8082/reset-password";

if (!url || !key) {
  console.error("Missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY in .env");
  process.exit(1);
}

console.log({ url, email, redirectTo });

const res = await fetch(`${url}/auth/v1/recover`, {
  method: "POST",
  headers: {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email, redirect_to: redirectTo }),
});

const text = await res.text();
console.log("status", res.status);
console.log("body", text || "(empty)");
const interesting = [...res.headers.entries()].filter(([k]) =>
  /ratelimit|retry|sb-|x-/i.test(k),
);
console.log("headers", Object.fromEntries(interesting));
