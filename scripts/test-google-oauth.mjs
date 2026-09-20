import fs from "fs";

const env = fs.readFileSync(new URL("../.env", import.meta.url), "utf8");
const url = env.match(/SUPABASE_URL="?([^"\r\n]+)"?/)?.[1];
const key = env.match(/SUPABASE_PUBLISHABLE_KEY="?([^"\r\n]+)"?/)?.[1];

const res = await fetch(`${url}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent("http://localhost:8082/dashboard")}`, {
  redirect: "manual",
  headers: { apikey: key, Authorization: `Bearer ${key}` },
});

console.log("status", res.status);
console.log("location", res.headers.get("location"));
const text = await res.text();
console.log("body", text.slice(0, 500) || "(empty)");
