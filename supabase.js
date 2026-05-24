// ── Supabase Configuration ───────────────────────────

// ── Load the Supabase JavaScript library ─────────────

// We import the createClient function from Supabase's CDN.
// This is the same idea as the QRCode library we loaded earlier —
// a script tag would also work but this "import" syntax is cleaner
// and lets us use the function directly without a global variable.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm";


// ── Create the client ────────────────────────────────

// createClient takes your URL and key and returns a client object.
// This client is what we'll use everywhere to talk to Supabase —
// inserting buzzes, reading results, listening for real-time events.
// We export it so any file that imports supabase.js gets access to it.
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);