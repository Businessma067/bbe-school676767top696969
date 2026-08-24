import { readFileSync } from "node:fs";

const env = readFileSync(".env", "utf8");
const url = env.match(/SUPABASE_URL="([^"]+)"/)?.[1];
const publishable = env.match(/SUPABASE_PUBLISHABLE_KEY="([^"]+)"/)?.[1];
const secret = env.match(/SUPABASE_SERVICE_ROLE_KEY="([^"]+)"/)?.[1];

console.log("URL:", url);
console.log("publishable starts with:", publishable?.slice(0, 20));
console.log("secret starts with:", secret?.slice(0, 15));

const users = await fetch(`${url}/auth/v1/admin/users?page=1&per_page=20`, {
  headers: { apikey: secret, Authorization: `Bearer ${secret}` },
});
const body = await users.json();
console.log("auth status:", users.status);
console.log("user count:", Array.isArray(body.users) ? body.users.length : "n/a");
if (Array.isArray(body.users)) {
  for (const u of body.users) {
    console.log("-", u.email, u.id);
  }
}
