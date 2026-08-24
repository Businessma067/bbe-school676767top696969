import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

const env = readFileSync(".env", "utf8");
const url = env.match(/SUPABASE_URL="([^"]+)"/)?.[1];
const key = env.match(/SUPABASE_PUBLISHABLE_KEY="([^"]+)"/)?.[1];
const supabase = createClient(url, key);

const email = `ok_${Date.now()}@gmail.com`;
const password = "Kx9!mQ2pL7vR";

const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      display_name: "Ok User",
      first_name: "Ok",
      last_name: "User",
      phone: "+436601234567",
    },
  },
});

console.log(
  JSON.stringify(
    {
      error: error
        ? { message: error.message, code: error.code, status: error.status }
        : null,
      email: data.user?.email,
      session: Boolean(data.session),
      identities: data.user?.identities?.length ?? 0,
    },
    null,
    2,
  ),
);
