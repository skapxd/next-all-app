// @ts-check
import { createClient } from "@supabase/supabase-js";
import { env } from "env";

export const supabaseConnection = createClient(env.supabase_url, env.supabase_key);
