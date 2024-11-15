// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ydeufvbwylwkjyyjwbcd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkZXVmdmJ3eWx3a2p5eWp3YmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MjkzOTIsImV4cCI6MjA0NzIwNTM5Mn0.Q5owN9WvEqybdCh3ER0n7tScRz2OoQelYweyfhTRuLI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;