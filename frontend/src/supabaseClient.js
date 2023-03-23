import { createClient } from '@supabase/supabase-js';

// To be more secure: .env file. 
const supabaseURL = "https://ughhrhtpmudsdabdmivz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnaGhyaHRwbXVkc2RhYmRtaXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0NzM0NDAsImV4cCI6MTk5NTA0OTQ0MH0.hRS1CjI8vDEpo8Mim_t4FTA2irhlCefMInSCuPyQENQ";

export const supabase = createClient(supabaseURL, supabaseAnonKey);