// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://enimyfcidsobjasccpxw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuaW15ZmNpZHNvYmphc2NjcHh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNDYzNjEsImV4cCI6MjA1MTkyMjM2MX0.AvXMI9l7lX5aNXyddvoHwB4rqdx4Me9PepuuJVDLrPk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);