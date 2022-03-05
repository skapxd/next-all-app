import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase_url = process.env.supabase_url;
const supabase_key = process.env.supabase_key;

export const supabase = createClient(supabase_url, supabase_key);
