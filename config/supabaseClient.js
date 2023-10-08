import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.NEXT_ANON_KEY;
// console.log('supabaseUrl', supabaseUrl);
// console.log('supabaseKey', supabaseKey);
const supabase = createClient(
  process.env.NEXT_SUPABASE_URL,
  process.env.NEXT_ANON_KEY);
 
export default supabase;
