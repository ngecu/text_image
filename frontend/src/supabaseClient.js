import { createClient } from '@supabase/supabase-js';

// To be more secure: .env file. 




const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("supabase aut ",supabaseURL);

export const supabase = createClient(supabaseURL, supabaseAnonKey);