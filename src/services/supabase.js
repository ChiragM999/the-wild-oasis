import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://texelkuiexkgbdfrbrvh.supabase.co';

const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleGVsa3VpZXhrZ2JkZnJicnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1OTE1NzYsImV4cCI6MjAwNTE2NzU3Nn0.48iU76t0k4l2LDWP5QkuIGCD6n1Sub4OMSfDuKNVgMs';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
