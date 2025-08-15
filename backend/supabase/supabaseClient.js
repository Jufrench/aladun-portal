import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl) {
  throw new Error('Could not find supabaseUrl')
}

if (!supabaseKey) {
  throw new Error('Could not find supabasekey')
}

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;