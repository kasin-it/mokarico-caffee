import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.NEXT_ANON_KEY;
// console.log('supabaseUrl', supabaseUrl);
// console.log('supabaseKey', supabaseKey);
const supabase = createClient(
  'https://kknizebwpzlowbecmkzv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrbml6ZWJ3cHpsb3diZWNta3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNzcxNTYsImV4cCI6MjAxMTc1MzE1Nn0.8p6ViSwzCR2wlfW5gm9ZjP-4zXfVlzl2-7Kv6gFqWRw',
);

export default supabase;
